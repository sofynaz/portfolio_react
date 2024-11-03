import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import pot from '../../assets/POT.jpeg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Nabar = () => {
    const [menu, setMenu] = useState("Home")
    return (
        <>
            <header class=" sm:mt-4  ">
                <div class="mx-auto max-w-screen-xl sm:px-4 md:px-6 ">
                    <div class="flex h-16  items-center justify-between">
                        <div class="flex shadow-md sm:mx-2 shadow-indigo-400/40   rounded sm:p-2 md:items-center md:gap-12">
                            <span class="font-serif  hover:text-indigo-300/40 cursor-pointer   text-gray-400 sm:font-extrabold sm:text-xl ">N A Z N E E</span>
                        </div>

                        <div class="hidden md:block">
                            <nav aria-label="Global">
                                <ul class="flex items-center gap-6 font-extrabold text-lg  cursor-pointer">
                                    <li>
                                        <AnchorLink className='anchor-link' offset={50} href='#Home'  > <p onClick={() => setMenu('Home')}
                                            class="text-gray-400   transition hover:text-indigo-400/40"
                                            href="#"
                                        >
                                            Home
                                        </p></AnchorLink>
                                        {menu === "Home" ? <img src={underline} alt="undeline" /> : <></>}
                                    </li>

                                    <li> <AnchorLink className='anchor-link' offset={50} href='#about' >
                                        <p onClick={() => setMenu('about')}
                                            class="text-gray-400 transition hover:text-indigo-400/40 "
                                            
                                        >
                                            About me
                                        </p>
                                    </AnchorLink>

                                        {menu === "about" ? <img src={underline} alt="undeline" /> : <></>}
                                    </li>

                                    <li>
                                        <AnchorLink className='anchor-link' offset={50} href='#services' >
                                            <p onClick={() => setMenu('services')}
                                                class="text-gray-400 transition hover:text-indigo-400/40"
                                                
                                            >
                                                Services
                                            </p>
                                        </AnchorLink>
                                        {menu === "services" ? <img src={underline} alt="undeline" /> : <></>}
                                    </li>

                                    <li>
                                        <AnchorLink className='anchor-link' offset={50} href='#work' >
                                            <p onClick={() => setMenu('work')}
                                                class="text-gray-400 transition hover:text-indigo-400/40"
                                               
                                            >
                                                Portfolio
                                            </p>
                                        </AnchorLink>

                                        {menu === "work" ? <img src={underline} alt="undeline" /> : <></>}
                                    </li>

                                    <li>
                                        <AnchorLink className='anchor-link' offset={50} href='#contact' >
                                            <p onClick={() => setMenu('contact')}
                                                class="text-gray-400 transition hover:text-indigo-400/40"
                                               
                                            >
                                                Contact us
                                            </p>
                                        </AnchorLink>

                                        {menu === "contact" ? <img src={underline} alt="undeline" /> : <></>}
                                    </li>


                                </ul>
                            </nav>
                        </div>

                        <div class="flex items-center gap-4">
                            <div class="sm:flex sm:gap-4">
                                <AnchorLink className='anchor-link'offset={50} href='#contact   '  >
                                <p
                                    class="rounded-lg hover:rounded-full  shadow-md shadow-indigo-400/40   px-5 py-2.5 text-sm font-extrabold text-gray-400 "
                                  
                                >
                                    Connect with me
                                </p>
                                </AnchorLink>
                               


                            </div>

                            <div class="block md:hidden">
                                <button
                                    class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-pink-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="size-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Nabar
