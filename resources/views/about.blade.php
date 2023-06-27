@extends('layouts.app')

@section('container')
  {{-- Hero section --}}
  <section class="s-hero">
    <div class="container flex">
      <div class="content-w">
        <h1 class="hero-title-generic text-blue-g">Dedicated Teams for Your Dedicated Dreams</h1>
        <p class="hero-desc">At Stelar, we are committed to helping you grow at every stage of your journey, providing
          comprehensive assistance and support throughout your digital transformation.</p>
      </div>
      <div class="hero-image">
        <img src="assets/hero-about.png" alt="">
      </div>
    </div>
  </section>

  {{-- Values section --}}
  <section class="s-values">
    <div class="container flex-col">
      <h2 class="section-title">Our pillars</h2>
      <div class="grid-wrapper">
        <div class="card-container">
          <h3 class="card-title">Innovative</h3>
          <p class="card-desc">We thrive on innovation and embrace the ever-evolving digital landscape.</p>
        </div>
        <div class="card-container">
          <h3 class="card-title">Collaboration</h3>
          <p class="card-desc">We believe that the best outcomes are achieved through strong partnerships and teamwork.
          </p>
        </div>
        <div class="card-container">
          <h3 class="card-title">Excellence</h3>
          <p class="card-desc">We strive for perfection in the quality of our work, service, and results.</p>
        </div>
      </div>
    </div>
  </section>

  {{-- Story section --}}
  <section class="container my-32 sm:my-48">
    <div class="grid-auto-fit relative grid gap-8">
      <h2 class="section-title max-w-md">Empowering businesses in the digital world</h2>
      <div>
        <p class="leading-loose">Our journey began with a vision to empower businesses in the digital world. What
          started as a small team with a big dream has now evolved into a thriving digital agency, dedicated to helping
          clients navigate the ever-changing landscape of digital marketing and achieve remarkable success.</p><br>
        <p class="text-xs leading-relaxed">Driven by a deep passion for innovation, a dedication to achieving excellence,
          and a steadfast commitment to our clients' objectives, we forge ahead. From the very beginning, we recognized
          the immense potential that the digital realm held for
          businesses of all sizes and industries. We saw the need for a strategic and results-driven approach to help
          businesses harness the power of digital marketing and emerge as industry leaders. <br><br>
          As we embarked on this journey, we assembled a team of talented individuals who shared our vision and possessed
          a diverse range of skills and expertise. This collective talent became the driving force behind our agency's
          growth and success. Together, we fostered a culture of collaboration, creativity, and continuous learning,
          empowering each team member to push the boundaries of what is possible and deliver exceptional results for our
          clients.</p>
      </div>
    </div>

    <div class="grid-auto-fit mt-16 flex flex-col-reverse gap-8 sm:grid">
      <div class="sm:justify-normal mt-4 flex justify-center gap-x-5">
        <img class="h-16 w-16 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1584611139207-9cf4fed64188?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt="">
        <div class="flex flex-col">
          <p class="text-xl font-semibold">Mahardika</p>
          <p class="text-lg text-neutral-500">Developer, Stelar</p>
        </div>
      </div>

      <div class="relative">
        <svg class="absolute h-fit w-12 text-sky-400" viewBox="0 0 42 34" fill="currentColor"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.99995 33.7999C3.72691 33.7999 2.50601 33.2942 1.60584 32.394C0.705664 31.4939 0.199951 30.273 0.199951 28.9999L0.199949 12.9999C0.199949 9.60516 1.54852 6.34943 3.94898 3.94896C6.34945 1.5485 9.60518 0.199927 12.9999 0.199927L12.9999 3.39993C10.4539 3.39993 8.01207 4.41135 6.21172 6.2117C4.41137 8.01205 3.39995 10.4538 3.39995 12.9999L3.39995 14.5999L14.5999 14.5999C15.873 14.5999 17.0939 15.1056 17.9941 16.0058C18.8942 16.906 19.3999 18.1269 19.3999 19.3999L19.3999 28.9999C19.3999 30.273 18.8942 31.4939 17.9941 32.394C17.0939 33.2942 15.873 33.7999 14.6 33.7999L4.99995 33.7999ZM27.4 33.7999C26.1269 33.7999 24.906 33.2942 24.0058 32.394C23.1057 31.4939 22.5999 30.273 22.5999 28.9999L22.5999 12.9999C22.5999 9.60515 23.9485 6.34943 26.349 3.94896C28.7494 1.5485 32.0052 0.199926 35.3999 0.199925L35.3999 3.39993C32.8539 3.39993 30.4121 4.41135 28.6117 6.2117C26.8114 8.01205 25.7999 10.4538 25.7999 12.9999L25.7999 14.5999L36.9999 14.5999C38.273 14.5999 39.4939 15.1056 40.3941 16.0058C41.2942 16.906 41.7999 18.1269 41.7999 19.3999L41.7999 28.9999C41.7999 30.273 41.2942 31.4939 40.3941 32.394C39.4939 33.2942 38.273 33.7999 37 33.7999L27.4 33.7999Z" />
        </svg>
        <p class="relative z-10 px-8 pt-4 text-xl leading-relaxed sm:text-2xl">We are passionate about helping our clients
          achieve
          their goals, maximize their online presence, and unlock their true potential. Together, we will navigate the
          ever-changing digital landscape, adapt to new challenges, and embrace opportunities for growth.</p>
      </div>
    </div>
  </section>

  {{-- Team section --}}
  <section class="container-full mt-32 bg-neutral-100 py-32">
    <div class="container">
      <h2 class="section-title text-center">Meet our amazing team</h2>
      <div class="mt-24 grid gap-y-12 sm:grid-cols-2">
        <div class="flex flex-col gap-6 px-8 sm:px-16 md:px-24 xl:px-36">
          <img class="rounded-full object-contain" src="assets/team-01.png" alt="">
          <div class="flex flex-col items-center">
            <p class="text-xl font-bold">Mahardika</p>
            <p class="text-neutral-500">Developer</p>
          </div>
        </div>
        <div class="flex flex-col gap-6 px-8 sm:px-16 md:px-24 xl:px-36">
          <img class="rounded-full object-contain"
            src="https://media.licdn.com/dms/image/D5603AQH0C7B-nLH45g/profile-displayphoto-shrink_800_800/0/1679162813270?e=1691020800&v=beta&t=MleO-NWttr8tpuIW-Um2foty-QPRs4csA4cppj9TrR0"
            alt="">
          <div class="flex flex-col items-center">
            <p class="text-xl font-bold">Mazir</p>
            <p class="text-neutral-500">Visual Designer</p>
          </div>
        </div>
      </div>
      <p class="mt-24 text-center text-3xl sm:text-4xl">Getting good players is easy. <br>Getting them to play together is
        the hard part.</p>
    </div>
  </section>
@endsection
