import { $, component$, useSignal } from "@builder.io/qwik";

import { SectionHeader } from "./section-header";

export type Phase = {
	id: string;
	period: string;
	summary: string;
	timeline: {
		start: number;
		span: number;
	};
	topics: PhaseTopic[];
};

export type PhaseTopic = {
	title: string;
	items: string[];
};

export type PhasesSectionProps = {
	phases: Phase[];
};

export const PhasesSection = component$<PhasesSectionProps>(({ phases }) => {
	const activeIndex = useSignal(0);
	const totalPhases = phases.length;
	// Track touch gestures so horizontal swipes can advance the carousel.
	const swipeStartX = useSignal<number | null>(null);
	const swipeStartY = useSignal<number | null>(null);
	const swipeDirection = useSignal<"horizontal" | "vertical" | null>(null);

	if (totalPhases === 0) {
		return null;
	}

	const movePrev = $(() => {
		activeIndex.value = Math.max(activeIndex.value - 1, 0);
	});

	const moveNext = $(() => {
		activeIndex.value = Math.min(activeIndex.value + 1, totalPhases - 1);
	});

	const handleKeyDown = $((event: KeyboardEvent) => {
		if (event.key === "ArrowLeft") {
			event.preventDefault();
			return movePrev();
		}
		if (event.key === "ArrowRight") {
			event.preventDefault();
			return moveNext();
		}
		return undefined;
	});

	const handleTouchStart = $((event: TouchEvent) => {
		if (event.touches.length !== 1) {
			return;
		}
		const touch = event.touches[0];
		swipeStartX.value = touch.clientX;
		swipeStartY.value = touch.clientY;
		swipeDirection.value = null;
	});

	const handleTouchMove = $((event: TouchEvent) => {
		if (
			event.touches.length !== 1 ||
			swipeStartX.value === null ||
			swipeStartY.value === null
		) {
			return;
		}
		const touch = event.touches[0];
		const deltaX = touch.clientX - swipeStartX.value;
		const deltaY = touch.clientY - swipeStartY.value;

		if (swipeDirection.value === null) {
			const absX = Math.abs(deltaX);
			const absY = Math.abs(deltaY);
			if (absX > 10 || absY > 10) {
				swipeDirection.value = absX > absY ? "horizontal" : "vertical";
			}
		}

		if (swipeDirection.value === "horizontal") {
			event.preventDefault();
		}
	});

	const resetSwipe = $(() => {
		swipeStartX.value = null;
		swipeStartY.value = null;
		swipeDirection.value = null;
	});

	const handleTouchEnd = $((event: TouchEvent) => {
		if (swipeStartX.value === null) {
			return;
		}
		if (event.changedTouches.length === 0) {
			resetSwipe();
			return;
		}
		const touch = event.changedTouches[0];
		const deltaX = touch.clientX - swipeStartX.value;
		const swipeThreshold = 45;

		if (Math.abs(deltaX) > swipeThreshold && totalPhases > 1) {
			if (deltaX < 0) {
				activeIndex.value = Math.min(activeIndex.value + 1, totalPhases - 1);
			} else {
				activeIndex.value = Math.max(activeIndex.value - 1, 0);
			}
		}

		resetSwipe();
	});

	const handleTouchCancel = $(() => {
		resetSwipe();
	});

	return (
		<section class="about-section about-section--phases">
			<SectionHeader
				kicker="Historical Phases"
				title="振興の沿革"
				intro="年代ごとの主要な出来事を整理し、普及と競技化のプロセスを俯瞰します。"
			/>
			<div class="phase-carousel" aria-live="polite" onKeyDown$={handleKeyDown}>
				<div
					class="phase-carousel-window"
					onTouchStart$={handleTouchStart}
					onTouchMove$={handleTouchMove}
					onTouchEnd$={handleTouchEnd}
					onTouchCancel$={handleTouchCancel}
				>
					<div
						class="phase-carousel-track"
						style={`--phase-index:${activeIndex.value};`}
					>
						{phases.map((phase, index) => (
							<article
								key={phase.id}
								class="phase-card"
								aria-roledescription="slide"
								aria-hidden={activeIndex.value === index ? "false" : "true"}
								tabIndex={activeIndex.value === index ? 0 : -1}
							>
								<header class="phase-card-header">
									<span class="phase-card-index">{phase.id}</span>
									<div class="phase-card-meta">
										<h3 class="phase-card-title">{phase.period}</h3>
										<p class="phase-card-summary">{phase.summary}</p>
									</div>
								</header>
								<div class="phase-card-track" aria-hidden="true">
									<span
										class="phase-card-bar"
										style={`--phase-start:${phase.timeline.start}%;--phase-span:${phase.timeline.span}%;`}
									/>
								</div>
								<ul class="phase-card-topics">
									{phase.topics.map((topic) => (
										<li key={topic.title} class="phase-topic-card">
											<h4 class="phase-topic-title">{topic.title}</h4>
											<ul class="phase-topic-items">
												{topic.items.map((item, itemIndex) => (
													<li
														key={`${topic.title}-${itemIndex}`}
														class="phase-topic-item"
													>
														{item}
													</li>
												))}
											</ul>
										</li>
									))}
								</ul>
							</article>
						))}
					</div>
				</div>
				<div class="phase-carousel-controls">
					<button
						type="button"
						class="phase-carousel-button"
						onClick$={movePrev}
						disabled={activeIndex.value === 0}
						aria-label="前のフェーズへ"
					>
						<span aria-hidden="true">&lt;</span>
					</button>
					<span class="phase-carousel-status">
						{activeIndex.value + 1}/{totalPhases}
					</span>
					<button
						type="button"
						class="phase-carousel-button"
						onClick$={moveNext}
						disabled={activeIndex.value === totalPhases - 1}
						aria-label="次のフェーズへ"
					>
						<span aria-hidden="true">&gt;</span>
					</button>
				</div>
				<div class="phase-carousel-pagination">
					{phases.map((phase, index) => (
						<button
							key={phase.id}
							type="button"
							class={`phase-carousel-dot${
								activeIndex.value === index ? " phase-carousel-dot--active" : ""
							}`}
							onClick$={$(() => {
								activeIndex.value = index;
							})}
							aria-label={`${phase.period}に移動`}
							aria-current={activeIndex.value === index ? "true" : undefined}
						/>
					))}
				</div>
			</div>
		</section>
	);
});
