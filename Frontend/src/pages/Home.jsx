import React from 'react'
import heroImg from '../assets/doctor-img02.png'

const Home = () => {
  return (
    <>
      {/*HERO SECTION */}
      <section className='hero__section pt-[60px] 2xl:h-[800px]'>
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
            {/*CONTENT */}
            <div>
              <div className='lg:w-[570px]'>
                <h1 className='text-[36px] leading-[46px] text-heading font-[800] md:text-[60px] md:leading-[70px]'>
                  We help to patients live a healthy, longer life.
                </h1>
                <p className='text_para'>
                  Lorem isdpndsk dsjdnciosdc sdojcousdnbiosd dosobsdovbsvdv.
                  sdvsdvs sjvjsv jsvsdv djbvosd dsjnciosddos osvsdv.
                  sdviojbsdvsdv.sv
                </p>

                <button className='btn'>
                  Request an Appointment
                </button>
              </div>

              <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-heading'>
                    2+
                  </h2>
                  <span className='w-[100px] h-2 bg-yellow rounded-full block mt-[-14px]'></span>
                  <p className='text_para'>Years of Experience</p>
                </div>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-heading'>
                    100%
                  </h2>
                  <span className='w-[100px] h-2 bg-iris rounded-full block mt-[-14px]'></span>
                  <p className='text_para'>Patients Satisfaction</p>
                </div>
              </div>
            </div>

            <div className='flex gap-[30px] justify-end'>
              <div>
                <img src={heroImg} alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home