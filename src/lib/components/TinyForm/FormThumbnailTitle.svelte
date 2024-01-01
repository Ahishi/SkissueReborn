<script lang="ts">
	export let color: string = '#000000';
</script>

<span class='absolute bottom-0 left-0 right-0 h-fit p-default font-medium rounded-lg' style='background-color: {color}'>
		<span class='text-left'><slot/></span>
</span>