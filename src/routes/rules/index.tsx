import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { type DocumentHead, Link } from "@builder.io/qwik-city";

export default component$(() => {
	const shouldAnimate = useSignal(false);

	useVisibleTask$(() => {
		shouldAnimate.value = true;
	});

	return (
		<main class="relative flex min-h-screen flex-col items-center justify-center text-white bg-black overflow-hidden selection:bg-white/20">
			{/* Heroタイトル - グリッチ＋ネオン光＋白銀比余白 */}
			<div class="hero__title-wrapper relative w-full flex justify-center">
				<h1
					class={`hero__title text-[10vw] md:text-[6rem] font-thin italic tracking-[0.414em] leading-[0.707] select-none text-center opacity-0 ${shouldAnimate.value ? "animate-fade-blur" : ""}`}
				>
					KABADDI RULES
					<span
						class="hero__glitch absolute inset-0 pointer-events-none"
						data-text="KABADDI RULES"
					/>
					<span
						class="hero__glitch-alt absolute inset-0 pointer-events-none"
						data-text="KABADDI RULES"
					/>
				</h1>
				<div class="hero__texture absolute inset-0 pointer-events-none mix-blend-overlay" />
			</div>
			<p
				class={`hero__subtitle text-xs md:text-base text-neutral-400 font-extralight tracking-[0.35em] uppercase opacity-0 ${shouldAnimate.value ? "animate-fade-blur" : ""}`}
			>
				7人対7人、極限の駆け引き――肉体のみで挑む原始的スポーツ
			</p>

			<section
				class={`rules-section-fade mt-[2.828rem] md:mt-[4rem] px-4 md:px-0 max-w-2xl w-full opacity-0 ${shouldAnimate.value ? "animate-fade-blur" : ""}`}
			>
				<h2 class="text-lg md:text-2xl font-bold text-orange-400 mb-4 tracking-wide">
					カバディのルール
				</h2>
				<div class="space-y-6 text-sm md:text-base text-white/80">
					<div>
						<span class="font-semibold text-orange-300">レイドとレイダー</span>
						<br />
						7人対7人で行い、敵陣へ踏み込む攻撃を“レイド”、踏み込む選手を“レイダー”と呼びます。
					</div>
					<div>
						<span class="font-semibold text-purple-300">
							キャント（声出し）
						</span>
						<br />
						レイド中は「カバディ、カバディ」と声を発し続けなければならず、他の音を発すると即アウト。
					</div>
					<div>
						<span class="font-semibold text-orange-200">制限時間と帰還</span>
						<br />
						レイダーは敵陣に最大30秒滞在可能。制限時間内に自陣へ帰還する必要があります。
					</div>
					<div>
						<span class="font-semibold text-purple-200">
							ストラグル（接触後の攻防）
						</span>
						<br />
						敵と接触した瞬間から“ストラグル”状態に。帰還できれば敵人数分得点、失敗すれば敵に1点。
					</div>
					<div>
						<span class="font-semibold text-orange-300">
							エンプティレイドとDO OR DIE
						</span>
						<br />
						接触せずボークラインを越えて帰還すれば“エンプティレイド”。得点は動かず、3回続くと「DO
						OR DIE」ルールが発動し、得点できなければアウト。
					</div>
					<div>
						<span class="font-semibold text-purple-300">ローナ（全滅）</span>
						<br />
						敵を全員アウトにすると“ローナ”成立。追加2点と全員復活。
					</div>
					<div>
						<span class="font-semibold text-orange-200">
							ボーナス点・守備の反撃
						</span>
						<br />
						守備側が3人以下でレイダーをアウトにするとボーナス点。守備側が6人以上でボーナスラインを越えると1点。
					</div>
					<div>
						<span class="font-semibold text-purple-200">コートの用語</span>
						<br />
						インサイドライン・アウトサイドラインに挟まれた“ロビー”はストラグル中のみ有効。レイダーの逃げ道となります。
					</div>
					<div class="mt-6 text-xs text-neutral-400">
						息を呑む攻防をお楽しみください。
					</div>
				</div>
			</section>

			<Link
				href="/"
				class="cta text-[0.65rem] tracking-[0.3em] uppercase text-white/40 font-light mt-[4rem]"
			>
				TOPへ戻る
			</Link>
			<div class="bg-particles absolute inset-0 -z-10"></div>
		</main>
	);
});

export const head: DocumentHead = {
	title: "Kabaddi LP コンセプトまとめ",
	meta: [
		{
			name: "description",
			content: "カバディLPのコンセプト・デザイン・技術・マーケティングまとめ。",
		},
	],
};
