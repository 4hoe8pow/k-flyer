import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { useScrollFade } from "./scroll-fade";

export interface CtaFooterProps {
	href: string;
	label: string;
}

export const CtaFooter = component$(({ href, label }: CtaFooterProps) => {
	const scrollFade = useScrollFade({ threshold: 0.3 });
	return (
		<div
			ref={scrollFade.ref}
			data-scroll-fade
			class={`scroll-fade${scrollFade.visible.value ? " scroll-fade--visible" : ""} silver-container flex justify-end mt-[3.5rem] md:mt-[4.5rem]`}
		>
			<Link
				href={href}
				class="cta text-[0.65rem] tracking-[0.3em] uppercase font-light"
			>
				{label}
			</Link>
		</div>
	);
});
