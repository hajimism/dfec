const Article = ({
	number,
	title,
	children,
}: {
	number: number;
	title: string;
	children: React.ReactNode;
}) => (
	<div className="mb-10 pb-8 border-b border-border last:border-0">
		<div className="flex items-center gap-4 mb-3">
			<span className="text-4xl font-bold text-primary/20">
				{String(number).padStart(2, "0")}
			</span>
			<h3 className="text-xl font-semibold">{title}</h3>
		</div>
		<div className="ml-16 text-muted-foreground leading-relaxed space-y-3">
			{children}
		</div>
	</div>
);

const Principle = ({ children }: { children: React.ReactNode }) => (
	<blockquote className="my-8 pl-4 border-l-2 border-primary italic text-lg">
		{children}
	</blockquote>
);

const Do = ({ children }: { children: React.ReactNode }) => (
	<div className="my-4 p-4 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 rounded-r">
		<div className="flex items-start gap-2">
			<span className="text-green-600 dark:text-green-400 font-bold">✓</span>
			<div className="flex-1">{children}</div>
		</div>
	</div>
);

const Dont = ({ children }: { children: React.ReactNode }) => (
	<div className="my-4 p-4 bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 rounded-r">
		<div className="flex items-start gap-2">
			<span className="text-red-600 dark:text-red-400 font-bold">✗</span>
			<div className="flex-1">{children}</div>
		</div>
	</div>
);

const CharterPage = () => (
	<article className="container mx-auto max-w-3xl px-4 py-12">
		<header className="mb-12 pb-8 border-b border-border">
			<h1 className="text-4xl font-bold mb-3">
				デザイナーにやさしいエンジニア憲章
			</h1>
			<div className="flex items-center gap-3 text-sm text-muted-foreground">
				<time>2025-10-23</time>
				<div className="flex gap-2">
					<span>#チーム</span>
					<span>#協働</span>
					<span>#デザイン</span>
				</div>
			</div>
			<p className="mt-6 text-lg text-muted-foreground">
				デザイナーと協働するエンジニアのための行動指針
			</p>
		</header>

		<Principle>
			私たちは、デザインとエンジニアリングの境界を超えて、
			より良いプロダクトを共に創り上げることを誓います。
		</Principle>

		<div className="space-y-8">
			<Article number={1} title="デザインの意図を理解しようと努める">
				<p>
					デザインには必ず理由があります。ピクセル単位の調整も、色の選択も、すべてに意図が込められています。
				</p>

				<Do>
					「この余白が大きいのは、なぜですか？」と質問する。デザインの背景にあるユーザー体験の意図を理解しようとする。
				</Do>

				<Dont>
					「この余白、減らしていいですか？」と勝手に変更を提案する。デザインの意図を確認せずに実装を変更する。
				</Dont>

				<p>
					実装の都合でデザインを変更する必要がある場合は、必ず相談し、代替案を一緒に考えます。
				</p>
			</Article>

			<Article
				number={2}
				title="「できない」より「どうすればできるか」を考える"
			>
				<p>
					技術的な制約は確かに存在します。しかし、それを理由に可能性を閉ざすのではなく、創造的な解決策を探します。
				</p>

				<Do>
					「完全な再現は難しいですが、こういう実装なら近いものが作れます」と代替案を提示する。制約を共有しつつ、実現可能な選択肢を提案する。
				</Do>

				<Dont>
					「それは技術的に無理です」と即座に却下する。代替案を提示せずに、デザインの変更を要求する。
				</Dont>

				<p>
					共に考えることで、当初の想定を超えるソリューションが見つかることもあります。
				</p>
			</Article>

			<Article number={3} title="早期にフィードバックを提供する">
				<p>
					実装が進んでから問題を指摘するのではなく、デザイン段階で技術的な視点からのインプットを提供します。
				</p>

				<Do>
					デザインレビューに積極的に参加する。実装の難易度や、パフォーマンスへの影響について早めに共有する。
				</Do>

				<Dont>
					実装が終わってから「これ、実装が難しかったです」と後から伝える。デザインプロセスに関与せず、受け身で待つ。
				</Dont>

				<p>
					早期のコラボレーションは、後の手戻りを防ぎ、より良い結果を生みます。
				</p>
			</Article>

			<Article number={4} title="デザインツールとプロセスを理解する">
				<p>
					Figma、Sketch、Adobe
					XDなど、デザイナーが使用するツールの基本を理解し、デザインデータを正しく読み取ります。
				</p>

				<Do>
					デザインツールの基本操作を学び、スペーシングやカラーコードを自分で確認できるようにする。デザインシステムの構造を理解する。
				</Do>

				<Dont>
					「このパーツのサイズ教えてください」と毎回聞く。デザインファイルを開かずに、スクリーンショットだけで実装する。
				</Dont>

				<p>
					デザイナーの言語を理解することで、コミュニケーションが格段にスムーズになります。
				</p>
			</Article>

			<Article number={5} title="実装の詳細を丁寧に説明する">
				<p>
					技術的な制約や実装の詳細を、非エンジニアにも分かりやすい言葉で説明します。
				</p>

				<Do>
					専門用語を避けて説明する。図やデモを使って視覚的に伝える。「なぜそうなるのか」の背景まで共有する。
				</Do>

				<Dont>
					専門用語を多用して、デザイナーを置いてきぼりにする。「技術的な話なので分からないと思いますが...」と前置きする。
				</Dont>

				<p>分かりやすい説明は、信頼関係の構築に繋がります。</p>
			</Article>

			<Article number={6} title="デザインの一貫性を守る">
				<p>
					デザインシステムやスタイルガイドに従い、プロダクト全体の一貫性を保ちます。
				</p>

				<Do>
					既存のコンポーネントやパターンを再利用する。新しい実装が全体の一貫性を損なわないか確認する。
				</Do>

				<Dont>
					似たようなコンポーネントを勝手に作る。デザインシステムを無視して、独自のスタイルを適用する。
				</Dont>

				<p>一貫性は、ユーザー体験の質を大きく左右します。</p>
			</Article>

			<Article number={7} title="実装の進捗を共有する">
				<p>
					実装中の進捗や課題を定期的に共有し、デザイナーが状況を把握できるようにします。
				</p>

				<Do>
					プレビュー環境を用意して、実装中でも確認できるようにする。ブロッカーが発生したら、すぐに共有する。
				</Do>

				<Dont>
					完成するまで何も見せない。問題が起きているのに、デザイナーに相談せず一人で抱え込む。
				</Dont>

				<p>透明性のあるプロセスは、チームの信頼を深めます。</p>
			</Article>

			<Article number={8} title="細部へのこだわりを尊重する">
				<p>
					ホバーアニメーション、トランジション、微妙な色の違いなど、細部へのこだわりを「些細なこと」として切り捨てません。
				</p>

				<Do>
					細かい調整の要望にも真摯に対応する。「ここまでやる意味ある？」と思っても、まずは実装してみる。
				</Do>

				<Dont>
					「そこまで気づく人いないですよ」と細部の調整を拒否する。アニメーションやトランジションを「後回し」にして忘れる。
				</Dont>

				<p>
					細部へのこだわりが、プロダクトの印象を大きく変えることがあります。
				</p>
			</Article>

			<Article number={9} title="デザイナーの時間を尊重する">
				<p>
					デザイナーにも納期やタスクがあります。依頼するタイミングや、必要な情報の提供に配慮します。
				</p>

				<Do>
					必要な情報を整理してから質問する。緊急度と重要度を明示する。代替案を自分でも考えてから相談する。
				</Do>

				<Dont>
					思いついたらすぐにメッセージを送る。情報が足りないまま「これお願いします」と丸投げする。
				</Dont>

				<p>互いの時間を尊重することで、効率的な協働が実現します。</p>
			</Article>

			<Article number={10} title="感謝の気持ちを忘れない">
				<p>
					良いデザインは、プロダクトに大きな価値をもたらします。デザイナーの努力と成果に感謝を伝えます。
				</p>

				<Do>
					実装が完成したら、デザイナーにも見てもらい、フィードバックをもらう。良いデザインには素直に「素敵ですね」と伝える。
				</Do>

				<Dont>
					完成しても報告しない。デザインを「当たり前」として、感謝を示さない。
				</Dont>

				<p>感謝の言葉は、次の協働をより良いものにします。</p>
			</Article>
		</div>

		<footer className="mt-16 pt-8 border-t border-border">
			<h2 className="text-2xl font-semibold mb-4">最後に</h2>
			<div className="space-y-4 text-muted-foreground leading-relaxed">
				<p>
					デザイナーとエンジニアは、異なるスキルセットを持つ協働者です。
					この憲章は、その境界を越えて、互いをリスペクトし、
					共に最高のプロダクトを作り上げるための指針です。
				</p>
				<p className="font-semibold text-foreground">
					この憲章は、より良い協働のための始まりに過ぎません。
				</p>
				<p>
					日々の実践を通じて、自分たちのチームに合った形に育てていってください。
				</p>
			</div>
		</footer>
	</article>
);

export default CharterPage;
