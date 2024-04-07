import React from 'react'

const Warn = ({ message }) => {
  return (
    <div className=''>
      <div
        className='p-4 mt-2 text-sm text-red-800 bg-red-100 border border-red-200 rounded-lg dark:bg-red-800/10 dark:border-red-900 dark:text-red-500'
        role='alert'
      >
        <span className='font-bold'>Error </span>
        {message ? message : 'Something went wrong'}
      </div>
    </div>
  )
}

export default Warn
