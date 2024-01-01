<script lang="ts">
  import type { CommunityListObject } from '../../types/community'
  import Avatar from '$lib/components/common/Avatar.svelte'

  export let community: CommunityListObject
</script>

<button
  class="bg-inverseOnSurface flex h-quadruple rounded-2xl p-half opacity-75 transition duration-150 hover:opacity-100"
>
  <span class="h-full rounded-full bg-background">
    <Avatar name={community.name} src={community.icon} />
  </span>
  <span class="my-auto ml-half flex h-fit flex-col">
    <span class="text-left text-lg font-semibold">{community.name}</span>
    {#if community.description}
      <span class="-mt-half text-left text-sm italic opacity-75">{community.description}</span>
    {/if}
  </span>
</button>
