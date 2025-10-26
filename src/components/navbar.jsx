import React from 'react'
import '../index.css'
import '../App.css'
const Navbar = () => {
  return (
    <div className='bg-zinc-950 text-white flex justify-around  h-20 pt-6 fixed w-full border-b border-gray-900 top-0 z-10'>
      <div className="left text-3xl font-bold text-amber-50 hover:cursor-pointer">Mukul's Portfolio</div>
      <div className="right flex"><ul className='flex space-x-6 '>
        <a href="https://github.com/mukulbhadu" class="hover:text-gray-400 transition">GitHub</a>
        <a href="https://www.linkedin.com/in/mukulbhadu/" class="hover:text-gray-400 transition">LinkedIn</a>
        <a href="https://www.instagram.com/cmbx1/" class="hover:text-gray-400 transition">Instagram</a>
      </ul>
      </div>

    </div>
  )
}

export default Navbar

