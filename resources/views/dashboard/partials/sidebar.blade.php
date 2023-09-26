{{-- Sidebar full --}}
<aside class="fixed z-10 mt-16 h-screen w-56 bg-gray-100">
  <nav class="h-full w-full px-4 py-6">
    <ul class="text-md flex flex-col">
      <li>
        <a id="nav-home" href="{{ route('dashboard.home') }}"
          class="block w-full rounded-lg p-3 text-left hover:bg-gray-200 focus:bg-gray-200">
          <span>Dashboard</span>
        </a>
      </li>
      <li>
        <a id="nav-pages" href="{{ route('dashboard.pages') }}"
          class="block w-full rounded-lg p-3 text-left hover:bg-gray-200 focus:bg-gray-200">
          <span>Pages</span>
        </a>
      </li>
      <li>
        <a id="nav-posts" href="{{ route('dashboard.posts') }}"
          class="block w-full rounded-lg p-3 text-left hover:bg-gray-200 focus:bg-gray-200">
          <span>Posts</span>
        </a>
      </li>
      <li>
        <a id="nav-stats" href="{{ route('dashboard.stats') }}"
          class="block w-full rounded-lg p-3 text-left hover:bg-gray-200 focus:bg-gray-200">
          <span>Stats</span>
        </a>
      </li>
      <li>
        <a id="nav-mail" href="{{ route('dashboard.mail') }}"
          class="block w-full rounded-lg p-3 text-left hover:bg-gray-200 focus:bg-gray-200">
          <span>Mailing</span>
        </a>
      </li>
    </ul>
  </nav>
</aside>
