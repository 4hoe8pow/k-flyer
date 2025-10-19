import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

export type HeroStat = {
	value: string;
	label: string;
	detail: string;
	color: string;
};

export type AboutHeroProps = {
	stats: HeroStat[];
};

export const AboutHero = component$<AboutHeroProps>(({ stats }) => {
	const uniqueStats = stats;
	const loopingStats = [...uniqueStats, ...uniqueStats];
	const statsTrackRef = useSignal<HTMLDivElement>();

	useVisibleTask$(({ cleanup }) => {
		const trackEl = statsTrackRef.value;
		if (!trackEl) {
			return;
		}

		const updateMetrics = () => {
			const uniqueWidth = trackEl.scrollWidth / 2;
			if (!uniqueWidth) {
				return;
			}

			const pxPerSecond = 80;
			const duration = Math.max(uniqueWidth / pxPerSecond, 12);
			const formattedOffset = `${uniqueWidth}px`;
			const formattedDuration = `${duration.toFixed(2)}s`;

			trackEl.style.setProperty("--hero-stats-offset", formattedOffset);
			trackEl.style.setProperty("--hero-stats-duration", formattedDuration);
			trackEl.style.animationDuration = formattedDuration;
		};

		updateMetrics();
		const timeoutId = window.setTimeout(updateMetrics, 420);
		let observer: ResizeObserver | undefined;

		if (typeof ResizeObserver === "function") {
			observer = new ResizeObserver(updateMetrics);
			observer.observe(trackEl);
		}

		cleanup(() => {
			if (observer) {
				observer.disconnect();
			}
			window.clearTimeout(timeoutId);
		});
	});

	return (
		<header class="about-hero">
			<div class="about-hero-panel">
				<p class="about-hero-kicker">Kabaddi in Japan</p>
				<h1 class="about-hero-title">日本カバディ史の概要</h1>
				<p class="about-hero-description">
					1970年代後半の展示試合から2020年代の国際タイトルまで、日本でのカバディ導入と普及の流れを年代別に整理します。
				</p>
			</div>
			<div class="about-hero-stats" aria-live="off">
				<div class="about-hero-stats-track" ref={statsTrackRef}>
					{loopingStats.map((stat, index) => (
						<div
							key={`${stat.value}-${index}`}
							class="about-stat-card"
							style={{ "--stat-card-bg": stat.color }}
							aria-hidden={index >= uniqueStats.length}
						>
							<span class="about-stat-value">{stat.value}</span>
							<span class="about-stat-label">{stat.label}</span>
							<p class="about-stat-detail">{stat.detail}</p>
						</div>
					))}
				</div>
			</div>
		</header>
	);
});
