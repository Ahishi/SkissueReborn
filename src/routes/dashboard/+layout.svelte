<script>
  import Profile from '$lib/components/Profile.svelte'
  import GroupsListContainer from '$lib/components/containers/GroupsListContainer.svelte'
  import CommunityListItem from '$lib/components/CommunityListItem.svelte'
  import { communityListObjects } from '../../mockdata/communities'
  import Button from '$lib/components/common/Button.svelte'
  import AppBar from '$lib/components/containers/AppBar.svelte'
  import SearchBar from '$lib/components/common/SearchBar.svelte'
  import SideDrawer from '$lib/components/containers/SideDrawer.svelte'
  import Header from '$lib/components/Header.svelte'
</script>

<Header>
  <AppBar>
    <div class="ml-half flex gap-x-default">
      <SearchBar />
      <span class="my-auto h-fit"><Button icon="add">New</Button></span>
    </div>
    <div class="flex h-full">
      <Profile name={'Tester'} icon={'/img.png'} />
    </div>
  </AppBar>
</Header>
<SideDrawer>
  <h2 slot="header" class="flex h-quintuple justify-between px-default">
    <span class="title-font my-auto w-fit text-xl font-semibold">Communities</span>
    <span class="my-auto">
      <Button icon="add">Create</Button>
    </span>
  </h2>
  <GroupsListContainer slot="body">
    {#each communityListObjects as community}
      <CommunityListItem {community} />
    {/each}
  </GroupsListContainer>
</SideDrawer>
<main class="ml-80 p-default">
  <slot />
</main>
