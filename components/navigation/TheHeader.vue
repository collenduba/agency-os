<script setup lang="ts">
const { theme, globals } = useAppConfig();

const {
	data: navigation,
	pending,
	error,
} = await useAsyncData(
	'mainNavigation',
	() => {
		return useDirectus(
			readItem('navigation', 'main', {
				fields: [
					{
						items: [
							'id',
							'has_children',
							'title',
							'icon',
							'label',
							'type',
							'url',
							{
								page: ['permalink', 'title'],
								children: [
									'id',
									'title',
									'has_children',
									'icon',
									'label',
									'type',
									'url',
									{
										page: ['permalink', 'title'],
									},
								],
							},
						],
					},
				],
			}),
		);
	},
	{
		transform: (data) => data,
	},
);
</script>
<template>
	<header class="relative w-full mx-auto flex items-center justify-between gap-x-4">
		<NuxtLink href="/" class="flex-shrink-0 py-2">
			<Logo class="h-6 text-gray-900 dark:text-white" />
			<span v-if="globals?.title" class="sr-only">{{ globals.title }}</span>
		</NuxtLink>

		<nav class="hidden md:flex md:items-center md:space-x-1 lg:space-x-2" aria-label="Global">
			<NavigationMenuItem v-for="item in navigation?.items" :key="item.id" :item="item" />
		</nav>

		<div class="flex items-center flex-shrink-0 space-x-3">
			<DarkModeToggle class="hidden text-gray-500 md:block hover:text-gray-700 dark:hover:text-gray-300" />
			<UButton to="/contact-us" color="primary" size="md">Let's Talk</UButton>
			<UButton to="/portal" color="gray" variant="ghost" size="md">Login</UButton>
		</div>
		<NavigationMobileMenu v-if="navigation" :navigation="navigation" />
	</header>
</template>
