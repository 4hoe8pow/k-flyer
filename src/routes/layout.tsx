import { component$, Slot } from "@builder.io/qwik";
import { SiteFooter } from "~/components/layout/site-footer";

export default component$(() => {
	return (
		<div class="route-shell flex min-h-screen flex-col">
			<div class="flex flex-1 flex-col pb-16 md:pb-20 lg:pb-24">
				<Slot />
			</div>
			<SiteFooter />
		</div>
	);
});
