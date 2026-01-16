import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    title: "Beads & Charms",
    subtitle: "Premium glass, crystal, and wooden beads",
    items: "500+ Items",
    image: "/collections/beads.jpg",
  },
  {
    title: "DIY Craft Kits",
    subtitle: "Complete professional-grade project kits",
    items: "150+ Kits",
    image: "/collections/kits.jpg",
  },
  {
    title: "Thread & Yarn",
    subtitle: "Silk, cotton, and specialty threads",
    items: "300+ Varieties",
    image: "/collections/thread.jpg",
  },
  {
    title: "Decorative Supplies",
    subtitle: "Artisan materials for creative projects",
    items: "400+ Products",
    image: "/collections/decor.jpg",
  },
  {
    title: "Professional Tools",
    subtitle: "Precision instruments for artisans",
    items: "100+ Tools",
    image: "/collections/tools.jpg",
  },
  {
    title: "Gift Collections",
    subtitle: "Curated bundles for professionals",
    items: "80+ Bundles",
    image: "/collections/gifts.jpg",
  },
];

export default function FeaturedCollections() {
  return (
    <section className="bg-white px-8 py-20">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-blue-800">
            Featured Collections
          </h2>
          <p className="mt-3 text-gray-600">
            Curated selections of professional-grade materials for every creative need
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((item, index) => (
            <div
              key={index}
              className="group relative h-[260px] overflow-hidden rounded-xl"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="mb-3 inline-block rounded bg-white/20 px-3 py-1 text-xs backdrop-blur">
                  {item.items}
                </span>

                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-200">{item.subtitle}</p>

                <Link
                  href="#"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-orange-400"
                >
                  Explore Collection →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}