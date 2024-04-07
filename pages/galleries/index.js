import config from '@config/config.json';
import Base from '@layouts/Baseof';
import Galleries from '@layouts/Galleries';
import { fetchGallery } from '@lib/utils/fetchGallery';

const Index = ({ galleries, beURL, error }) => {
  const { title } = config.site;

  return (
    <Base title={title}>
        <Galleries galleries={galleries} url={beURL} />
    </Base>
  );
};

export const getServerSideProps = async () => {
  try {
    const galleries = await fetchGallery();
    return {
      props: {
        galleries: galleries.data,
        beURL: process.env.NEXT_PUBLIC_BACKEND_URL,
      },
    };
  } catch (error) {
    return {
      props: {
        galleries: false,
        error: error.message,
      },
    };
  }
};

export default Index;