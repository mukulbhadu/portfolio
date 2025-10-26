import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>

      <nav className='bg-zinc-950 text-white flex space-x-96 items-center h-20 px-6 fixed w-full border-b border-gray-900 top-0 z-20'>



        <div className="left text-3xl font-bold ml-40 text-amber-50 hover:cursor-pointer">
          Mukul's Portfolio
        </div>


        <div className="right">


          <ul className='hidden md:flex  gap-8 text-lg'>
            <li>
              <a href="https://github.com/mukulbhadu" className="hover:text-gray-400 transition">GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mukulbhadu/" className="hover:text-gray-400 transition">LinkedIn</a>
            </li>
            <li>
              <a href="https://www.instagram.com/cmbx1/" className="hover:text-gray-400 transition">Instagram</a>
            </li>
          </ul>



        </div>
      </nav>



    </>
  );
};

export default Navbar;


