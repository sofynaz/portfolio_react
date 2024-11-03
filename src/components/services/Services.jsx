import './Services.css'
import theme_patteren from '../../assets/theme_pattern.svg'
import service_data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'



const Services = () => {
    return (
        <>
            <div id='services' className="services    text-gray-200 flex flex-col items-center justify-center gap-20 mt-20 mb-20 ml-32 mr-32">
                <div className="services-title relative">
                    <h1 className='text-6xl px-5' >My Services</h1>
                    <img className='absolute bottom-0 right-0 -z-10' src={theme_patteren} alt="serices pick" />
                </div>
                <div className="service-container gap-10 mb-20  grid grid-cols-3">
                    {service_data.map((service, index) => {
                        return <div key={service} className="service-format   transition duration-300 ease-in-ou hover:scale-105 flex flex-col justify-center gap-5 p-8 cursor-pointer  rounded-lg  hover:border-gray-600/100 border-2">
                            <h3 className='font-bold text-xl' >{service.s_no}</h3>
                            <h2 className='font-bold text-2xl bg-gradient-to-r from-pink-600  via-yellow-700 to-pink-800 bg-clip-text' >{service.s_name}</h2>
                            <p className='leading-loose max-w-64' >{service.s_desc}</p>
                            <div className="service-readmore flex gap-5 items-center mt-5">
                                <p className=''>Read More</p>
                                <img src={arrow_icon} alt="arrow icon" />
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Services
