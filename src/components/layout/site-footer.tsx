import { component$ } from "@builder.io/qwik";

export const SiteFooter = component$(() => {
	const currentYear = new Date().getFullYear();

	return (
		<footer class="site-footer">
			<div class="site-footer__beam" aria-hidden="true" />
			<div class="site-footer__orb" aria-hidden="true" />
			<div class="site-footer__inner silver-container">
				<div class="site-footer__brand">
					<span class="site-footer__eyebrow">Kabaddi Knowledge</span>
					<span class="site-footer__tagline">
						Movement couture for the next raid.
					</span>
				</div>
				<p class="site-footer__legal">&copy; {currentYear} Kabaddi Knowledge</p>
			</div>
		</footer>
	);
});
