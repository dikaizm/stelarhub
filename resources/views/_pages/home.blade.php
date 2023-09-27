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
    <div class="flex-col container">
      <div class="section-title-wrapper">
        <h2 class="section-title">Explore what we have done</h2>
        <p class="section-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>

      <div class="grid-wrapper">
        <a href="#" class="card-container">
          <img
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="">
          <h2 class="card-title">Kargo Technologies</h2>
          <p class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</p>
          <div class="btn btn-card">
            <p href="">See case study</p>
            <svg>
              <use xlink:href="#icon-btn-arrow"></use> 
            </svg>
          </div>
        </a>

        <a href="#" class="card-container">
          <img
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="">
          <h2 class="card-title">Kargo Technologies</h2>
          <p class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</p>
          <div class="btn btn-card">
            <p href="">See case study</p>
            <svg>
              <use xlink:href="#icon-btn-arrow"></use> 
            </svg>
          </div>
        </a>

        <a href="#" class="card-container">
          <img
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="">
          <h2 class="card-title">Kargo Technologies</h2>
          <p class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</p>
          <div class="btn btn-card">
            <p href="">See case study</p>
            <svg>
              <use xlink:href="#icon-btn-arrow"></use> 
            </svg>
          </div>
        </a>
      </div>

      <div class="btn-wrapper">
        <a href="#" class="btn btn-primary">SEE
          OUR WORKS</a>
      </div>
    </div>
  </section>

  {{-- Testimonial section --}}
  @include('partials.testimoni')
@endsection
