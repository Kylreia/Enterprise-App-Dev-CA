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
              <div className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>
                The application runs on a backend & a frontend framework. The objects of the application are stored in a JSON format in our
                choice of database (MongoDB). This database is then connected to the server created & managed by NodeJS.
                Requests that are passed & received are managed in the backend. A frontend framework (React) is then used to create a web
                application with interfaces created using CSS technologies for the user to test the implemented functionalities.
                AJAX is applied to these functionalities in order to allow the application to send & retrieve data from the server asynchronously
                without interfering with the display & behaviour of the current page. Last but not the least, Express is used to make sure that
                routes & middleware are set up correctly & that data is sent & received by the correct components of the application.
              </div>
              <hr className="my-6 border-gray-300"></hr>
              <h5 className='block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-black'>Technologies involved in the application</h5>
              <div className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>
                This application utilised a system called the MERN stack which is comprised of the following technologies: MongoDB, Express,
                React & Node JS. MongoDB Atlas is a cloud document database where the application keeps the objects. Express is used to organize
                the application's functionalities by using middleware & routing incorporated within this technology.
                Vite, a frontend tool utilises React, which is a frontend library / framework to create the frontend of our web application.
                Node JS meanwhile, is used to create the server & the backend that manages the requests between the frontend & the database.
                Other technologies such as Tailwind and Snackbar are used to handle the CSS of the application.
              </div>
              <hr className="my-6 border-gray-300"></hr>
              <h5 className='block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-black'>Weaknesses of this application</h5>
              <div className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>
                While all the necessary functions are implemented in the application, there are still areas that can be improved.
                For example, the items could hold more attributes other than the ones provided, such as an image.
                Other functionalities such as user profiles with authentication are not included.
                Lastly, the interface could be improved to make it similar to the likes of other professional websites.
                While there are weaknesses such as the ones mentioned above, this application provides a simple but
                intuitive & usable interface and functionalities.
              </div>
              <hr className="my-6 border-gray-300"></hr>
              <h5 className='block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-black'>Alternatives to implement the application</h5>
              <div className='block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-gray-600'>
                There is no one way to implement an application like this. I will mention a few alternative technologies that could be
                used to implement this application. For the database, technologies such as Redis, Firestore, PostGreSQL & so on could be used.
                To manage routing & middleware, there are alternatives to Express such as Django, NestJS & NuxtJS. To build a frontend, other
                frameworks such as Preact, Angular, React Native, Native Script & more could be used to replace the React framework. For the
                server-side & backend framework, other programming languages such as Python, Java, Ruby & Scala could be utilised instead of
                NodeJS. Lastly, other CSS technologies such as Bootstrap could be used instead of Tailwind in this application.
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutPage