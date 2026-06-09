<script setup lang="ts">
const subMenuOpen = ref(false);

const props = defineProps({
	item: {
		type: Object,
		required: true,
	},
});

const emit = defineEmits(['close']);
</script>
<template>
	<div v-if="item.children.length > 0">
		<button class="flex items-center" @click="subMenuOpen = !subMenuOpen">
			<span class="text-2xl mr-2 font-medium font-display text-gray-900 dark:text-white">
				{{ item.title }}
			</span>
			<Icon v-if="item.children.length > 0" name="heroicons:plus" class="w-5 h-5 text-gray-400" />
		</button>
		<Motionable
			v-motion
			as="div"
			name="submenu"
			:show="subMenuOpen"
			:initial="{ opacity: 0, x: 400, scale: 0.9 }"
			:enter="{
				opacity: 1,
				scale: 1,
				x: 0,
				transition: { duration: 300 },
			}"
			:leave="{
				opacity: 0,
				x: 400,
				scale: 0.9,
				transition: { duration: 300 },
			}"
			class="fixed inset-0 z-50 flex flex-col w-full h-full bg-white dark:bg-gray-950"
		>
			<div class="w-full px-6">
				<TypographyTitle class="pb-2 border-b border-gray-200 dark:border-gray-800">{{ item.title }}</TypographyTitle>
				<NuxtLink
					v-for="child in item.children"
					:key="child.id"
					:href="child.url"
					class="block px-3 py-4 border-b border-gray-100 dark:border-gray-800"
				>
					<VText size="xl" class="font-medium text-gray-900 dark:text-white">
						{{ child.title }}
					</VText>
					<VText v-if="child.label" text-color="light">
						{{ child.label }}
					</VText>
				</NuxtLink>
			</div>
			<div class="absolute bottom-4 left-4">
				<UButton icon="material-symbols:arrow-back-rounded" label="Back" color="gray" variant="ghost" @click="subMenuOpen = false" />
			</div>
		</Motionable>
	</div>
	<NuxtLink v-else :href="item.url" class="flex items-center">
		<span class="text-2xl font-medium font-display text-gray-900 dark:text-white">
			{{ item.title }}
		</span>
	</NuxtLink>
</template>
