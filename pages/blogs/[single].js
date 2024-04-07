import PostSingle from '@layouts/PostSingle';
import { fetchBlog } from '@lib/utils/fetchBlog';
import { formatDate } from '@lib/utils/formatDate';

const Article = ({ content, title, image, author, category, createdAt, slug }) => {
  return (
    <>
      <PostSingle
        content={content}
        title={title}
        image={image}
        author={author}
        category={category}
        createdAt={createdAt}
        slug={slug}
      />
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { single } = params;
  try {
    const blog = await fetchBlog(single);
    return {
      props: {
        content: blog.data.attributes.content,
        title: blog.data.attributes.title,
        image: process.env.NEXT_PUBLIC_BACKEND_URL + blog.data.attributes.image.data.attributes.url,
        author: blog.data.attributes.author,
        category: blog.data.attributes.category.data.attributes.category_name,
        createdAt: formatDate(blog.data.attributes.createdAt),
        slug: blog.data.attributes.slug,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }
};

export default Article;
