import React from "react"
import AboutImg from '../../assets/doctor-img02.png'
import { Link } from "react-router-dom"

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={AboutImg} alt="" />
            <div className="absolute z-20 botttom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src="" alt="" />
            </div>
          </div>
          {/* CONTENT */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="text-heading font-[800] text-[30px]">Pround to be one of the nationas best</h2>
            <p className="text_para">for 2+ yrs of ecprience  hdbhkv jndfjv kjndvfojo vndofvvdvv
            fdvfvdfv dfv fv fdv vf df v df vdf v df v  dfv d f v fdv dfvd fvdfvdf dfv  dfv fd  df
            dfvfdvdfv</p>
            <p className="text_para mt-[30px]">for 2+ yrs of ecprience  hdbhkv jndfjv kjndvfojo vndofvvdvv
            fdvfvdfv dfv fv fdv vf df v df vdf v df v  dfv d f v fdv dfvd fvdfvdf dfv  dfv fd  df
            dfvfdvdfv</p>

            <Link to='/'><button className="btn">Learn More</button></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About