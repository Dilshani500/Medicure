import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
       <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
        </div> 

        <div className='my-10 flex flex-col md:flex-row gap-12'>
          <img className='w-full md:max-w-[360px]'src={assets.about_image} alt=""/>
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
            <p>njncoibvebrnb8bgry8vbidybvw8beyrwvbrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr</p>
            <p>dwsvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv</p>
            <b className='text-gray-800'>Our Vision</b>
            <p>nkJDBBQLKWWWCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC</p>
            <p></p>
          </div>
        </div>
        <div className='text-xl my-4'>
          WHY<span className='text-gray-700 font-semibold'>CHOOSE US</span></div>
          <div className='flex flex-col md:flex-row mb-20'>
            <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
              <b>Efficiency:</b>
              <p>nojnpvnewpuerbvvvvvvvvvvvvvvvvvvvvvvvvvvvv</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
              <b>rwh4thtrh:</b>
              <p>thrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
               <b>htrrrrrjt:</b>
               <p>tttttttttttttttttttttttttttttt</p>
            </div>
          </div>
    </div>
  )
}

export default About