import React from 'react';

const HomeLayanan = ({ layanans }) => {
  return (
    <section className="container">
      <h3 className="my-5 flex w-fit border-b-[3px] border-solid border-primary pb-3">Layanan</h3>
      <div className="mt-14 grid grid-cols-2 justify-center gap-10 md:grid-cols-4 md:gap-8">
        {layanans.map((layanan, i) => (
          <div key={i} className="rounded-lg bg-primary p-4 shadow-md duration-500 hover:scale-[1.1]">
            <h4 className="mb-2 text-lg font-semibold text-center text-white">{layanan.attributes.title}</h4>
            <p className="text-gray-700 text-center text-white">{layanan.attributes.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeLayanan;