import type { Signal } from "@builder.io/qwik";
import { useSignal, useVisibleTask$ } from "@builder.io/qwik";

export interface ScrollFadeOptions {
	threshold?: number;
	once?: boolean;
}

export interface ScrollFadeHandle {
	ref: Signal<HTMLElement | undefined>;
	visible: Signal<boolean>;
}

export const useScrollFade = (
	options: ScrollFadeOptions = {},
): ScrollFadeHandle => {
	const { threshold = 0.1, once = true } = options;
	const ref = useSignal<HTMLElement>();
	const visible = useSignal(false);

	useVisibleTask$(({ cleanup }) => {
		const element = ref.value;
		if (!element) return;

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						visible.value = true;
						if (once) {
							observer.unobserve(entry.target);
						}
					}
				}
			},
			{ threshold },
		);

		observer.observe(element);

		cleanup(() => observer.disconnect());
	});

	return {
		ref,
		visible,
	};
};
