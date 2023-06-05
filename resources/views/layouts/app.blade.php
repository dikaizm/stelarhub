@extends('layouts.main')

@section('nav')
  @include('partials.nav')
@endsection

@section('container')
  @yield('container')
@endsection

@section('footer')
  @include('partials.footer')
@endsection
