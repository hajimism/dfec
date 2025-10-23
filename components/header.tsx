import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export const Header = () => (
	<header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
		<div className="container mx-auto flex h-14 max-w-3xl items-center justify-between w-full px-4">
			<Link href="/" className="flex items-center space-x-2">
				<span className="font-bold text-xl">DFEC</span>
			</Link>

			<div className="flex items-center gap-6">
				<nav className="flex items-center gap-6 text-sm">
					<Link
						href="/reports"
						className="transition-colors hover:text-foreground/80 text-foreground/60"
					>
						レポート
					</Link>
					<Link
						href="/charter"
						className="transition-colors hover:text-foreground/80 text-foreground/60"
					>
						憲章
					</Link>
				</nav>
				<ModeToggle />
			</div>
		</div>
	</header>
);
