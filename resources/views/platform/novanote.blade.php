@extends('layouts.app')

@section('container')
  <section class="relative h-screen w-full sm:max-h-[640px] lg:h-screen lg:max-h-[900px]">
    <div class="flex flex-col items-center w-full h-full max-w-6xl gap-12 px-6 mx-auto mt-72 sm:flex-row lg:px-12 xl:max-w-7xl justify-evenly sm:mt-0">
      <div class="flex flex-col gap-y-16">
        <div class="flex flex-col text-4xl font-bold lg:text-5xl">
          <span>Brainstorm ideas.</span>
          <span>Complete your tasks.</span>
          <span>Organize everything.</span>
        </div>
        <a class="flex items-center px-6 py-3 text-lg transition-all border border-black rounded-full w-fit gap-x-4 hover:bg-black hover:text-white"
          href="https://stelarhub.com/" target="_blank">Try Novanote <span><svg class="w-4 h-4" viewBox="0 0 48 48"
              fill="none" stroke="currentColor" stroke-width="5" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.78684 45.2133L45.2132 2.78685M45.2132 2.78685V36.728M45.2132 2.78685H11.2721"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg></span></a>
      </div>
      <img class="object-contain w-full sm:w-1/3 rounded-2xl drop-shadow-2xl" src="assets/novanote.png" alt="">
    </div>
  </section>
@endsection
