import React from 'react'
import './Contact.css'
import theme_patteren from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call from '../../assets/call_icon.svg'
import Swal from 'sweetalert2'


const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e6e4b447-6b44-4695-a607-458bb0ab9d56");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {

      Swal.fire({
        title: 'successfuly',
        text: data.message,
        icon: 'success',
        timer: 2000,
        color: "#716add",
        confirmButtonText: 'Cool'
      })

      // setResult("Form Submitted Successfully");

      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div id='contact' className="contact text-gray-300 flex flex-col justify-center items-center gap-20 mx-44 my-20">
        <div className="contact-title relative">
          <h1 className='font-bold text-6xl px-4 ' >Get in touch</h1>
          <img className='absolute bottom-0 right-0 -z-10' src={theme_patteren} alt="" />
        </div>
        <div className="contact-section flex gap-20 ">
          <div className="contact-left flex flex-col gap-7">
            <h1 className='font-bold text-5xl bg-clip-text bg-gradient-to-r from-pink-600  via-yellow-700 to-pink-800' >Let's Talk</h1>
            <p className='max-w-96 text-sm leading-5 ' >I am Currently available to take on new project so Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum. </p>
            <div className="contact-details flex flex-col gap-6">
              <div className="contact-detail flex items-center gap-5">
                <img src={mail_icon} alt="mail icon" />
                <p>naznee.ansari99@gmail.com</p>
              </div>
              <div className="contact-detail flex items-center gap-5">
                <img src={location_icon} alt="location icon" />
                <p>Noida, India</p>
              </div>
              <div className="contact-detail flex items-center gap-5">
                <img src={call} alt="call" />
                <p>+772-825-524</p>
              </div>
            </div>
          </div>
          <form onSubmit={onSubmit} className='contact-right flex flex-col items-start gap-4'>

            <label className='font-bold text-sm' htmlFor="">Your Name</label>
            <input className='border-none pl-3  rounded-sm bg-gray-700/60 text-lg w-[700px] h-[40px]' type="text" placeholder='Enter your name' name='name' />
            <label className='font-bold text-sm' htmlFor="">Your Email</label>
            <input className='border-none pl-3  rounded-sm bg-gray-700/60 text-lg w-[700px] h-[40px]' type="text" placeholder='Enter your email' name='email' />
            <label className='font-bold text-sm' htmlFor="">Write Your message here!</label>
            <textarea className='border-none w-[700px] p-5 rounded-sm  bg-gray-700/60' name="message" id="" rows="5" placeholder='Enter Your message'>
            </textarea>
            <button type='submit' className="contact-submit hover:scale-105  hover:border-gray-600/100 rounded-full border-2 cursor-pointer px-5 py-2 mt-5 mb-4">Submit now</button>
          </form>
          {/* <span>{result}</span> */}
        </div>
      </div>
    </>
  )
}

export default Contact
