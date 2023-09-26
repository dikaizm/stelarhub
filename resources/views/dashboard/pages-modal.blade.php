<x-dashboard-modal dataContent="content-service">
  <x-slot name="title">Services</x-slot>
  <x-slot name="content">
    <style>
      table {
        border-collapse: collapse;
      }

      table,
      th,
      td {
        border: 1px solid lightgray;
        padding: 8px;
      }

      td {
        vertical-align: top;
        font-weight: 500;
      }

      textarea {
        outline: none;
        box-shadow: none;
      }
    </style>

    <table>
      <colgroup>
        <col width="80px">
        <col width="80px">
        <col width="auto">
        <col width="auto">
        <col width="auto">
        <col width="150px">
      </colgroup>
      <thead>
        <tr class="text-left">
          <th>Name</th>
          <th>Slug</th>
          <th>Long Description</th>
          <th>Short Description</th>
          <th>Icon</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>

        @foreach ($services as $service)
          <tr>
            <td>
              <textarea class="w-20">{{ $service->name }}</textarea>
            </td>
            <td>
              <textarea class="w-20">{{ $service->slug }}</textarea>
            </td>
            <td>
              <textarea class="h-60 w-48">{{ $service->desc_long }}</textarea>
            </td>
            <td>
              <textarea class="h-60 w-48">{{ $service->desc_short }}</textarea>
            </td>
            <td style="vertical-align: middle">
              <svg class="w-10 text-black">
                <use xlink:href="{{ $service->icon }}"></use>
              </svg>
            </td>
            <td style="vertical-align: middle"><img src="{{ $service->image }}" alt=""></td>
          </tr>
        @endforeach
      </tbody>
    </table>

  </x-slot>
</x-dashboard-modal>

<x-dashboard-modal dataContent="content-testimonial">
  <x-slot name="title">Testimonials</x-slot>
  <x-slot name="content">
    this is testimonials
  </x-slot>
</x-dashboard-modal>

<x-dashboard-modal dataContent="content-contact">
  <x-slot name="title">Contact</x-slot>
  <x-slot name="content">
    this is contact
  </x-slot>
</x-dashboard-modal>

<x-dashboard-modal dataContent="content-home">
  <x-slot name="title">Home</x-slot>
  <x-slot name="content">
    this is home
  </x-slot>
</x-dashboard-modal>
