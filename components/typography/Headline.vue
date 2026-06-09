<script setup lang="ts">
interface HeadlineProps {
	content: string;
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'title';
}

withDefaults(defineProps<HeadlineProps>(), {
	as: 'h2',
	size: 'md',
});
</script>
<template>
	<div
		:class="[
			{
				'text-xl': size === 'xs',
				'text-2xl': size === 'sm',
				'text-3xl md:text-4xl': size === 'md',
				'text-4xl md:text-5xl': size === 'lg',
				'text-2xl md:text-5xl lg:text-6xl': size === 'xl',
				'text-4xl xs:text-5xl md:text-6xl lg:text-7xl': size === 'title',
			},
			size === 'title' || size === 'xl' ? 'tracking-display font-display' : 'tracking-display-sm font-display',
			'font-display leading-tight text-gray-900 dark:text-white',
		]"
		v-html="content"
	/>
</template>
