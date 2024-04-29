import React from 'react'
import BackButton from '../BackButton'

const AboutPage = () => {
  return (
    <div className='p-4'>
      <div>
        <BackButton />
      </div>
      <div>
        <h1>About This Page</h1>
        <div>
          <h2>How the application works</h2>
        </div>
        <div>
          <h2>Technologies involved in the application</h2>
        </div>
        <div>
          <h2>Weaknesses of this application</h2>
        </div>
        <div>
          <h2>Alternatives to implement the application</h2>
        </div>
      </div>
    </div>
  )
}

export default AboutPage