import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Index({ slug }) {
  const router = useRouter();

  useEffect(() => {
    // Redirect or navigate to another page with the slug parameter
    router.push('/categories/' + slug + '/1'); // Replace 'your-slug' with the actual slug you want to navigate to
  }, []); // Empty dependency array to ensure this effect runs only once after the component mounts

  return null; // Since this component will redirect or navigate, it doesn't need to render anything
}

export const getServerSideProps = async (context) => {
  const slug = context.query.slug;
  return {
    props: {
      slug: slug,
    },
  };
};
