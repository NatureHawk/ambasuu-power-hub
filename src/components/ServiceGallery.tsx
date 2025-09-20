import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Slug =
  | "motors"
  | "transformers"
  | "control-panels"
  | "generators"
  | "automation"
  | "maintenance"
  | "fabrication"
  | "misc";

type Props = {
  slug: Slug;
  title: string;
  overview?: string;
};

// Use STATIC globs (allowed by Vite), then pick at runtime.
const globs: Record<Slug, Record<string, string>> = {
  motors: import.meta.glob("/src/assets/services/motors/*.{png,jpg,jpeg,webp}", {
    eager: true,
    as: "url",
  }),
  transformers: import.meta.glob("/src/assets/services/transformers/*.{png,jpg,jpeg,webp}", {
    eager: true,
    as: "url",
  }),
  "control-panels": import.meta.glob("/src/assets/services/control-panels/*.{png,jpg,jpeg,webp}", {
    eager: true,
    as: "url",
  }),
  generators: import.meta.glob("/src/assets/services/generators/*.{png,jpg,jpeg,webp}", {
    eager: true,
    as: "url",
  }),
  automation: import.meta.glob("/src/assets/services/automation/*.{png,jpg,jpeg,webp}", {
    eager: true,
    as: "url",
  }),
  maintenance: import.meta.glob("/src/assets/services/maintenance/*.{png,jpg,jpeg,webp}", {
    eager: true,
    as: "url",
  }),
  fabrication: import.meta.glob("/src/assets/services/fabrication/*.{png,jpg,jpeg,webp}", {
    eager: true,
    as: "url",
  }),
  misc: import.meta.glob("/src/assets/services/misc/*.{png,jpg,jpeg,webp}", {
    eager: true,
    as: "url",
  }),
};

// Natural-sort files so 1,2,10 order correctly
function toSortedImages(obj: Record<string, string>): string[] {
  return Object.entries(obj)
    .sort((a, b) =>
      a[0].localeCompare(b[0], undefined, { numeric: true, sensitivity: "base" })
    )
    .map(([, url]) => url as string);
}

export default function ServiceGallery({ slug, title, overview }: Props) {
  const images = toSortedImages(globs[slug] || {});

  return (
    <div className="min-h-screen">
      <Header />
      <main className="section-padding">
        <div className="container mx-auto px-4">
          <h1 className="text-primary mb-3">{title}</h1>
          {overview ? (
            <p className="text-muted-foreground mb-8">{overview}</p>
          ) : null}

          {/* Card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, i) => (
              <div key={i} className="bg-card rounded-xl border overflow-hidden">
                <img src={src} alt={`${title} ${i + 1}`} className="w-full h-56 object-cover" />
                <div className="p-4">
                  <div className="font-medium">{title}</div>
                  <div className="text-sm text-muted-foreground">Image {i + 1}</div>
                </div>
              </div>
            ))}
          </div>

          {images.length === 0 && (
            <div className="text-muted-foreground">
              No images found.
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
