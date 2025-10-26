import React from 'react'

const Footer = () => {
    return (
        <body class="bg-gray-50 flex flex-col min-h-screen "> 


            <footer class="bg-zinc-950 text-gray-300 mt-auto border-t border-gray-900">
                <div class="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between   ">



                    <div>
                        <h2 class="text-white text-2xl font-semibold mb-3 ">Mukul</h2>
                        <p class=" leading-relaxed w-96">
                            I’m Mukul — a passionate coding student who loves building creative and impactful digital experiences.
                            Let’s connect and create something amazing together!<br />
                            [mukulbhaduwork@gmail.com]
                        </p>
                    </div>




                    <div>
                        <h2 class="text-white text-2xl font-semibold mb-3 mr-52">Click 2 Connect</h2>
                        <div class="flex flex-col space-y-2">
                            <a href="https://github.com/mukulbhadu" class="hover:text-white transition">GitHub</a>
                            <a href="https://www.linkedin.com/in/mukulbhadu/" class="hover:text-white transition">LinkedIn</a>
                            <a href="https://www.instagram.com/cmbx1/" class="hover:text-white transition">Instagram</a>
                        </div>
                    </div>
                </div>


                <div class="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
                    <p>© 2025 Mukul. All Rights Reserved.</p>

                </div>
            </footer>

        </body>
    )
}

export default Footer
