<script setup lang="ts">
const props = defineProps({
	navigation: {
		type: Object,
		required: true,
	},
});

const route = useRoute();
const { globals } = useAppConfig();

const isOpen = ref(false);
const subMenuOpen = ref(false);

const toggle = () => {
	isOpen.value = !isOpen.value;
	subMenuOpen.value = false;
};

watch(
	() => route.path,
	() => {
		isOpen.value = false;
	},
);

watch(
	() => isOpen.value,
	(newVal) => {
		document.body.style.overflow = newVal ? 'hidden' : 'auto';
	},
);
</script>
<template>
	<div class="md:hidden">
		<Motionable
			v-motion
			as="div"
			name="menu"
			:show="isOpen"
			:initial="{ opacity: 0, y: 400, scale: 0.9 }"
			:enter="{
				opacity: 1,
				y: 0,
				scale: 1,
				transition: { duration: 300 },
			}"
			:leave="{
				opacity: 0,
				y: 400,
				scale: 0.9,
				transition: { duration: 300 },
			}"
			class="fixed inset-0 z-50 flex flex-col w-full h-full bg-white dark:bg-gray-950"
		>
			<div class="relative flex items-center justify-between w-full px-6 pt-6 pb-4 border-b border-gray-200 dark:border-gray-800">
				<NuxtLink href="/">
					<Logo class="h-6" />
				</NuxtLink>
				<DarkModeToggle />
			</div>
			<div class="flex flex-col justify-center flex-1 px-6 space-y-4">
				<NavigationMobileMenuItem v-for="item in navigation.items" :key="item.id" :item="item" @close="toggle" />
				<UButton href="/contact-us" color="primary" size="lg" class="mt-4">Let's Talk</UButton>
			</div>
		</Motionable>
		<button
			:class="{
				'bg-primary': isOpen || !isOpen,
			}"
			class="fixed z-50 p-3 text-white transition duration-300 shadow-level-2 md:hidden bottom-4 right-4 bg-primary rounded-button"
			@click="toggle"
		>
			<div>
				<span class="sr-only">Close</span>
				<Icon v-if="!isOpen" name="heroicons:bars-3" class="w-6 h-6" />
				<Icon v-if="isOpen" name="heroicons:x-mark" class="w-6 h-6" />
			</div>
		</button>
	</div>
</template>
