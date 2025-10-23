import type { MDXComponents } from "mdx/types";
import Image from "next/image";

const Callout = ({
	children,
	type = "info",
}: {
	children: React.ReactNode;
	type?: "info" | "warning" | "success";
}) => {
	const styles = {
		info: "bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-100",
		warning:
			"bg-yellow-50 dark:bg-yellow-950/30 border-yellow-200 dark:border-yellow-800 text-yellow-900 dark:text-yellow-100",
		success:
			"bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800 text-green-900 dark:text-green-100",
	};

	return (
		<div className={`my-4 p-4 border-l-4 rounded-r ${styles[type]}`}>
			{children}
		</div>
	);
};

const HighlightBox = ({ children }: { children: React.ReactNode }) => (
	<div className="my-6 p-6 bg-linear-to-br from-primary/10 to-accent/10 border border-border rounded-lg">
		{children}
	</div>
);

const OptimizedImage = ({
	src,
	alt,
	width = 800,
	height = 400,
}: {
	src: string;
	alt: string;
	width?: number;
	height?: number;
}) => (
	<div className="my-8 rounded-lg overflow-hidden border border-border">
		<Image
			src={src}
			alt={alt}
			width={width}
			height={height}
			className="w-full h-auto"
		/>
	</div>
);

export const components: MDXComponents = {
	Callout,
	HighlightBox,
	OptimizedImage,
};
