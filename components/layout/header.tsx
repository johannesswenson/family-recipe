import Link from "next/link";

export function Header() {
    return (
        <header className="border-b border-border">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                <Link href="/" className="font-display text-2xl text-foreground">
                    Familjens recept
                </Link>

                <nav className="flex items-center gap-8 font-sans text-sm">
                    <Link href="/" className="text-muted transition-colors hover:text-foreground">
                        Hem
                    </Link>
                    <Link href="/recipes" className="text-muted transition-colors hover:text-foreground">
                        Recept
                    </Link>
                    <Link href="/recipies/new" className="rounded-full bg-accent px-5 py-2.5 font-medium text-background transition-opacity hover:opacity-90">
                        Lägg till recept
                    </Link>
                </nav>
            </div>
        </header>
    );
}