import React, { useEffect } from 'react'
import { MdShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';


const scrollHeader = () => {
window.addEventListener('scroll',function(){
const header = document.querySelector('header');
header.classList.toggle("sticky", window.scrollY> 0)
})
}


function Header() {

useEffect(() => {
scrollHeader()
})

return (
<header className='flex z-10 p-6 items-center w-full justify-between fixed shadow-2xl'>
  <a href="#" className='font-bold text-3xl no-underline text-white'>CEVcinema</a>

  <ul className='flex ml-auto gap-10 text-sm mr-10 text-white'>
    <li><a href="#home" className=' no-underline text-white hover:text-sky-300'>Home</a></li>
    <li><a href="#movie" className=' no-underline text-white hover:text-sky-300'>Movie</a></li>
    <li><a href="#faq" className=' no-underline text-white hover:text-sky-300'>FAQ</a></li>
    <li><a href="#contact" className=' no-underline text-white hover:text-sky-300'>Contact</a></li>

  </ul>

  <Link to={`/ticket`}> 
  <MdShoppingCart color='#FFFFFF' size={20}/>
           </Link>

</header>

)
}

export default Header

