import Base from '@layouts/Baseof'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <Base title={"Tentang Kami | "}>
      <section className="section">
        <div className="container flex flex-col gap-10">
          <div className='flex justify-center w-full'>
            <Image src={'/images/about.jpg'} width={300} height={300} alt='About me' />
          </div>
          <div>
            <h1 className="text-center">Tentang Kami</h1>
            <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatibus, magnam, quos, quod quae quibusdam voluptatem
            perspiciatis quia doloribus quas quidem. Quisquam voluptatibus,
            magnam, quos, quod quae quibusdam voluptatem perspiciatis quia
            doloribus quas quidem.
            </p>
          </div>
          <div className='flex flex-row w-full gap-5'>
            <Image className='rounded-lg' src={'/images/blog-1.jpg'} alt='Our Story' width={400} height={300}/>
            <div>
              <h3>Our Story</h3>
              <p className='mt-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatibus, magnam, quos, quod quae quibusdam voluptatem
              perspiciatis quia doloribus quas quidem. Quisquam voluptatibus,
              magnam, quos, quod quae quibusdam voluptatem perspiciatis quia
              doloribus quas quidem.
              </p>
            </div>
          </div>
          <div className='flex flex-row-reverse w-full gap-5'>
            <Image className='rounded-lg' src={'/images/blog-2.jpg'} alt='Our Story' width={400} height={300}/>
            <div>
              <h3>Our Mission</h3>
              <p className='mt-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatibus, magnam, quos, quod quae quibusdam voluptatem
              perspiciatis quia doloribus quas quidem. Quisquam voluptatibus,
              magnam, quos, quod quae quibusdam voluptatem perspiciatis quia
              doloribus quas quidem.
              </p>
            </div>
          </div>
          <div className='flex flex-row w-full gap-5'>
            <Image className='rounded-lg' src={'/images/blog-3.jpg'} alt='Our Story' width={400} height={300}/>
            <div>
              <h3>Our Philisophy</h3>
              <p className='mt-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatibus, magnam, quos, quod quae quibusdam voluptatem
              perspiciatis quia doloribus quas quidem. Quisquam voluptatibus,
              magnam, quos, quod quae quibusdam voluptatem perspiciatis quia
              doloribus quas quidem.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Base>
  )
}

export default About
