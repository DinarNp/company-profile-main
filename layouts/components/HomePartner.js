import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomePartner = ({ partners, url }) => {
  return (
    <section className="container mb-20  pb-18">
      <h3 className="my-5 flex w-fit border-b-[3px] border-solid border-primary pb-3">Partners</h3>
      <div className="grid justify-center grid-cols-2 gap-10 mt-14 md:grid-cols-8 md:gap-8">
        {partners.map((partner, i) => (
          <div key={'patner '+ i} className="group relative flex h-[100px] items-center justify-center rounded-lg duration-500 hover:scale-[1.1]">
            <Image
              src={url + partner.attributes.logo.data.attributes.url}
              width={100}
              alt={partner.attributes.partner_name}
              height={100}
            />
            <span className="absolute hidden px-4 py-2 text-center text-black transform rounded tooltip-text bg-slate-300 group-hover:-top-11 group-hover:block">
              {partner.attributes.partner_name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePartner;
