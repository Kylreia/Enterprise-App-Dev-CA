import React from 'react'
import BackButton from '../BackButton'

const AboutPage = () => {
  return (
    <div className='p-4'>
      <div>
        <BackButton />
      </div>
      <div className='flex min-h-screen items-center justify-center'>
        <section className='px-40'>
          <div className='mb-24 text-center'>
            <h3 className='block antialiased font-sans font-semibold relative mb-5 mt-10 text-center text-2xl leading-tight tracking-normal text-black'>Learn more about this website</h3>
            <h1 className='block antialiased font-sans relative my-5 text-center text-4xl font-bold leading-tight tracking-normal text-black md:text-5xl'>About This Page</h1>
            <h4 className='block antialiased font-sans relative my-5 mx-auto text-center text-lg font-normal leading-relaxed tracking-normal text-gray-600 md:text-xl lg:max-w-4xl'>Check out the details about this website</h4>
          </div>
          <div className='grid grid-cols-12'>
            <div className='col-span-12 lg:col-start-4 lg:col-span-6'>
              <h5 className='block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-black'>How the application works</h5>
              <div className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>Lorem ipsum.</div>
              <hr className="my-6 border-blue-gray-50"></hr>
              <h5 className='block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-black'>Technologies involved in the application</h5>
              <div className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>Lorem ipsum.</div>
              <hr className="my-6 border-blue-gray-50"></hr>
              <h5 className='block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-black'>Weaknesses of this application</h5>
              <div className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>Lorem ipsum.</div>
              <hr className="my-6 border-blue-gray-50"></hr>
              <h5 className='block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-black'>Alternatives to implement the application</h5>
              <div className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>Lorem ipsum.</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutPage