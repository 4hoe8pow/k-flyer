import { component$ } from "@builder.io/qwik";

export interface HeroLeadProps {
	title: string;
	subtitle: string;
	animate?: boolean;
}

export const HeroLead = component$(
	({ title, subtitle, animate = false }: HeroLeadProps) => {
		const baseTitleClass =
			"hero__title font-display text-center font-light italic select-none opacity-0 mx-auto max-w-[18ch] text-[9.5vw] md:text-[5rem] lg:text-[5.5rem] tracking-[0.24em] md:tracking-[0.3em] leading-[0.96]";
		const titleClass = `${baseTitleClass} ${animate ? "animate-fade-blur" : ""}`;
		const baseSubtitleClass =
			"hero__subtitle font-dramatic text-center text-[0.8rem] md:text-[0.95rem] tracking-[0.28em] uppercase font-light opacity-0 mx-auto max-w-[70.7vw] leading-relaxed drop-shadow";
		const subtitleClass = `${baseSubtitleClass} ${animate ? "animate-fade-blur" : ""}`;

		return (
			<div class="silver-container hero-lead">
				<div class="hero__title-wrapper relative w-full flex justify-center">
					<h1
						class={titleClass}
						style={{ animationDelay: animate ? "0.05s" : undefined }}
					>
						{title}
						<span
							class="hero__glitch absolute inset-0 pointer-events-none"
							data-text={title}
						/>
						<span
							class="hero__glitch-alt absolute inset-0 pointer-events-none"
							data-text={title}
						/>
					</h1>
					<div class="hero__texture absolute inset-0 pointer-events-none mix-blend-overlay" />
				</div>
				<p
					class={subtitleClass}
					style={{ animationDelay: animate ? "0.18s" : undefined }}
				>
					{subtitle}
				</p>
			</div>
		);
	},
);
