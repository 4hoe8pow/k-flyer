import { component$ } from "@builder.io/qwik";
import { type DocumentHead, Link } from "@builder.io/qwik-city";

const culturalThreads = [
	{
		title: "声に宿る連帯感",
		body: "呼吸を合わせて声を響かせるカバディは、村落から都市へと広がる過程で共同体の絆を象徴する儀礼的な遊戯として親しまれてきました。",
	},
	{
		title: "移動と交換の歴史",
		body: "交易路や祭礼を通じて地域ごとの技術が交わり、身体の使い方や掛け声のスタイルが多様化。地域色を保ちつつも一体感のある競技文化が形成されました。",
	},
	{
		title: "世代をつなぐ継承",
		body: "口伝えで培われた練習法や礼節は、学校教育やクラブ活動に取り入れられ、生活のリズムとともに息づく文化資産として伝承されています。",
	},
];

const timeline = [
	{
		year: "紀元前",
		description:
			"狩猟や体力づくりの遊戯として、声と素早さを重んじる遊びが南アジア各地に根づく。",
	},
	{
		year: "20世紀前半",
		description:
			"学校教育や地域大会に取り入れられ、統一的なルールづくりが始まる。",
	},
	{
		year: "現代",
		description:
			"国際連盟やプロリーグが誕生し、配信技術によって世界中の観客へとコミュニティが広がる。",
	},
];

const modernHighlights = [
	"アジアを中心にナショナルチームが整備され、女子・ユース層への裾野が拡大。",
	"プレー解析やトレーニングの科学的アプローチが進み、戦術研究が国境を超えて共有されている。",
	"ファンコミュニティが声援やチャントを編み出し、競技の世界観を多言語で楽しむ動きが広がっている。",
];

export default component$(() => {
	return (
		<main class="about-layout">
			<header class="about-container about-hero">
				<p class="about-eyebrow">Kabaddi Heritage</p>
				<h1 class="about-title">声が導くカバディの輪郭</h1>
				<p class="about-intro">
					武器を持たずに響く声と連携。その原点から今日の競技シーンまで、カバディの歩みを概要として紹介します。
				</p>
			</header>
			<section class="about-container about-section">
				<header class="about-section-header">
					<p class="about-section-eyebrow">Cultural Lens</p>
					<h2 class="about-section-title">日常と祭礼に根づく背景</h2>
					<p class="about-section-lead">
						カバディは日々の暮らしの中で培われた身体技法と精神性が凝縮した競技です。地域ごとの物語が織り交ざり、声を合わせる所作がコミュニティの結束を象徴します。
					</p>
				</header>
				<div class="about-card-grid">
					{culturalThreads.map((item) => (
						<article key={item.title} class="about-card">
							<h3 class="about-card-title">{item.title}</h3>
							<p class="about-card-body">{item.body}</p>
						</article>
					))}
				</div>
			</section>
			<section class="about-container about-section">
				<header class="about-section-header">
					<p class="about-section-eyebrow">Timeline</p>
					<h2 class="about-section-title">声とともに広がった旅路</h2>
					<p class="about-section-lead">
						時代を追うことで、どのようにしてカバディが今日の舞台に至ったかを俯瞰できます。
					</p>
				</header>
				<ol class="about-timeline">
					{timeline.map((item) => (
						<li key={item.year} class="about-timeline-item">
							<span class="about-timeline-year">{item.year}</span>
							<p class="about-timeline-text">{item.description}</p>
						</li>
					))}
				</ol>
			</section>
			<section class="about-container about-section about-section-split">
				<header class="about-section-header">
					<p class="about-section-eyebrow">Modern Scene</p>
					<h2 class="about-section-title">世界へ共鳴する現在地</h2>
					<p class="about-section-lead">
						放送や配信、スポーツサイエンスの導入により、カバディは国境を越えて互いの熱量を共有するステージへと進化しています。
					</p>
				</header>
				<div class="about-section-content">
					<aside class="about-note">
						<h3 class="about-note-title">現代シーンの断片</h3>
						<ul class="about-note-list">
							{modernHighlights.map((highlight) => (
								<li key={highlight} class="about-note-item">
									{highlight}
								</li>
							))}
						</ul>
					</aside>
					<div class="about-prose">
						<p>
							競技を支える人材はアスリートだけではありません。アナリストやトレーナー、コミュニティオーガナイザーが連携し合い、声が生む緊張感を世界のファンと共有する仕組みを築いています。
						</p>
						<p>
							応援の掛け声やチームカラーは土地のアイデンティティと結びつき、国際大会では互いの文化背景を尊重し合う交流の場として機能しています。
						</p>
					</div>
				</div>
			</section>
			<section class="about-container about-cta">
				<h2 class="about-cta-title">カバディの世界へ一歩踏み出す</h2>
				<p class="about-cta-text">
					もう少し深く知りたいと感じたら、競技の基本的な流れやチームの役割をまとめたガイドへ進んでください。観戦や体験の前に概要を押さえるだけでも、声の臨場感が一段と鮮やかになります。
				</p>
				<div class="about-cta-actions">
					<Link href=".." class="about-link about-link-tertiary">
						トップへ戻る
					</Link>
					<Link href="rules" class="about-link about-link-primary">
						ルールガイドを見る
					</Link>
				</div>
			</section>
		</main>
	);
});

export const head: DocumentHead = {
	title: "Kabaddi Overview | Kabaddi Knowledge",
	meta: [
		{
			name: "description",
			content:
				"声と連携が象徴するカバディの歴史的背景と現代シーンを俯瞰するAboutページです。文化的なルーツと現在地を概要で紹介します。",
		},
		{
			name: "keywords",
			content: "カバディとは, Kabaddi, 文化, 南アジア, 伝統競技, 国際大会",
		},
		{
			property: "og:title",
			content: "Kabaddi Overview | Kabaddi Knowledge",
		},
		{
			property: "og:description",
			content:
				"カバディの文化的な背景と現代の広がりを紹介する概要ページ。観戦や体験への第一歩としてお役立てください。",
		},
		{
			property: "og:type",
			content: "website",
		},
	],
};
