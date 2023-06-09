{{-- Navbar --}}
<header id="navbar">

  {{-- Mobile menu --}}
  <nav id="mobile-menu" style="display: none"
    class="tall:h-fit absolute inset-x-0 h-screen w-full translate-x-full overflow-y-auto bg-white pb-16 transition-all duration-300 ease-in-out lg:hidden"
    aria-label="Menu" aria-hidden="true">
    <div class="mx-auto flex h-full w-full flex-col justify-between">
      <div>
        <div class="flex items-center justify-between px-6 py-4">
          <img class="h-8 w-auto" src="assets/stelar-logo-color-mobile.svg" alt="Logo">
          <button id="close-menu-btn" class="p-2" type="button"
            class="-m-2.5 inline-flex items-center justify-center p-2.5 text-gray-700">
            <span class="sr-only">Close main menu</span>
            <svg class="h-4 w-4" viewBox="0 0 24 24" stroke="currentColor" fill="none"stroke-width="1.5"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M1.51465 1.51477L22.5146 22.5148" stroke-linecap="round" />
              <path d="M22.5144 1.51477L1.5144 22.5148" stroke-linecap="round" />
            </svg>
          </button>
        </div>

        <div class="mt-10 px-6">
          <ul class="flex flex-col text-xl font-medium text-neutral-700">
            <ul class="flex flex-col overflow-hidden">
              <li class="z-10 bg-white py-4">
                <button class="flex w-full justify-between" aria-controls="dropdown-platform"
                  data-collapse-toggle="true" aria-expanded="false">
                  <span>PLATFORM</span>
                  <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                    aria-hidden="true">
                    <path fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd" />
                  </svg>
                </button>
              </li>
              <ul
                class="list-collapse-hide dropdown-platform z-0 ml-4 flex flex-col gap-4 text-lg transition-all duration-500 ease-in-out">
                <li><a href="/novanote">Novanote</a></li>
                <li><a href="/fintrack">Fintrack</a></li>
              </ul>
            </ul>

            <ul class="flex flex-col overflow-hidden">
              <li class="z-10 bg-white py-4">
                <button class="flex w-full justify-between" aria-controls="dropdown-solutions"
                  data-collapse-toggle="true" aria-expanded="false">
                  <span>SOLUTIONS</span>
                  <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                    aria-hidden="true">
                    <path fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd" />
                  </svg>
                </button>
              </li>
              <ul
                class="list-collapse-hide dropdown-solutions ml-4 flex flex-col gap-4 text-lg transition-all duration-500 ease-in-out">
                <li><a href="">Branding</a></li>
                <li><a href="">Website</a></li>
                <li><a href="">Apps</a></li>
                <li><a href="">Marketing</a></li>
                <li><a href="">Data Analysis</a></li>
              </ul>
            </ul>
            <li class="z-10 bg-white py-4"><a href="/about">ABOUT</a></li>
            <li class="z-10 bg-white py-4"><a href="/projects">WORKS</a></li>
            <li class="z-10 bg-white py-4"><a href="/blog">BLOG</a></li>
          </ul>
        </div>
      </div>

      <div class="w-full px-6 py-6">
        <a href="/contact"
          class="block w-full rounded-full border border-sky-700 px-4 py-2 text-center transition-all duration-200 hover:bg-sky-700 hover:text-white">CONTACT
          US</a>
      </div>
    </div>
  </nav>

  {{-- Desktop menu --}}
  <nav class="navbar container" aria-label="Global">
    <div>
      <a href="/">
        <span class="sr-only">Stelar</span>
        <img class="logo-full" src="{{ url('assets/stelar-logo-color.svg') }}" alt="Logo">
        <img class="logo-icon" src="{{ url('assets/stelar-logo-color-mobile.svg') }}" alt="Logo">
      </a>
    </div>

    {{-- Menu button --}}
    <button id="menu-btn" role="button" class="menu-btn" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="menu-icon" fill="none" viewBox="0 0 20 20" stroke-width="1.5" stroke="currentColor"
        aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>

    {{-- Nav menu --}}
    <div class="menu-w">
      <div class="item-w" aria-controls="nav-dropdown-platform" data-hover="true" aria-expanded="false">
        <button type="button" class="item" aria-expanded="false">
          PLATFORM
          <svg class="menu-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd" />
          </svg>
        </button>

        {{-- Dropdown Platform --}}
        <div id="nav-dropdown-platform" class="item-dropdown nav-dropdown-hide">
          <div class="dropdown-arrow"></div>
          <div class="dropdown-w">
            <div class="subitem">
              <div class="icon-w">
                <svg class="subitem-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <div class="content-w">
                <a href="/novanote" class="title">Novanote
                  <span></span>
                </a>
                <div class="desc">Quick notes to keep your thoughts organized</div>
              </div>
            </div>

            <div class="subitem">
              <div class="icon-w">
                <svg class="subitem-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                </svg>
              </div>
              <div class="content-w">
                <a href="/fintrack" class="title">Fintrack
                  <span></span>
                </a>
                <div class="desc">Get a better understanding of your financial</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="item-w" aria-controls="nav-dropdown-solutions" data-hover="true" aria-expanded="false">
        <button type="button" class="item" aria-expanded="false">
          SOLUTIONS
          <svg class="menu-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd" />
          </svg>
        </button>

        {{-- Dropdown Solutions --}}
        <div id="nav-dropdown-solutions" class="item-dropdown nav-dropdown-hide">
          <div class="dropdown-arrow"></div>
          <div class="dropdown-w">
            <div class="subitem">
              <div class="icon-w">
                <svg class="subitem-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <div class="content-w">
                <a href="/services/branding" class="title">Branding<span></span></a>
                <div class="desc">Quick notes to keep your thoughts organized</div>
              </div>
            </div>

            <div class="subitem">
              <div class="icon-w">
                <svg class="subitem-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                </svg>
              </div>
              <div class="content-w">
                <a href="/services/website" class="title">Website<span></span></a>
                <div class="desc">Get a better understanding of your financial</div>
              </div>
            </div>

            <div class="subitem">
              <div class="icon-w">
                <svg class="subitem-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                </svg>
              </div>
              <div class="content-w">
                <a href="/services/apps" class="title">Apps<span></span></a>
                <div class="desc">Get a better understanding of your financial</div>
              </div>
            </div>

            <div class="subitem">
              <div class="icon-w">
                <svg class="subitem-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                </svg>
              </div>
              <div class="content-w">
                <a href="/services/marketing" class="title">Marketing<span></span></a>
                <div class="desc">Get a better understanding of your financial</div>
              </div>
            </div>

            <div class="subitem">
              <div class="icon-w">
                <svg class="subitem-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                </svg>
              </div>
              <div class="content-w">
                <a href="/services/analysis" class="title">Data Analysis<span></span></a>
                <div class="desc">Get a better understanding of your financial</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="/about" class="{{ Request::is('about') ? 'item-focus' : '' }} item">ABOUT</a>
      <a href="/projects" class="{{ Request::is('projects') ? 'item-focus' : '' }} item">WORKS</a>
      <a href="/blog" class="{{ Request::is('blog') || Request::is('blog/*') ? 'item-focus' : '' }} item">BLOG</a>
    </div>

    <div class="btn-nav-w">
      <button class="btn-lang">
        <svg class="icon-lang" width="34" height="34" viewBox="0 0 34 34" stroke="currentColor"
          fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.94116 22.0195H32.0588" stroke-width="1.5" stroke-miterlimit="10" />
          <path d="M1.94116 11.6667H32.0588" stroke-width="1.5" stroke-miterlimit="10" />
          <circle cx="17" cy="17" r="16" stroke-width="1.5" />
          <ellipse cx="17.0001" cy="17" rx="5.64706" ry="16" stroke-width="1.5" />
        </svg>
        <span>EN</span>
        <svg class="menu-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd" />
        </svg>
      </button>
      <a href="/contact" class="btn-nav btn">
        <span>LET'S TALK</span>
        <svg width="34" height="34" viewBox="0 0 34 34" stroke="currentColor" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M27.8776 5.594C24.9201 2.63296 20.9868 1.00176 16.7964 1C8.16199 1 1.13488 8.02676 1.13137 16.6636C1.13031 19.4245 1.85143 22.1193 3.22236 24.4951L1 32.6125L9.30425 30.434C11.5923 31.682 14.1684 32.3399 16.7901 32.3406H16.7964C25.4298 32.3406 32.4576 25.3132 32.4611 16.6759C32.4629 12.4904 30.8352 8.55504 27.8776 5.594ZM10.4349 17.2337C10.2393 16.9724 8.83674 15.1115 8.83674 13.1849C8.83674 11.2583 9.84799 10.3113 10.2066 9.91964C10.5652 9.528 10.9895 9.43 11.2505 9.43C11.5115 9.43 11.7728 9.43246 12.0008 9.4437C12.2411 9.45599 12.5639 9.35237 12.8814 10.1156C13.2077 10.8993 13.9903 12.8262 14.0883 13.0219C14.1863 13.2179 14.2513 13.4462 14.1209 13.7075C13.9906 13.9685 13.9253 14.1318 13.7297 14.3605C13.534 14.5892 13.3187 14.8709 13.1424 15.0461C12.9464 15.2414 12.7423 15.4532 12.9706 15.8449C13.1989 16.2369 13.9843 17.5186 15.148 18.5565C16.6429 19.8902 17.9043 20.3033 18.2955 20.4993C18.6868 20.6953 18.9152 20.6626 19.1435 20.4013C19.3718 20.14 20.122 19.2583 20.383 18.8667C20.644 18.475 20.905 18.5404 21.2636 18.6707C21.6226 18.8013 23.5467 19.7483 23.938 19.944C24.3293 20.14 24.5903 20.238 24.6883 20.4013C24.7863 20.5646 24.7863 21.3483 24.46 22.2626C24.1337 23.1769 22.5699 24.0114 21.8179 24.1235C21.1435 24.2243 20.2903 24.2664 19.3525 23.9682C18.7841 23.788 18.0549 23.5471 17.121 23.1439C13.195 21.4484 10.6309 17.4951 10.4349 17.2337Z"
            stroke-width="1.5" stroke-linejoin="round" />
        </svg>

      </a>
    </div>
  </nav>
</header>
