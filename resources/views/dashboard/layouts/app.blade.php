<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">

  <title>{{ $title }}</title>

  <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
  <link rel="manifest" href="favicon/site.webmanifest">

  {{-- Fonts --}}
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
    rel="stylesheet">

  {{-- Scripts --}}
  <script src="js/dashboard.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>

  {{-- Vite --}}
  @vite(['resources/scss/dashboard/app.scss', 'resources/js/app.js'])
</head>

<body>
  @include('dashboard.partials.nav')
  @include('dashboard.partials.sidebar')

  <main>
    <div id="dashboard-content" class="mt-16 ml-16 p-6 lg:ml-56">
      @yield('container')
    </div>
  </main>
</body>

</html>
