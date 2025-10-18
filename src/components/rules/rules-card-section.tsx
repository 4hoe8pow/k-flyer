import { component$ } from "@builder.io/qwik";
import { useScrollFade } from "./scroll-fade";

export interface RuleCard {
	title: string;
	tag: string;
	description: string;
}

export interface RulesCardSectionProps {
	accentLabel: string;
	title: string;
	cards: RuleCard[];
}

export const RulesCardSection = component$((props: RulesCardSectionProps) => {
	const { accentLabel, title, cards } = props;
	const scrollFade = useScrollFade({ threshold: 0.28 });

	return (
		<section
			ref={scrollFade.ref}
			data-scroll-fade
			class={`scroll-fade${scrollFade.visible.value ? " scroll-fade--visible" : ""} rules-card-section silver-container mt-[3.5rem] md:mt-[5rem] w-full`}
		>
			<div class="rules-card-header">
				<p class="accent-label">{accentLabel}</p>
				<h3 class="rules-card-title">{title}</h3>
			</div>
			<div class="rules-card-grid">
				{cards.map((card, index) => (
					<article
						key={card.title}
						class="rule-card"
						data-card-index={index + 1}
					>
						<span class="rule-card-tag">{card.tag}</span>
						<h4 class="rule-card-title-text">{card.title}</h4>
						<p class="rule-card-copy">{card.description}</p>
					</article>
				))}
			</div>
		</section>
	);
});
