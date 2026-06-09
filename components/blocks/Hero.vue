<script setup lang="ts">
import type { BlockHero, BlockButtonGroup } from '~/types';

defineProps<{
	data: BlockHero;
}>();
</script>
<template>
	<BlockContainer class="relative grid gap-12 md:grid-cols-3">
		<div class="md:pt-12 md:col-span-2">
			<TypographyTitle v-if="data.title">
				{{ data.title }}
			</TypographyTitle>
			<TypographyHeadline v-if="data.headline" :content="data.headline" size="title" as="h1" />
			<TypographyProse v-if="data.content" :content="data.content" size="lg" class="py-6" />
			<BlocksButtonGroup v-if="data.button_group" :data="data.button_group as BlockButtonGroup" />
		</div>
		<div
			v-if="data.image"
			class="overflow-hidden border border-gray-200 dark:border-gray-700 rounded-card shadow-level-2 lg:relative lg:h-full"
			:class="data.image_position === 'left' ? 'order-first lg:-ml-48 md:-ml-16' : 'lg:-mr-48 md:-mr-16 '"
		>
			<NuxtImg
				v-if="data.image"
				class="w-full overflow-hidden dark:brightness-90 max-h-[700px] h-full object-cover rounded-card"
				:src="data.image as string"
				alt=""
			/>
		</div>
	</BlockContainer>
</template>
