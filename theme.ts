export interface Theme {
	primary: string;
	gray: string;
	borderRadius: 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | 'full';
	googleFonts: {
		[key: string]: boolean | number[];
	};
	fonts: {
		display: string;
		sans: string;
		code: string;
	};
}

export const theme = {
	primary: 'red',
	gray: 'slate',
	borderRadius: 'lg',
	googleFonts: {
		Inter: [400, 500, 600],
		'JetBrains Mono': true,
	},
	fonts: {
		display: 'Inter',
		sans: 'Inter',
		code: 'JetBrains Mono',
	},
} as Theme;

// DESIGN.md rounded token spec:
//   xs: 4px     - form inputs
//   sm: 6px     - buttons (signature radius)
//   md: 8px     - compact cards
//   lg: 12px    - pricing/feature cards, product mockups
//   xl: 16px    - modals
//   full: 9999px - pill tags, avatars
export const borderRadiusMap = {
	none: {
		card: '0px',
		button: '0px',
		input: '0px',
		panel: '0px',
	},
	sm: {
		card: '0.5rem',
		button: '0.375rem',
		input: '0.25rem',
		panel: '0.5rem',
	},
	base: {
		card: '0.625rem',
		button: '0.375rem',
		input: '0.25rem',
		panel: '0.625rem',
	},
	md: {
		card: '0.75rem',
		button: '0.5rem',
		input: '0.375rem',
		panel: '0.75rem',
	},
	lg: {
		card: '0.75rem',
		button: '0.375rem',
		input: '0.375rem',
		panel: '0.75rem',
	},
	xl: {
		card: '1rem',
		button: '0.375rem',
		input: '0.375rem',
		panel: '1rem',
	},
	full: {
		card: '0.75rem',
		button: '9999px',
		input: '9999px',
		panel: '0.75rem',
	},
};
