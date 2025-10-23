import Link from "next/link";
import { getAllReports } from "@/lib/mdx";

const ReportsPage = () => {
	const reports = getAllReports();

	return (
		<div className="container mx-auto max-w-3xl px-4 py-12">
			<h1 className="text-4xl font-bold mb-12">Reports</h1>
			<div className="space-y-8">
				{reports.map((report) => (
					<article key={report.slug} className="py-4 border-b border-border">
						<Link
							href={`/reports/${report.slug}`}
							className="group block space-y-2"
						>
							<h2 className="text-xl font-medium group-hover:text-foreground/60 transition-colors">
								{report.meta.title}
							</h2>
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
		</div>
	);
};

export default ReportsPage;
