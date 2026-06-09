<script setup lang="ts">
interface BlockContainerProps {
	fullWidth?: boolean;
}

withDefaults(defineProps<BlockContainerProps>(), {
	fullWidth: false,
});
</script>
<template>
	<section :class="['py-12 mx-auto md:py-16 lg:py-24', !fullWidth ? 'px-6 lg:px-16 max-w-container' : '']">
		<slot />
	</section>
</template>
