import { component$ } from "@builder.io/qwik";
import { type DocumentHead, Link } from "@builder.io/qwik-city";

export default component$(() => {
	return (
		<main class="relative flex h-screen flex-col items-center justify-center text-white overflow-hidden selection:bg-white/20">
			{/* Heroタイトル - 野生的ファッショナブルシック + 白銀比 */}
			<div class="hero__title-wrapper relative w-full flex justify-center">
				<h1 class="hero__title text-[14vw] md:text-[10rem] font-thin italic tracking-[0.414em] leading-[0.707] opacity-0 animate-fade-blur select-none text-center">
					KABADDI
					{/* グリッチ分裂エフェクト */}
					<span
						class="hero__glitch absolute inset-0 pointer-events-none"
						data-text="KABADDI"
					/>
					<span
						class="hero__glitch-alt absolute inset-0 pointer-events-none"
						data-text="KABADDI"
					/>
				</h1>
				{/* 野生的テクスチャオーバーレイ */}
				<div class="hero__texture absolute inset-0 pointer-events-none mix-blend-overlay" />
			</div>

			{/* キャッチフレーズ - 白銀比の余白 */}
			<p class="hero__subtitle text-xs md:text-sm text-neutral-500 font-extralight opacity-0 animate-fade-blur-delay tracking-[0.35em] uppercase">
				Tackle&nbsp;·&nbsp;Dodge&nbsp;·&nbsp;Hold
			</p>

			{/* CTA - 白銀比の余白 */}
			<Link
				href="rules"
				class="cta text-[0.65rem] tracking-[0.3em] uppercase text-white/40 font-light"
			>
				Explore the spirit
			</Link>

			{/* 背景層：オレンジグロー浮遊粒子 */}
			<div class="bg-particles absolute inset-0 -z-10"></div>
		</main>
	);
});

export const head: DocumentHead = {
	title: "Kabaddi Knowledge",
	meta: [
		{
			name: "description",
			content: "カバディを“感じる”Web体験。",
		},
	],
};
