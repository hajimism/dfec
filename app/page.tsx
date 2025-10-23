import Link from "next/link";
import { getAllReports } from "@/lib/mdx";

const Home = () => {
	const reports = getAllReports();

	return (
		<div className="min-h-screen">
			<main className="container mx-auto max-w-3xl px-4 py-12">
				<header className="mb-12">
					<h1 className="text-5xl font-bold mb-4">
						Designer-friendly Engineers Club
					</h1>
					<p className="text-xl text-muted-foreground">
						デザイナーにやさしいエンジニアを目指して活動する、まだちいさくて、でもアツいクラブです。
					</p>
				</header>

				<section>
					<h2 className="text-3xl font-bold mb-4 border-b border-border pb-2">
						Reports
					</h2>
					<div className="space-y-8">
						{reports.map((report) => (
							<article key={report.slug}>
								<Link
									href={`/reports/${report.slug}`}
									className="group block space-y-2"
								>
									<h3 className="text-xl font-bold group-hover:text-foreground/60 transition-colors">
										{report.meta.title}
									</h3>
									{report.meta.description && (
										<p className="text-muted-foreground text-sm">
											{report.meta.description}
										</p>
									)}
									<div className="flex items-center gap-3 text-xs text-muted-foreground">
										<time>{report.meta.date}</time>
										{report.meta.tags && (
											<div className="flex gap-2">
												{report.meta.tags.map((tag) => (
													<span key={tag}>#{tag}</span>
												))}
											</div>
										)}
									</div>
								</Link>
							</article>
						))}
					</div>
				</section>
			</main>
		</div>
	);
};

export default Home;
