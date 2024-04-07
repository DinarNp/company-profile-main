import Base from '@layouts/Baseof';
import Warn from '@layouts/components/Warn';
import { fetchBlogs } from '@lib/utils/fetchBlog';
import { markdownify } from '@lib/utils/textConverter';
import Posts from '@partials/Posts';

// blog pagination
const BlogPagination = ({ data, beUrl, error }) => {
  const { title } = { title: 'Latest news' };

  return (
    <Base title={title}>
      <section className="section">
        <div className="container">
          {markdownify(title, 'h1', 'h1 text-center font-normal text-[56px]')}
          {data ? <Posts posts={data} beUrl={beUrl} /> : <Warn message={error} />}
          {/* <Pagination
            section={blog_folder}
            totalPages={totalPages}
            currentPage={currentPage}
          /> */}
        </div>
      </section>
    </Base>
  );
};

export default BlogPagination;

export const getServerSideProps = async () => {
  try {
    const response = await fetchBlogs();
    return {
      props: {
        data: response.data,
        beUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
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
