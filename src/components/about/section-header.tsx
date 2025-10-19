import { component$ } from "@builder.io/qwik";

export type SectionHeaderProps = {
	kicker: string;
	title: string;
	intro: string;
};

export const SectionHeader = component$<SectionHeaderProps>(
	({ kicker, title, intro }) => {
		return (
			<div class="about-hero-panel">
				<p class="about-section-kicker">{kicker}</p>
				<h2 class="about-hero-title">{title}</h2>
				<p class="about-section-intro">{intro}</p>
			</div>
		);
	},
);
