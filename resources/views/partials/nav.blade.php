{{-- Navbar --}}
<header id="navbar"
class="fixed inset-x-0 top-0 z-50 h-16 transition-all duration-700 ease-in-out bg-white/0 hover:shadow-2xl hover:shadow-black/10 sm:h-20">

{{-- Mobile menu --}}
<nav id="mobile-menu"
  class="absolute inset-x-0 w-full h-screen pb-16 overflow-y-auto transition-all duration-300 ease-in-out translate-x-full bg-white tall:h-fit lg:hidden"
  aria-label="Menu" aria-hidden="true">
  <div class="flex flex-col justify-between w-full h-full mx-auto">
    <div>
      <div class="flex items-center justify-between px-6 py-4">
        <img class="w-auto h-8" src="assets/stelar-logo-color-mobile.svg" alt="Logo">
        <button id="close-menu-btn" class="p-2" type="button"
          class="-m-2.5 inline-flex items-center justify-center p-2.5 text-gray-700">
          <span class="sr-only">Close main menu</span>
          <svg class="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" fill="none"stroke-width="1.5"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M1.51465 1.51477L22.5146 22.5148" stroke-linecap="round" />
            <path d="M22.5144 1.51477L1.5144 22.5148" stroke-linecap="round" />
          </svg>
        </button>
      </div>

      <div class="px-6 mt-10">
        <ul class="flex flex-col text-xl font-medium text-neutral-700">
          <ul class="flex flex-col overflow-hidden">
            <li class="z-10 py-4 bg-white">
              <button class="flex justify-between w-full" aria-controls="dropdown-platform"
                data-collapse-toggle="true" aria-expanded="false">
                <span>PLATFORM</span>
                <svg class="flex-none w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                  aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd" />
                </svg>
              </button>
            </li>
            <ul
              class="z-0 flex flex-col gap-4 ml-4 text-lg transition-all duration-500 ease-in-out list-collapse-hide dropdown-platform">
              <li><a href="https://stelarhub.com/" target="_blank">Novanote</a></li>
              <li><a href="">Fintrack</a></li>
            </ul>
          </ul>

          <ul class="flex flex-col overflow-hidden">
            <li class="z-10 py-4 bg-white">
              <button class="flex justify-between w-full" aria-controls="dropdown-solutions"
                data-collapse-toggle="true" aria-expanded="false">
                <span>SOLUTIONS</span>
                <svg class="flex-none w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                  aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd" />
                </svg>
              </button>
            </li>
            <ul
              class="flex flex-col gap-4 ml-4 text-lg transition-all duration-500 ease-in-out list-collapse-hide dropdown-solutions">
              <li><a href="">Branding</a></li>
              <li><a href="">Website</a></li>
              <li><a href="">Apps</a></li>
              <li><a href="">Marketing</a></li>
              <li><a href="">Data Analysis</a></li>
            </ul>
          </ul>
          <li class="z-10 py-4 bg-white"><a href="/about">ABOUT</a></li>
          <li class="z-10 py-4 bg-white"><a href="">WORKS</a></li>
          <li class="z-10 py-4 bg-white"><a href="/blog">BLOG</a></li> 
        </ul>
      </div>
    </div>

    <div class="w-full px-6 py-6">
      <a href="#"
        class="block w-full px-4 py-2 text-center transition-all duration-200 border rounded-full border-sky-700 hover:bg-sky-700 hover:text-white">CONTACT
        US</a>
    </div>
  </div>
</nav>

{{-- Desktop menu --}}
<nav class="flex items-center justify-between max-w-6xl px-6 py-4 mx-auto sm:p-6 lg:px-12 xl:max-w-7xl"
  aria-label="Global">
  <div class="flex lg:flex-1">
    <a href="/" class="-m-1.5 p-1.5">
      <span class="sr-only">Stelar</span>
      <img class="hidden w-auto h-8 sm:inline" src="assets/stelar-logo-color.svg" alt="Logo">
      <img class="w-auto h-8 sm:hidden" src="assets/stelar-logo-color-mobile.svg" alt="Logo">
    </a>
  </div>
  <div class="flex lg:hidden">
    <button id="menu-btn" type="button"
      class="-m-2.5 inline-flex items-center justify-center p-2.5 text-gray-700">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
  </div>

  <div class="hidden text-xs lg:flex lg:gap-x-12">
    <div class="relative" aria-controls="nav-dropdown-platform" data-hover="true" aria-expanded="false">
      {{-- <span class="absolute w-full h-16 py-6 -z-10"></span> --}}
      <button type="button"
        class="flex items-center font-semibold text-gray-700 transition-all duration-300 gap-x-1 hover:font-bold hover:text-sky-700"
        aria-expanded="false">
        PLATFORM
        <svg class="flex-none w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd" />
        </svg>
      </button>

      {{-- Dropdown Platform --}}
      <div id="nav-dropdown-platform"
        class="absolute z-10 w-screen max-w-md mt-10 transition-all duration-300 ease-out bg-white shadow-lg nav-dropdown-hide -left-8 top-full rounded-3xl">
        <div class="dropdown-arrow"></div>
        <div class="p-4">

          <div class="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50">
            <div
              class="flex items-center justify-center flex-none rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white">
              <svg class="w-6 h-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
            <div class="flex-auto">
              <a href="https://stelarhub.com/" target="_blank" class="block font-semibold text-gray-900">
                Novanote
                <span class="absolute inset-0"></span>
              </a>
              <p class="mt-1 text-gray-600">Quick notes to keep your thoughts organized</p>
            </div>
          </div>

          <div class="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50">
            <div
              class="flex items-center justify-center flex-none rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white">
              <svg class="w-6 h-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
              </svg>
            </div>
            <div class="flex-auto">
              <a href="#" class="block font-semibold text-gray-900">
                Fintrack
                <span class="absolute inset-0"></span>
              </a>
              <p class="mt-1 text-gray-600">Get a better understanding of your financial</p>
            </div>
          </div>

        </div>

      </div>
    </div>

    <div class="relative" aria-controls="nav-dropdown-solutions" data-hover="true" aria-expanded="false">
      {{-- <span class="absolute w-full h-16 py-6 -z-10"></span> --}}
      <button type="button"
        class="flex items-center font-semibold text-gray-700 transition-all duration-300 gap-x-1 hover:font-bold hover:text-sky-700"
        aria-expanded="false">
        SOLUTIONS
        <svg class="flex-none w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd" />
        </svg>
      </button>

      {{-- Dropdown Solutions --}}
      <div id="nav-dropdown-solutions"
        class="absolute z-10 w-screen max-w-md mt-10 transition-all duration-300 ease-out bg-white shadow-lg nav-dropdown-hide -left-8 top-full rounded-3xl">
        <div class="dropdown-arrow after:-top-[22px]"></div>
        <div class="p-4">
          <div class="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50">
            <div
              class="flex items-center justify-center flex-none rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white">
              <svg class="w-6 h-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
            <div class="flex-auto">
              <a href="#" class="block font-semibold text-gray-900">
                Branding
                <span class="absolute inset-0"></span>
              </a>
              <p class="mt-1 text-gray-600">Quick notes to keep your thoughts organized</p>
            </div>
          </div>

          <div class="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50">
            <div
              class="flex items-center justify-center flex-none rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white">
              <svg class="w-6 h-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
              </svg>
            </div>
            <div class="flex-auto">
              <a href="#" class="block font-semibold text-gray-900">
                Website
                <span class="absolute inset-0"></span>
              </a>
              <p class="mt-1 text-gray-600">Get a better understanding of your financial</p>
            </div>
          </div>

          <div class="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50">
            <div
              class="flex items-center justify-center flex-none rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white">
              <svg class="w-6 h-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
              </svg>
            </div>
            <div class="flex-auto">
              <a href="#" class="block font-semibold text-gray-900">
                Apps
                <span class="absolute inset-0"></span>
              </a>
              <p class="mt-1 text-gray-600">Get a better understanding of your financial</p>
            </div>
          </div>

          <div class="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50">
            <div
              class="flex items-center justify-center flex-none rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white">
              <svg class="w-6 h-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
              </svg>
            </div>
            <div class="flex-auto">
              <a href="#" class="block font-semibold text-gray-900">
                Marketing
                <span class="absolute inset-0"></span>
              </a>
              <p class="mt-1 text-gray-600">Get a better understanding of your financial</p>
            </div>
          </div>

          <div class="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50">
            <div
              class="flex items-center justify-center flex-none rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white">
              <svg class="w-6 h-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
              </svg>
            </div>
            <div class="flex-auto">
              <a href="#" class="block font-semibold text-gray-900">
                Data Analysis
                <span class="absolute inset-0"></span>
              </a>
              <p class="mt-1 text-gray-600">Get a better understanding of your financial</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a href="/about"
      class="font-semibold text-gray-700 transition-all duration-300 hover:font-bold hover:text-sky-700">ABOUT</a>
    <a href="/projects"
      class="font-semibold text-gray-700 transition-all duration-300 hover:font-bold hover:text-sky-700">WORKS</a>
    <a href="/blog"
      class="font-semibold text-gray-700 transition-all duration-300 hover:font-bold hover:text-sky-700">BLOG</a>
  </div>

  <div class="hidden text-xs font-semibold gap-x-3 text-sky-700 lg:flex lg:flex-1 lg:justify-end">
    <a href="#"
      class="flex items-center py-2 pl-4 pr-3 transition-all duration-200 border border-gray-300 rounded-full gap-x-2 hover:bg-sky-700 hover:text-white">
      EN
      <svg class="flex-none w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clip-rule="evenodd" />
      </svg>
    </a>
    <a href="#"
      class="px-4 py-2 transition-all duration-200 border rounded-full border-sky-700 hover:bg-sky-700 hover:text-white">CONTACT
      US</a>
  </div>
</nav>
</header>