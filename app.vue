<script setup lang="ts">
import { borderRadiusMap } from '~/theme';

const { globals, theme } = useAppConfig();
const { fileUrl } = useFiles();

useSchemaOrg([
	defineOrganization({
		name: globals?.title ?? 'AgencyOS',
		logo: globals?.logo_on_light_bg ? fileUrl(globals?.logo_on_light_bg) : '/logos/agencyos.png',
		sameAs: () => {
			const socialLinks = globals?.social_links ?? [];
			return socialLinks.map((link) => link.url);
		},
	}),
]);

useHead({
	style: [
		{
			id: 'design-tokens',
			innerHTML: `:root {${Object.entries(borderRadiusMap[theme.borderRadius])
				.map(([key, value]) => `--border-radius-${key}: ${value};`)
				.join('\n')}\n${Object.entries(theme.fonts)
				.map(([key, value]) => `--font-${key}: ${value};`)
				.join('\n')}
--font-mono: ${theme.fonts.code};`,
		},
	],
});
</script>

<template>
	<NuxtLayout>
		<NuxtLoadingIndicator
			color="repeating-linear-gradient(to right,var(--color-primary-400),var(--color-primary-600))"
		/>
		<NuxtPage />
	</NuxtLayout>
</template>
