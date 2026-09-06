import Link from "next/link";

export function Header() {
    return (
        <header className="border-b border-border">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                <Link href="/" className="font-display text-2xl text-foreground">
                    Familjens recept
                </Link>
            </div>
        </header>
    );
}