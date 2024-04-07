import config from '@config/config.json';
import Base from '@layouts/Baseof';
import 'swiper/swiper.min.css';
import { fetchBlogs } from '@lib/utils/fetchBlog';
import HomeIntro from '@layouts/components/HomeIntro';
import HomeSlide from '@layouts/components/HomeSlide';
import { fetchLayanan } from '@lib/utils/fetchLayanan';
import HomeLayanan from '@layouts/components/HomeLayanan';
import HomeCategories from '@layouts/components/HomeCategories';
import Warn from '@layouts/components/Warn';
import HomeGallery from '@layouts/components/HomeGallery';
import HomeVideo from '@layouts/components/HomeVideo';
import { fetchPartners } from '@lib/utils/fetchPartners';
import HomePartner from '@layouts/components/HomePartner';
import React, { useState, useMemo, useEffect } from 'react';
import HomeAbout from 'components/HomeAbout';

const Home = ({ categories, partners, layanans, beURL, error }) => {
  const { title } = config.site;

  // TODO: Remove this dummy data
  const image = [
    '/images/service-slide-1.png',
    '/images/service-slide-2.png',
    '/images/service-slide-3.png',
  ];

  // TODO: Remove this dummy data
  const videos = [
    {
      id: 'K6BRna4_bmg',
      title: 'Video 1',
    },
    {
      id: 'yXTFOeGly9o',
      title: 'Video 2',
    },
    {
      id: '-Fp4dsl6tuk',
      title: 'Video 3',
    },
  ];

  const about =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  return (
    <Base title={title} categories={categories}>
      <section className="section pb-[50px]">
        {/* Intro */}
        <HomeIntro imageProfile="/images/favicon.png" />

        {/* Image Slider */}
        <HomeSlide image={image} />

        <HomeAbout about={about} />

        {/* Categories and Blog */}
        <div className="container mt-10">
          <h2 className="w-full text-center">Blog</h2>
          {error ? (
            <Warn message={error} />
          ) : (
            <HomeCategories categories={categories} beURL={beURL} />
          )}
        </div>
      </section>

      {/* Layanan */}
      <HomeLayanan layanans={layanans} />

      {/* Gallery */}
      <HomeGallery image={image} />

      {/* Video */}
      <HomeVideo videos={videos} />

      <HomePartner partners={partners} url={beURL} />
    </Base>
  );
};

export const getServerSideProps = async () => {
  try {
    const categories = await fetchBlogs();
    const partners = await fetchPartners();
    const layanans = await fetchLayanan();
    return {
      props: {
        categories: categories.data,
        partners: partners.data,
        layanans: layanans.data,
        beURL: process.env.NEXT_PUBLIC_BACKEND_URL,
      },
    };
  } catch (error) {
    return {
      props: {
        categories: false,
        beURL: process.env.NEXT_PUBLIC_BACKEND_URL,
        error: error.message,
      },
    };
  }
};

export default Home;
