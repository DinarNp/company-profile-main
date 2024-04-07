'use client';

import { useRouter } from 'next/router';
import Base from '@layouts/Baseof';
import Warn from '@layouts/components/Warn';
import { blockToText } from '@lib/utils/blockToText';
import { fetchBlog, fetchBlogBasedCategories, fetchBlogs } from '@lib/utils/fetchBlog';
import { markdownify, slugify } from '@lib/utils/textConverter';
import Link from 'next/link';
import Image from 'next/image';
import Pagination from 'components/Pagination';
import config from '@config/config.json';
const { blog_folder } = config.settings;

const CategoryPagination = ({ data, beUrl, title, error, slug, meta }) => {
  return (
    <Base title={title}>
      <section className="section">
        <div className="container">
          {markdownify(title, 'h1', 'h1 text-center font-normal text-[56px] capitalize')}
          <div className="section row">
            {data.map((blog, i) => {
              return (
                <div key={`key-${i}`} className="col-12 mb-8 sm:col-6 lg:col-4">
                  {blog.image && (
                    <Image
                      className="h-56 w-96 rounded-lg object-contain"
                      src={beUrl + blog.image.url}
                      alt={blog.title}
                      width={445}
                      height={500}
                    />
                  )}
                  <h4 className="h4 mb-2 mt-4">
                    <Link href={`/blogs/${blog.slug}`} className="block hover:text-primary">
                      {blog.title}
                    </Link>
                  </h4>
                  <p className="line-clamp-3 text-text ">{blockToText(blog.content ?? [])}</p>
                  <Link className="btn btn-primary mt-4" href={`/blogs/${blog.slug}`} rel="">
                    Read More
                  </Link>
                </div>
              );
            })}
          </div>
          <Pagination
            section={blog_folder}
            totalPages={meta.pagination.pageCount}
            currentPage={meta.pagination.page}
            slug={slug}
          />
        </div>
      </section>
    </Base>
  );
};

export default CategoryPagination;

export const getServerSideProps = async (context) => {
  const slug = context.query.slug;
  const page = context.query.page;
  const pageSize = 3;

  try {
    const response = await fetchBlogBasedCategories(slug, page, pageSize);
    return {
      props: {
        title: response.meta.category,
        data: response.data,
        meta: response.meta,
        beUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
        slug: slug,
      },
    };
  } catch (error) {
    return {
      props: {
        data: false,
        error: error.message,
      },
    };
  }
};
