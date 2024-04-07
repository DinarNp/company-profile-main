import { formatDate } from '@lib/utils/formatDate';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import HomeBlog from './HomeBlog';

const HomeCategories = ({ categories, beURL }) => {
  return (
    <div className="grid gap-2 md:grid-cols-2">
      {categories.map((category, index) => (
        <div key={'category ' + index} className="flex flex-col">
          <h3 className="my-5 flex w-fit border-b-[3px] border-solid border-primary pb-3">
            {category.attributes.category_name}
          </h3>
          <HomeBlog blogs={category.attributes.blogs.data} beURL={beURL} />
          <div className="flex w-full justify-end">
            <Link href={`/categories/${category.attributes.slug}`} className="btn btn-primary mt-4">
              See All
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeCategories;
