<script setup lang="ts"></script>
<template>
	<div class="relative flex flex-col min-h-screen antialiased bg-white dark:bg-gray-950">
		<div class="relative w-full max-w-container px-6 pt-6 mx-auto lg:px-16">
			<NavigationTheHeader />
		</div>

		<main class="relative">
			<slot />
		</main>

		<div class="relative w-full max-w-container px-6 mx-auto lg:px-16">
			<NavigationTheFooter />
		</div>

		<div class="fixed z-10 bottom-4 left-4">
		</div>
	</div>
</template>
