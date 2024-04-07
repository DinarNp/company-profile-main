import { blockToText } from '@lib/utils/blockToText';
import Image from 'next/image';
import Link from 'next/link';

const Posts = ({ posts, beUrl }) => {
  return (
    <div className="section row pb-0">
      {posts.map((data, i) => (
        <div key={i} className="section row pb-0">
          <div className="flex w-full justify-between">
            <h3 className="mb-3 capitalize">{data.attributes.category_name}</h3>
            <Link
              href={`/categories/${data.attributes.category_name}`}
              className="cursor-pointer hover:text-primary"
            >
              See all
            </Link>
          </div>
          <Blogs beUrl={beUrl} blogs={data.attributes.blogs.data} />
        </div>
      ))}
    </div>
  );
};

const Blogs = ({ blogs, beUrl }) => {
  return (
    <>
      {blogs.map((blog, i) => {
        return (
          <div key={`key-${i}`} className="col-12 mb-8 sm:col-6 lg:col-4">
            {blog.attributes.image && (
              <Image
                className="h-56 w-96 rounded-lg object-contain"
                src={beUrl + blog.attributes.image.data?.attributes.url}
                alt={blog.attributes.title}
                width={445}
                height={500}
              />
            )}
            <h4 className="h4 mb-2 mt-4">
              <Link href={`/blogs/${blog.attributes.slug}`} className="block hover:text-primary">
                {blog.attributes.title}
              </Link>
            </h4>
            <p className="line-clamp-3 text-text ">{blockToText(blog.attributes?.content ?? [])}</p>
            <Link className="btn btn-primary mt-4" href={`/blogs/${blog.attributes.slug}`} rel="">
              Read More
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Posts;
