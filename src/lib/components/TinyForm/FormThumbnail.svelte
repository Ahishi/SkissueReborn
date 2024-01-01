<script lang="ts">
  import type { SmallForm } from '../../../types/form.d.ts'
  import FormThumbnailTitle from '$lib/components/TinyForm/FormThumbnailTitle.svelte'
  export let form: SmallForm
</script>

<button class="relative h-52 w-full opacity-75 transition duration-150 hover:opacity-100">
  <!-- Background "image" -->
  <span
    class="absolute bottom-default left-half right-half top-half z-0 grid grid-cols-3 gap-half rounded-2xl bg-surface px-default pb-triple pt-default"
  >
    <span class="bg-inverseOnSurface col-span-3 rounded-full"></span>
    <span class="bg-inverseOnSurface col-span-1 rounded-full"></span>
    <span class="bg-inverseOnSurface col-span-1 rounded-full"></span>
    <span class="bg-inverseOnSurface col-span-1 rounded-full"></span>
    <span class="bg-inverseOnSurface col-span-2 rounded-full"></span>
    <span class="bg-inverseOnSurface col-span-1 rounded-full"></span>
    <span class="bg-inverseOnSurface col-span-1 rounded-full"></span>
    <span class="col-span-2"></span>
    <span class="bg-inverseOnSurface col-span-2 rounded-full"></span>
    <span class="bg-inverseOnSurface col-span-1 rounded-full"></span>
    <span class="col-span-3"></span>
    <span class="bg-inverseOnSurface col-span-2 rounded-full"></span>
    <span class="bg-inverseOnSurface col-span-1 rounded-full"></span>
  </span>
  <!-- Title -->
  <FormThumbnailTitle color={form.color}>
    {form.title}
  </FormThumbnailTitle>
</button>
