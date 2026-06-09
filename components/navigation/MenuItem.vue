<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import type { RouteLocationRaw } from '#vue-router';
import type { NavigationItem } from '~~/types';

const route = useRoute();

const props = defineProps<{
	item: NavigationItem;
}>();

const popover: Ref<any> = ref(null);

watch(
	() => route.path,
	() => {
		return popover.value?.();
	},
);
</script>
<template>
	<NuxtLink
		v-if="!item.has_children"
		:href="getNavItemUrl(item) as RouteLocationRaw"
		class="menu-link"
		exact-active-class="bg-gray-100 dark:bg-gray-800"
		:target="item.open_in_new_tab ? '_blank' : '_self'"
	>
		{{ item.title }}
	</NuxtLink>

	<Popover v-else v-slot="{ close }" class="relative" as="div">
		<PopoverButton
			:ref="
				() => {
					popover = close;
				}
			"
			class="menu-link"
		>
			{{ item.title }}
			<Icon name="heroicons:chevron-down" class="flex-none w-4 ml-0.5 text-gray-400" aria-hidden="true" />
		</PopoverButton>

		<transition
			enter-active-class="transition duration-200 ease-out"
			enter-from-class="translate-y-1 opacity-0"
			enter-to-class="translate-y-0 opacity-100"
			leave-active-class="transition duration-150 ease-in"
			leave-from-class="translate-y-0 opacity-100"
			leave-to-class="translate-y-1 opacity-0"
		>
			<PopoverPanel
				class="absolute z-10 w-screen max-w-md mt-3 overflow-hidden bg-white dark:bg-gray-900 shadow-level-2 rounded-panel ring-1 ring-gray-200 dark:ring-gray-700"
			>
				<div class="p-3">
					<NuxtLink
						v-for="childItem in item.children as NavigationItem[]"
						:key="childItem.id"
						:href="getNavItemUrl(childItem) as RouteLocationRaw"
						class="relative flex p-3 leading-6 transition duration-150 rounded-panel group gap-x-4 hover:bg-gray-50 dark:hover:bg-gray-800"
					>
						<div
							class="flex items-center justify-center flex-none p-2 mt-0.5 border rounded-button h-10 w-10 border-gray-200 dark:border-gray-700"
						>
							<Icon
								v-if="childItem.icon"
								:name="convertIconName(childItem.icon) as string"
								class="w-5 h-5 text-gray-600 dark:text-gray-300"
							/>
						</div>
						<div class="">
							<p class="block text-sm font-medium text-gray-900 dark:text-white">
								{{ childItem.title }}
							</p>
							<p v-if="childItem.label" class="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
								{{ childItem.label }}
							</p>
						</div>
					</NuxtLink>
				</div>
			</PopoverPanel>
		</transition>
	</Popover>
</template>

<style lang="postcss">
.menu-link {
	@apply text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition duration-150 font-medium py-2 px-3 inline-flex items-center text-sm outline-none rounded-button;
}
</style>
