import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import { SectionHeader } from "./section-header";

export type FeatureAngle = {
	label: string;
	description: string;
};

export type FeatureSectionProps = {
	features: FeatureAngle[];
};

export const FeatureSection = component$<FeatureSectionProps>(
	({ features }) => {
		return (
			<section class="about-section about-section--features">
				<SectionHeader
					kicker="Signature Traits"
					title="日本カバディの特徴と展望"
					intro="普及と競技力向上を支える枠組みを整理し、今後の注力領域を明確にします。"
				/>
				<div class="feature-grid">
					{features.map((feature) => (
						<article key={feature.label} class="feature-card">
							<h3 class="feature-card-title">{feature.label}</h3>
							<p class="feature-card-body">{feature.description}</p>
						</article>
					))}
				</div>
				<nav class="about-nav">
					<Link href=".." class="about-nav-link about-nav-link--neutral">
						トップへ戻る
					</Link>
					<Link href="../rules" class="about-nav-link about-nav-link--primary">
						ルールガイドを見る
					</Link>
				</nav>
			</section>
		);
	},
);
