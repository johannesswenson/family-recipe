import Image from "next/image";

export default function Home() {
  return (
      <main className="min-h-screen bg-background px-8 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="font-sans test-sm uppercase tracking-widest text-accent">
            Familjens recept
          </p>

          <h1 className="mt-4 font-display text-6xl text-foreground">
            Goda recept.
            <br />
            Andra saker.
          </h1>

          <p className="mt-6 max-w-xl font-sans text-lg text-muted">
            En samling recept som vi hittat någonstans på vägen.
          </p>

          <button className="mt-8 rounded-full bg-accent px-6 py-3 font-sans text-sm font-medium text-background">
            Bläddra bland recept
          </button>
        </div>
        
      </main>
  );
}
