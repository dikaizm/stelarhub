import { useCallback, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'

import './navbar.scss'

// Asset images
import logoStelar1 from '../../assets/logo/stelar-logo-color.svg'
import logoStelar2 from '../../assets/logo/stelar-logo-white.svg'
import logoStelar3 from '../../assets/logo/stelar-logo-color-mobile.svg'

const images = {
    logo: {
        stelarColor: logoStelar1,
        stelarWhite: logoStelar2,
        stelarMobile: logoStelar3
    }
}

interface MenuItem {
    id: number;
    attributes: {
        submenu: {
            id: number;
            title: string;
            desc: string;
            endpoint: string;
        }[] | null;
        endpoint: string;
        title: string;
    };
}

interface MenuData {
    menus: {
        data: MenuItem[]
    }
}

const MENUS = gql`
query GetMenu {
    menus(sort: "rank:asc")  {
        data {
            id,
            attributes {
                title,
                submenu,
                endpoint
            }
        }
   }
 }
`

const Navbar = () => {
    const currentEndpoint = useLocation().pathname

    const { loading, error, data } = useQuery<MenuData>(MENUS)
    const [menu, setMenu] = useState<MenuItem[]>([])

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
            setDelayedClass('h-fit')
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
        if (!loading && !error && data && data.menus) {
            setMenu(data.menus.data);
        }

        if (isMenuOpen === false) {

            window.addEventListener('scroll', () => {
                if (window.scrollY >= 5) {
                    changeNavColor(true, isMenuOpen);
                } else {
                    changeNavColor(false, isMenuOpen);
                }
            })

            // window.addEventListener('scroll', handleScroll)

            // return (
            //     window.addEventListener('scroll', handleScroll)
            // )
        }

        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth)
        })
    }, [loading, error, data, handleScroll, isMenuOpen])

    return (
        <header id="navbar" ref={navbarRef} className={`${isNavVisible ? '' : 'navbar-hidden'} ${isNavBgVisible ? 'bg-white' : ''} ${isMenuOpen && windowWidth < maxWindowWidth ? 'bg-white' : ''}`}>

            <nav className="container" id='navbar-menu'>
                <div>
                    <a href="/">
                        <span className="sr-only">Stelar</span>
                        <img className="logo-full" src={images.logo.stelarColor} alt="Logo" />
                        <img className="logo-icon" src={images.logo.stelarMobile} alt="Logo" />
                    </a>
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

                    {menu && menu.map(i => {
                        const attr = i.attributes

                        if (!attr.submenu) {
                            return (
                                <a key={i.id} href={attr.endpoint} className={`${currentEndpoint === attr.endpoint ? 'item-focus' : ""} item text-gray-400`}>{attr.title}</a>
                            );
                        } else {
                            return (
                                <div key={i.id} className={`item-w ${isDropdownVisible ? 'h-full' : delayedClass}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                    <div className='hover-area'></div>

                                    <button className={`item ${isHovered ? '-z-10 text-dark-blue' : 'z-10 text-gray-400'}`}>
                                        {attr.title}
                                        <svg className={`${isHovered ? 'rotate-arrow' : ''} menu-icon`} viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                clipRule="evenodd" />
                                        </svg>
                                    </button>

                                    {/* Dropdown Solutions */}
                                    <div className={`item-dropdown nav-dropdown-hide ${isHovered ? 'nav-dropdown-show' : 'nav-dropdown-hide'}`}>
                                        {/* <div className="dropdown-arrow"></div> */}
                                        <div className="dropdown-w">

                                            {attr.submenu.map(j => {
                                                return (
                                                    <div className="subitem" key={j.id}>
                                                        <div className="icon-w">
                                                            <svg className="subitem-icon" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                                                stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                                                            </svg>
                                                        </div>
                                                        <div className="content-w">
                                                            <a href={`${attr.endpoint}${j.endpoint}`} className="title">{j.title}<span></span></a>
                                                            <div className="desc">{j.desc}</div>
                                                        </div>
                                                    </div>
                                                )
                                            })}

                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}

                </div>

                <div className="btn-nav-w">
                    <button className="btn-lang">
                        <svg className="icon-lang" width="34" height="34" viewBox="0 0 34 34" stroke="currentColor"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.94116 22.0195H32.0588" strokeWidth="1.5" strokeMiterlimit="10" />
                            <path d="M1.94116 11.6667H32.0588" strokeWidth="1.5" strokeMiterlimit="10" />
                            <circle cx="17" cy="17" r="16" strokeWidth="1.5" />
                            <ellipse cx="17.0001" cy="17" rx="5.64706" ry="16" strokeWidth="1.5" />
                        </svg>
                        <span>EN</span>
                        <svg className="menu-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clipRule="evenodd" />
                        </svg>
                    </button>
                    <a href="/contact" className="btn-nav btn">
                        <span>LET'S TALK</span>
                        <svg width="34" height="34" viewBox="0 0 34 34" stroke="currentColor" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M27.8776 5.594C24.9201 2.63296 20.9868 1.00176 16.7964 1C8.16199 1 1.13488 8.02676 1.13137 16.6636C1.13031 19.4245 1.85143 22.1193 3.22236 24.4951L1 32.6125L9.30425 30.434C11.5923 31.682 14.1684 32.3399 16.7901 32.3406H16.7964C25.4298 32.3406 32.4576 25.3132 32.4611 16.6759C32.4629 12.4904 30.8352 8.55504 27.8776 5.594ZM10.4349 17.2337C10.2393 16.9724 8.83674 15.1115 8.83674 13.1849C8.83674 11.2583 9.84799 10.3113 10.2066 9.91964C10.5652 9.528 10.9895 9.43 11.2505 9.43C11.5115 9.43 11.7728 9.43246 12.0008 9.4437C12.2411 9.45599 12.5639 9.35237 12.8814 10.1156C13.2077 10.8993 13.9903 12.8262 14.0883 13.0219C14.1863 13.2179 14.2513 13.4462 14.1209 13.7075C13.9906 13.9685 13.9253 14.1318 13.7297 14.3605C13.534 14.5892 13.3187 14.8709 13.1424 15.0461C12.9464 15.2414 12.7423 15.4532 12.9706 15.8449C13.1989 16.2369 13.9843 17.5186 15.148 18.5565C16.6429 19.8902 17.9043 20.3033 18.2955 20.4993C18.6868 20.6953 18.9152 20.6626 19.1435 20.4013C19.3718 20.14 20.122 19.2583 20.383 18.8667C20.644 18.475 20.905 18.5404 21.2636 18.6707C21.6226 18.8013 23.5467 19.7483 23.938 19.944C24.3293 20.14 24.5903 20.238 24.6883 20.4013C24.7863 20.5646 24.7863 21.3483 24.46 22.2626C24.1337 23.1769 22.5699 24.0114 21.8179 24.1235C21.1435 24.2243 20.2903 24.2664 19.3525 23.9682C18.7841 23.788 18.0549 23.5471 17.121 23.1439C13.195 21.4484 10.6309 17.4951 10.4349 17.2337Z"
                                strokeWidth="1.5" strokeLinejoin="round" />
                        </svg>

                    </a>
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
                    <div className="mx-auto h-full px-4 lg:px-20 py-10">
                        <div className="flex flex-col gap-10 items-start whitespace-nowrap">
                            <ul className="flex flex-col gap-7 items-start text-lg font-bold text-black">

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default Navbar