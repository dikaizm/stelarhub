<header class="fixed z-20 h-16 w-full bg-gray-600">
  <div class="flex h-full items-center justify-between px-4">
    <div class="flex items-center gap-4">
      <button id="menu-btn" role="button" class="rounded-full p-2 hover:bg-white/20" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      <div class="w-28">
        <a href="/">
          <img src="assets/stelar-logo-white.svg" alt="">
        </a>
      </div>
    </div>

    <div class="relative mr-6">
      {{-- Profile --}}
      <div class="flex items-center gap-5">
        <button class="rounded-full p-2 hover:bg-white/20">
          <svg class="h-5 w-5 text-white">
            <use xlink:href="#icon-notification"></use>
          </svg>
        </button>

        <button class="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full">
          <img
            src="https://images.pexels.com/photos/732425/pexels-photo-732425.jpeg?auto=compress&cs=tinysrgb&w=400&dpr=2"
            alt="">
        </button>
      </div>

      {{-- Dropdown Profile --}}
      <div class="absolute right-0 mt-2 h-fit w-64 rounded-lg bg-white p-4 drop-shadow-xl hidden">
        <div class="grid gap-4 text-sm">
          <div class="flex items-center gap-4">
            <div class="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full">
              <img
                src="https://images.pexels.com/photos/732425/pexels-photo-732425.jpeg?auto=compress&cs=tinysrgb&w=400&dpr=2"
                alt="">
            </div>
            <div class="grid">
              <p class="font-semibold">Username</p>
              <p class="text-neutral-500">user type</p>
            </div>
          </div>

          <hr>

          <div class="grid gap-4">
            <p>My Profile</p>
            <p>Settings</p>
          </div>

          <hr>

          <div>
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</header>
