<script lang="ts">
  export let icon: string | null = null
</script>

{#if icon}
  <button
    class="text-onPrimary hover disabled:text-onBackground flex h-double gap-x-quarter rounded-full bg-primary py-quarter pr-quarter opacity-75 transition duration-150 hover:opacity-100 disabled:cursor-not-allowed disabled:bg-neutral-30 disabled:opacity-50"
  >
    <span class="material-symbols-outlined scale-90 pl-half">{icon}</span>
    <span class="my-auto pr-half text-sm font-semibold"><slot /></span>
  </button>
{:else}
  <button
    class="h-double rounded-full bg-tertiary px-default py-quarter text-on-tertiary opacity-75 transition duration-150 hover:opacity-100"
  >
    <span class="h-default pr-half text-sm font-semibold"><slot /></span>
  </button>
{/if}
