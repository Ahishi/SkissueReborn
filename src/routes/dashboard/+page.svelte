<script lang="ts">
  import { smallformlist } from '../../mockdata/form'
  import FormThumbnail from '$lib/components/TinyForm/FormThumbnail.svelte'
  import FormThumbnailContainer from '$lib/components/containers/FormThumbnailContainer.svelte'
</script>

<FormThumbnailContainer>
  {#each smallformlist as form}
    <FormThumbnail {form} />
  {/each}
</FormThumbnailContainer>
