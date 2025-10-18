import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { CtaFooter } from "../../components/rules/cta-footer";
import { HeroLead } from "../../components/rules/hero-lead";
import {
	RaidFlowSection,
	type RaidFlowStep,
} from "../../components/rules/raid-flow-section";
import {
	type RuleCard,
	RulesCardSection,
} from "../../components/rules/rules-card-section";
import {
	RulesIntroPanel,
	type RulesIntroStat,
} from "../../components/rules/rules-intro-panel";

export default component$(() => {
	const heroShouldAnimate = useSignal(false);

	const heroTitle = "RULES";
	const heroSubtitle =
		"７人チームで行うコンタクトスポーツであるカバディのルールを端的に紹介します。";

	const introStats: RulesIntroStat[] = [
		{ value: '30"', label: "1レイド、勝負は30秒" },
		{ value: "1 vs 7", label: "単身で7人から生還せよ" },
		{ value: "85 kg", label: "規定体重は85kg未満" },
	];

	const flowSteps: RaidFlowStep[] = [
		{
			title: "エントリー",
			tagline: "敵陣への侵入",
			detail:
				"レイダーは敵陣へ踏み込み、レイドを開始します。ノルマとして、コート奥のボークラインを必ず越える必要があります。基本的には、ステップを刻みながら相手守備を翻弄し、タッチの機会を探ります。",
		},
		{
			title: "キャント",
			tagline: "詠唱",
			detail:
				"レイダーは攻撃中、一定のテンポで「カバディ」と声を出し続けます。キャントが途切れたと判定されると、レイダーはアウトになります。",
		},
		{
			title: "ストラグル",
			tagline: "接触",
			detail:
				"タッチ発生から帰還までをストラグルといいます。捕まる前に抜け出せるかが得点の分かれ目になります。",
		},
		{
			title: "帰還",
			tagline: "陣地へ戻る",
			detail:
				"レイダーが自陣へ戻れば成功。触れた守備者の人数だけ得点し、ストラグル無しで戻った場合はエンプティレイドとなり無得点です。",
		},
	];

	const ruleCards: RuleCard[] = [
		{
			title: "制限時間",
			tag: "30s LIMIT",
			description:
				"敵陣滞在は最大30秒。キャントが続いていてもアウトになります。",
		},
		{
			title: "アンティ",
			tag: "ANTI RAID",
			description:
				"日本カバディではディフェンダーのことをアンティと呼びますが、国際的には “Defenders” と表記されます",
		},
		{
			title: "エンプティレイド",
			tag: "TACTICAL PAUSE",
			description:
				"得点せずに帰還したレイドは“空”であり、連続2回まで許可されています。人数変動も得点変動も発生しません。",
		},
		{
			title: "3rd レイド",
			tag: "DO OR DIE",
			description:
				"エンプティレイドが2回連続した後の3回目のレイドでは、必ずストラグルを狙いに行く必要があり、必ず得点変動が発生します。",
		},
		{
			title: "ローナ",
			tag: "ALL OUT",
			description:
				"全滅してしまうと相手に追加2点を与えた後、全員が復活します。",
		},
		{
			title: "ボーナスライン",
			tag: "RISK REWARD",
			description:
				"守備が6人以上のとき、レイダーがボーナスラインを越えた場合、帰還によらず1点が獲得できます。",
		},
		{
			title: "スーパータックル",
			tag: "RESIST PLAY",
			description:
				"守備が3人以下のときにレイダーを捕まえると、追加得点が与えられます。",
		},
		{
			title: "ロビー",
			tag: "ESCAPE LANE",
			description:
				"コート内に存在する、ストラグル中のみ通行可能な細い領域です。",
		},
	];

	useVisibleTask$(() => {
		heroShouldAnimate.value = true;
	});

	return (
		<main class="relative font-body flex min-h-screen flex-col items-center justify-center overflow-hidden">
			<div class="page-sheen" aria-hidden="true" />
			<div class="page-grid" aria-hidden="true" />
			<HeroLead
				title={heroTitle}
				subtitle={heroSubtitle}
				animate={heroShouldAnimate.value}
			/>

			<RulesIntroPanel
				accentLabel="BASICS"
				title="カバディの基本と試合の流れを要点で解説します。"
				copy="初めての方にも競技の構造と主要ルールが伝わるよう、専門用語をできるだけ平易に整理しました。"
				stats={introStats}
			/>

			<RaidFlowSection
				accentLabel="RAID FLOW"
				title="得点までの4ステップ"
				steps={flowSteps}
			/>

			<RulesCardSection
				accentLabel="RULE SNAPSHOT"
				title="用語について"
				cards={ruleCards}
			/>

			<CtaFooter href=".." label="TOPへ戻る" />
			<div class="bg-particles absolute inset-0 -z-10"></div>
		</main>
	);
});

export const head: DocumentHead = {
	title: "カバディのルール",
	meta: [
		{
			name: "description",
			content:
				"7人制コンタクトスポーツ・カバディの基本ルール、レイドの流れ、用語解説を初心者向けにわかりやすく紹介するページです。試合の流れや得点方法もビジュアルで理解できます。",
		},
		{
			name: "keywords",
			content:
				"カバディ, Kabaddi, ルール, 初心者, 7人制, コンバットスポーツ, レイド, 得点, 用語解説",
		},
		{
			property: "og:title",
			content: "カバディのルール",
		},
		{
			property: "og:description",
			content:
				"7人制カバディの基本ルール、レイドの流れ、用語解説を初心者向けにわかりやすく紹介するページです。",
		},
		{
			property: "og:type",
			content: "website",
		},
	],
};
