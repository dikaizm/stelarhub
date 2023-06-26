@extends('layouts.app')

@section('container')
  {{-- Hero section --}}
  <section class="s-hero">
    <div class="background"></div>
    <div class="hero-w">
      <div class="heading-w">
        <div class="row-w">
          <div class="text-blue-g title title-1">Stellar</div>
          <div class="desc-w">
            <strong class="desc">We craft exceptional digital experiences that bring your brand to success. With
              expertise in websites, apps, and
              branding, we combine creativity and technology to bring your vision to life.</strong>
          </div>
        </div>

        <div class="row-w">
          <div class="text-blue-g title title-2">Creations</div>
          <svg width="122" height="140" viewBox="0 0 122 140" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M85.17 68.34C54.95 75.6 49.64 81.48 43.08 114.93C36.52 81.48 31.21 75.6 0.98999 68.34C31.21 61.08 36.52 55.2 43.08 21.75C49.64 55.2 54.95 61.08 85.17 68.34Z" />
            <path
              d="M121.68 109.98C102.51 114.58 99.14 118.32 94.98 139.54C90.82 118.32 87.45 114.59 68.28 109.98C87.45 105.38 90.82 101.64 94.98 80.4199C99.14 101.64 102.51 105.37 121.68 109.98Z" />
            <path
              d="M104.88 20.52C91.5701 23.72 89.2301 26.31 86.3501 41.04C83.4601 26.31 81.1201 23.72 67.8201 20.52C81.1301 17.32 83.4701 14.73 86.3501 0C89.2401 14.73 91.5801 17.32 104.88 20.52Z" />
          </svg>
        </div>

        <div class="desc-w-m">
          <strong class="desc-m">We craft
            exceptional digital experiences that bring your brand to success. With expertise in websites, apps,
            and
            branding, we combine creativity and technology to bring your vision to life.</strong>
        </div>
      </div>

      {{-- Achievement section --}}
      <div class="feat-box bg-white">
        <div class="container">
          <div class="feat-w">
            <div class="item">
              <svg class="icon" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
              </svg>
              <p>Satisfied <br> Customers</p>
            </div>
            <div class="item">
              <svg class="icon" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
              </svg>
              <p>Satisfied <br> Customers</p>
            </div>
            <div class="item">
              <svg class="icon" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
              </svg>
              <p>Satisfied <br> Customers</p>
            </div>
            <div class="item">
              <svg class="icon" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
              </svg>
              <p>Satisfied <br> Customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {{-- Showcase section --}}
  <section class="s-showcase container">
    <div class="showcase-w">
      <a href="#" class="card">
        <div class="content-slide">
          <div class="content-w">
            <div>
              <div class="title">System Information</div>
              <div class="subtitle">Technology</div>
            </div>
            <p class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing
              elit,
              sed do eiusmod
              tempor
              incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas.</p>
            <div class="icon">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="5"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2.78684 45.2133L45.2132 2.78685M45.2132 2.78685V36.728M45.2132 2.78685H11.2721"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <div class="content-default">
          <div class="title">System Information</div>
          <div class="subtitle">Technology</div>
        </div>
        <div class="background"></div>
        <img
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="">
      </a>

      <a href="#" class="card item-down">
        <div class="content-slide">
          <div class="content-w">
            <div>
              <div class="title">System Information</div>
              <div class="subtitle">Technology</div>
            </div>
            <p class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor
              incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas.</p>
            <div class="icon">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="5"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2.78684 45.2133L45.2132 2.78685M45.2132 2.78685V36.728M45.2132 2.78685H11.2721"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <div class="content-default">
          <div class="title">System Information</div>
          <div class="subtitle">Technology</div>
        </div>
        <div class="background"></div>
        <img
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="">
      </a>

      <a href="#" class="card">
        <div class="content-slide">
          <div class="content-w">
            <div>
              <div class="title">System Information</div>
              <div class="subtitle">Technology</div>
            </div>
            <p class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing
              elit,
              sed do eiusmod
              tempor
              incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas.</p>
            <div class="icon">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="5"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2.78684 45.2133L45.2132 2.78685M45.2132 2.78685V36.728M45.2132 2.78685H11.2721"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <div class="content-default">
          <div class="title">System Information</div>
          <div class="subtitle">Technology</div>
        </div>
        <div class="background"></div>
        <img
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="">
      </a>

      <a href="#" class="card item-down item-end">
        <div class="content-slide">
          <div class="content-w">
            <div>
              <div class="title">System Information</div>
              <div class="subtitle">Technology</div>
            </div>
            <p class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor
              incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas.</p>
            <div class="icon">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="5"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2.78684 45.2133L45.2132 2.78685M45.2132 2.78685V36.728M45.2132 2.78685H11.2721"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <div class="content-default">
          <div class="title">System Information</div>
          <div class="subtitle">Technology</div>
        </div>
        <div class="background"></div>
        <img
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="">
      </a>
    </div>
  </section>

  {{-- Service section --}}
  <section class="s-service">
    <div class="container">
      <div class="title">
        <div>Every solutions <br> for your </div>
        <div class="rotate-word-w">
          <span class="rotate-word-5">Analysis</span>
          <span class="rotate-word-4">Marketing</span>
          <span class="rotate-word-3">Branding</span>
          <span class="rotate-word-2">Website</span>
          <span class="rotate-word-1">Apps</span>
        </div>
      </div>

      <div class="accordion-w">

        <hr>

        <section>
          <button class="item" aria-controls="srv-accordion-branding" data-collapse-toggle="true"
            aria-expanded="false">
            <div class="content-w">
              <div class="content-text">
                <div class="title-w">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.71432 21.1428H14.2857M12 2.85709V1.71423M17.7143 5.1428L18.8572 3.99995M6.28575 5.1428L5.14289 3.99995M17.7143 15.4285L18.8572 16.5714M6.28575 15.4285L5.14289 16.5714M4.00003 9.71423H2.85718M21.1429 9.71423H20M12 5.71423C13.1604 5.71352 14.2869 6.10523 15.1965 6.82572C16.106 7.5462 16.7452 8.5531 17.0102 9.6828C17.2751 10.8125 17.1503 11.9986 16.6559 13.0484C16.1614 14.0981 15.3266 14.9498 14.2869 15.4651L14.2857 16.5714C14.2857 17.1776 14.0449 17.759 13.6163 18.1876C13.1876 18.6163 12.6062 18.8571 12 18.8571C11.3938 18.8571 10.8124 18.6163 10.3838 18.1876C9.95514 17.759 9.71432 17.1776 9.71432 16.5714V15.4651C8.67473 14.9499 7.8399 14.0983 7.34548 13.0486C6.85106 11.999 6.7261 10.813 6.9909 9.68336C7.2557 8.55372 7.8947 7.54682 8.80408 6.82625C9.71346 6.10568 10.8398 5.71378 12 5.71423Z"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="title">Branding</div>
                </div>
                <div class="list-collapse-hide srv-accordion-branding desc-w">
                  <div class="desc">Boost your brand presence with strong branding strategy
                    from our
                    experts. Performance-driven digital agency to deliver successful branding. Boost your brand presence
                    with strong branding strategy from our
                    experts. Performance-driven digital agency to deliver successful branding.</div>
                  <a href="#" class="btn-primary btn-service">LEARN
                    MORE</a>
                </div>
              </div>
              <div class="list-collapse-hide srv-accordion-branding content-img">
                <img
                  src="https://images.unsplash.com/photo-1566657817181-c69e4a8eeb1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="">
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

        <section>
          <button class="item" aria-controls="srv-accordion-website" data-collapse-toggle="true"
            aria-expanded="false">
            <div class="content-w">
              <div class="content-text">
                <div class="title-w">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.71432 21.1428H14.2857M12 2.85709V1.71423M17.7143 5.1428L18.8572 3.99995M6.28575 5.1428L5.14289 3.99995M17.7143 15.4285L18.8572 16.5714M6.28575 15.4285L5.14289 16.5714M4.00003 9.71423H2.85718M21.1429 9.71423H20M12 5.71423C13.1604 5.71352 14.2869 6.10523 15.1965 6.82572C16.106 7.5462 16.7452 8.5531 17.0102 9.6828C17.2751 10.8125 17.1503 11.9986 16.6559 13.0484C16.1614 14.0981 15.3266 14.9498 14.2869 15.4651L14.2857 16.5714C14.2857 17.1776 14.0449 17.759 13.6163 18.1876C13.1876 18.6163 12.6062 18.8571 12 18.8571C11.3938 18.8571 10.8124 18.6163 10.3838 18.1876C9.95514 17.759 9.71432 17.1776 9.71432 16.5714V15.4651C8.67473 14.9499 7.8399 14.0983 7.34548 13.0486C6.85106 11.999 6.7261 10.813 6.9909 9.68336C7.2557 8.55372 7.8947 7.54682 8.80408 6.82625C9.71346 6.10568 10.8398 5.71378 12 5.71423Z"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="title">Website</div>
                </div>
                <div class="list-collapse-hide srv-accordion-website desc-w">
                  <div class="desc">Boost your brand presence with strong branding strategy
                    from our
                    experts. Performance-driven digital agency to deliver successful branding. Boost your brand presence
                    with strong branding strategy from our
                    experts. Performance-driven digital agency to deliver successful branding.</div>
                  <a href="#" class="btn-primary btn-service">LEARN
                    MORE</a>
                </div>
              </div>
              <div class="list-collapse-hide srv-accordion-website content-img">
                <img
                  src="https://images.unsplash.com/photo-1566657817181-c69e4a8eeb1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="">
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

        <section>
          <button class="item" aria-controls="srv-accordion-apps" data-collapse-toggle="true" aria-expanded="false">
            <div class="content-w">
              <div class="content-text">
                <div class="title-w">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.71432 21.1428H14.2857M12 2.85709V1.71423M17.7143 5.1428L18.8572 3.99995M6.28575 5.1428L5.14289 3.99995M17.7143 15.4285L18.8572 16.5714M6.28575 15.4285L5.14289 16.5714M4.00003 9.71423H2.85718M21.1429 9.71423H20M12 5.71423C13.1604 5.71352 14.2869 6.10523 15.1965 6.82572C16.106 7.5462 16.7452 8.5531 17.0102 9.6828C17.2751 10.8125 17.1503 11.9986 16.6559 13.0484C16.1614 14.0981 15.3266 14.9498 14.2869 15.4651L14.2857 16.5714C14.2857 17.1776 14.0449 17.759 13.6163 18.1876C13.1876 18.6163 12.6062 18.8571 12 18.8571C11.3938 18.8571 10.8124 18.6163 10.3838 18.1876C9.95514 17.759 9.71432 17.1776 9.71432 16.5714V15.4651C8.67473 14.9499 7.8399 14.0983 7.34548 13.0486C6.85106 11.999 6.7261 10.813 6.9909 9.68336C7.2557 8.55372 7.8947 7.54682 8.80408 6.82625C9.71346 6.10568 10.8398 5.71378 12 5.71423Z"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="title">Apps</div>
                </div>
                <div class="list-collapse-hide srv-accordion-apps desc-w">
                  <div class="desc">Boost your brand presence with strong branding strategy
                    from our
                    experts. Performance-driven digital agency to deliver successful branding. Boost your brand presence
                    with strong branding strategy from our
                    experts. Performance-driven digital agency to deliver successful branding.</div>
                  <a href="#" class="btn-primary btn-service">LEARN
                    MORE</a>
                </div>
              </div>
              <div class="list-collapse-hide srv-accordion-apps content-img">
                <img
                  src="https://images.unsplash.com/photo-1566657817181-c69e4a8eeb1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="">
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

        <section>
          <button class="item" aria-controls="srv-accordion-marketing" data-collapse-toggle="true"
            aria-expanded="false">
            <div class="content-w">
              <div class="content-text">
                <div class="title-w">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.71432 21.1428H14.2857M12 2.85709V1.71423M17.7143 5.1428L18.8572 3.99995M6.28575 5.1428L5.14289 3.99995M17.7143 15.4285L18.8572 16.5714M6.28575 15.4285L5.14289 16.5714M4.00003 9.71423H2.85718M21.1429 9.71423H20M12 5.71423C13.1604 5.71352 14.2869 6.10523 15.1965 6.82572C16.106 7.5462 16.7452 8.5531 17.0102 9.6828C17.2751 10.8125 17.1503 11.9986 16.6559 13.0484C16.1614 14.0981 15.3266 14.9498 14.2869 15.4651L14.2857 16.5714C14.2857 17.1776 14.0449 17.759 13.6163 18.1876C13.1876 18.6163 12.6062 18.8571 12 18.8571C11.3938 18.8571 10.8124 18.6163 10.3838 18.1876C9.95514 17.759 9.71432 17.1776 9.71432 16.5714V15.4651C8.67473 14.9499 7.8399 14.0983 7.34548 13.0486C6.85106 11.999 6.7261 10.813 6.9909 9.68336C7.2557 8.55372 7.8947 7.54682 8.80408 6.82625C9.71346 6.10568 10.8398 5.71378 12 5.71423Z"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="title">Marketing</div>
                </div>
                <div class="list-collapse-hide srv-accordion-marketing desc-w">
                  <div class="desc">Boost your brand presence with strong branding strategy
                    from our
                    experts. Performance-driven digital agency to deliver successful branding. Boost your brand presence
                    with strong branding strategy from our
                    experts. Performance-driven digital agency to deliver successful branding.</div>
                  <a href="#" class="btn-primary btn-service">LEARN
                    MORE</a>
                </div>
              </div>
              <div class="list-collapse-hide srv-accordion-marketing content-img">
                <img
                  src="https://images.unsplash.com/photo-1566657817181-c69e4a8eeb1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="">
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

        <section>
          <button class="item" aria-controls="srv-accordion-analysis" data-collapse-toggle="true"
            aria-expanded="false">
            <div class="content-w">
              <div class="content-text">
                <div class="title-w">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.71432 21.1428H14.2857M12 2.85709V1.71423M17.7143 5.1428L18.8572 3.99995M6.28575 5.1428L5.14289 3.99995M17.7143 15.4285L18.8572 16.5714M6.28575 15.4285L5.14289 16.5714M4.00003 9.71423H2.85718M21.1429 9.71423H20M12 5.71423C13.1604 5.71352 14.2869 6.10523 15.1965 6.82572C16.106 7.5462 16.7452 8.5531 17.0102 9.6828C17.2751 10.8125 17.1503 11.9986 16.6559 13.0484C16.1614 14.0981 15.3266 14.9498 14.2869 15.4651L14.2857 16.5714C14.2857 17.1776 14.0449 17.759 13.6163 18.1876C13.1876 18.6163 12.6062 18.8571 12 18.8571C11.3938 18.8571 10.8124 18.6163 10.3838 18.1876C9.95514 17.759 9.71432 17.1776 9.71432 16.5714V15.4651C8.67473 14.9499 7.8399 14.0983 7.34548 13.0486C6.85106 11.999 6.7261 10.813 6.9909 9.68336C7.2557 8.55372 7.8947 7.54682 8.80408 6.82625C9.71346 6.10568 10.8398 5.71378 12 5.71423Z"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="title">Data Analysis</div>
                </div>
                <div class="list-collapse-hide srv-accordion-analysis desc-w">
                  <div class="desc">Boost your brand presence with strong branding strategy
                    from our
                    experts. Performance-driven digital agency to deliver successful branding. Boost your brand presence
                    with strong branding strategy from our
                    experts. Performance-driven digital agency to deliver successful branding.</div>
                  <a href="#" class="btn-primary btn-service">LEARN
                    MORE</a>
                </div>
              </div>
              <div class="list-collapse-hide srv-accordion-analysis content-img">
                <img
                  src="https://images.unsplash.com/photo-1566657817181-c69e4a8eeb1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="">
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
        <a href="#" class="btn-primary">SEE
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
