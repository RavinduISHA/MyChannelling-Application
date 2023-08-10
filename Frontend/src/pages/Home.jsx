import { Link } from 'react-router-dom'
import heroImg from '../assets/doctor-img02.png'
import Icon from '../assets/icon01.png'
import Icon2 from '../assets/icon02.png'
import Icon3 from '../assets/icon03.png'
import featureImg from '../assets/feature-img.png'
import avatarIcon from '../assets/avatar-icon.png'
import VideoIcon from '../assets/video-icon.png'
import { BiSolidArrowToRight } from 'react-icons/bi'
import About from '../components/About/About'
import ServiceList from '../components/Services/ServiceList'

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

      <section>
        <div className='container'>
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='text-[30px] leading-9 text-heading font-[800] text-center'>Providing the best medical services</h2>
            <p className='text_para text-center'>
              lorem ispansum sdkjn khbjf ksdjdbjofs,jsnfos
              sfnjsnjjv vjndvoindiovn ofniosd 
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={Icon} alt='Icon' />
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-heading font-[700] text-center'>Find a Doctor</h2>
                <p className='text-[16px] leading-7 text-text font-[400] mt-4 text-center'>
                  sjhdb sdhbsd jsidoisd csducos csndisiodncsdn sodv
                  sdvisbdvobsdbdih isdusdcusod dihjsnunsd sdnuidsn
                </p>

                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primary hover:bg-none'>
                  <BiSolidArrowToRight className='group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>

            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={Icon2} alt='Icon' />
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-heading font-[700] text-center'>Find a Location</h2>
                <p className='text-[16px] leading-7 text-text font-[400] mt-4 text-center'>
                  sjhdb sdhbsd jsidoisd csducos csndisiodncsdn sodv
                  sdvisbdvobsdbdih isdusdcusod dihjsnunsd sdnuidsn
                </p>

                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primary hover:bg-none'>
                  <BiSolidArrowToRight className='group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>

            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={Icon3} alt='Icon' />
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-heading font-[700] text-center'>Book Appointment</h2>
                <p className='text-[16px] leading-7 text-text font-[400] mt-4 text-center'>
                  sjhdb sdhbsd jsidoisd csducos csndisiodncsdn sodv
                  sdvisbdvobsdbdih isdusdcusod dihjsnunsd sdnuidsn
                </p>

                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primary hover:bg-none'>
                  <BiSolidArrowToRight className='group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <About />

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="text-[26px] leading-9 text-heading font-[700] text-center">Our Medical Services</h2>
            <p className="text_para text-center">lorem ispasum hsdjn sdjcd ksjbd sjdncjsdnksjdc sdc,
            World class care of everyone.</p>
          </div>
          <ServiceList />
        </div>
      </section>

      {/* FEATURE*/}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="xl:w-[670px]">
              <h2 className="text-[35px] leading-9 text-heading font-[700]">Get virtual treatment <br/> Anytime.</h2>
              <ul className='pl-4'>
                <li className='text_para'>
                  1. Schedule the Appointment directly.
                </li>
                <li className='text_para'>
                  2. Contact the Office.
                </li>
                <li className='text_para'>
                  3. Use the online sheduling tool to select an appointment time.
                </li>
              </ul>
              <Link to='/'>
                <button className='btn'>Learn More</button>
              </Link>
            </div>

            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} alt="" className="w-3/4" />

              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bootom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-heading">Tue, 10</p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-heading">6.00PM</p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellow rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={VideoIcon} alt="" className="" />
                  </span>
                </div>

                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-iris font-[500] mt-2 lg:mt-4 rounded-full">Consultation</div>

                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" className="" />
                  <div className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-heaidng">Ravindu Umaynga</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home