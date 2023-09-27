@extends('layouts.app')

@section('container')
  <div style="margin-top: 6rem; margin-bottom: 6rem;" class="container">
    <article>
      <h2>
        {{ $post->title }}
      </h2>
      <p>{{ $post->author }}</p>
      <p>{!! $post->body !!}</p>
    </article>
  </div>
@endsection
