import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const reportsDirectory = path.join(process.cwd(), "content/reports");

export type ReportMeta = {
	title: string;
	date: string;
	description?: string;
	tags?: string[];
	publish?: boolean;
};

export type Report = {
	slug: string;
	meta: ReportMeta;
	content: string;
	hasComponents: boolean;
};

const findMdxPath = (slug: string): string | null => {
	// pattern 1: {slug}.mdx
	const filePath = path.join(reportsDirectory, `${slug}.mdx`);
	if (fs.existsSync(filePath)) return filePath;

	// pattern 2: {slug}/index.mdx
	const dirPath = path.join(reportsDirectory, slug, "index.mdx");
	if (fs.existsSync(dirPath)) return dirPath;

	return null;
};

const hasComponentsFile = (slug: string): boolean => {
	const componentsPath = path.join(reportsDirectory, slug, "components.tsx");
	return fs.existsSync(componentsPath);
};

export const getAllReports = (): Report[] => {
	const entries = fs.readdirSync(reportsDirectory, { withFileTypes: true });
	const reports: Report[] = [];

	for (const entry of entries) {
		if (entry.isFile() && entry.name.endsWith(".mdx")) {
			// pattern 1: {slug}.mdx
			const slug = entry.name.replace(/\.mdx$/, "");
			const fullPath = path.join(reportsDirectory, entry.name);
			const fileContents = fs.readFileSync(fullPath, "utf8");
			const { data, content } = matter(fileContents);

			reports.push({
				slug,
				meta: data as ReportMeta,
				content,
				hasComponents: false,
			});
		} else if (entry.isDirectory()) {
			// pattern 2: {slug}/index.mdx
			const slug = entry.name;
			const indexPath = path.join(reportsDirectory, slug, "index.mdx");
			if (fs.existsSync(indexPath)) {
				const fileContents = fs.readFileSync(indexPath, "utf8");
				const { data, content } = matter(fileContents);

				reports.push({
					slug,
					meta: data as ReportMeta,
					content,
					hasComponents: hasComponentsFile(slug),
				});
			}
		}
	}

	return reports
		.filter((report) => report.meta.publish !== false)
		.sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));
};

export const getReportBySlug = (slug: string): Report | null => {
	try {
		const fullPath = findMdxPath(slug);
		if (!fullPath) return null;

		const fileContents = fs.readFileSync(fullPath, "utf8");
		const { data, content } = matter(fileContents);

		return {
			slug,
			meta: data as ReportMeta,
			content,
			hasComponents: hasComponentsFile(slug),
		};
	} catch {
		return null;
	}
};

export const getAllReportSlugs = (): string[] => {
	const entries = fs.readdirSync(reportsDirectory, { withFileTypes: true });
	const slugs: string[] = [];

	for (const entry of entries) {
		if (entry.isFile() && entry.name.endsWith(".mdx")) {
			slugs.push(entry.name.replace(/\.mdx$/, ""));
		} else if (entry.isDirectory()) {
			const indexPath = path.join(reportsDirectory, entry.name, "index.mdx");
			if (fs.existsSync(indexPath)) {
				slugs.push(entry.name);
			}
		}
	}

	return slugs;
};
