import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gray-50 border-b">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Projects
            </h1>
            <p className="mt-2 max-w-2xl text-gray-600">
              Highlight of our rotor lamination project.
            </p>
          </div>
        </section>

        {/* Rotor Lamination Only */}
        <section className="py-10">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-primary mb-4">Rotor Lamination</h2>
            <p className="text-muted-foreground mb-6">
              Selected rotor lamination project highlight.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img
                src="/projects/rotor-lamination.jpg"
                alt="Rotor Lamination"
                className="rounded-xl border"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
