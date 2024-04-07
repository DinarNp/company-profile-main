import React from 'react';

const HomeIntro = ({ imageProfile }) => {
  return (
    <section className="container">
      <div className="flex flex-row">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center text-4xl font-bold text-primary">Rumah Korea</h1>
          <p className="mt-5 text-center text-text">
            Tempat belajar bahasa korea dan budaya korea. Kami menyediakan berbagai macam kelas dan
            kursus yang dapat membantu anda untuk belajar bahasa korea dengan mudah dan
            menyenangkan.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={imageProfile}
            className="w-[500px] h-[500px] object-cover"
          />
      </div>
    </div>
    </section>
  );
};

export default HomeIntro;