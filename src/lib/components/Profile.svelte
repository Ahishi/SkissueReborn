<script lang="ts">
  import Avatar from '$lib/components/common/Avatar.svelte'

  export let icon: string
  export let name: string
</script>

<button
  class="hover:bg-surfaceBright text-onSurface my-quarter flex rounded-full p-quarter transition duration-150"
>
  <Avatar src={icon} {name} />
  <span class="my-auto pl-half pr-default font-semibold">{name}</span>
</button>
