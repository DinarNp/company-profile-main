import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HomeGallery = ({ image }) => {
  return (
    <section className='container pb-0 mb-3 section'>
      <h3 className='flex pb-3 border-b-[3px] border-solid border-primary w-fit my-5'>
        Galeri
      </h3>
      <div className='grid gap-5 md:grid-cols-3 '>
        {image.map((img, i) => (
          <div key={i} className='bg-gray-300 h-[200px] rounded-lg'>
            <Image
              className='object-cover rounded-lg'
              src={img}
              alt='gallery image'
              width={400}
              height={300}
            />
          </div>
        ))}
      </div>
      <div className='flex justify-end w-full'>
        <Link href={`/galleries`} className='mt-4 btn btn-primary'>
          See All
        </Link>
      </div>
    </section>
  )
}

export default HomeGallery
