import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
	useVisibleTask$(() => {
		document.body.classList.add("loaded");
	});

	return (
		<main class="relative flex h-screen flex-col items-center justify-center text-white overflow-hidden selection:bg-white/20">
			<h1 class="text-6xl md:text-8xl font-light tracking-[0.25em] opacity-0 animate-fade-blur">
				KABADDI
			</h1>
			<p class="mt-6 text-sm md:text-base text-neutral-400 font-light opacity-0 animate-fade-blur-delay">
				カバディ、カバディ、カバディ、、、
			</p>
			<a
				href="/rules"
				class="mt-10 text-xs uppercase tracking-widest text-neutral-300 link-underline hover:text-white transition-colors"
			>
				learn more
			</a>

			{/* 背景層 */}
			<div class="absolute inset-0 -z-10 particle-layer"></div>
		</main>
	);
});

export const head: DocumentHead = {
	title: "KABADDI | 感じるルール",
	meta: [
		{
			name: "description",
			content: "カバディを“感じる”Web体験。",
		},
	],
};
