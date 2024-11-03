import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'


const About = () => {
  return (
    <>
      <div id='about' className="about-section flex flex-col items-center content-center  gap-20  m-32 text-gray-200">
        <div className="about-title relative">
          <h1 className='text-6xl py-px'>About me</h1>
          <img className='absolute ml-16 bottom-0 -z-10' src={theme_pattern} alt="theme-pattern" />

        </div>
        <div className="about-section flex gap-20">
          <div className="about-left">
            <img src={profile_img} alt="" />
          </div>
          <div className="about-right flex flex-col gap-10">
            <div className="para-graph flex flex-col  gap-5">
              <p>I am Experienced frontend Developer with over Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam totam repellat?</p>
              <p>My passion for forentend development is not only Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam maiores vero ab maxime libero perferendis quaerat recusandae!</p>
            </div>
            <div className="about-skills flex flex-col gap-5">
              <div className="about-skill  flex gap-8 transition duration-300 ease-in-ou hover:scale-105 items-center ">
                <p>HTML & CSS </p><hr style={{ width: "50%", outline: "none", border: "none", height: "8px", borderRadius: "50px" }} className='bg-gradient-to-r from-purple-400 via-yellow-700 to-pink-800' />
              </div>
              <div className="about-skill flex gap-8 transition duration-300 ease-in-ou hover:scale-105  items-center ">
                <p>JAVASCRIPT & REACT JS </p><hr style={{ width: "70%", outline: "none", border: "none", height: "8px", borderRadius: "50px" }} className='bg-gradient-to-r from-purple-400 via-yellow-700 to-pink-800' />

              </div>
              <div className="about-skill flex gap-8  transition duration-300 ease-in-ou hover:scale-105 items-center ">
                <p>TAILWIND CSS, NODEJS & MONGODB </p><hr style={{ width: "50%", outline: "none", border: "none", height: "8px", borderRadius: "50px" }} className='bg-gradient-to-r from-purple-400 via-yellow-700 to-pink-800' />
              </div>
            </div>
          </div>
        </div>
        <div className="about-achievements flex justify-around mb-20 w-full">
          <div className="achievement flex flex-col items-center gap-2 transition duration-300 ease-in-ou hover:scale-125">
            <h1 className='text-5xl  bg-gradient-to-r from-purple-400 via-yellow-700 to-pink-800 bg-clip-text'>10+</h1>
            <p className='text-xl' >Yars of Experience</p>
          </div>
          <hr />
          <div className="achievement flex flex-col items-center gap-2 transition duration-300 ease-in-ou hover:scale-125">
            <h1 className='text-5xl  bg-gradient-to-r from-purple-400 via-yellow-700 to-pink-800 bg-clip-text' >90+</h1>
            <p className='text-xl' >Projects Completed</p>
          </div>
          <hr />
          <div className="achievement flex flex-col items-center gap-2 transition duration-300 ease-in-ou hover:scale-125">
            <h1 className='text-5xl  bg-gradient-to-r from-purple-400 via-yellow-700 to-pink-800 bg-clip-text' >25+</h1>
            <p className='text-xl' >Happy Clients</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
