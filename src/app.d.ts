// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}

	interface SvelteFile {
		default: import('svelte/internal').SvelteComponent;
		metadata: Record<string, string>;
	}

	type FileResolver = () => Promise<SvelteFile>;
}

declare module 'svelte-carousel';
