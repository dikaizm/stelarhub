<div role="modal" id="modal" class="absolute inset-0 z-50 h-screen w-screen" data-content="{{ $dataContent }}">
  <div class="fixed z-30 h-full w-full bg-black/30"></div>
  <div id="modal-container" class="fixed inset-0 z-40 m-auto h-[580px] w-[970px] overflow-hidden rounded-lg bg-white">
    <div class="h-11 bg-red-500">
        {{-- Modal header --}}
    </div>
    <div class="overflow-auto h-[calc(100%-44px)] w-full p-20">
      <div class="h-12 text-2xl font-semibold">
        <h3>{{ $title }}</h3>
      </div>
      <div class="flex h-full flex-col gap-2 text-sm">
        {{ $content }}
      </div>
    </div>
  </div>
</div>
