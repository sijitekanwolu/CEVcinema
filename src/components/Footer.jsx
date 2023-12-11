import React from 'react'
import {FaInstagram, FaBehance, FaWhatsapp, FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-footer h-60 " id='contact'>

    <div className="flex">

        <div className="flex gap-36">

            <div className='flex flex-col justify-center items-center'>
                <h2 className='font-bold text-2xl text-white '>CEVcinema</h2>

                <div className="flex gap-4">
                    <FaInstagram size={15} color='#F94C66'/>
                    <FaBehance size={15} color='#687EFF'/>
                    <FaWhatsapp size={15} color='#A2FF86'/>
                    <FaGithub size={15} color='#fff'/>
                </div>

            </div>


            <div className="flex flex-col text-center ">
                <h2 className='text-lg font-bold text-sky-300'>Service</h2>
                <h2 className='text-sm text-white'>Membership</h2>
                <h2 className='text-sm text-white'>Products</h2>
                <h2 className='text-sm text-white'>Support</h2>
                <h2 className='text-sm text-white'>Tour</h2>
            </div>

            <div className="flex flex-col text-center ">
                <h2 className='text-lg font-bold text-sky-300'>Company</h2>
                <h2 className='text-sm text-white'>We're Hiring</h2>
                <h2 className='text-sm text-white'>Contact</h2>
                <h2 className='text-sm text-white'>Help</h2>
                <h2 className='text-sm text-white'>Blog</h2>
            </div>

            <div className="flex flex-col text-center ">
                <h2 className='text-lg font-bold text-sky-300'>Movie</h2>
                <h2 className='text-sm text-white'>Action</h2>
                <h2 className='text-sm text-white'>Romantic</h2>
                <h2 className='text-sm text-white'>Comedy</h2>
                <h2 className='text-sm text-white'>Horror</h2>
            </div>

            <div className="flex flex-col text-center ">
                <h2 className='text-lg font-bold text-sky-300'>Contact Us</h2>
                <h2 className='text-sm text-white'>yusufekhar45@gmail.com</h2>
                <h2 className='text-sm text-white'>Behance: ramz.project</h2>
                <h2 className='text-sm text-white'>+62 819-0667-1150</h2>


            </div>

        </div>

    </div>



    <h2 className='w-full text-sm text-center text-white mt-3'><span className='text-red-500 font-bold'>E</span>.project
        <span className=' text-red-500'> |</span> copyright © 2023</h2>

</div>
  )
}

export default Footer