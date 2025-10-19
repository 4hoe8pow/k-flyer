import { component$ } from "@builder.io/qwik";
import { type DocumentHead, Link } from "@builder.io/qwik-city";

export default component$(() => {
	return (
		<main class="relative font-body flex min-h-screen flex-col items-center justify-center overflow-hidden">
			{/* Heroタイトル - 野生的ファッショナブルシック + 白銀比 */}
			<div class="hero__title-wrapper relative w-full flex justify-center">
				<h1 class="hero__title font-display text-[14vw] md:text-[10rem] font-thin italic tracking-[0.414em] leading-[0.707] opacity-0 animate-fade-blur select-none text-center">
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
			<p
				class="hero__subtitle font-hard text-xs md:text-sm font-extralight opacity-0 animate-fade-blur-delay tracking-[0.35em] uppercase mt-[2.828rem]"
				style={{ color: "rgba(var(--color-horizon-green), 0.85)" }}
			>
				Tackle&nbsp;·&nbsp;Dodge&nbsp;·&nbsp;Hold
			</p>

			{/* CTA - 白銀比の余白 */}
			<div class="hero__cta-group mt-[2.828rem] flex flex-row flex-wrap items-center justify-center gap-[1.414rem]">
				<Link
					href="about"
					class="cta mt-0 text-[0.65rem] tracking-[0.3em] uppercase font-light"
				>
					What is Kabaddi?
				</Link>
				<Link
					href="rules"
					class="cta cta--inverted mt-0 text-[0.65rem] tracking-[0.3em] uppercase font-light"
				>
					Explore the spirit
				</Link>
			</div>

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
			content:
				"カバディの魅力や攻防のダイナミズムをビジュアルで表現したランディングページ。競技の世界観に没入できるヒーローセクションから詳細なルール紹介へ案内します。",
		},
		{
			name: "keywords",
			content:
				"カバディ, Kabaddi, 競技紹介, コンバットスポーツ, ヒーローページ, ルール案内",
		},
		{
			property: "og:title",
			content: "Kabaddi Knowledge",
		},
		{
			property: "og:description",
			content:
				"カバディの世界観を象徴するヒーローセクションとルールガイドへの導線を備えたスペシャルサイト。",
		},
		{
			property: "og:type",
			content: "website",
		},
	],
};
