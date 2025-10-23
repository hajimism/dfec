"use client";

import { useTheme } from "next-themes";
import * as React from "react";

export function ThemeToggle() {
	const [mounted, setMounted] = React.useState(false);
	const { theme, setTheme } = useTheme();

	React.useEffect(() => setMounted(true), []);

	if (!mounted) {
		return (
			<button
				type="button"
				className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
				aria-label="Toggle theme"
			>
				<div className="h-5 w-5" />
			</button>
		);
	}

	return (
		<button
			type="button"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
			aria-label="Toggle theme"
		>
			<svg
				className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
				fill="none"
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<circle cx="12" cy="12" r="4" />
				<path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
			</svg>
			<svg
				className="absolute h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
				fill="none"
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
			</svg>
			<span className="sr-only">Toggle theme</span>
		</button>
	);
}
