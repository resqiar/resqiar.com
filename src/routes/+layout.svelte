<script lang="ts">
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';
	import Analytics from '../components/others/Analytics.svelte';

	import '../styles/app.css';
	import '../styles/fonts.css';
	import '../styles/nprogress.css';

	/**
	 * NProgress Configs
	 * Simply show loading progress at the top
	 * When navigating around client-side
	 * @see https://github.com/rstacruz/nprogress#configuration
	 */
	NProgress.configure({
		speed: 500,
		minimum: 0.16
	});

	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}
</script>

<Analytics />

<slot />
