import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import naz from '../../assets/naz.jpeg'

const Hero = () => {
    return (
        <>
            <div id='Home' className="bg-indigo-900/15 heroSection text-gray-400 flex items-center relative top-12 flex-col gap-8 ">
                <div className="profile_Img flex items-center  gap-8 flex-col text-center">
                    <img className='w-96 h-96 rounded-full ' src={profile_img} alt="" />
                    <h3 className='text-6xl drop-shadow-2xl text-wrap font-extrabold' > <span className='bg-gradient-to-r from-pink-900 via-yellow-900 to-pink-800 bg-clip-text'>I am Naznee</span>, Frontend Developer <br/> based in India.</h3>
                    <p className='text-sm'>I am a Frontend Developer From India, I Have Knowlwdge in HTML, CSS, Tailwind CSS, JAVASCRIPT, REACT JS, NODEJS etc. </p>
                </div>
                <div className="hero_action items-center flex gap-6 
                 mb-3 text-lg font-bold ">
                    
                    <div className="hero_connect hover:outline p-3 rounded-xl cursor-pointer bg-gradient-to-r from-pink-900 via-yellow-800 to-pink-900"> <AnchorLink className="anchor-link" offset={50} href="#contact" >Connect with me </AnchorLink>
                     </div>
                    <div className="hero_resume px-5 py-2 rounded-xl border-solid   cursor-pointer outline hover:text-pink-800 ">My Resume </div>
                </div>

            </div>

        </>
    )
}

export default Hero
