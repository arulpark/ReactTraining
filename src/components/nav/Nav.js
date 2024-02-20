import React from 'react'
// import { Link } from "react-router-dom";
import logo from '../../logo.png';
function Nav() {
  return (
    <div className='bg-gray-950 p-6'>
    <div className='container mx-auto'>
        <div className='columns-2'>
        <div className='text-start'>
       
          <img src={logo} className="App-logo border-x-0" alt="logo" />
        </div>
        <div className='text-end'>
         <ul className='inline-flex gap-4 text-white'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#portfolio'>Portfolio</a></li>
            <li><a href='#contact'>Contact Me</a></li>
            <li><a> | </a></li>
            <li><a href='#Products'>Products List</a></li>
            <li><a> | </a></li>
            <li><a href='#count'>Counter</a></li>

        </ul>
         </div>
         </div>
    </div>
    </div>
  )
}

export default Nav