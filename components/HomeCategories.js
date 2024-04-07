import { formatDate } from '@lib/utils/formatDate'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HomeBlog from './HomeBlog'

const HomeCategories = ({ categories, beURL }) => {
  return (
    <div className='grid gap-2 md:grid-cols-2'>
      {categories.map((category, index) => (
        <div key={'category ' + index} className='flex flex-col'>
          <h3 className='flex pb-3 border-b-[3px] border-solid border-primary w-fit my-5'>
            {category.attributes.category_name}
          </h3>
          <HomeBlog blogs={category.attributes.blogs.data} beURL={beURL} />
          <div className='flex justify-end w-full'>
            <Link
              href={`/categories/${category.attributes.category_name.toLowerCase()}`}
              className='mt-4 btn btn-primary'
            >
              See All
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HomeCategories
