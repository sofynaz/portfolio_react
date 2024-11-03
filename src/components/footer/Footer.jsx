import React from 'react'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <>
      <div className="footer text-gray-400 mx-44  my-12 flex flex-col gap-7">
        <div className="footer-top flex justify-between">
          <div className="footer-top-left flex flex-col">
            {/* <img src={footer_logo} alt="footer" /> */}
            <p className='text-xl  max-w-96 ' >Naznee</p>
            <a href="https://github.com/sofynaz" target="_blank" rel="noopener noreferrer" className=" hover:underline">
              https://github.com/sofynaz
            </a>

            <a href="https://www.linkedin.com/in/naznee-ansari-3670542b9/" target="_blank" rel="noopener noreferrer" className=" hover:underline">
              https://www.linkedin.com/in/naznee-ansari-3670542b9/
            </a>

            <a href="https://x.com/sofynaz999" target="_blank" rel="noopener noreferrer" className=" hover:underline">
              https://x.com/sofynaz999
            </a>
          </div>
          <div className="footer-top-right flex items-center gap-7">
            <div className="footer-email-input border-2 hover:border-gray-600  flex gap-7 px-4 py-2.5 pr-9 rounded-full bg-gray-600">
              <img src={user_icon} alt="footer-right" />
              <input className='outline-none border-none bg-transparent text-center  font-mono' type="email" placeholder='Enter your E-mil' />
            </div>
            <div className="footer-subscribe text-lg py-2.5 px-4 rounded-full border-2 hover:scale-105  hover:border-gray-600/100 ">
              Subscribe
            </div>
          </div>

        </div>
        <hr />
        <div className="footer-bottom flex justify-between text-sm">
          <p className="footer-bt-left " >
            &copy; 2023 Naznee .All rights reserved
          </p>
          <div className="footer-bt-right flex gap-7 mb-11">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
          </div>
        </div>

      </div>

    </>
  )
}

export default Footer
