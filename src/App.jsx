import React from 'react'
import './App.css'
const App = () => {
  return (
    <div className='main flex  justify-center '>
      <div className="left  w-2/3 bg-black text-white">
        <h1 className='text-5xl font-bold mt-80 ml-48 mb-5'>Hi I’m Mukul,</h1>
        <p className='  text-xl mr-4 mb-16 ml-48'>myself Mukul Bhadu, a passionate coding student who loves turning ideas into interactive, functional, and visually appealing digital experiences. Here, you’ll find a collection of my projects, experiments, and creative work that reflect my journey in learning and building with code. Explore my work, discover my skills, and feel free to connect — I’m always excited to collaborate and learn something new!</p>
        <div className='text-2xl font-semibold text-amber-50 ml-48'>
          Exploring all things tech, but I've definitely got a taste for front-end development and building intuitive user experiences.
        </div>

        <div className="skills mt-44 border-t  border-gray-900">
          <h2 className='text-3xl font-bold justify-center  flex my-10'>Skills</h2>
          <ul className="flex ml-48 gap-16 ">
            <li className=" hover:scale-110 flex flex-col items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className=" w-16 h-16" alt="HTML5 Logo" />
              <p className="mt-2 font-semibold text-lg text-white">HTML5</p>
            </li>

            <li className="hover:scale-110 flex flex-col items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="w-16 h-16" alt="CSS3 Logo" />
              <p className="mt-2 font-semibold text-lg text-white">CSS3</p>
            </li>

            <li className="hover:scale-110 flex flex-col items-center">
              <svg className="w-16 h-16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path fill="#38BDF8" d="M24 24c8 0 14-4 14-10 0-6-6-10-14-10S10 8 10 14c0 6 6 10 14 10z" />
                <path fill="#0EA5E9" d="M24 34c8 0 14-4 14-10 0-6-6-10-14-10S10 18 10 24c0 6 6 10 14 10z" />
              </svg>
              <p className="mt-2 font-semibold text-lg text-white">Tailwind CSS</p>
            </li>

            <li className="hover:scale-110 flex flex-col items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-16 h-16" alt="JavaScript Logo" />
              <p className="mt-2 font-semibold text-lg text-white">JavaScript</p>
            </li>

            <li className="hover:scale-110 flex flex-col items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-16 h-16" alt="React Logo" />
              <p className="mt-2 font-semibold text-lg text-white">React</p>
            </li>
          </ul>
          <h1 className="text-3xl font-bold justify-center  flex my-20">Learning</h1>
          <ul className="flex justify-center ml-48 gap-16 mb-20"><li className="flex flex-col  hover:scale-110 transition-transform duration-300">
            <svg className="w-16 h-16" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
              <path fill="#47A248" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0z" />
              <path fill="#FFF" d="M64 12c-11 0-20 9-20 20 0 11 20 48 20 48s20-37 20-48c0-11-9-20-20-20z" />
            </svg>
            <p className="mt-2 font-semibold text-lg text-white">MongoDB</p>
          </li></ul>
        </div>
      </div>
      <div className="right  w-1/3 bg-black text-white h-auto">
        <img src="https://media.licdn.com/dms/image/v2/D4D03AQGsCgLuLtgOQg/profile-displayphoto-crop_800_800/B4DZoRxR3OJAAI-/0/1761234724577?e=1762992000&v=beta&t=u61Xr1bV_Nbb4HzvnpyXVJntse9eohHcX8Uo-MhzF4c" alt="Image" className=" mt-72 mb-3.5 ml-0 rounded-full w-80" />
        <span className="location">📍Sriganganagar, Rajasthan, India</span>
        <h3 className="hover:text-amber-50 hover:cursor-pointer mt-0.5">Mukulbhaduwork@gmail.com</h3>
        <h1 className="text-xl font-bold mt-4">Education</h1>
        <ul>
          <li>Engineering college Bikaner</li>
          <li> Btech : 2024-2028</li>
          <li>CSE</li>
        </ul>
        <div className="programing mt-10 border border-gray-900 ">
          <h2 className="text-3xl font-bold justify-center  flex mt-8">Programming Languages</h2>
          <ul className='flex gap-16 mb-10 mt-10 justify-center'>
            <li className='hover:scale-110'><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" class="w-16 h-16" alt="C Logo" />
              <p className="mt-2 font-semibold text-lg text-white">C</p></li>
            <li className='hover:scale-110'><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" class="w-16 h-16" alt="C++ Logo" />
              <p className="mt-2 font-semibold text-lg text-white">C++</p></li>
            <li className='hover:scale-110'><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" class="w-16 h-16" alt="Python Logo" />
              <p className="mt-2 font-semibold text-lg text-white">Python</p></li>
          </ul>
        </div>
        <div className="others">
          <h2 className="text-3xl font-bold justify-center  flex mt-8">Version Control & Collaboration</h2>
          <ul className='flex gap-16 mb-10  justify-center mt-20'> <li className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
            <svg className="w-16 h-16" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
              <path fill="#F34F29" d="M124.1 58.2L69.8 3.9a9.5 9.5 0 0 0-13.4 0l-10.6 10.6 17 17a7.4 7.4 0 0 1 9.4 9.4l16.4 16.4a7.4 7.4 0 1 1-4.6 4.6L67.6 45v29.6a7.4 7.4 0 1 1-5.3-.2V44.8a7.4 7.4 0 0 1-4.9-9.4L40.2 18.1 3.9 54.4a9.5 9.5 0 0 0 0 13.4l54.3 54.3a9.5 9.5 0 0 0 13.4 0l52.5-52.5a9.5 9.5 0 0 0 0-13.4z" />
            </svg>
            <p className="mt-2 font-semibold text-lg text-white">Git</p>
          </li>


            <li className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
              <svg className="w-16 h-16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white">
                <path d="M12 .297a12 12 0 0 0-3.79 23.41c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61a3.18 3.18 0 0 0-1.34-1.77c-1.09-.75.08-.73.08-.73a2.52 2.52 0 0 1 1.84 1.24 2.56 2.56 0 0 0 3.5 1 2.56 2.56 0 0 1 .76-1.61c-2.67-.3-5.47-1.34-5.47-5.94a4.64 4.64 0 0 1 1.24-3.22 4.3 4.3 0 0 1 .12-3.18s1-.32 3.3 1.23a11.3 11.3 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23a4.3 4.3 0 0 1 .12 3.18 4.64 4.64 0 0 1 1.24 3.22c0 4.62-2.81 5.63-5.49 5.93a2.87 2.87 0 0 1 .82 2.22v3.29c0 .32.21.69.82.58A12 12 0 0 0 12 .297z" />
              </svg>
              <p className="mt-2 font-semibold text-lg text-white">GitHub</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default App
