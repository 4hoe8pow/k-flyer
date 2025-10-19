import { component$ } from "@builder.io/qwik";

import { SectionHeader } from "./section-header";

export type HighlightEntry = {
	title: string;
	details: string[];
};

export type RecentHighlightsSectionProps = {
	highlights: HighlightEntry[];
};

export const RecentHighlightsSection = component$<RecentHighlightsSectionProps>(
	({ highlights }) => {
		return (
			<section class="about-section about-section--highlights">
				<SectionHeader
					kicker="Recent Highlights"
					title="近年の成果と注目"
					intro="2025年における国内大会と国際大会での成果を記録し、現行世代の動向を把握します。"
				/>
				<div class="highlight-grid">
					{highlights.map((highlight) => (
						<article key={highlight.title} class="highlight-card">
							<h3 class="highlight-card-title">{highlight.title}</h3>
							<ul class="highlight-card-list">
								{highlight.details.map((detail) => (
									<li key={detail}>{detail}</li>
								))}
							</ul>
						</article>
					))}
				</div>
			</section>
		);
	},
);
