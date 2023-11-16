import { Link, usePage } from '@inertiajs/react';
import { useCallback, useEffect, useRef, useState } from 'react'
import { MenuType } from '@/types/inertia';

// Styles
import '../../../sass/layouts/components/navbar.scss'

// Asset images
import logoStelar1 from '../../../assets/logo/stelar-logo-color.svg'
import logoStelar2 from '../../../assets/logo/stelar-logo-white.svg'
import logoStelar3 from '../../../assets/logo/stelar-logo-color-mobile.svg'
import { NavButton } from '@/Components/App/Buttons/Button';
import { ArrowR, WhatsApp } from '@/assets/icons';

const images = {
  logo: {
    stelarColor: logoStelar1,
    stelarWhite: logoStelar2,
    stelarMobile: logoStelar3
  }
}

export default function Navbar() {
  const currentEndpoint = window.location.pathname.split('/')[1];

  const { menus } = usePage<MenuType>().props;

  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false)
  const [delayedClass, setDelayedClass] = useState<string>("")

  const navbarRef = useRef<HTMLDivElement | null>(null);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const [isNavVisible, setIsNavVisible] = useState<boolean>(true);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [isNavBgVisible, setIsNavBgVisible] = useState<boolean>(false)

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const maxWindowWidth = 900

  const handleMouseEnter = () => {
    setIsHovered(true)
    setIsDropdownVisible(true)
  }
  const handleMouseLeave = () => {
    setIsHovered(false)
    setTimeout(() => {
      setIsDropdownVisible(false)
      setDelayedClass('hover-area-stretch')
    }, 300)
  }

  const handleScroll = useCallback(() => {
    if (isMenuOpen === false) {

      const currentScrollPos = window.scrollY;

      if (prevScrollPos > currentScrollPos) {
        // Scrolling up
        if (!isNavVisible) {
          setIsNavVisible(true);
        }
      } else {
        // Scrolling down
        const navbarHeight: number = navbarRef.current?.offsetHeight || 0;

        if (isNavVisible && currentScrollPos > navbarHeight) {
          setIsNavVisible(false);
        }
      }

      setPrevScrollPos(currentScrollPos);

      if (window.scrollY >= 10) {
        changeNavColor(true, isMenuOpen);
      } else {
        changeNavColor(false, isMenuOpen);
      }
    }

  }, [isNavVisible, prevScrollPos, isMenuOpen])

  function changeNavColor(state: boolean, menuState: boolean) {
    if (state && !menuState) {
      setIsNavBgVisible(true)
    } else {
      setIsNavBgVisible(false)
    }
  }

  useEffect(() => {
    if (isMenuOpen === false) {

      window.addEventListener('scroll', () => {
        if (window.scrollY >= 5) {
          changeNavColor(true, isMenuOpen);
        } else {
          changeNavColor(false, isMenuOpen);
        }
      })

      window.addEventListener('scroll', handleScroll)

      return (
        window.addEventListener('scroll', handleScroll)
      )
    }

    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth)
    })
  }, [handleScroll, isMenuOpen])

  return (
    <header id="navbar" ref={navbarRef} className={`${isNavVisible ? '' : 'navbar-hidden'} ${isNavBgVisible ? 'bg-white' : ''} ${isMenuOpen && windowWidth < maxWindowWidth ? 'bg-white' : ''}`}>

      <nav className="container" id='navbar-menu'>
        <div>
          <Link href="/">
            <span className="sr-only">Stelar</span>
            <img className="logo-full" src={images.logo.stelarColor} alt="Logo" />
            <img className="logo-icon" src={images.logo.stelarMobile} alt="Logo" />
          </Link>
        </div>

        {/* Menu button */}
        <div className='menu-btn-w'>
          <div className={`menu-btn ${isMenuOpen ? "open" : ""}`}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }} >
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>
        </div>

        {/* Navbar menu */}
        <div className="menu-w">

          {menus && menus?.map(item => {
            if (item.submenus.length === 0) {

              return (
                <Link key={item.id} href={item.endpoint} className={`${currentEndpoint === item.endpoint.split('/')[1] ? 'item-focus' : ""} item text-gray-400`}>{item.name}</Link>
              );
            } else {
              return (
                <div key={item.id} className='item-w' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>


                  <Link href={item.endpoint} className={`item ${isHovered || currentEndpoint === item.endpoint.split('/')[1] ? 'item-focus' : 'text-gray-400'}`}>
                    {item.name}
                    <svg className={`${isHovered ? 'rotate-arrow' : ''} menu-icon`} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd" />
                    </svg>
                  </Link>

                  <div className={`hover-area ${isDropdownVisible ? delayedClass : ''}`}></div>

                  {/* Dropdown */}
                  <div className={`item-dropdown nav-dropdown-hide ${isHovered ? 'nav-dropdown-show' : ''}`}>
                    {/* <div className="dropdown-arrow"></div> */}

                    <div className="dropdown-w">
                      {item.submenus?.map(sub => {
                        return (
                          <div className="subitem" key={sub.id}>
                            <div className="icon-w">
                              <svg className="subitem-icon" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                              </svg>
                            </div>
                            <div className="content-w">
                              <Link href={route('service.show', { services: sub.endpoint })} className="title">{sub.name}<span></span></Link>
                              <div className="desc">{sub.desc}</div>
                            </div>
                          </div>
                        )
                      })}

                    </div>

                    <div className='dropdown-banner'>
                      <p className='banner-desc'>Diskusi gratis untuk solusi terbaik bersama tim kami!</p>
                      <NavButton href='/contact'>
                        <span>KONSULTASI GRATIS</span>
                        <ArrowR />
                      </NavButton>
                    </div>
                  </div>
                </div>
              )
            }
          })}

        </div>

        <div className="btn-nav-w">
          {/* Switch language button */}

          {/* <button className="btn-lang">
            <svg className="icon-lang" width="34" height="34" viewBox="0 0 34 34" stroke="currentColor"
              fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.94116 22.0195H32.0588" strokeWidth="1.5" strokeMiterlimit="10" />
              <path d="M1.94116 11.6667H32.0588" strokeWidth="1.5" strokeMiterlimit="10" />
              <circle cx="17" cy="17" r="16" strokeWidth="1.5" />
              <ellipse cx="17.0001" cy="17" rx="5.64706" ry="16" strokeWidth="1.5" />
            </svg>
            <span>ID</span>
            <svg className="menu-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd" />
            </svg>
          </button> */}
          <NavButton href='/contact'>
            <span>LET'S TALK</span>
            <WhatsApp />
          </NavButton>
        </div>
      </nav>

      {/* Sidebar Menu */}
      <nav
        ref={sidebarRef}
        id='sidebar-menu'
        onWheel={(event) => {
          event.stopPropagation()
        }}>
        <div className={`sidebar-bg ${isMenuOpen ? "active" : "inactive"}`}></div>

        <div className={`container ${isMenuOpen ? "active" : "inactive"} bg-white`}>
          <div className="h-full px-4 py-10 mx-auto lg:px-20">
            <div className="flex flex-col items-start gap-10 whitespace-nowrap">
              <ul className="flex flex-col items-start text-lg font-bold text-black gap-7">

              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>

  )
}