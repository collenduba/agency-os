<script setup lang="ts">
import type { BlockButtonGroup, BlockCta } from '~/types';

defineProps<{
	data: BlockCta;
}>();
</script>
<template>
	<BlockContainer>
		<div class="relative overflow-hidden p-8 md:px-10 md:py-12 border border-gray-200 dark:border-gray-700 rounded-panel shadow-level-1">
			<div class="relative md:flex md:items-center md:justify-between md:space-x-4">
				<div>
					<TypographyTitle v-if="data?.title">{{ data.title }}</TypographyTitle>
					<TypographyHeadline v-if="data.headline" :content="data.headline" class="font-display" />
					<TypographyProse v-if="data.content" :content="data.content" class="mt-2" />
				</div>
				<div class="flex-shrink-0 mt-4 md:mt-0">
					<BlocksButtonGroup v-if="data.button_group" :data="data.button_group as BlockButtonGroup" />
				</div>
			</div>
		</div>
	</BlockContainer>
</template>
