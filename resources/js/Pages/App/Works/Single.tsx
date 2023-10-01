import Navbar from '@/Layouts/Components/Navbar';
import Footer from '@/Layouts/Components/Footer';
import { Head } from '@inertiajs/react';

import '../../../../sass/pages/works.scss'
import React from 'react';

import randomImg from '../../../../assets/images/random-image.jpg'

export default function SingleWork({ work }) {

  const imageGallery = JSON.parse(work.image_gallery)
  const bodyWorkscope = JSON.parse(work.body_workscope)
  const bodyFeatures = JSON.parse(work.body_features)

  return (
    <>
      <Head title={work.title} />
      <Navbar />

      <main id='works_single'>
        <section className='container s-hero-work'>
          <div className='hero-wrapper'>
            <div className='hero-info'>
              {work.categories.length > 0 && (
                <div className='flex-row category'>
                  {work.categories && work.categories.length > 0 && work.categories.map((cat, index) => {
                    const n = work.categories.length

                    return (
                      <React.Fragment key={cat.id}>
                        <h5>{cat.name}</h5>

                        {index !== n - 1 && (
                          <span key={`separator-${index}`}>•</span>
                        )}
                      </React.Fragment>
                    )
                  })}
                </div>
              )}

              <div className='flex-row timeline'>
                <div>{work.project_year}</div>
                <span>•</span>
                <div>Proyek {work.project_duration_week} minggu</div>
              </div>
            </div>
            <div className='hero-heading'>
              <div className='hero-title-wrapper'>
                <h5 className='hero-project-name'>{work.project_name}</h5>
                <h1 className='hero-title-generic'>{work.title}</h1>
              </div>

              <h4 className='hero-desc'>{work.excerpt}</h4>
            </div>
          </div>
        </section>

        <section className='s-image-cover'>
          <img src={randomImg} alt="" />
        </section>

        <section className='container s-detail'>
          <div className="column-container-aside">
            <div className="column-content">

              <div className='body-wrapper'>
                {work && work.body_about && (
                  <>
                    <div className='body-content'>
                      <h3>Tentang {work.client_name}</h3>
                      <p>{work.body_about}</p>
                    </div>
                  </>
                )}

                {work && work.body_background && (
                  <>
                    <div className='body-content'>
                      <h3>Latar Belakang</h3>
                      <p>{work.body_background}</p>
                    </div>
                  </>
                )}

                {work && work.body_brief && (
                  <>
                    <div className='body-content'>
                      <h3>Brief Proyek</h3>
                      <p>{work.body_brief}</p>
                    </div>
                  </>
                )}

                {work && work.body_challenge && (
                  <>
                    <div className='body-content'>
                      <h3>Tantangan Kami</h3>
                      <p>{work.body_challenge}</p>
                    </div>
                  </>
                )}
              </div>

            </div>
          </div>

          <div className='image-filler'>
            {work && imageGallery && imageGallery.intro && imageGallery.intro.map((img, index) => {

              return (
                <React.Fragment key={`img-intro-${index}`}>
                  <div className='image-filler-wrapper'>
                    <img src={img} alt='' />
                  </div>
                </React.Fragment>
              )
            })}
          </div>

          <div className="column-container-aside">
            <div className="column-content">

              <div className='body-wrapper'>
                <div className='body-content'>
                  <h3>Pendekatan Kami</h3>
                  {work && bodyWorkscope && bodyWorkscope.map((body, index) => {
                    return (
                      <React.Fragment key={`workscope-${index}`}>

                        <div className='workscope-content'>
                          <h4>{body.title}</h4>
                          <p>{body.body}</p>
                        </div>

                      </React.Fragment>
                    )
                  })}
                </div>
              </div>

            </div>

            <div className='body-feature-wrapper'>
              {work && bodyFeatures && bodyFeatures.map((body, index) => {
                const reverseGridOrder = index % 2 !== 0;

                return (
                  <React.Fragment key={`body-ft-${index}`}>
                    <div className={`body-feature-item ${reverseGridOrder ? 'reverse-grid' : ''}`}>
                      <div className={`body-content ${reverseGridOrder ? 'order-2' : 'order-1'}`}>
                        <h3>{body.title}</h3>
                        <p>{body.body}</p>
                      </div>
                      <div className={`image-filler-wrapper ${reverseGridOrder ? 'order-1' : 'order-2'}`}>
                        <img src={body.image} alt='' />
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>

            <div className='image-filler'>
              {work && imageGallery && imageGallery.intro && imageGallery.intro.map((img, index) => {

                return (
                  <React.Fragment key={`img-filler-${index}`}>
                    <div className='image-filler-wrapper'>
                      <img src={img} alt='' />
                    </div>
                  </React.Fragment>
                )
              })}
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </>
  )
}