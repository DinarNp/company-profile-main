import Link from 'next/link'
import React from 'react'

const BreadCrumb = ({ category, title }) => {
  return (
    <ol className='flex items-center mb-5 whitespace-nowrap'>
      <li className='inline-flex items-center'>
        <Link
          className='flex items-center text-gray-500 hover:text-primary focus:outline-none focus:text-primary'
          href='/blogs'
        >
          <svg
            className='flex-shrink-0 me-3 size-4'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          >
            <path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'></path>
            <polyline points='9 22 9 12 15 12 15 22'></polyline>
          </svg>
          Blog
        </Link>
        <svg
          className='flex-shrink-0 mx-2 overflow-visible text-gray-400 size-4'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        >
          <path d='m9 18 6-6-6-6'></path>
        </svg>
      </li>
      <li className='inline-flex items-center'>
        <Link
          className='flex items-center text-gray-500 hover:text-primary focus:outline-none focus:text-primary'
          href={`/blogs/${category.toLowerCase()}`}
        >
          <svg
            className='flex-shrink-0 me-3 size-4'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          >
            <rect width='7' height='7' x='14' y='3' rx='1'></rect>
            <path d='M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3'></path>
          </svg>
          {category}
          <svg
            className='flex-shrink-0 mx-2 overflow-visible text-gray-400 size-4'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          >
            <path d='m9 18 6-6-6-6'></path>
          </svg>
        </Link>
      </li>
      <li
        className='inline-flex items-center font-semibold text-gray-800 truncate'
        aria-current='page'
      >
        {title}
      </li>
    </ol>
  )
}

export default BreadCrumb
