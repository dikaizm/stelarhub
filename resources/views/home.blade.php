<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Stelar - Digital Agency</title>

  {{-- Fonts --}}
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
    rel="stylesheet">

  {{-- Styles --}}
  <link rel="stylesheet" href="css/dev.css">
  <link rel="stylesheet" href="css/styles.css">

  <script src="js/script.js"></script>

  {{-- Vite --}}
  @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body class="h-full bg-white">

  {{-- Navbar --}}
  <header id="navbar"
    class="fixed inset-x-0 top-0 z-50 h-20 transition-all duration-700 bg-white hover:shadow-2xl hover:shadow-neutral-300/50">

    {{-- Desktop menu --}}
    <nav class="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Stelar</span>
          <img class="hidden w-auto h-8 lg:inline" src="images/stelar-logo-color.svg" alt="Logo">
          <img class="w-auto h-8 lg:hidden" src="images/stelar-logo-color-mobile.svg" alt="Logo">
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center p-2.5 text-gray-700">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      <div class="hidden text-xs lg:flex lg:gap-x-12">
        <div class="relative">
          <span class="absolute w-full py-6 opacity-0 -z-50"></span>
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

          {{-- Dropdown menu --}}
          <div>

          </div>
        </div>

        <a href="#"
          class="font-semibold text-gray-700 transition-all duration-300 hover:font-bold hover:text-sky-700">SOLUTIONS</a>
        <a href="#"
          class="font-semibold text-gray-700 transition-all duration-300 hover:font-bold hover:text-sky-700">LEARN</a>
        <a href="#"
          class="font-semibold text-gray-700 transition-all duration-300 hover:font-bold hover:text-sky-700">WHY
          STELAR</a>
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

    {{-- Mobile menu --}}
    <nav class="" aria-label="Menu" aria-expanded="false">

    </nav>
  </header>

  <main class="relative w-full pt-0 mt-20 overflow-hidden">
    {{-- Hero section --}}
    <section class="relative mx-auto flex h-[360px] max-w-7xl justify-between lg:h-[480px]">
      <div class="absolute inset-x-0 w-full h-56 px-6 lg:px-8">
        <div class="flex items-end justify-between w-full gap-12">
          <h1 class="gradient-text pt-12 text-9xl font-extrabold tracking-tight lg:text-[12rem]">Stellar</h1>
          <div class="flex items-end justify-end max-w-sm pb-2">
            <strong class="text-xs font-normal leading-loose lg:text-sm lg:font-normal lg:leading-loose">We craft
              exceptional digital experiences that bring your brand to success. With expertise in websites, apps, and
              branding, we combine creativity and technology to bring your vision to life.</strong>
          </div>
        </div>
        <div class="flex items-end justify-between gap-x-8">
          <h1 class="gradient-text text-9xl font-extrabold tracking-tight lg:text-[12rem]">Creations</h1>
          <svg class="h-24 min-w-fit text-sky-400 lg:h-36" width="132" height="132" viewBox="0 0 132 132"
            stroke="currentColor" stroke-width="2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M87.737 83.19C86.685 83.571 85.729 84.179 84.938 84.97C84.147 85.761 83.539 86.717 83.158 87.769L68.382 128.38C68.194 128.858 67.866 129.268 67.441 129.557C67.016 129.846 66.514 130 66 130C65.486 130 64.984 129.846 64.559 129.557C64.135 129.268 63.806 128.858 63.618 128.38L48.842 87.737C48.461 86.685 47.853 85.729 47.062 84.938C46.271 84.147 45.315 83.539 44.263 83.158L3.62 68.382C3.142 68.194 2.732 67.866 2.443 67.441C2.154 67.016 2 66.514 2 66C2 65.486 2.155 64.984 2.443 64.559C2.732 64.135 3.142 63.806 3.62 63.618L44.263 48.842C45.315 48.461 46.271 47.853 47.062 47.062C47.853 46.271 48.461 45.315 48.842 44.263L63.618 3.62C63.806 3.142 64.135 2.732 64.559 2.443C64.984 2.154 65.486 2 66 2C66.514 2 67.016 2.155 67.441 2.443C67.866 2.732 68.194 3.142 68.382 3.62L83.158 44.263C83.539 45.315 84.147 46.271 84.938 47.062C85.729 47.853 86.685 48.461 87.737 48.842L128.38 63.618C128.858 63.806 129.268 64.135 129.557 64.559C129.846 64.984 130 65.486 130 66C130 66.514 129.846 67.016 129.557 67.441C129.268 67.866 128.858 68.194 128.38 68.382L87.737 83.19Z" />
          </svg>
        </div>
      </div>
    </section>

    {{-- Showcase section --}}
    <section class="relative flex justify-between mx-auto mt-20 h-fit max-w-7xl">
      <div
        class="grid w-full grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:px-8 xl:grid-cols-4">
        <a href="#" class="h-min"><img
            class="object-cover overflow-hidden transition-all duration-200 bg-white h-96 rounded-3xl hover:scale-105 hover:drop-shadow-2xl"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""></a>
        <a href="#" class="h-min md:mt-20">
          <img
            class="object-cover overflow-hidden transition-all duration-200 bg-white h-96 rounded-3xl hover:scale-105 hover:drop-shadow-2xl"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""></a>
        <a href="#" class="h-min">
          <img
            class="object-cover overflow-hidden transition-all duration-200 bg-white h-96 rounded-3xl hover:scale-105 hover:drop-shadow-2xl"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""></a>
        <a href="#" class="h-min lg:mt-20">
          <img
            class="object-cover overflow-hidden transition-all duration-200 bg-white h-96 rounded-3xl hover:scale-105 hover:drop-shadow-2xl md:hidden xl:inline"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""></a>
      </div>
    </section>

    {{-- Service section --}}
    <section class="relative mx-auto mt-4 h-fit max-w-7xl lg:-m-20 lg:mx-auto xl:mt-4">
      <div class="w-full px-16 lg:px-24">
        <div class="flex items-end gap-2 text-5xl font-bold select-none">
          <h2 class="">We have every <br class="inline min-[1200px]:hidden"> solutions for your</h2>
          <div class="flex flex-col">
            <span class="rotate-word-5">Analysis</span>
            <span class="rotate-word-4">Marketing</span>
            <span class="rotate-word-3">Branding</span>
            <span class="rotate-word-2">Website</span>
            <span class="rotate-word-1">Apps</span>
          </div>
        </div>

        <div class="mt-20">
          <div class="h-[2px] bg-gray-200"></div>
          <div class="flex justify-between py-6 transition-all bg-white gap-x-8">
            <div class="flex flex-col w-1/2 max-w-lg py-4 gap-y-6">
              <div class="flex items-center w-min gap-x-3">
                <svg class="w-12 text-sky-600" width="currentWidth" height="currentWidth" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.71432 21.1428H14.2857M12 2.85709V1.71423M17.7143 5.1428L18.8572 3.99995M6.28575 5.1428L5.14289 3.99995M17.7143 15.4285L18.8572 16.5714M6.28575 15.4285L5.14289 16.5714M4.00003 9.71423H2.85718M21.1429 9.71423H20M12 5.71423C13.1604 5.71352 14.2869 6.10523 15.1965 6.82572C16.106 7.5462 16.7452 8.5531 17.0102 9.6828C17.2751 10.8125 17.1503 11.9986 16.6559 13.0484C16.1614 14.0981 15.3266 14.9498 14.2869 15.4651L14.2857 16.5714C14.2857 17.1776 14.0449 17.759 13.6163 18.1876C13.1876 18.6163 12.6062 18.8571 12 18.8571C11.3938 18.8571 10.8124 18.6163 10.3838 18.1876C9.95514 17.759 9.71432 17.1776 9.71432 16.5714V15.4651C8.67473 14.9499 7.8399 14.0983 7.34548 13.0486C6.85106 11.999 6.7261 10.813 6.9909 9.68336C7.2557 8.55372 7.8947 7.54682 8.80408 6.82625C9.71346 6.10568 10.8398 5.71378 12 5.71423Z"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h2 class="text-3xl font-bold text-sky-600">Branding</h2>
              </div>
              <p class="text-sm leading-relaxed">Boost your brand presence with strong branding strategy from our
                experts. Performance-driven digital agency to deliver successful branding. Boost your brand presence
                with strong branding strategy from our
                experts. Performance-driven digital agency to deliver successful branding.</p>
              <a href="#"
                class="px-6 py-2 text-xs font-bold transition-all duration-200 border rounded-full w-fit border-sky-700 text-sky-700 hover:bg-sky-700 hover:text-white">LEARN
                MORE</a>
            </div>
            <img
              class="self-center object-cover overflow-hidden transition-all duration-200 bg-white h-72 w-72 rounded-3xl hover:scale-105 hover:drop-shadow-2xl md:h-56"
              src="https://images.unsplash.com/photo-1566657817181-c69e4a8eeb1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              alt="">
            <button class="h-12 mt-4 min-w-fit text-sky-700"><svg width="currentWidth" height="currentWidth"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8L12 16" stroke-linecap="round" />
                <path d="M16 12L8 12" stroke-linecap="round" />
                <circle cx="12" cy="12" r="11" />
              </svg></button>
          </div>
          <div class="h-[2px] bg-gray-200"></div>

          <div class="flex justify-between py-6 transition-all bg-white gap-x-8">
            <div class="flex flex-col w-1/2 max-w-lg py-4 gap-y-6">
              <div class="flex items-center w-min gap-x-3">
                <svg class="w-12 text-sky-600" width="currentWidth" height="currentWidth" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.71432 21.1428H14.2857M12 2.85709V1.71423M17.7143 5.1428L18.8572 3.99995M6.28575 5.1428L5.14289 3.99995M17.7143 15.4285L18.8572 16.5714M6.28575 15.4285L5.14289 16.5714M4.00003 9.71423H2.85718M21.1429 9.71423H20M12 5.71423C13.1604 5.71352 14.2869 6.10523 15.1965 6.82572C16.106 7.5462 16.7452 8.5531 17.0102 9.6828C17.2751 10.8125 17.1503 11.9986 16.6559 13.0484C16.1614 14.0981 15.3266 14.9498 14.2869 15.4651L14.2857 16.5714C14.2857 17.1776 14.0449 17.759 13.6163 18.1876C13.1876 18.6163 12.6062 18.8571 12 18.8571C11.3938 18.8571 10.8124 18.6163 10.3838 18.1876C9.95514 17.759 9.71432 17.1776 9.71432 16.5714V15.4651C8.67473 14.9499 7.8399 14.0983 7.34548 13.0486C6.85106 11.999 6.7261 10.813 6.9909 9.68336C7.2557 8.55372 7.8947 7.54682 8.80408 6.82625C9.71346 6.10568 10.8398 5.71378 12 5.71423Z"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h2 class="text-3xl font-bold text-sky-600">Branding</h2>
              </div>

            </div>

            <button class="h-12 mt-4 min-w-fit text-sky-700"><svg width="currentWidth" height="currentWidth"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8L12 16" stroke-linecap="round" />
                <path d="M16 12L8 12" stroke-linecap="round" />
                <circle cx="12" cy="12" r="11" />
              </svg></button>
          </div>
          <div class="h-[2px] bg-gray-200"></div>

          <div class="flex justify-between py-6 transition-all bg-white gap-x-8">
            <div class="flex flex-col w-1/2 max-w-lg py-4 gap-y-6">
              <div class="flex items-center w-min gap-x-3">
                <svg class="w-12 text-sky-600" width="currentWidth" height="currentWidth" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.71432 21.1428H14.2857M12 2.85709V1.71423M17.7143 5.1428L18.8572 3.99995M6.28575 5.1428L5.14289 3.99995M17.7143 15.4285L18.8572 16.5714M6.28575 15.4285L5.14289 16.5714M4.00003 9.71423H2.85718M21.1429 9.71423H20M12 5.71423C13.1604 5.71352 14.2869 6.10523 15.1965 6.82572C16.106 7.5462 16.7452 8.5531 17.0102 9.6828C17.2751 10.8125 17.1503 11.9986 16.6559 13.0484C16.1614 14.0981 15.3266 14.9498 14.2869 15.4651L14.2857 16.5714C14.2857 17.1776 14.0449 17.759 13.6163 18.1876C13.1876 18.6163 12.6062 18.8571 12 18.8571C11.3938 18.8571 10.8124 18.6163 10.3838 18.1876C9.95514 17.759 9.71432 17.1776 9.71432 16.5714V15.4651C8.67473 14.9499 7.8399 14.0983 7.34548 13.0486C6.85106 11.999 6.7261 10.813 6.9909 9.68336C7.2557 8.55372 7.8947 7.54682 8.80408 6.82625C9.71346 6.10568 10.8398 5.71378 12 5.71423Z"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h2 class="text-3xl font-bold text-sky-600">Branding</h2>
              </div>

            </div>

            <button class="h-12 mt-4 min-w-fit text-sky-700"><svg width="currentWidth" height="currentWidth"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8L12 16" stroke-linecap="round" />
                <path d="M16 12L8 12" stroke-linecap="round" />
                <circle cx="12" cy="12" r="11" />
              </svg></button>
          </div>
          <div class="h-[2px] bg-gray-200"></div>

          <div class="flex justify-between py-6 transition-all bg-white gap-x-8">
            <div class="flex flex-col w-1/2 max-w-lg py-4 gap-y-6">
              <div class="flex items-center w-min gap-x-3">
                <svg class="w-12 text-sky-600" width="currentWidth" height="currentWidth" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.71432 21.1428H14.2857M12 2.85709V1.71423M17.7143 5.1428L18.8572 3.99995M6.28575 5.1428L5.14289 3.99995M17.7143 15.4285L18.8572 16.5714M6.28575 15.4285L5.14289 16.5714M4.00003 9.71423H2.85718M21.1429 9.71423H20M12 5.71423C13.1604 5.71352 14.2869 6.10523 15.1965 6.82572C16.106 7.5462 16.7452 8.5531 17.0102 9.6828C17.2751 10.8125 17.1503 11.9986 16.6559 13.0484C16.1614 14.0981 15.3266 14.9498 14.2869 15.4651L14.2857 16.5714C14.2857 17.1776 14.0449 17.759 13.6163 18.1876C13.1876 18.6163 12.6062 18.8571 12 18.8571C11.3938 18.8571 10.8124 18.6163 10.3838 18.1876C9.95514 17.759 9.71432 17.1776 9.71432 16.5714V15.4651C8.67473 14.9499 7.8399 14.0983 7.34548 13.0486C6.85106 11.999 6.7261 10.813 6.9909 9.68336C7.2557 8.55372 7.8947 7.54682 8.80408 6.82625C9.71346 6.10568 10.8398 5.71378 12 5.71423Z"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h2 class="text-3xl font-bold text-sky-600">Branding</h2>
              </div>

            </div>

            <button class="h-12 mt-4 min-w-fit text-sky-700"><svg width="currentWidth" height="currentWidth"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8L12 16" stroke-linecap="round" />
                <path d="M16 12L8 12" stroke-linecap="round" />
                <circle cx="12" cy="12" r="11" />
              </svg></button>
          </div>
          <div class="h-[2px] bg-gray-200"></div>

          <div class="flex justify-between py-6 transition-all bg-white gap-x-8">
            <div class="flex flex-col w-1/2 max-w-lg py-4 gap-y-6">
              <div class="flex items-center w-min gap-x-3">
                <svg class="w-12 text-sky-600" width="currentWidth" height="currentWidth" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.71432 21.1428H14.2857M12 2.85709V1.71423M17.7143 5.1428L18.8572 3.99995M6.28575 5.1428L5.14289 3.99995M17.7143 15.4285L18.8572 16.5714M6.28575 15.4285L5.14289 16.5714M4.00003 9.71423H2.85718M21.1429 9.71423H20M12 5.71423C13.1604 5.71352 14.2869 6.10523 15.1965 6.82572C16.106 7.5462 16.7452 8.5531 17.0102 9.6828C17.2751 10.8125 17.1503 11.9986 16.6559 13.0484C16.1614 14.0981 15.3266 14.9498 14.2869 15.4651L14.2857 16.5714C14.2857 17.1776 14.0449 17.759 13.6163 18.1876C13.1876 18.6163 12.6062 18.8571 12 18.8571C11.3938 18.8571 10.8124 18.6163 10.3838 18.1876C9.95514 17.759 9.71432 17.1776 9.71432 16.5714V15.4651C8.67473 14.9499 7.8399 14.0983 7.34548 13.0486C6.85106 11.999 6.7261 10.813 6.9909 9.68336C7.2557 8.55372 7.8947 7.54682 8.80408 6.82625C9.71346 6.10568 10.8398 5.71378 12 5.71423Z"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h2 class="text-3xl font-bold text-sky-600">Branding</h2>
              </div>

            </div>

            <button class="h-12 mt-4 min-w-fit text-sky-700"><svg width="currentWidth" height="currentWidth"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8L12 16" stroke-linecap="round" />
                <path d="M16 12L8 12" stroke-linecap="round" />
                <circle cx="12" cy="12" r="11" />
              </svg></button>
          </div>
          <div class="h-[2px] bg-gray-200"></div>
        </div>
      </div>
      <div class="bg-white h-96"></div>
    </section>

    {{-- Portfolio section --}}
    <section>

    </section>
  </main>

  {{-- Footer --}}
  <footer class="bg-white dark:bg-gray-900">
    <div class="w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <a href="https://flowbite.com/" class="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="FlowBite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
            <ul class="font-medium text-gray-600 dark:text-gray-400">
              <li class="mb-4">
                <a href="https://flowbite.com/" class="hover:underline">Flowbite</a>
              </li>
              <li>
                <a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
            <ul class="font-medium text-gray-600 dark:text-gray-400">
              <li class="mb-4">
                <a href="https://github.com/themesberg/flowbite" class="hover:underline">Github</a>
              </li>
              <li>
                <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <ul class="font-medium text-gray-600 dark:text-gray-400">
              <li class="mb-4">
                <a href="#" class="hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a href="#" class="hover:underline">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 dark:text-gray-400 sm:text-center">© 2023 <a href="https://flowbite.com/"
            class="hover:underline">Flowbite™</a>. All Rights Reserved.
        </span>
        <div class="flex mt-4 space-x-6 sm:mt-0 sm:justify-center">
          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd" />
            </svg>
            <span class="sr-only">Facebook page</span>
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clip-rule="evenodd" />
            </svg>
            <span class="sr-only">Instagram page</span>
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
            <span class="sr-only">Twitter page</span>
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd" />
            </svg>
            <span class="sr-only">GitHub account</span>
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                clip-rule="evenodd" />
            </svg>
            <span class="sr-only">Dribbble account</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</body>

</html>
