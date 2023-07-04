@extends('layouts.app')

@section('container')
  <div style="margin-top: 6rem; margin-bottom: 6rem; display:grid; gap: 2rem;" class="container">
    @foreach ($posts as $post)
      <article>
        <h2>
          <a href="/blog/{{ $post->slug }}">
            {{ $post->title }}
          </a>
        </h2>
        <p>{{ $post->author }}</p>
        <p>{!! $post->body !!}</p>
      </article>
    @endforeach
  </div>
@endsection
