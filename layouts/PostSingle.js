import Image from 'next/image'
import Base from './Baseof'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import { blockToText } from '@lib/utils/blockToText'
import BreadCrumb from './components/BreadCrumb'
import Info from './components/Info'

const PostSingle = ({ image, content, title, author, category, createdAt }) => {
  const description = blockToText(content)
  return (
    <Base title={title} description={description}>
      <section className='section'>
        <div className='container'>
          <div className='row'>
            <article className='mx-auto text-center col-12 md:col-8'>
              <BreadCrumb category={category} title={title} />
              {image && (
                <Image
                  src={image}
                  height='500'
                  width='1000'
                  alt={title}
                  priority={true}
                  layout='responsive'
                  className='rounded-lg'
                />
              )}
              {<h1 className='mt-6 text-left h2'> {title}</h1>}
              <Info category={category} createdAt={createdAt} author={author} />

              <div className='mb-16 text-left content'>
                <BlocksRenderer content={content} />
              </div>
            </article>
          </div>
        </div>
      </section>
    </Base>
  )
}

export default PostSingle
