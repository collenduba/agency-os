import type { Config } from 'tailwindcss';
import tailwindcssForms from '@tailwindcss/forms';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	darkMode: 'class',
	content: [
		'./components/**/*.{vue,js,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./app.vue',
		'./plugins/**/*.{js,ts}',
		`./App.{js,ts,vue}`,
		`./app.{js,ts,vue}`,
		`./nuxt.config.{js,ts}`,
		`./form.theme.js`,
		`./formkit.config.{js,ts}`,
	],
	theme: {
		extend: {
			borderRadius: {
				card: 'var(--border-radius-card)',
				button: 'var(--border-radius-button)',
				input: 'var(--border-radius-input)',
				panel: 'var(--border-radius-panel)',
			},
			fontFamily: {
				sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
				display: ['var(--font-display)', ...defaultTheme.fontFamily.sans],
				mono: ['var(--font-mono)', ...defaultTheme.fontFamily.mono],
			},
			fontWeight: {
				display: '500',
			},
			letterSpacing: {
				display: '-0.04em',
				'display-sm': '-0.02em',
			},
			boxShadow: {
				'level-1': '0 1px 3px rgba(0,0,0,0.06)',
				'level-2': '0 8px 24px rgba(0,0,0,0.08)',
				'level-3': '0 16px 48px rgba(0,0,0,0.12)',
			},
			maxWidth: {
				container: '1280px',
			},
			animation: {
				'fade-in': 'fade-in 0.5s linear forwards',
			},
			keyframes: {
				'fade-in': {
					from: {
						opacity: '0',
					},
					to: {
						opacity: '1',
					},
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		tailwindcssForms,
	],
} satisfies Config;
