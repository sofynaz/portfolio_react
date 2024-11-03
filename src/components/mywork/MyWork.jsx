import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <>
      <div id='work' className="my-work text-gray-200 flex flex-col items-center  justify-center gap-20 my-20  mx-44 ">
        <div className="mywork-title relative ">
          <h1 className=' text-6xl font-bold px-3' >My Latest Work</h1>
          <img className='absolute  bottom-0 right-0 -z-10' src={theme_pattern} alt="" />
        </div>
        <div className="mywork_container grid grid-cols-3   gap-10">
          {mywork_data.map((data, index) => {
            return <img className='box-border w-96 h-72 cursor-pointer  rounded hover:rounded-lg transition duration-300 ease-in-ou hover:scale-105 border-2 border-transparent hover:border-gray-600/100' key={index} src={data.w_img} />
          })}
        </div>
        <div className="show-my-work flex gap-4 rounded-full border-2  hover:border-gray-600/100 px-5 py-4 font-bold text-3xl cursor-pointer mb-20 transition duration-300 ease-in-ou hover:scale-105">
          <p>Show More</p>
          <img className='' src={arrow_icon} alt="" />

        </div>
      </div>

    </>
  )
}

export default MyWork
