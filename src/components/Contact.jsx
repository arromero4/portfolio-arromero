import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full bg-[#0a192f] flex justify-center items-center p-10'>
        <form method='POST' action='https://getform.io/f/6a58ba63-6f78-40b2-afe4-55fc01bb1882' className='flex flex-col max-w-[500px] w-full'>
            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#C53634]'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - arromero0408@gmail.com</p>
            </div>
            <div class="relative">
              <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Floating outlined</label>
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