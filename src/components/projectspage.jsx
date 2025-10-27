import React from 'react'

const Projectspage = () => {
  return (
    <div className="main bg-black pb-40">
      <h1 className="text-white text-4xl flex pt-12 justify-center font-bold border-t border-gray-900">Projects</h1>
      <p className="text-white text-center mt-1.5">Here are some of my projects:</p>
      <div className="container text-white mx-auto mt-10 px-4">
        <ul className=' border-t border-gray-700 pt-20 mt-20'>
          <li><video loop autoPlay muted src="https://github.com/mukulbhadu/portfolio/blob/main/xclone.mp4" className="w-full h-auto"></video></li>
          <p className="bclone text-center mt-10 text-2xl font-semibold">This project is a high-fidelity static replication of the Twitter (X) web application, built to showcase expertise in modern front-end styling with Tailwind CSS.

            The primary goal was to leverage Tailwind's utility-first framework to rapidly build a custom, "pixel-perfect" user interface without writing traditional CSS. This project demonstrates a strong understanding of:

            Utility-First CSS: Building a complex and custom design purely with Tailwind's utility classes.

            Responsive Design: Faithfully recreating Twitter's adaptive layout for desktop, tablet, and mobile screens.

            Component Replication: Accurately styling and structuring familiar UI components like the tweet feed, sidebar navigation, and trends box.

            Semantic HTML: Using clean HTML5 to provide a solid foundation for the Tailwind styling.

            The complete source code is available on GitHub.
            <li><a href="https://github.com/mukulbhadu/Explore-x.clone" className="text-amber-50 hover:underline">View on GitHub</a></li>
          </p>

        </ul>
        <ul className=' border-t border-gray-700 pt-20 mt-20'>
          <li><video loop autoPlay muted src="./public/blokonomicsclone.mp4" className="w-full h-auto"></video></li>
          <p className="bclone text-center text-2xl font-semibold mt-10">This project is a static front-end replication of the official Blokonomics website. The primary objective was to meticulously recreate the entire visual design and layout using only HTML5 and CSS3.

            The project showcases a strong understanding of:

            Semantic HTML Structure: Building a logical and accessible page scaffold.

            Advanced CSS Styling: Using modern CSS (Flexbox, Grid) to match the original site's typography, color palette, and complex, responsive layouts.

            Attention to Detail: "Pixel-perfect" implementation of UI components like navbars, hero sections, and footers.

            The complete source code is available on GitHub, highlighting a clean and well-organized codebase.
            <li><a href="https://github.com/mukulbhadu/Blokonomics.clone-basic/" className="text-amber-50 hover:underline">View on GitHub</a></li>
          </p>

        </ul>
      </div>
    </div>
  )
}

export default Projectspage
