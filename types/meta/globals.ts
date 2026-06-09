import type { File } from '../system/index.js';

export interface ThemeSettings {
	primary?: string | null;
	gray?: string | null;
	borderRadius?: string | null;
	fonts?: {
		families?: {
			display?: string | null;
			body?: string | null;
			code?: string | null;
		} | null;
	} | null;
}

export interface Globals {
	address_country?: string | null;
	address_locality?: string | null;
	address_region?: string | null;
	/** URL for the build / deploy hook that starts a new build */
	build_hook_url?: string | null;
	description?: string | null;
	email?: string | null;
	id?: string;
	og_image?: (string | File) | null;
	phone?: string | null;
	postal_code?: string | null;
	routes?: { [key: string]: any } | null;
	social_links: { [key: string]: any } | null;
	street_address?: string | null;
	/** What's the website title? */
	tagline?: string | null;
	/** What's the website title? */
	title?: string | null;
	/** What's is the base url for the site? */
	url?: string | null;
	contact?: string;
	deployment?: string;
	/** This will be the default metadata used for SEO */
	seo?: string;
	social?: string;
	notice_deployment?: string;
	/** Theme configuration (primary, gray, borderRadius, fonts) */
	theme?: ThemeSettings | null;
}
