import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full bg-[#0a192f] flex justify-center items-center p-10'>
        <form method='POST' action='https://getform.io/f/6a58ba63-6f78-40b2-afe4-55fc01bb1882' className='flex flex-col max-w-[500px] w-full'>
            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#C53634]'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - arromero0408@gmail.com</p>
            </div>

            <input className='my-2 p-2 bg-[#eaefff]' type="text" placeholder='Name' name="name"/>
            <input className='my-2 p-2 bg-[#eaefff]' type="email" placeholder='Email' name="email"/>
            <input className='my-2 p-2 bg-[#eaefff]' type="text" placeholder='Subject' name="subject"/>
            <textarea className='my-2 p-2 bg-[#eaefff]' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#C53634] hover:border-[#C53634] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate!</button>
        </form>
    </div>
  )
}

export default Contact