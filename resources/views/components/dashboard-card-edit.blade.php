<div role="card" id="{{ $id }}" data-content="{{ $dataContent }}"
  class="group h-48 overflow-hidden rounded-lg transition-all" style="border: 1px solid lightgray">
  <div class="h-full w-full text-left">
    <div class="flex h-11 items-center bg-white p-2 font-semibold transition-all group-hover:bg-neutral-100">
      <h3>{{ $title }}</h3>
    </div>
    <div class="flex h-full flex-col gap-2 bg-neutral-100 p-2 text-xs transition-all group-hover:bg-neutral-200">
      {{ $content }}
    </div>
  </div>
</div>
