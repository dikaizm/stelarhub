import '../../../../sass/pages/solutions/website.scss'

// Components
import { Link } from "@inertiajs/react";

// TypeScript data structures
import { Service } from "@/types";

//@ts-ignore
import ReactRotatingText from 'react-rotating-text';

// Assets
import { ArrowR, Search } from '@/assets/IconInline';
import imgHero from '../../../../assets/images/hero-sol-web.svg'
import { PrimaryButton } from '@/Components/App/Buttons/Button';
import { TechStack, websiteData } from '@/assets/contents';
import CardWorkShowcase from '@/Components/App/Cards/CardWorkShowcase';
import AppLayout from '@/Layouts/AppLayout';

const pageData = websiteData();

export default function Website({ data }: { data: Service }) {

  return (
    <AppLayout head={data.name} id='sol-website'>

      <section className="s-hero">
        <div className='bg-container'>
          <img src={imgHero} alt="" />
        </div>

        <div className='container'>
          <div className='random-domain-container'>
            <span className='text-attr'>https://</span>

            <div className='rotating-domain'>
              <ReactRotatingText items={pageData.randomDomainList} />
            </div>

            <div className='icon'>
              <Search />
            </div>
          </div>

          <div className='heading-wrapper'>
            <h1>Tunjukkan Bisnis Anda Pada Dunia! 🚀</h1>
            <p className='desc'>Wujudkan website profesional untuk berbagai kebutuhan dengan desain tampilan, fitur dan teknologi website yang paling up-to-date!</p>
          </div>

          <PrimaryButton href='/contact'>BUAT WEBSITE SEKARANG</PrimaryButton>
        </div>
      </section>

      <section className='s-techstack'>
        <div className='container'>
          <div className='title-wrapper'>
            <h4>Teknologi yang Kami Gunakan 🤖</h4>
          </div>

          <div className='techstack-carousel'>
            <div className='slide-track'>
              {TechStack && TechStack.map((stack, idx) => {
                return (
                  <div
                    className='item-wrapper'
                    key={"stack" + idx}>
                    <img src={stack.url} alt={stack.url} />
                  </div>
                )
              })}
                {TechStack && TechStack.map((stack, idx) => {
                return (
                  <div
                    className='item-wrapper'
                    key={"stack" + idx}>
                    <img src={stack.url} alt={stack.url} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className='s-product-type'>
        <div className='container flex-col'>
          <div className="section-title-wrapper">
            <h2 className="section-title">Pilihan dan Jenis Website</h2>
            <p className="section-desc">Temukan solusi web yang tepat untuk mewujudkan tujuan dan visi bisnis Anda.</p>
          </div>

          <div className="grid-wrapper product-type-wrapper">
            {pageData.productType && pageData.productType.length > 0 && pageData.productType.map((data, index) => {
              return (
                <Link key={`web-prod-${index}`} href="/contact" className="card-container">
                  <div className="bg-shadow"></div>

                  <img className="card-image"
                    src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="" />

                  <div className="bg-white"></div>

                  <div className="content-w">
                    <div className="card-filler"></div>

                    <div className="subcontent-w">
                      <div className="card-title">{data.name}</div>

                    </div>
                    <p className="card-desc">{data.desc}</p>
                    <div className="card-icon">
                      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="5"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.78684 45.2133L45.2132 2.78685M45.2132 2.78685V36.728M45.2132 2.78685H11.2721"
                          strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

    </AppLayout>
  )
}
