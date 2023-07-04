@extends('layouts.app')

@section('container')
  {{-- Hero section --}}
  <section class="s-hero">

    <div class="bg-glr-blue"></div>

    <div class="flex-col">
      <div class="content-w-big container">
        <div class="flex-row">
          <h1 class="text-blue-g hero-title-big-top">Stellar</h1>
          <strong class="hero-desc-big">We craft exceptional digital experiences that bring your brand to success. With
            expertise in websites, apps, and
            branding, we combine creativity and technology to bring your vision to life.</strong>
        </div>

        <div class="flex-row">
          <h1 class="text-blue-g hero-title-big-bottom">Creations</h1>
          <svg width="122" height="140" viewBox="0 0 122 140" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M85.17 68.34C54.95 75.6 49.64 81.48 43.08 114.93C36.52 81.48 31.21 75.6 0.98999 68.34C31.21 61.08 36.52 55.2 43.08 21.75C49.64 55.2 54.95 61.08 85.17 68.34Z" />
            <path
              d="M121.68 109.98C102.51 114.58 99.14 118.32 94.98 139.54C90.82 118.32 87.45 114.59 68.28 109.98C87.45 105.38 90.82 101.64 94.98 80.4199C99.14 101.64 102.51 105.37 121.68 109.98Z" />
            <path
              d="M104.88 20.52C91.5701 23.72 89.2301 26.31 86.3501 41.04C83.4601 26.31 81.1201 23.72 67.8201 20.52C81.1301 17.32 83.4701 14.73 86.3501 0C89.2401 14.73 91.5801 17.32 104.88 20.52Z" />
          </svg>
        </div>

        <strong class="hero-desc-m">We craft
          exceptional digital experiences that bring your brand to success. With expertise in websites, apps,
          and
          branding, we combine creativity and technology to bring your vision to life.</strong>
      </div>

      {{-- Achievement section --}}
      <div class="feat-container bg-white">
        <div class="grid-wrapper container">
          <div class="feat-item">
            <svg class="feat-icon" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor"
              aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
            </svg>
            <p>Satisfied <br> Customers</p>
          </div>
          <div class="feat-item">
            <svg class="feat-icon" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor"
              aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
            </svg>
            <p>Satisfied <br> Customers</p>
          </div>
          <div class="feat-item">
            <svg class="feat-icon" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor"
              aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
            </svg>
            <p>Satisfied <br> Customers</p>
          </div>
          <div class="feat-item">
            <svg class="feat-icon" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor"
              aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
            </svg>
            <p>Satisfied <br> Customers</p>
          </div>
        </div>

      </div>
    </div>
  </section>

  {{-- Showcase section --}}
  <section class="s-showcase">
    <div class="grid-wrapper container">
      <a href="#" class="card-container">
        <div class="bg-shadow"></div>

        <img class="card-image"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="">

        <div class="bg-white"></div>

        <div class="content-w">
          <div class="card-filler"></div>

          <div class="subcontent-w">
            <div class="card-title">System Information</div>
            <div class="card-subtitle">Technology</div>
          </div>
          <p class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing
            elit,
            sed do eiusmod
            tempor
            incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas.</p>
          <div class="card-icon">
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="5"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M2.78684 45.2133L45.2132 2.78685M45.2132 2.78685V36.728M45.2132 2.78685H11.2721"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </a>

      <a href="#" class="card-container item-down">
        <div class="bg-shadow"></div>

        <img class="card-image"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="">

        <div class="bg-white"></div>

        <div class="content-w">
          <div class="card-filler"></div>

          <div class="subcontent-w">
            <div class="card-title">System Information</div>
            <div class="card-subtitle">Technology</div>
          </div>
          <p class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing
            elit,
            sed do eiusmod
            tempor
            incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas.</p>
          <div class="card-icon">
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="5"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M2.78684 45.2133L45.2132 2.78685M45.2132 2.78685V36.728M45.2132 2.78685H11.2721"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </a>

      <a href="#" class="card-container">
        <div class="bg-shadow"></div>

        <img class="card-image"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="">

        <div class="bg-white"></div>

        <div class="content-w">
          <div class="card-filler"></div>

          <div class="subcontent-w">
            <div class="card-title">System Information</div>
            <div class="card-subtitle">Technology</div>
          </div>
          <p class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing
            elit,
            sed do eiusmod
            tempor
            incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas.</p>
          <div class="card-icon">
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="5"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M2.78684 45.2133L45.2132 2.78685M45.2132 2.78685V36.728M45.2132 2.78685H11.2721"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </a>

      <a href="#" class="card-container item-down item-end">
        <div class="bg-shadow"></div>

        <img class="card-image"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="">

        <div class="bg-white"></div>

        <div class="content-w">
          <div class="card-filler"></div>

          <div class="subcontent-w">
            <div class="card-title">System Information blabds abasd</div>
            <div class="card-subtitle">Technology</div>
          </div>
          <p class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing
            elit,
            sed do eiusmod
            tempor
            incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas.</p>
          <div class="card-icon">
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="5"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M2.78684 45.2133L45.2132 2.78685M45.2132 2.78685V36.728M45.2132 2.78685H11.2721"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </a>
    </div>
  </section>

  {{-- Service section --}}
  <section class="s-service">
    <div class="container">
      <div class="section-title flex">
        <h2>Every solutions <br> for your </h2>
        <h2 class="flex-col">
          <span class="rotate-word-5">Analysis</span>
          <span class="rotate-word-4">Marketing</span>
          <span class="rotate-word-3">Branding</span>
          <span class="rotate-word-2">Website</span>
          <span class="rotate-word-1">Apps</span>
        </h2>
      </div>

      <div class="accordion-wrapper">

        <hr>
        @foreach ($services as $service)
          <section>
            <button class="accordion-item" aria-controls="srv-accordion-{{ $service->slug }}"
              data-collapse-toggle="true" aria-expanded="false">
              <div class="content-w">
                <div class="content-text flex-col">
                  <div class="title-wrapper flex">
                    <svg>
                      <use xlink:href="{{ $service->icon }}"></use>
                    </svg>
                    <h3 class="accordion-title">{{ $service->name }}</h3>
                  </div>
                  <div class="list-collapse-hide srv-accordion-{{ $service->slug }} subcontent-w flex-col">
                    <p class="desc">{{ $service->desc_long }}</p>
                    <a href="{{ $service->slug }}" class="btn btn-primary">LEARN
                      MORE</a>
                  </div>
                </div>
                <div class="list-collapse-hide srv-accordion-{{ $service->slug }} content-image">
                  <img src="{{ $service->image }}" alt="">
                </div>
              </div>
              <div class="btn-toggle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"
                  xmlns="http://www.w3.org/2000/svg">
                  <path class="accordion-btn" d="M12 8L12 16" stroke-linecap="round" />
                  <path d="M16 12L8 12" stroke-linecap="round" />
                  <circle cx="12" cy="12" r="11" />
                </svg>
              </div>
            </button>
          </section>

          <hr>
        @endforeach

      </div>
    </div>
  </section>

  {{-- Portfolio section --}}
  <section class="s-portfolio">
    <div class="portfolio-w container">
      <div class="title-w">
        <h2 class="section-title">Explore what we have done</h2>
        <p class="section-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>

      <div class="grid-auto-fit card-w">
        <a href="#" class="card">
          <img
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="">
          <h2 class="title">Kargo Technologies</h2>
          <p class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</p>
          <div class="btn-card">
            <p href="">See case study</p>
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="5"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M2.78684 45.2133L45.2132 2.78685M45.2132 2.78685V36.728M45.2132 2.78685H11.2721"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </a>

        <a href="#" class="card">
          <img
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="">
          <h2 class="title">Kargo Technologies</h2>
          <p class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</p>
          <div class="btn-card">
            <p href="">See case study</p>
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="5"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M2.78684 45.2133L45.2132 2.78685M45.2132 2.78685V36.728M45.2132 2.78685H11.2721"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </a>

        <a href="#" class="card">
          <img
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="">
          <h2 class="title">Kargo Technologies</h2>
          <p class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</p>
          <div class="btn-card">
            <p href="">See case study</p>
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="5"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M2.78684 45.2133L45.2132 2.78685M45.2132 2.78685V36.728M45.2132 2.78685H11.2721"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </a>
      </div>

      <div class="btn-portfolio">
        <a href="#" class="btn btn-primary">SEE
          OUR WORKS</a>
      </div>
    </div>
  </section>

  {{-- Testimonial section --}}
  <section class="s-testimoni">
    <div class="container mx-auto max-w-6xl px-6 py-8 sm:py-16 lg:px-12 xl:max-w-7xl">
      <div class="testimoni-w flex flex-col-reverse items-center justify-between gap-x-8 md:flex-row">

        {{-- Image --}}
        <img class="my-10 w-full object-contain sm:mt-0 sm:w-1/2" src="assets/testimonial-01.png" alt="">

        {{-- Quote --}}
        <div class="content-w">
          <svg viewBox="0 0 42 34" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.99995 33.7999C3.72691 33.7999 2.50601 33.2942 1.60584 32.394C0.705664 31.4939 0.199951 30.273 0.199951 28.9999L0.199949 12.9999C0.199949 9.60516 1.54852 6.34943 3.94898 3.94896C6.34945 1.5485 9.60518 0.199927 12.9999 0.199927L12.9999 3.39993C10.4539 3.39993 8.01207 4.41135 6.21172 6.2117C4.41137 8.01205 3.39995 10.4538 3.39995 12.9999L3.39995 14.5999L14.5999 14.5999C15.873 14.5999 17.0939 15.1056 17.9941 16.0058C18.8942 16.906 19.3999 18.1269 19.3999 19.3999L19.3999 28.9999C19.3999 30.273 18.8942 31.4939 17.9941 32.394C17.0939 33.2942 15.873 33.7999 14.6 33.7999L4.99995 33.7999ZM27.4 33.7999C26.1269 33.7999 24.906 33.2942 24.0058 32.394C23.1057 31.4939 22.5999 30.273 22.5999 28.9999L22.5999 12.9999C22.5999 9.60515 23.9485 6.34943 26.349 3.94896C28.7494 1.5485 32.0052 0.199926 35.3999 0.199925L35.3999 3.39993C32.8539 3.39993 30.4121 4.41135 28.6117 6.2117C26.8114 8.01205 25.7999 10.4538 25.7999 12.9999L25.7999 14.5999L36.9999 14.5999C38.273 14.5999 39.4939 15.1056 40.3941 16.0058C41.2942 16.906 41.7999 18.1269 41.7999 19.3999L41.7999 28.9999C41.7999 30.273 41.2942 31.4939 40.3941 32.394C39.4939 33.2942 38.273 33.7999 37 33.7999L27.4 33.7999Z" />
          </svg>
          <p class="quote">I
            really
            enjoyed working with you guys, you guys are very
            communicative and quick to do
            the job. I really can't wait to work with you again!</p>
          <div class="profile-w">
            <img
              src="https://images.unsplash.com/photo-1584611139207-9cf4fed64188?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="">
            <div>
              <p class="name">Stefani Mila</p><br>
              <p class="position">CEO, Brainware</p>
            </div>
          </div>
        </div>

        <div class="slider flex rotate-90 flex-col gap-y-4 self-center md:rotate-0">
          <svg viewBox="0 0 8 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4" cy="4" r="4" />
          </svg>
          <svg viewBox="0 0 8 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4" cy="4" r="4" />
          </svg>
          <svg viewBox="0 0 8 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4" cy="4" r="4" />
          </svg>
        </div>
      </div>
    </div>
  </section>
@endsection
