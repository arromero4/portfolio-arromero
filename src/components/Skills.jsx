import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
//import Node from '../assets/node.png'
import Firebase from '../assets/firebase.png'
//import AWS from '../assets/aws.png'
import GitHub from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
//import Mongo from '../assets/mongo.png'
import Cisco from '../assets/cisco2.png'






const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/*Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#C53634]'>Skills</p>
          <p className='py-4'>These are the technologies I've been getting ready to work on:</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto'
            src={HTML} alt="HTML" />
            <p className='my-4 '>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto'
            src={CSS} alt="CSS" />
            <p className='my-4 '>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto'
            src={JavaScript} alt="Javascript" />
            <p className='my-4 '>JAVASCRIPT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto'
            src={ReactImg} alt="React" />
            <p className='my-4 '>REACT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto'
            src={Tailwind} alt="Tailwind" />
            <p className='my-4 '>TAILWIND</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto'
            src={GitHub} alt="GitHub" />
            <p className='my-4 '>GITHUB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto'
            src={Firebase} alt="Firebase" />
            <p className='my-4 '>FIREBASE</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto'
            src={Cisco} alt="Cisco" />
            <p className='my-4 '>CISCO</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills