<script>
	import AtIcon from '../icons/AtIcon.svelte';
	import GithubIcon from '../icons/GithubIcon.svelte';
	import LinkedInIcon from '../icons/LinkedInIcon.svelte';
	import ResumeIcon from '../icons/ResumeIcon.svelte';
	import TwitterIcon from '../icons/TwitterIcon.svelte';
	import YoutubeIcon from '../icons/YoutubeIcon.svelte';
</script>

<div class="hero bg-base-200 lg:min-h-[600px]">
	<div
		class="hero-content h-full w-full flex-col justify-center gap-12 py-0 lg:flex-row-reverse lg:px-8"
	>
		<img
			alt="Hero"
			src="/media/talent.webp"
			width="400"
			height="200"
			class="max-w-[250px] rounded-lg object-cover lg:mr-8 lg:max-w-sm"
		/>

		<div class="w-full lg:max-w-[600px] lg:pr-16">
			<h1 class="justify text-2xl font-bold lg:text-5xl lg:leading-[60px]">
				<!-- Crafting cutting-edge softwares and delivering exceptional DX/UX. -->
				<span class="lg:text-6xl">Hello World!</span>
				<br />
				Greetings!, Hi!, Halo!, Apa Kabar?
			</h1>

			<p class="py-6 leading-6">
				I am a <strong>Software Engineer</strong> from the beautiful country of Indonesia 🇮🇩
				<br />
				I specialize in building Web and Server environments, but I am not limited to them. Let's explore
				and know me better!
			</p>

			<div class="mb-12 flex flex-col items-center lg:mb-0 lg:flex-row">
				<div>
					<a
						href="https://github.com/resqiar"
						target="_blank"
						class="btn btn-square btn-ghost"
						title="GitHub"
					>
						<GithubIcon />
					</a>

					<a
						href="https://www.linkedin.com/in/resqi-ageng-rahmatullah-8692911a5"
						target="_blank"
						class="btn btn-square btn-ghost"
						title="LinkedIn"
					>
						<LinkedInIcon />
					</a>

					<a
						href="https://twitter.com/resqiar_"
						target="_blank"
						class="btn btn-square btn-ghost"
						title="Twitter"
					>
						<TwitterIcon />
					</a>

					<a
						href="https://www.youtube.com/channel/UCFoRXlvnR-E2uxpMUozvpFg"
						target="_blank"
						class="btn btn-square btn-ghost"
						title="Youtube"
					>
						<YoutubeIcon />
					</a>

					<a href="mailto:contact@resqiar.com" class="btn btn-square btn-ghost" title="Email">
						<AtIcon />
					</a>
				</div>

				<!-- DIVIDER -->
				<div class="divider divider-horizontal hidden lg:flex" />

				<div>
					<a
						href="/media/resume/resume-resqiarcom.pdf"
						target="_blank"
						class="btn btn-ghost flex gap-2"
						title="View or Download Resume"
					>
						<ResumeIcon />
						<p>View Resume</p>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
