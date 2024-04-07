import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomePartner = ({ partners, url }) => {
  return (
    <section className=" pb-18 container mb-20">
      <h3 className="my-5 flex w-fit border-b-[3px] border-solid border-primary pb-3">Partners</h3>
      <div className="mt-14 grid grid-cols-2 justify-center gap-10 md:grid-cols-8 md:gap-8">
        {partners.map((partner, i) => (
          <div class="group relative flex h-[100px] items-center justify-center rounded-lg duration-500 hover:scale-[1.1]">
            <Image
              src={url + partner.attributes.logo.data.attributes.url}
              width={100}
              height={100}
            />
            <span className="tooltip-text absolute hidden  transform rounded bg-slate-300 px-4 py-2 text-center text-black group-hover:-top-11 group-hover:block">
              {partner.attributes.partner_name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePartner;
