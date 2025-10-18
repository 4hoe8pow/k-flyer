import { component$ } from "@builder.io/qwik";
import { useScrollFade } from "./scroll-fade";

export interface RulesIntroStat {
	value: string;
	label: string;
}

export interface RulesIntroPanelProps {
	accentLabel: string;
	title: string;
	copy: string;
	stats: RulesIntroStat[];
}

export const RulesIntroPanel = component$((props: RulesIntroPanelProps) => {
	const { accentLabel, title, copy, stats } = props;
	const scrollFade = useScrollFade({ threshold: 0.2 });

	return (
		<section
			ref={scrollFade.ref}
			data-scroll-fade
			class={`scroll-fade${scrollFade.visible.value ? " scroll-fade--visible" : ""} rules-intro-panel silver-container w-full`}
		>
			<div class="rules-intro-content">
				<div class="rules-intro-copy">
					<p class="accent-label">{accentLabel}</p>
					<h2 class="rules-intro-title">{title}</h2>
					<p class="rules-intro-text">{copy}</p>
				</div>
				<div class="rules-intro-stats">
					{stats.map((stat) => (
						<div key={stat.label} class="rules-stat">
							<span class="rules-stat-value">{stat.value}</span>
							<span class="rules-stat-label">{stat.label}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
});
