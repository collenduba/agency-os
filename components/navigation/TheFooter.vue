<script setup lang="ts">
import type { RouteLocationRaw } from '#vue-router';
import type { NavigationItem } from '~~/types';

const { globals } = useAppConfig();

const { data: navigation } = await useAsyncData('footerNav', () => {
	return useDirectus(
		readItem('navigation', 'footer', {
			fields: [
				{
					items: [
						'id',
						'title',
						'icon',
						'label',
						'type',
						'url',
						'has_children',
						{
							page: ['permalink', 'title'],
							children: [
								'id',
								'title',
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
});

const { data: form } = await useAsyncData(
	'newsletterForm',
	() => {
		return useDirectus(
			readItems('forms', {
				filter: {
					key: {
						_eq: 'newsletter',
					},
				},
			}),
		);
	},
	{
		transform: (data) => data[0],
	},
);
</script>
<template>
	<footer class="pt-16 pb-8" aria-labelledby="footer-heading">
		<div class="mx-auto">
			<div class="flex justify-between items-start">
				<div class="w-full">
					<NuxtLink href="/">
						<Logo class="h-8 text-gray-900 dark:text-white" />
					</NuxtLink>
					<VText v-if="globals?.tagline" text-color="light" class="mt-2">
						{{ globals.tagline }}
					</VText>
				</div>
				<div class="flex items-center justify-end">
					<DarkModeToggle class="hidden text-gray-400 md:block hover:text-gray-600" />
				</div>
			</div>

			<nav class="grid gap-8 mt-8 md:grid-cols-2">
				<div class="mt-4">
					<TypographyTitle>Menu</TypographyTitle>
					<ul role="list" class="grid gap-2 mt-2 md:grid-cols-2">
						<li v-for="item in navigation?.items as NavigationItem[]" :key="item.id">
							<NuxtLink
								:to="getNavItemUrl(item) as RouteLocationRaw"
								class="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
							>
								{{ item.title }}
							</NuxtLink>
						</li>
					</ul>
				</div>

				<div v-if="form" class="relative">
					<TypographyHeadline :content="`<p>Subscribe to our <em>newsletter</em></p>`" size="sm">
						Subscribe to our newsletter
					</TypographyHeadline>
					<UForm class="mt-4 mb-8" :form="form" />
				</div>
			</nav>
		</div>

		<div class="pt-8 mx-auto mt-8 border-t border-gray-200 dark:border-gray-800 md:flex md:items-center md:justify-between">
			<div class="flex items-center space-x-6 md:order-last">
				<NuxtLink
					v-for="link in globals?.social_links"
					:key="link.url"
					:href="link.url"
					class="w-6 h-6 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
					target="_blank"
				>
					<span class="sr-only">{{ link.service }}</span>
					<Icon class="w-5 h-5" :name="`mdi:${link.service}`" />
				</NuxtLink>
			</div>
			<div class="mt-8 md:mt-0 md:order-1">
				<span class="text-sm text-gray-400">
					Copyright &copy; {{ new Date().getFullYear() }}
					<NuxtLink v-if="globals?.title" href="/" class="hover:text-gray-600 dark:hover:text-gray-300" rel="noopener noreferrer">
						{{ globals.title }}.
					</NuxtLink>
					All rights reserved.
				</span>
				<span class="block mt-1 text-sm text-gray-400">
					Site powered by
					<NuxtLink
						href="https://www.directus.io?ref=agencyos_footer"
						target="_blank"
						rel="noopener noreferrer"
						class="hover:text-gray-600 dark:hover:text-gray-300"
					>
						Directus
					</NuxtLink>
					and
					<NuxtLink
						href="https://www.nuxt.com?ref=agencyos_footer"
						target="_blank"
						rel="noopener noreferrer"
						class="hover:text-gray-600 dark:hover:text-gray-300"
					>
						Nuxt
					</NuxtLink>.
				</span>
			</div>
		</div>
	</footer>
</template>
