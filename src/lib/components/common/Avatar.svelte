<script lang="ts">
	export let name: string;
	export let src: string;
</script>

<img class='rounded-full object-contain h-full aspect-square bg-dark' src={src} alt={name} />