<script setup lang="ts">
definePageMeta({
	middleware: ['guest'],
});
</script>
<template>
	<div class="relative flex min-h-full antialiased bg-white dark:bg-gray-950">
		<div class="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
			<div class="w-full max-w-sm mx-auto space-y-8 lg:w-96">
				<DarkModeToggle />
				<Logo class="w-auto h-12" />
				<slot />
			</div>
		</div>
		<div class="relative flex-1 hidden bg-gray-50 dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 lg:block">
		</div>
	</div>
</template>
<style>
html {
	@apply h-full;
}
body {
	@apply h-full;
}
#__nuxt {
	@apply h-full;
	@apply overflow-y-auto !important;
}
</style>
