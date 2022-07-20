import React from 'react'
import WorkImg from '../assets/workImg.png'
import Calculator from '../assets/calculator.png'
import Drum from '../assets/drum.png'
import Roman from '../assets/roman.png'
import Markdown from '../assets/markdown.png'
import Pomodoro from '../assets/pomodoro.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-full text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#C53634]'>
            Work
          </p>
          <p className='py-6'>Check out some of my recent work:</p>
        </div>
        {/*Container*/}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto ' >
          
          {/*Grid Item*/}
          <div style={{backgroundImage:`url(${WorkImg})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/*Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              
              <span className='text-2xl font-bold text-white tracking-wider'>
                Random Quote Machine
              </span>

              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
           
           {/*Grid Item*/}
          <div style={{backgroundImage:`url(${Calculator})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/*Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              
              <span className='text-2xl font-bold text-white tracking-wider'>
                Calculator
              </span>

              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

           {/*Grid Item*/}
          <div style={{backgroundImage:`url(${Drum})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/*Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              
              <span className='text-2xl font-bold text-white tracking-wider'>
                Drum
              </span>

              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>        


          {/*Grid Item*/}
          <div style={{backgroundImage:`url(${Roman})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/*Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              
              <span className='text-2xl font-bold text-white tracking-wider'>
                Roman Converter
              </span>

              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>        


          {/*Grid Item*/}
          <div style={{backgroundImage:`url(${Markdown})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/*Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              
              <span className='text-2xl font-bold text-white tracking-wider'>
              Markdown Previewer
              </span>

              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/*Grid Item*/}
          <div style={{backgroundImage:`url(${Pomodoro})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/*Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              
              <span className='text-2xl font-bold text-white tracking-wider'>
              Pomodoro
              </span>

              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Work