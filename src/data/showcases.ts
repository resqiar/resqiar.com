import {
	astro,
	fastify,
	flask,
	golang,
	jdoodle,
	nestjs,
	passport,
	postgres,
	python,
	svelte,
	tailwind,
	typeorm,
	typescript
} from './stack';

export const showcaseData = [
	{
		title: 'Resqiar.com',
		description:
			'My personal page where it becomes the place I want to share all the knowledges, thoughts, playground and everything in between.',
		images: [
			'/media/resqiar-1.webp',
			'/media/resqiar-2.webp',
			'/media/resqiar-3.webp',
			'/media/resqiar-4.webp',
			'/media/resqiar-5.webp',
			'/media/resqiar-6.webp'
		],
		demoURL: 'https://resqiar.com',
		sourceURL: 'https://github.com/resqiar/resdev',
		techs: [svelte, typescript, tailwind, golang, postgres]
	},
	{
		title: 'Roof Tile Collection',
		description: 'A collections of Roof Tile for SME Business',
		images: ['/media/rooftile-1.webp', '/media/rooftile-2.webp'],
		demoURL: 'https://tokoriskiageng.vercel.app',
		techs: [astro, tailwind]
	},
	{
		title: 'Algo Visualizer',
		description: 'Visualize infamous many algorithms for showcase and learning purpose.',
		images: ['/media/algo.webp', '/media/algo-1.webp', '/media/algo-2.webp', '/media/algo-3.webp'],
		demoURL: 'https://resqiar.github.io/algo-visualization',
		sourceURL: 'https://github.com/resqiar/algo-visualization',
		techs: [svelte, typescript]
	},
	{
		title: 'Binder',
		description:
			'My personal binder extensions. Used to store additional data to organize my binder books. With Image, Code, Playground, and QR Code functionalities, effortlessly store and organize additional data within your binder books.',
		images: [
			'/media/binder.webp',
			'/media/binder-1.webp',
			'/media/binder-2.webp',
			'/media/binder-3.webp'
		],
		sourceURL: 'https://github.com/resqiar/binder',
		techs: [svelte, typescript, tailwind, jdoodle]
	},
	{
		title: 'Binder Server',
		description:
			"Binder server built with NestJS and Fastify. The server provides and maintains Extension's data to Binder App through its APIs.",
		images: [
			'/media/binder.webp',
			'/media/binder-1.webp',
			'/media/binder-2.webp',
			'/media/binder-3.webp'
		],
		sourceURL: 'https://github.com/resqiar/binder-server',
		techs: [typescript, nestjs, fastify, postgres, typeorm, passport]
	},
	{
		title: 'Go Bookstore',
		description:
			'Go Bookstore is a Golang and Postgres-based project that offers an online book store. The project also includes an admin dashboard for management of inventory. in collaboration with @Hilll19 and @nathanpasca',
		images: [
			'/media/bookstore.webp',
			'/media/bookstore-1.webp',
			'/media/bookstore-2.webp',
			'/media/bookstore-3.webp'
		],
		sourceURL: 'https://github.com/resqiar/bookstore',
		techs: [golang, postgres]
	},
	{
		title: 'AI Anime Recommender',
		description:
			'Personalized anime recommendation based on user-based similarity calculations. Use collaborative filtering method with Pearson and Cosine. Built in-collaboration with @Hilll19 and @nathanpasca.',
		images: ['/media/ai-recommender.webp'],
		sourceURL: 'https://github.com/resqiar/anime-recommender',
		techs: [python, flask]
	}
];
