@extends('layouts.main')

@section('nav')
    @include('partials.nav')
@endsection

@section('container')
<div class="container h-screen">
    <div class="flex flex-col items-center justify-center h-full gap-4">
        <h2 class="text-6xl font-bold text-red-500">404</h2>
        <p class="text-neutral-700">Oops! Something is wrong.</p>
    </div>
</div>
@endsection