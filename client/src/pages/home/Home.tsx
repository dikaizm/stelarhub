import Navbar from '../../components/navbar/Navbar'
import './home.scss'

const Home = () => {
    return (
        <>
            <Navbar />

            {/* Hero section */}
            <section className="s-hero">

                <div className="bg-glr-blue"></div>

                <div className="flex-col">
                    <div className="content-w-big container">
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

                    <div className="feat-container bg-white">
                        <div className="grid-wrapper container">
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
                <div className="grid-wrapper container">
                    <a href="#" className="card-container">
                        <div className="bg-shadow"></div>

                        <img className="card-image"
                            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                            alt="" />

                        <div className="bg-white"></div>

                        <div className="content-w">
                            <div className="card-filler"></div>

                            <div className="subcontent-w">
                                <div className="card-title">System Information</div>
                                <div className="card-subtitle">Technology</div>
                            </div>
                            <p className="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit,
                                sed do eiusmod
                                tempor
                                incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas.</p>
                            <div className="card-icon">
                                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="5"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.78684 45.2133L45.2132 2.78685M45.2132 2.78685V36.728M45.2132 2.78685H11.2721"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </a>

                    <a href="#" className="card-container item-down">
                        <div className="bg-shadow"></div>

                        <img className="card-image"
                            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                            alt="" />

                        <div className="bg-white"></div>

                        <div className="content-w">
                            <div className="card-filler"></div>

                            <div className="subcontent-w">
                                <div className="card-title">System Information</div>
                                <div className="card-subtitle">Technology</div>
                            </div>
                            <p className="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit,
                                sed do eiusmod
                                tempor
                                incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas.</p>
                            <div className="card-icon">
                                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="5"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.78684 45.2133L45.2132 2.78685M45.2132 2.78685V36.728M45.2132 2.78685H11.2721"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </a>

                    <a href="#" className="card-container">
                        <div className="bg-shadow"></div>

                        <img className="card-image"
                            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                            alt="" />

                        <div className="bg-white"></div>

                        <div className="content-w">
                            <div className="card-filler"></div>

                            <div className="subcontent-w">
                                <div className="card-title">System Information</div>
                                <div className="card-subtitle">Technology</div>
                            </div>
                            <p className="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit,
                                sed do eiusmod
                                tempor
                                incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas.</p>
                            <div className="card-icon">
                                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="5"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.78684 45.2133L45.2132 2.78685M45.2132 2.78685V36.728M45.2132 2.78685H11.2721"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </a>

                    <a href="#" className="card-container item-down item-end">
                        <div className="bg-shadow"></div>

                        <img className="card-image"
                            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                            alt="" />

                        <div className="bg-white"></div>

                        <div className="content-w">
                            <div className="card-filler"></div>

                            <div className="subcontent-w">
                                <div className="card-title">System Information blabds abasd</div>
                                <div className="card-subtitle">Technology</div>
                            </div>
                            <p className="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit,
                                sed do eiusmod
                                tempor
                                incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas.</p>
                            <div className="card-icon">
                                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="5"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.78684 45.2133L45.2132 2.78685M45.2132 2.78685V36.728M45.2132 2.78685H11.2721"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </a>
                </div>
            </section>


            {/* Service section */}
            <section className="s-service">
                <div className="container">
                    <div className="section-title flex">
                        <h2>Every solutions <br /> for your </h2>
                        <h2 className="flex-col">
                            <span className="rotate-word-5">Analysis</span>
                            <span className="rotate-word-4">Marketing</span>
                            <span className="rotate-word-3">Branding</span>
                            <span className="rotate-word-2">Website</span>
                            <span className="rotate-word-1">Apps</span>
                        </h2>
                    </div>

                    <div className="accordion-wrapper">

                        <hr />
                        
                        {/* {  (<section>
                            <button className="accordion-item" aria-controls="srv-accordion-{{ $service->slug }}"
                                data-collapse-toggle="true" aria-expanded="false">
                                <div className="content-w">
                                    <div className="content-text flex-col">
                                        <div className="title-wrapper flex">
                                            <svg>
                                                <use xlink: href="{{ $service->icon }}"></use>
                                            </svg>
                                            <h3 className="accordion-title">{{ $service-> name}}</h3>
                                        </div>
                                        <div className="list-collapse-hide srv-accordion-{{ $service->slug }} subcontent-w flex-col">
                                            <p className="desc">{{ $service-> desc_long}}</p>
                                            <a href="{{ $service->slug }}" className="btn btn-primary">LEARN
                                                MORE</a>
                                        </div>
                                    </div>
                                    <div className="list-collapse-hide srv-accordion-{{ $service->slug }} content-image">
                                        <img src="{{ $service->image }}" alt="" />
                                    </div>
                                </div>
                                <div className="btn-toggle">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path className="accordion-btn" d="M12 8L12 16" strokeLinecap="round" />
                                        <path d="M16 12L8 12" strokeLinecap="round" />
                                        <circle cx="12" cy="12" r="11" />
                                    </svg>
                                </div>
                            </button>
                        </section>

                        <hr>)} */}
                       

                    </div>
                </div>
            </section>

            {/* Portfolio section */}
            {/* <section className="s-portfolio">
                <div className="flex-col container">
                    <div className="section-title-wrapper">
                        <h2 className="section-title">Explore what we have done</h2>
                        <p className="section-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>

                    <div className="grid-wrapper">
                        <a href="#" className="card-container">
                            <img
                                src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                alt="" />
                            <h2 className="card-title">Kargo Technologies</h2>
                            <p className="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="btn btn-card">
                                <a href="">See case study</a>
                                <svg>
                                    <use xlink: href="#icon-btn-arrow"></use>
                                </svg>
                            </div>
                        </a>

                        <a href="#" className="card-container">
                            <img
                                src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                alt="" />
                            <h2 className="card-title">Kargo Technologies</h2>
                            <p className="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="btn btn-card">
                                <a href="">See case study</a>
                                <svg>
                                    <use xlink: href="#icon-btn-arrow"></use>
                                </svg>
                            </div>
                        </a>

                        <a href="#" className="card-container">
                            <img
                                src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                alt="" />
                            <h2 className="card-title">Kargo Technologies</h2>
                            <p className="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="btn btn-card">
                                <a href="">See case study</a>
                                <svg>
                                    <use xlink: href="#icon-btn-arrow"></use>
                                </svg>
                            </div>
                        </a>
                    </div>

                    <div className="btn-wrapper">
                        <a href="#" className="btn btn-primary">SEE
                            OUR WORKS</a>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default Home