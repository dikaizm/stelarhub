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

  {{-- Styles --}}
  <link rel="stylesheet" href="css/dev.css">
  <link rel="stylesheet" href="css/styles.css">

  <script src="js/script.js"></script>

  {{-- Vite --}}
  @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body class="h-full bg-white">
  @include('partials.nav')

  <main class="relative w-full pt-0 overflow-hidden">
    @yield('container')
  </main>

  @include('partials.footer')
</body>

</html>
