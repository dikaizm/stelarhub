@extends('layouts.app')

@section('content')
  {{-- Hero section --}}
  <section class="container">
    <div class="relative flex items-center justify-between gap-16 my-48">
      <div class="flex flex-col max-w-xl gap-12">
        <h1 class="text-6xl font-extrabold gradient-blue">Dedicated Teams for Your Dedicated Dreams</h1>
        <p class="leading-loose">At Stelar, we are committed to helping you grow at every stage of your journey, providing
          comprehensive assistance and support throughout your digital transformation.</p>
      </div>
      <img class="object-contain w-1/2 max-w-lg -rotate-6 rounded-2xl drop-shadow-2xl" src="assets/hero-about.png"
        alt="">
    </div>
  </section>

  {{-- Values section --}}
  <section class="container mt-12">
    <div class="relative flex flex-col justify-center gap-12">
      <h2 class="text-center section-title">Our Pillars</h2>
      <div class="grid gap-8 grid-auto-fit-xl">
        <div class="card">
          <h2 class="card-title">Innovative</h2>
          <p class="card-content">We thrive on innovation and embrace the ever-evolving digital landscape.</p>
        </div>
        <div class="card">
          <h2 class="card-title">Collaboration</h2>
          <p class="card-content">We believe that the best outcomes are achieved through strong partnerships and teamwork. </p>
        </div>
        <div class="card">
          <h2 class="card-title">Excellence</h2>
          <p class="card-content">We strive for perfection in the quality of our work, service, and results.</p>
        </div>
      </div>
    </div>
  </section>

  {{-- Story section --}}
  <section class="container my-48">
    <div class="relative grid gap-8 grid-auto-fit">
      <h2 class="max-w-md section-title">Empowering Businesses in the Digital World</h2>
      <p class="text-sm leading-loose">Our journey began with a vision to empower businesses in the digital world. What started as a small team with a big dream has now evolved into a thriving digital agency, dedicated to helping clients navigate the ever-changing landscape of digital marketing and achieve remarkable success.</p>
    </div> 
  </section>
  
  <h4 class="my-6 text-center">rung rampung moment :'v</h4>
@endsection
