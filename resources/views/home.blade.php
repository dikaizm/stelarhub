@extends('layouts.app')

@section('content')
  {{-- Hero section --}}
  <section
    class="relative h-screen w-full bg-gradient-to-r from-sky-100 to-blue-100/0 sm:max-h-[640px] lg:h-screen lg:max-h-[900px]">
    <div class="relative flex flex-col justify-between w-full h-full">
      <div class="flex flex-col items-center justify-center h-full">
        <div class="flex items-end justify-between w-full max-w-6xl gap-12 px-6 mx-auto lg:px-12 xl:max-w-7xl">
          <h1 class="gradient-blue pt-12 text-6xl font-extrabold tracking-tight sm:text-9xl lg:text-[12rem]">Stellar
          </h1>
          <div class="flex items-end justify-end max-w-sm pb-2">
            <strong
              class="hidden text-sm font-normal leading-loose sm:inline lg:text-lg lg:font-normal lg:leading-loose">We
              craft
              exceptional digital experiences that bring your brand to success. With expertise in websites, apps,
              and
              branding, we combine creativity and technology to bring your vision to life.</strong>
          </div>
        </div>
        <div class="flex items-end justify-between w-full max-w-6xl px-6 mx-auto gap-x-2 sm:gap-x-8 lg:px-12 xl:max-w-7xl">
          <h1 class="gradient-blue text-6xl font-extrabold tracking-tight sm:text-9xl lg:text-[12rem]">Creations</h1>
          <svg class="h-12 min-w-fit text-sky-200 sm:h-24 lg:h-36" width="122" height="140" viewBox="0 0 122 140"
            fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M85.17 68.34C54.95 75.6 49.64 81.48 43.08 114.93C36.52 81.48 31.21 75.6 0.98999 68.34C31.21 61.08 36.52 55.2 43.08 21.75C49.64 55.2 54.95 61.08 85.17 68.34Z" />
            <path
              d="M121.68 109.98C102.51 114.58 99.14 118.32 94.98 139.54C90.82 118.32 87.45 114.59 68.28 109.98C87.45 105.38 90.82 101.64 94.98 80.4199C99.14 101.64 102.51 105.37 121.68 109.98Z" />
            <path
              d="M104.88 20.52C91.5701 23.72 89.2301 26.31 86.3501 41.04C83.4601 26.31 81.1201 23.72 67.8201 20.52C81.1301 17.32 83.4701 14.73 86.3501 0C89.2401 14.73 91.5801 17.32 104.88 20.52Z" />
          </svg>
        </div>
        <div class="px-6 mx-auto mt-10">
          <strong class="text-sm font-normal leading-loose sm:hidden">We craft
            exceptional digital experiences that bring your brand to success. With expertise in websites, apps,
            and
            branding, we combine creativity and technology to bring your vision to life.</strong>
        </div>
      </div>

      <div class="py-4 pb-20 bg-white sm:py-8">
        <div class="h-full max-w-6xl px-6 mx-auto lg:px-12 xl:max-w-7xl">
          <div class="grid justify-between grid-cols-2 gap-3 text-sky-700 sm:flex sm:gap-6">
            <div class="flex items-center gap-2 lg:gap-4">
              <p class="text-4xl font-semibold tracking-tighter sm:text-5xl lg:text-[4rem]">20<span
                  class="text-3xl sm:text-5xl lg:text-[3.5rem]">+</span></p>
              <p class="text-xs text-neutral-700 lg:text-sm">Satisfied <br> Customers</p>
            </div>
            <div class="flex items-center gap-2 lg:gap-4">
              <p class="text-4xl font-semibold tracking-tighter sm:text-5xl lg:text-[4rem]">96<span
                  class="text-xl font-extrabold sm:text-4xl lg:text-[2.5rem]">%</span></p>
              <p class="text-xs text-neutral-700 lg:text-sm">Client's <br> Satisfaction</p>
            </div>
            <div class="flex items-center gap-2 lg:gap-4">
              <p class="text-4xl font-semibold tracking-tighter sm:text-5xl lg:text-[4rem]">50<span
                  class="text-3xl sm:text-5xl lg:text-[3.5rem]">+</span></p>
              <p class="text-xs text-neutral-700 lg:text-sm">Completed <br> Projects</p>
            </div>
            <div class="flex items-center gap-2 lg:gap-4">
              <p class="text-4xl font-semibold tracking-tighter sm:text-5xl lg:text-[4rem]">5k<span
                  class="text-3xl sm:text-5xl lg:text-[3.5rem]">+</span></p>
              <p class="text-xs text-neutral-700 lg:text-sm">Leads <br> Generated</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {{-- Showcase section --}}
  <section class="relative flex justify-between max-w-6xl mx-auto mt-16 h-fit sm:mt-24 lg:mt-36 xl:max-w-7xl">
    <div class="grid w-full grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:px-12 xl:grid-cols-4">
      <a href="#"
        class="relative overflow-hidden transition-all duration-200 group sm:h-96 h-[34rem] rounded-3xl hover:scale-105 hover:drop-shadow-2xl sm:border-0 border sm:drop-shadow-none ">
        <div
          class="absolute z-40 w-full p-6 transition-all duration-500 ease-in-out translate-y-full bg-white h-1/2 sm:h-full sm:group-hover:translate-y-0">
          <div class="flex flex-col justify-between h-full">
            <div>
              <h4 class="text-xl font-semibold">System Information</h4>
              <p class="text-sm">Technology</p>
            </div>
            <p class="text-sm leading-relaxed sm:leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor
              incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas.</p>
            <div class="flex justify-end">
              <svg class="w-4 h-4" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="5"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2.78684 45.2133L45.2132 2.78685M45.2132 2.78685V36.728M45.2132 2.78685H11.2721"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <div class="absolute bottom-0 z-30 w-full p-6 text-white">
          <h4 class="text-xl font-semibold">System Information</h4>
          <p class="text-sm">Technology</p>
        </div>
        <div class="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/70 to-black/0"></div>
        <img class="object-cover sm:h-full h-1/2"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="">
      </a>
      <a href="#"
        class="relative overflow-hidden transition-all duration-200 group sm:h-96 h-[34rem] rounded-3xl hover:scale-105 hover:drop-shadow-2xl sm:border-0 border sm:drop-shadow-none  md:mt-20">
        <div
          class="absolute z-40 w-full p-6 transition-all duration-500 ease-in-out translate-y-full bg-white h-1/2 sm:h-full sm:group-hover:translate-y-0">
          <div class="flex flex-col justify-between h-full">
            <div>
              <h4 class="text-xl font-semibold">System Information</h4>
              <p class="text-sm">Technology</p>
            </div>
            <p class="text-sm leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor
              incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas.</p>
            <div class="flex justify-end">
              <svg class="w-4 h-4" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="5"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2.78684 45.2133L45.2132 2.78685M45.2132 2.78685V36.728M45.2132 2.78685H11.2721"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <div class="absolute bottom-0 z-30 w-full p-6 text-white">
          <h4 class="text-xl font-semibold">System Information</h4>
          <p class="text-sm">Technology</p>
        </div>
        <div class="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/70 to-black/0"></div>
        <img class="object-cover sm:h-full h-1/2"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="">
      </a>
      <a href="#"
        class="relative overflow-hidden transition-all duration-200 group sm:h-96 h-[34rem] rounded-3xl hover:scale-105 hover:drop-shadow-2xl sm:border-0 border sm:drop-shadow-none ">
        <div
          class="absolute z-40 w-full p-6 transition-all duration-500 ease-in-out translate-y-full bg-white h-1/2 sm:h-full sm:group-hover:translate-y-0">
          <div class="flex flex-col justify-between h-full">
            <div>
              <h4 class="text-xl font-semibold">System Information</h4>
              <p class="text-sm">Technology</p>
            </div>
            <p class="text-sm leading-relaxed sm:leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor
              incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas.</p>
            <div class="flex justify-end">
              <svg class="w-4 h-4" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="5"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2.78684 45.2133L45.2132 2.78685M45.2132 2.78685V36.728M45.2132 2.78685H11.2721"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <div class="absolute bottom-0 z-30 w-full p-6 text-white">
          <h4 class="text-xl font-semibold">System Information</h4>
          <p class="text-sm">Technology</p>
        </div>
        <div class="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/70 to-black/0"></div>
        <img class="object-cover sm:h-full h-1/2"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="">
      </a>
      <a href="#"
        class="relative hidden overflow-hidden transition-all duration-200 group h-96 rounded-3xl hover:scale-105 hover:drop-shadow-2xl lg:mt-20 xl:inline">
        <div
          class="absolute z-40 w-full h-full p-6 transition-all duration-500 ease-in-out translate-y-full bg-white group-hover:translate-y-0">
          <div class="flex flex-col justify-between h-full">
            <div>
              <h4 class="text-xl font-semibold">System Information</h4>
              <p class="text-sm">Technology</p>
            </div>
            <p class="text-sm leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor
              incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas.</p>
            <div class="flex justify-end">
              <svg class="w-4 h-4" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="5"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2.78684 45.2133L45.2132 2.78685M45.2132 2.78685V36.728M45.2132 2.78685H11.2721"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <div class="absolute bottom-0 z-30 w-full p-6 text-white">
          <h4 class="text-xl font-semibold">System Information</h4>
          <p class="text-sm">Technology</p>
        </div>
        <div class="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/70 to-black/0"></div>
        <img class="object-cover h-full"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="">
      </a>
    </div>
  </section>

  {{-- Service section --}}
  <section class="relative max-w-6xl mx-auto mt-20 h-fit sm:mt-4 lg:mx-auto xl:mt-4 xl:max-w-7xl">
    <div class="w-full px-6 lg:px-12">
      <div class="flex flex-col text-4xl font-bold select-none sm:flex-row sm:items-end sm:gap-2 sm:text-5xl">
        <h2 class="">We have every <br class="inline min-[1200px]:hidden"> solutions for your </h2>
        <div class="flex flex-col">
          <span class="rotate-word-5">Analysis</span>
          <span class="rotate-word-4">Marketing</span>
          <span class="rotate-word-3">Branding</span>
          <span class="rotate-word-2">Website</span>
          <span class="rotate-word-1">Apps</span>
        </div>
      </div>

      <div class="-mt-24 sm:mt-20">
        <div class="h-[2px] bg-gray-200"></div>
        <section>
          <button class="relative z-30 flex items-center justify-between w-full h-full py-6 gap-x-6" aria-controls="srv-accordion-branding" data-collapse-toggle="true"
            aria-expanded="false">
          <div class="flex flex-col w-full overflow-hidden h-min sm:flex-row">
            <div class="flex flex-col h-full max-w-lg w-fit ">
              <div class="z-10 flex items-center w-full h-full py-4 bg-white gap-x-3">
                <svg class="w-12 text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.71432 21.1428H14.2857M12 2.85709V1.71423M17.7143 5.1428L18.8572 3.99995M6.28575 5.1428L5.14289 3.99995M17.7143 15.4285L18.8572 16.5714M6.28575 15.4285L5.14289 16.5714M4.00003 9.71423H2.85718M21.1429 9.71423H20M12 5.71423C13.1604 5.71352 14.2869 6.10523 15.1965 6.82572C16.106 7.5462 16.7452 8.5531 17.0102 9.6828C17.2751 10.8125 17.1503 11.9986 16.6559 13.0484C16.1614 14.0981 15.3266 14.9498 14.2869 15.4651L14.2857 16.5714C14.2857 17.1776 14.0449 17.759 13.6163 18.1876C13.1876 18.6163 12.6062 18.8571 12 18.8571C11.3938 18.8571 10.8124 18.6163 10.3838 18.1876C9.95514 17.759 9.71432 17.1776 9.71432 16.5714V15.4651C8.67473 14.9499 7.8399 14.0983 7.34548 13.0486C6.85106 11.999 6.7261 10.813 6.9909 9.68336C7.2557 8.55372 7.8947 7.54682 8.80408 6.82625C9.71346 6.10568 10.8398 5.71378 12 5.71423Z"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h2 class="text-2xl font-bold text-sky-600 sm:text-3xl">Branding</h2>
              </div>
              <div class="flex flex-col list-collapse-hide gap-y-8 srv-accordion-branding" >
                <p class="text-sm leading-relaxed text-left">Boost your brand presence with strong branding strategy from our
                  experts. Performance-driven digital agency to deliver successful branding. Boost your brand presence
                  with strong branding strategy from our
                  experts. Performance-driven digital agency to deliver successful branding.</p>
                <a href="#"
                  class="px-6 py-2 mb-10 text-xs font-bold transition-all duration-200 border rounded-full w-fit border-sky-700 text-sky-700 hover:bg-sky-700 hover:text-white">LEARN
                  MORE</a>
              </div>
            </div>
            <div class="flex self-center justify-center w-full list-collapse-hide srv-accordion-branding" >
              <img class="object-cover w-full h-72 rounded-3xl sm:w-72"
                src="https://images.unsplash.com/photo-1566657817181-c69e4a8eeb1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="">
            </div>
          </div>
          <div class="absolute right-0 z-20 self-start mt-5 text-sky-700 sm:relative"><svg class="w-10 h-10"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"
              xmlns="http://www.w3.org/2000/svg">
              <path class="accordion-btn" d="M12 8L12 16" stroke-linecap="round" />
              <path d="M16 12L8 12" stroke-linecap="round" />
              <circle cx="12" cy="12" r="11" />
            </svg>
          </div>
        </button>
        </section>
        <div class="h-[2px] bg-gray-200"></div>

        <section>
          <button class="relative z-30 flex items-center justify-between w-full h-full py-6 gap-x-6" aria-controls="srv-accordion-website" data-collapse-toggle="true"
            aria-expanded="false">
          <div class="flex flex-col w-full overflow-hidden h-min sm:flex-row">
            <div class="flex flex-col h-full max-w-lg w-fit ">
              <div class="z-10 flex items-center w-full h-full py-4 bg-white gap-x-3">
                <svg class="w-12 text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.71432 21.1428H14.2857M12 2.85709V1.71423M17.7143 5.1428L18.8572 3.99995M6.28575 5.1428L5.14289 3.99995M17.7143 15.4285L18.8572 16.5714M6.28575 15.4285L5.14289 16.5714M4.00003 9.71423H2.85718M21.1429 9.71423H20M12 5.71423C13.1604 5.71352 14.2869 6.10523 15.1965 6.82572C16.106 7.5462 16.7452 8.5531 17.0102 9.6828C17.2751 10.8125 17.1503 11.9986 16.6559 13.0484C16.1614 14.0981 15.3266 14.9498 14.2869 15.4651L14.2857 16.5714C14.2857 17.1776 14.0449 17.759 13.6163 18.1876C13.1876 18.6163 12.6062 18.8571 12 18.8571C11.3938 18.8571 10.8124 18.6163 10.3838 18.1876C9.95514 17.759 9.71432 17.1776 9.71432 16.5714V15.4651C8.67473 14.9499 7.8399 14.0983 7.34548 13.0486C6.85106 11.999 6.7261 10.813 6.9909 9.68336C7.2557 8.55372 7.8947 7.54682 8.80408 6.82625C9.71346 6.10568 10.8398 5.71378 12 5.71423Z"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h2 class="text-2xl font-bold text-sky-600 sm:text-3xl">Website</h2>
              </div>
              <div class="flex flex-col list-collapse-hide gap-y-8 srv-accordion-website" >
                <p class="text-sm leading-relaxed text-left">Boost your brand presence with strong branding strategy from our
                  experts. Performance-driven digital agency to deliver successful branding. Boost your brand presence
                  with strong branding strategy from our
                  experts. Performance-driven digital agency to deliver successful branding.</p>
                <a href="#"
                  class="px-6 py-2 mb-10 text-xs font-bold transition-all duration-200 border rounded-full w-fit border-sky-700 text-sky-700 hover:bg-sky-700 hover:text-white">LEARN
                  MORE</a>
              </div>
            </div>
            <div class="flex self-center justify-center w-full list-collapse-hide srv-accordion-website" >
              <img class="object-cover w-full h-72 rounded-3xl sm:w-72"
                src="https://images.unsplash.com/photo-1566657817181-c69e4a8eeb1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="">
            </div>
          </div>
          <div class="absolute right-0 z-20 self-start mt-5 text-sky-700 sm:relative"><svg class="w-10 h-10"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"
              xmlns="http://www.w3.org/2000/svg">
              <path class="accordion-btn" d="M12 8L12 16" stroke-linecap="round" />
              <path d="M16 12L8 12" stroke-linecap="round" />
              <circle cx="12" cy="12" r="11" />
            </svg>
          </div>
        </button>
        </section>
        <div class="h-[2px] bg-gray-200"></div>

        <section>
          <button class="relative z-30 flex items-center justify-between w-full h-full py-6 gap-x-6" aria-controls="srv-accordion-apps" data-collapse-toggle="true"
            aria-expanded="false">
          <div class="flex flex-col w-full overflow-hidden h-min sm:flex-row">
            <div class="flex flex-col h-full max-w-lg w-fit ">
              <div class="z-10 flex items-center w-full h-full py-4 bg-white gap-x-3">
                <svg class="w-12 text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.71432 21.1428H14.2857M12 2.85709V1.71423M17.7143 5.1428L18.8572 3.99995M6.28575 5.1428L5.14289 3.99995M17.7143 15.4285L18.8572 16.5714M6.28575 15.4285L5.14289 16.5714M4.00003 9.71423H2.85718M21.1429 9.71423H20M12 5.71423C13.1604 5.71352 14.2869 6.10523 15.1965 6.82572C16.106 7.5462 16.7452 8.5531 17.0102 9.6828C17.2751 10.8125 17.1503 11.9986 16.6559 13.0484C16.1614 14.0981 15.3266 14.9498 14.2869 15.4651L14.2857 16.5714C14.2857 17.1776 14.0449 17.759 13.6163 18.1876C13.1876 18.6163 12.6062 18.8571 12 18.8571C11.3938 18.8571 10.8124 18.6163 10.3838 18.1876C9.95514 17.759 9.71432 17.1776 9.71432 16.5714V15.4651C8.67473 14.9499 7.8399 14.0983 7.34548 13.0486C6.85106 11.999 6.7261 10.813 6.9909 9.68336C7.2557 8.55372 7.8947 7.54682 8.80408 6.82625C9.71346 6.10568 10.8398 5.71378 12 5.71423Z"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h2 class="text-2xl font-bold text-sky-600 sm:text-3xl">Apps</h2>
              </div>
              <div class="flex flex-col list-collapse-hide gap-y-8 srv-accordion-apps" >
                <p class="text-sm leading-relaxed text-left">Boost your brand presence with strong branding strategy from our
                  experts. Performance-driven digital agency to deliver successful branding. Boost your brand presence
                  with strong branding strategy from our
                  experts. Performance-driven digital agency to deliver successful branding.</p>
                <a href="#"
                  class="px-6 py-2 mb-10 text-xs font-bold transition-all duration-200 border rounded-full w-fit border-sky-700 text-sky-700 hover:bg-sky-700 hover:text-white">LEARN
                  MORE</a>
              </div>
            </div>
            <div class="flex self-center justify-center w-full list-collapse-hide srv-accordion-apps" >
              <img class="object-cover w-full h-72 rounded-3xl sm:w-72"
                src="https://images.unsplash.com/photo-1566657817181-c69e4a8eeb1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="">
            </div>
          </div>
          <div class="absolute right-0 z-20 self-start mt-5 text-sky-700 sm:relative"><svg class="w-10 h-10"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"
              xmlns="http://www.w3.org/2000/svg">
              <path class="accordion-btn" d="M12 8L12 16" stroke-linecap="round" />
              <path d="M16 12L8 12" stroke-linecap="round" />
              <circle cx="12" cy="12" r="11" />
            </svg>
          </div>
        </button>
        </section>
        <div class="h-[2px] bg-gray-200"></div>

        <section>
          <button class="relative z-30 flex items-center justify-between w-full h-full py-6 gap-x-6" aria-controls="srv-accordion-marketing" data-collapse-toggle="true"
            aria-expanded="false">
          <div class="flex flex-col w-full overflow-hidden h-min sm:flex-row">
            <div class="flex flex-col h-full max-w-lg w-fit ">
              <div class="z-10 flex items-center w-full h-full py-4 bg-white gap-x-3">
                <svg class="w-12 text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.71432 21.1428H14.2857M12 2.85709V1.71423M17.7143 5.1428L18.8572 3.99995M6.28575 5.1428L5.14289 3.99995M17.7143 15.4285L18.8572 16.5714M6.28575 15.4285L5.14289 16.5714M4.00003 9.71423H2.85718M21.1429 9.71423H20M12 5.71423C13.1604 5.71352 14.2869 6.10523 15.1965 6.82572C16.106 7.5462 16.7452 8.5531 17.0102 9.6828C17.2751 10.8125 17.1503 11.9986 16.6559 13.0484C16.1614 14.0981 15.3266 14.9498 14.2869 15.4651L14.2857 16.5714C14.2857 17.1776 14.0449 17.759 13.6163 18.1876C13.1876 18.6163 12.6062 18.8571 12 18.8571C11.3938 18.8571 10.8124 18.6163 10.3838 18.1876C9.95514 17.759 9.71432 17.1776 9.71432 16.5714V15.4651C8.67473 14.9499 7.8399 14.0983 7.34548 13.0486C6.85106 11.999 6.7261 10.813 6.9909 9.68336C7.2557 8.55372 7.8947 7.54682 8.80408 6.82625C9.71346 6.10568 10.8398 5.71378 12 5.71423Z"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h2 class="text-2xl font-bold text-sky-600 sm:text-3xl">Marketing</h2>
              </div>
              <div class="flex flex-col list-collapse-hide gap-y-8 srv-accordion-marketing" >
                <p class="text-sm leading-relaxed text-left">Boost your brand presence with strong branding strategy from our
                  experts. Performance-driven digital agency to deliver successful branding. Boost your brand presence
                  with strong branding strategy from our
                  experts. Performance-driven digital agency to deliver successful branding.</p>
                <a href="#"
                  class="px-6 py-2 mb-10 text-xs font-bold transition-all duration-200 border rounded-full w-fit border-sky-700 text-sky-700 hover:bg-sky-700 hover:text-white">LEARN
                  MORE</a>
              </div>
            </div>
            <div class="flex self-center justify-center w-full list-collapse-hide srv-accordion-marketing" >
              <img class="object-cover w-full h-72 rounded-3xl sm:w-72"
                src="https://images.unsplash.com/photo-1566657817181-c69e4a8eeb1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="">
            </div>
          </div>
          <div class="absolute right-0 z-20 self-start mt-5 text-sky-700 sm:relative"><svg class="w-10 h-10"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"
              xmlns="http://www.w3.org/2000/svg">
              <path class="accordion-btn" d="M12 8L12 16" stroke-linecap="round" />
              <path d="M16 12L8 12" stroke-linecap="round" />
              <circle cx="12" cy="12" r="11" />
            </svg>
          </div>
        </button>
        </section>
        <div class="h-[2px] bg-gray-200"></div>

        <section>
          <button class="relative z-30 flex items-center justify-between w-full h-full py-6 gap-x-6" aria-controls="srv-accordion-data" data-collapse-toggle="true"
            aria-expanded="false">
          <div class="flex flex-col w-full overflow-hidden h-min sm:flex-row">
            <div class="flex flex-col h-full max-w-lg w-fit ">
              <div class="z-10 flex items-center w-full h-full py-4 bg-white gap-x-3">
                <svg class="w-12 text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.71432 21.1428H14.2857M12 2.85709V1.71423M17.7143 5.1428L18.8572 3.99995M6.28575 5.1428L5.14289 3.99995M17.7143 15.4285L18.8572 16.5714M6.28575 15.4285L5.14289 16.5714M4.00003 9.71423H2.85718M21.1429 9.71423H20M12 5.71423C13.1604 5.71352 14.2869 6.10523 15.1965 6.82572C16.106 7.5462 16.7452 8.5531 17.0102 9.6828C17.2751 10.8125 17.1503 11.9986 16.6559 13.0484C16.1614 14.0981 15.3266 14.9498 14.2869 15.4651L14.2857 16.5714C14.2857 17.1776 14.0449 17.759 13.6163 18.1876C13.1876 18.6163 12.6062 18.8571 12 18.8571C11.3938 18.8571 10.8124 18.6163 10.3838 18.1876C9.95514 17.759 9.71432 17.1776 9.71432 16.5714V15.4651C8.67473 14.9499 7.8399 14.0983 7.34548 13.0486C6.85106 11.999 6.7261 10.813 6.9909 9.68336C7.2557 8.55372 7.8947 7.54682 8.80408 6.82625C9.71346 6.10568 10.8398 5.71378 12 5.71423Z"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h2 class="text-2xl font-bold text-sky-600 sm:text-3xl">Data Analysis</h2>
              </div>
              <div class="flex flex-col list-collapse-hide gap-y-8 srv-accordion-data" >
                <p class="text-sm leading-relaxed text-left">Boost your brand presence with strong branding strategy from our
                  experts. Performance-driven digital agency to deliver successful branding. Boost your brand presence
                  with strong branding strategy from our
                  experts. Performance-driven digital agency to deliver successful branding.</p>
                <a href="#"
                  class="px-6 py-2 mb-10 text-xs font-bold transition-all duration-200 border rounded-full w-fit border-sky-700 text-sky-700 hover:bg-sky-700 hover:text-white">LEARN
                  MORE</a>
              </div>
            </div>
            <div class="flex self-center justify-center w-full list-collapse-hide srv-accordion-data" >
              <img class="object-cover w-full h-72 rounded-3xl sm:w-72"
                src="https://images.unsplash.com/photo-1566657817181-c69e4a8eeb1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="">
            </div>
          </div>
          <div class="absolute right-0 z-20 self-start mt-5 text-sky-700 sm:relative"><svg class="w-10 h-10"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"
              xmlns="http://www.w3.org/2000/svg">
              <path class="accordion-btn" d="M12 8L12 16" stroke-linecap="round" />
              <path d="M16 12L8 12" stroke-linecap="round" />
              <circle cx="12" cy="12" r="11" />
            </svg>
          </div>
        </button>
        </section>
        <div class="h-[2px] bg-gray-200"></div>
      </div>
    </div>
  </section>

  {{-- Portfolio section --}}
  <section class="relative mt-16 sm:mt-24">
    <div class="flex flex-col max-w-6xl px-6 py-20 mx-auto h-fit gap-y-10 lg:px-12 xl:max-w-7xl">
      <div class="flex flex-col items-center text-center gap-y-6">
        <h2 class="text-4xl font-bold sm:text-5xl">Explore what we have done</h2>
        <p class="max-w-2xl leading-loose text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>

      <div class="grid justify-between gap-8 grid-auto-fit-lg">
        <div class="p-5 transition-all duration-200 bg-white rounded-3xl hover:scale-105 hover:drop-shadow-2xl">
          <img class="object-cover w-full overflow-hidden bg-white h-96 rounded-2xl"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="">
          <h2 class="mt-6 text-2xl font-bold">Kargo Technologies</h2>
          <p class="mt-4 text-sm leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</p>
          <div class="flex items-center justify-between mt-6 font-semibold">
            <p href="">See case study</p>
            <svg class="w-4 h-4" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="5"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M2.78684 45.2133L45.2132 2.78685M45.2132 2.78685V36.728M45.2132 2.78685H11.2721"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
        <div class="p-5 transition-all duration-200 bg-white rounded-3xl hover:scale-105 hover:drop-shadow-2xl">
          <img class="object-cover w-full overflow-hidden bg-white h-96 rounded-2xl"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="">
          <h2 class="mt-6 text-2xl font-bold">Kargo Technologies</h2>
          <p class="mt-4 text-sm leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</p>
          <div class="flex items-center justify-between mt-6 font-semibold">
            <p href="">See case study</p>
            <svg class="w-4 h-4" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="5"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M2.78684 45.2133L45.2132 2.78685M45.2132 2.78685V36.728M45.2132 2.78685H11.2721"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
        <div class="p-5 transition-all duration-200 bg-white rounded-3xl hover:scale-105 hover:drop-shadow-2xl">
          <img class="object-cover w-full overflow-hidden bg-white h-96 rounded-2xl"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="">
          <h2 class="mt-6 text-2xl font-bold">Kargo Technologies</h2>
          <p class="mt-4 text-sm leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</p>
          <div class="flex items-center justify-between mt-6 font-semibold">
            <p href="">See case study</p>
            <svg class="w-4 h-4" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="5"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M2.78684 45.2133L45.2132 2.78685M45.2132 2.78685V36.728M45.2132 2.78685H11.2721"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center mt-4">
        <a href="#"
          class="px-4 py-2 text-xs font-semibold transition-all duration-200 border rounded-full w-fit border-sky-700 text-sky-700 hover:bg-sky-700 hover:text-white">SEE
          OUR WORKS</a>
      </div>
    </div>
  </section>

  {{-- Testimonial section --}}
  <section class="relative mt-20 bg-neutral-900">
    <div class="max-w-6xl px-6 py-8 mx-auto sm:py-16 lg:px-12 xl:max-w-7xl">
      <div class="flex flex-col-reverse items-center justify-between gap-x-8 md:flex-row">

        {{-- Image --}}
        <img class="object-contain w-full my-10 sm:mt-0 sm:w-1/2" src="assets/testimonial-01.png" alt="">

        {{-- Quote --}}
        <div class="flex flex-col gap-y-6">
          <svg class="absolute w-12 text-sky-500 h-fit" viewBox="0 0 42 34" fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.99995 33.7999C3.72691 33.7999 2.50601 33.2942 1.60584 32.394C0.705664 31.4939 0.199951 30.273 0.199951 28.9999L0.199949 12.9999C0.199949 9.60516 1.54852 6.34943 3.94898 3.94896C6.34945 1.5485 9.60518 0.199927 12.9999 0.199927L12.9999 3.39993C10.4539 3.39993 8.01207 4.41135 6.21172 6.2117C4.41137 8.01205 3.39995 10.4538 3.39995 12.9999L3.39995 14.5999L14.5999 14.5999C15.873 14.5999 17.0939 15.1056 17.9941 16.0058C18.8942 16.906 19.3999 18.1269 19.3999 19.3999L19.3999 28.9999C19.3999 30.273 18.8942 31.4939 17.9941 32.394C17.0939 33.2942 15.873 33.7999 14.6 33.7999L4.99995 33.7999ZM27.4 33.7999C26.1269 33.7999 24.906 33.2942 24.0058 32.394C23.1057 31.4939 22.5999 30.273 22.5999 28.9999L22.5999 12.9999C22.5999 9.60515 23.9485 6.34943 26.349 3.94896C28.7494 1.5485 32.0052 0.199926 35.3999 0.199925L35.3999 3.39993C32.8539 3.39993 30.4121 4.41135 28.6117 6.2117C26.8114 8.01205 25.7999 10.4538 25.7999 12.9999L25.7999 14.5999L36.9999 14.5999C38.273 14.5999 39.4939 15.1056 40.3941 16.0058C41.2942 16.906 41.7999 18.1269 41.7999 19.3999L41.7999 28.9999C41.7999 30.273 41.2942 31.4939 40.3941 32.394C39.4939 33.2942 38.273 33.7999 37 33.7999L27.4 33.7999Z" />
          </svg>
          <p class="z-10 px-8 pt-4 text-xl leading-relaxed text-white sm:text-2xl text-shadow-lg shadow-black">I really enjoyed working with you guys, you guys are very
            communicative and quick to do
            the job. I really can't wait to work with you again!</p>
          <div class="flex items-center px-8 mt-4 gap-x-5">
            <img class="object-cover w-16 h-16 rounded-full"
              src="https://images.unsplash.com/photo-1584611139207-9cf4fed64188?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="">
            <div class="flex flex-col">
              <p class="text-xl font-semibold text-white">Stefani Mila</p>
              <p class="text-lg text-neutral-400">CEO, Brainware</p>
            </div>
          </div>
        </div>

        <div class="flex flex-col self-center rotate-90 gap-y-4 md:rotate-0">
          <svg class="w-2 text-white h-fit" viewBox="0 0 8 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4" cy="4" r="4" />
          </svg>
          <svg class="w-2 h-fit text-neutral-600" viewBox="0 0 8 8" fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="4" cy="4" r="4" />
          </svg>
          <svg class="w-2 h-fit text-neutral-600" viewBox="0 0 8 8" fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="4" cy="4" r="4" />
          </svg>
        </div>
      </div>
    </div>
  </section>
@endsection
