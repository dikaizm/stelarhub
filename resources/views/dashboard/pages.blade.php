<section class="grid gap-4">
  <h2 class="text-xl font-bold">Contents</h2>
  <div class="grid grid-cols-4 gap-4">
    <x-dashboard-card-edit id="card-service" dataContent="content-service">
      <x-slot name="title">Services</x-slot>
      <x-slot name="content">
        @foreach ($services as $service)
          <div class="flex items-center gap-1">
            <svg class="h-5 w-5">
              <use xlink:href="{{ $service->icon }}"></use>
            </svg>
            <p>{{ $service->name }}</p>
          </div>
          <hr class="border-gray-300">
        @endforeach
      </x-slot>
    </x-dashboard-card-edit>

    <x-dashboard-card-edit id="card-testimonial" dataContent="content-testimonial">
      <x-slot name="title">Testimonial</x-slot>
      <x-slot name="content">
        this is content
      </x-slot>
    </x-dashboard-card-edit>

    <x-dashboard-card-edit id="card-contact" dataContent="content-contact">
      <x-slot name="title">Contact</x-slot>
      <x-slot name="content">
        <p>Company</p>
        <hr class="border-gray-300">
        <p>Social media</p>
      </x-slot>
    </x-dashboard-card-edit>
  </div>
</section>

<section class="mt-8 grid gap-4">
  <h2 class="text-xl font-bold">Pages</h2>
  <div class="grid grid-cols-4 gap-4">
    <x-dashboard-card-edit id="card-home" dataContent="content-home">
      <x-slot name="title">Home</x-slot>
      <x-slot name="content">
        <p>Hero title</p>
        <hr class="border-gray-300">
        <p>Hero desc</p>
        <hr class="border-gray-300">
        <p>Feats</p>
        <hr class="border-gray-300">
        <p>Showcase</p>
        <hr class="border-gray-300">
        <p>Service</p>
        <hr class="border-gray-300">
        <p>Portfolio</p>
        <hr class="border-gray-300">
        <p>Testimonial</p>
      </x-slot>
    </x-dashboard-card-edit>

  </div>
</section>
