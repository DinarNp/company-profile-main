import React from 'react';
import Image from 'next/image';

const Galleries = ({ galleries, url }) => {
  return (
    <section className="section container">
      <h1 className="text-4xl font-bold text-primary text-center mb-20">Galeri</h1>
      <div className='grid gap-5 md:grid-cols-3'>
        {galleries.map((galeri, i) => (
          <div key={i} className='rounded-lg flex flex-col items-center justify-center'>
            <Image
              className='object-cover rounded-lg align-center'
              src={url + galeri.attributes.photo.data.attributes.url}
              width={200}
              height={100}
            />
            <h5 className='text-center my-5'>{galeri.attributes.photo_title}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Galleries;