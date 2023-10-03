import { Link, Head } from '@inertiajs/react';
import { HomeProps } from '@/types';

// styles
import '../../../sass/pages/home.scss'

// Assets
import arrowBtn from '../../../assets/icons/arrow-btn.svg'
import Navbar from '@/Layouts/Components/Navbar';
import Footer from '@/Layouts/Components/Footer';
import CardWorkShowcase from '@/Components/App/Cards/CardWorkShowcase';
import CardService from '@/Components/App/Cards/CardService';
import TestimonialSection from '@/Layouts/Components/TestimonialSection';

export default function Home({ latestWorks, recommendedWorks }: HomeProps) {

  return (
    <>
      <Head title="Home" />

      <Navbar />
      <main>
        {/* Hero section */}
        <section className="s-hero">

          <div className="bg-glr-blue"></div>

          <div className="flex-col">
            <div className="container content-w-big">
              <div className="flex-row">
                <h1 className="text-blue-g hero-title-big-top">Stellar</h1>
                <strong className="hero-desc-big">We craft exceptional digital experiences that bring your brand to success. With
                  expertise in websites, apps, and
                  branding, we combine creativity and technology to bring your vision to life.</strong>
              </div>

              <div className="flex-row">
                <h1 className="text-blue-g hero-title-big-bottom">Creations</h1>
                <svg width="122" height="140" viewBox="0 0 122 140" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M85.17 68.34C54.95 75.6 49.64 81.48 43.08 114.93C36.52 81.48 31.21 75.6 0.98999 68.34C31.21 61.08 36.52 55.2 43.08 21.75C49.64 55.2 54.95 61.08 85.17 68.34Z" />
                  <path
                    d="M121.68 109.98C102.51 114.58 99.14 118.32 94.98 139.54C90.82 118.32 87.45 114.59 68.28 109.98C87.45 105.38 90.82 101.64 94.98 80.4199C99.14 101.64 102.51 105.37 121.68 109.98Z" />
                  <path
                    d="M104.88 20.52C91.5701 23.72 89.2301 26.31 86.3501 41.04C83.4601 26.31 81.1201 23.72 67.8201 20.52C81.1301 17.32 83.4701 14.73 86.3501 0C89.2401 14.73 91.5801 17.32 104.88 20.52Z" />
                </svg>
              </div>

              <strong className="hero-desc-m">We craft
                exceptional digital experiences that bring your brand to success. With expertise in websites, apps,
                and
                branding, we combine creativity and technology to bring your vision to life.</strong>
            </div>

            <div className="bg-white feat-container">
              <div className="container grid-wrapper">
                <div className="feat-item">
                  <svg className="feat-icon" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor"
                    aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                  </svg>
                  <p>Satisfied <br /> Customers</p>
                </div>
                <div className="feat-item">
                  <svg className="feat-icon" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor"
                    aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                  </svg>
                  <p>Satisfied <br /> Customers</p>
                </div>
                <div className="feat-item">
                  <svg className="feat-icon" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor"
                    aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                  </svg>
                  <p>Satisfied <br /> Customers</p>
                </div>
                <div className="feat-item">
                  <svg className="feat-icon" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor"
                    aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                  </svg>
                  <p>Satisfied <br /> Customers</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Showcase section */}
        <section className="s-showcase">
          <div className="container grid-wrapper">
            {recommendedWorks && recommendedWorks.length > 0 && recommendedWorks.map((work, index) => {
              const n = recommendedWorks.length;

              return (
                <CardWorkShowcase key={work.id} data={work} className={`${index % 2 !== 0 ? 'item-down' : ''} ${index === n - 1 ? 'item-end' : ''}`} />
              )
            })}
          </div>

        </section>

        {/* Service section */}
        <section className="s-service">
          <div className="container">
            <div className="flex section-title">
              <h2>Every solutions <br /> for your </h2>
              <h2 className="flex-col">
                <span className="rotate-word-5">Analysis</span>
                <span className="rotate-word-4">Marketing</span>
                <span className="rotate-word-3">Branding</span>
                <span className="rotate-word-2">Website</span>
                <span className="rotate-word-1">Apps</span>
              </h2>
            </div>

            <div className='service-container'>
              <div className='service-wrapper'>

                <div className='flex-col'>
                  <CardService data={{ name: "Website Development" }} />
                  <CardService data={{ name: "Analisis Data" }} />
                </div>

                <div className='flex-col'>
                  <CardService data={{ name: "Branding & Desain" }} />
                  <CardService data={{ name: "ERP Development" }} />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Portfolio section */}
        <section className="s-portfolio">
          <div className="container flex-col">
            <div className="section-title-wrapper">
              <h2 className="section-title">Explore what we have done</h2>
              <p className="section-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>

            <div className="grid-wrapper">
              <Link href="#" className="card-container">
                <div className='wrapper'>
                  <img className='card-image'
                    src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="" />
                  <h2 className="card-title">Kargo Technologies</h2>
                  <p className="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="btn btn-card">
                  <span>See case study</span>
                  <img src={arrowBtn} alt="" />
                </div>
              </Link>

              <Link href="#" className="card-container">
                <div className='wrapper'>
                  <img className='card-image'
                    src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="" />
                  <h2 className="card-title">Kargo Technologies</h2>
                  <p className="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod
                  </p>
                </div>
                <div className="btn btn-card">
                  <span>See case study</span>
                  <img src={arrowBtn} alt="" />
                </div>
              </Link>

              <Link href="#" className="card-container">
                <div className='wrapper'>
                  <img className='card-image'
                    src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="" />
                  <h2 className="card-title">Kargo Technologies</h2>
                  <p className="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="btn btn-card">
                  <span>See case study</span>
                  <img src={arrowBtn} alt="" />
                </div>
              </Link>
            </div>

            <div className="btn-wrapper">
              <Link href="/works" className="btn btn-primary">SEE
                OUR WORKS
              </Link>
            </div>
          </div>
        </section>

        <TestimonialSection />
      </main>

      <Footer />
    </>
  )
}
