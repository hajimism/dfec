import type { MDXComponents } from "mdx/types";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllReportSlugs, getReportBySlug } from "@/lib/mdx";

type Props = {
	params: Promise<{ slug: string }>;
};

export const generateStaticParams = async () =>
	getAllReportSlugs().map((slug) => ({ slug }));

export const generateMetadata = async ({ params }: Props) => {
	const { slug } = await params;
	const report = getReportBySlug(slug);

	if (!report) return { title: "Not Found" };

	return {
		title: report.meta.title,
		description: report.meta.description,
	};
};

const loadComponents = async (slug: string): Promise<MDXComponents> => {
	try {
		const mod = await import(`@/content/reports/${slug}/components`);
		return mod.components || {};
	} catch {
		return {};
	}
};

const ReportPage = async ({ params }: Props) => {
	const { slug } = await params;
	const report = getReportBySlug(slug);

	if (!report) notFound();

	const components = report.hasComponents ? await loadComponents(slug) : {};

	return (
		<article className="container mx-auto max-w-3xl px-4 py-12">
			<header className="mb-12 pb-8 border-b border-border">
				<h1 className="text-4xl font-bold mb-3">{report.meta.title}</h1>
				<div className="flex items-center gap-3 text-sm text-muted-foreground">
					<time>{report.meta.date}</time>
					{report.meta.tags && (
						<div className="flex gap-2">
							{report.meta.tags.map((tag) => (
								<span key={tag}>#{tag}</span>
							))}
						</div>
					)}
				</div>
				{report.meta.description && (
					<p className="mt-6 text-lg text-muted-foreground">
						{report.meta.description}
					</p>
				)}
			</header>
			<div className="prose prose-neutral dark:prose-invert max-w-none">
				<MDXRemote source={report.content} components={components} />
			</div>
		</article>
	);
};

export default ReportPage;
