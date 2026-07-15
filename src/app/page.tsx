import Hero from "@/components/layout/Hero";
import Preview from "@/components/layout/ShowOffPreview";
import ReviewDisclaimer from "@/components/layout/Review";

export default function Home() {
  return (
    <main className="min-w-screen flex-1">
      <Hero />
      <Preview />
      <ReviewDisclaimer />
    </main>
  );
}
