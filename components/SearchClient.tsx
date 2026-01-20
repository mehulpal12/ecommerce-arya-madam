'use client';

import { useSearchParams } from "next/navigation";
import { useCart } from "@/app/providers/CartProvider";

const products = [
  {
    id: "rainbow-glass-beads",
    name: "Rainbow Glass Bead Set",
    price: 299,
    image: "/assets/rainbowBead.jpeg",
  },
  {
    id: "embroidery-thread",
    name: "Embroidery Thread Collection",
    price: 399,
    image: "/assets/embroideryThread.jpeg",
  },
  {
    id: "wooden-beads",
    name: "Wooden Bead Assortment",
    price: 249,
    image: "/assets/woodenBeads.jpeg",
  },
  {
    id: "diy-jewelry",
    name: "DIY Jewelry Making Kit",
    price: 599,
    image: "/assets/DIYJewelry.jpeg",
  },
];

export default function SearchClient() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  const { addToCart } = useCart();

  const results = products.filter((p) =>
    p.name.toLowerCase().includes(query)
  );

  return (
    <section className="min-h-screen px-6 py-24 bg-[#2b1d12] text-[#eadbc4]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#fdfaf6] mb-2">
          Search Results
        </h1>

        <p className="mb-10 text-[#eadbc4]/70">
          Showing results for{" "}
          <span className="text-[#e6cfa7]">"{query}"</span>
        </p>

        {results.length === 0 ? (
          <p className="text-center text-lg">❌ No products found</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((product) => (
              <div
                key={product.id}
                className="bg-[#3b2a1a]/80 border border-[#e6cfa7]/30
                           rounded-xl p-4 flex flex-col"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 w-full object-cover rounded-lg mb-4"
                />

                <h3 className="font-semibold text-[#fdfaf6]">
                  {product.name}
                </h3>

                <p className="text-[#e6cfa7] font-bold mt-2">
                  ₹{product.price}
                </p>

                <button
                  onClick={() =>
                    addToCart({
                      id: product.id,
                      title: product.name,
                      price: product.price,
                      image: product.image,
                      quantity: 1,
                    })
                  }
                  className="mt-auto bg-[#e6cfa7] text-[#3b2a1a]
                             py-2 rounded-lg font-semibold
                             hover:bg-[#dcc39a]
                             transition"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
