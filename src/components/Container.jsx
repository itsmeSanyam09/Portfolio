import React from 'react'
import InfoCard from './InfoCard'
import Skills from './Skills'
import Projects from './Projects'
import Work from './Work'

const Container = () => {
  return (
    <div className='container flex flex-col justify-center text-center w-full p-12'>
        <div className="flex justify-center text-center w-full mt-6">
            <InfoCard />
        </div>
        <div className="flex justify-center mt-14">
            <Skills />

        </div>
        <div className="flex justify-center mt-14">
          <Work />
        </div>    
        <div className="flex justify-center -translate-y-14">
            <Projects />

        </div>
    



    </div>
  )
}

export default Container