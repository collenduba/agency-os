import { theme } from '~/theme';

const { primary: _primary, gray: _gray, ...themeWithoutColors } = theme;

export default defineAppConfig({
	theme: themeWithoutColors,
	ui: {
		strategy: 'override',
		notifications: {
			position: 'top-0 right-0 bottom-auto left-auto',
		},
		card: {
			base: 'transition duration-200',
			shadow: 'shadow-level-1',
			body: {
				base: 'h-full flex flex-col',
			},
			rounded: 'rounded-card',
			ring: 'ring-1 ring-gray-200 dark:ring-gray-700',
		},
		button: {
			font: 'font-medium',
			rounded: 'rounded-button',
			default: {
				loadingIcon: 'material-symbols:sync-rounded',
				size: 'md',
			},
		},
		badge: {
			rounded: 'rounded-button',
		},
		input: {
			default: {
				loadingIcon: 'material-symbols:sync-rounded',
			},
			rounded: 'rounded-input',
		},
		select: {
			rounded: 'rounded-input',
			default: {
				loadingIcon: 'material-symbols:sync-rounded',
				trailingIcon: 'material-symbols:expand-more-rounded',
			},
		},
		textarea: {
			rounded: 'rounded-input',
		},
		selectMenu: {
			rounded: 'rounded-input',
			default: {
				selectedIcon: 'material-symbols:fitbit-check-small-rounded',
			},
		},
		notification: {
			default: {
				closeButton: {
					icon: 'i-octicon-x-24',
				},
			},
		},
		commandPalette: {
			default: {
				icon: 'material-symbols:search-rounded',
				loadingIcon: 'material-symbols:sync-rounded',
				selectedIcon: 'material-symbols:fitbit-check-small-rounded',
				emptyState: {
					icon: 'material-symbols:search-rounded',
				},
			},
		},
		table: {
			default: {
				sortAscIcon: 'octicon:sort-asc-24',
				sortDescIcon: 'octicon:sort-desc-24',
				loadingState: {
					icon: 'material-symbols:sync-rounded',
				},
				emptyState: {
					icon: 'material-symbols:database-outline',
				},
			},
		},
		avatar: {
			default: {},
			rounded: 'rounded-button',
		},
		breadcrumb: {
			default: {
				divider: 'material-symbols:chevron-right',
			},
		},
		pagination: {
			rounded: 'first:rounded-l-button last:rounded-r-button',
			default: {
				prevButton: {
					icon: 'material-symbols:arrow-back-rounded',
				},
				nextButton: {
					icon: 'material-symbols:arrow-forward-rounded',
				},
			},
		},
	},
});
