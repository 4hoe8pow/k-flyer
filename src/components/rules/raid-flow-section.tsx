import { component$ } from "@builder.io/qwik";
import { useScrollFade } from "./scroll-fade";

export interface RaidFlowStep {
	title: string;
	tagline: string;
	detail: string;
}

export interface RaidFlowSectionProps {
	accentLabel: string;
	title: string;
	steps: RaidFlowStep[];
}

export const RaidFlowSection = component$((props: RaidFlowSectionProps) => {
	const { accentLabel, title, steps } = props;
	const scrollFade = useScrollFade({ threshold: 0.24 });
	const layoutModifiers = [
		"flow-step--span-two",
		"flow-step--top-right",
		"flow-step--bottom-left",
		"flow-step--span-two-reverse",
	];

	return (
		<section
			ref={scrollFade.ref}
			data-scroll-fade
			class={`scroll-fade${scrollFade.visible.value ? " scroll-fade--visible" : ""} rules-flow-panel silver-container mt-[3rem] md:mt-[4rem] w-full`}
		>
			<div class="rules-flow-header">
				<p class="accent-label">{accentLabel}</p>
				<h3 class="rules-flow-title">{title}</h3>
			</div>
			<div class="rules-flow-grid">
				{steps.map((step, index) => (
					<article
						key={step.title}
						class={`flow-step ${layoutModifiers[index] ?? ""}`.trim()}
					>
						<span class="flow-step-index">0{index + 1}</span>
						<div class="flow-step-body">
							<h4>{step.title}</h4>
							<p class="flow-step-tagline">{step.tagline}</p>
							<p class="flow-step-copy">{step.detail}</p>
						</div>
					</article>
				))}
			</div>
		</section>
	);
});
