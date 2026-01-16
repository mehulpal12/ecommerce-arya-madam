import Image from "next/image";
import { Heart } from "lucide-react";

const products = [
  {
    name: "Rainbow Glass Bead Set",
    image: "/products/beads1.jpg",
    price: 299,
    oldPrice: 349,
    rating: 4.5,
    reviews: 127,
    badge: "NEW",
  },
  {
    name: "Embroidery Thread Collection",
    image: "/products/thread1.jpg",
    price: 399,
    oldPrice: 499,
    rating: 4.7,
    reviews: 203,
    badge: "NEW",
  },
  {
    name: "Wooden Bead Assortment",
    image: "/products/beads2.jpg",
    price: 249,
    oldPrice: 299,
    rating: 4.4,
    reviews: 154,
  },
  {
    name: "DIY Jewelry Making Kit",
    image: "/products/kit1.jpg",
    price: 599,
    oldPrice: 799,
    rating: 4.8,
    reviews: 198,
    badge: "NEW",
  },
  {
    name: "Metallic Charm Collection",
    image: "/products/metal.jpg",
    price: 349,
    oldPrice: 449,
    rating: 4.6,
    reviews: 98,
  },
  {
    name: "Silk Thread Bundle",
    image: "/products/thread2.jpg",
    price: 449,
    oldPrice: 599,
    rating: 4.5,
    reviews: 142,
  },
  {
    name: "Crystal Bead Mix",
    image: "/products/crystal.jpg",
    price: 499,
    oldPrice: 649,
    rating: 4.7,
    reviews: 215,
    badge: "NEW",
  },
  {
    name: "Craft Tool Essentials",
    image: "/products/tools.jpg",
    price: 399,
    oldPrice: 499,
    rating: 4.6,
    reviews: 87,
  },
];

export default function BestSellers() {
  return (
    <section className="bg-gray-50 px-8 py-20">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-blue-800">
              Best Sellers
            </h2>
            <p className="text-sm text-gray-500">
              Premium products trusted by professionals
            </p>
          </div>

          <span className="rounded bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
            ⭐ Top Rated
          </span>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative rounded-lg bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              {/* Wishlist */}
              <button className="absolute right-3 top-3 rounded-full bg-white p-1 shadow">
                <Heart className="h-4 w-4 text-gray-500" />
              </button>

              {/* Badge */}
              {product.badge && (
                <span className="absolute left-3 top-3 rounded bg-orange-500 px-2 py-0.5 text-xs text-white">
                  {product.badge}
                </span>
              )}

              {/* Image */}
              <div className="relative h-40 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Info */}
              <h3 className="mt-3 text-sm font-medium">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="mt-1 text-xs text-orange-500">
                ⭐ {product.rating}{" "}
                <span className="text-gray-400">
                  ({product.reviews})
                </span>
              </div>

              {/* Price */}
              <div className="mt-2 flex items-center gap-2">
                <span className="font-semibold text-gray-900">
                  ₹{product.price}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  ₹{product.oldPrice}
                </span>
                <span className="text-xs text-green-600">
                  {Math.round(
                    ((product.oldPrice - product.price) /
                      product.oldPrice) *
                      100
                  )}
                  % OFF
                </span>
              </div>

              {/* Button */}
              <button className="mt-4 w-full rounded bg-orange-500 py-2 text-sm font-medium text-white hover:bg-orange-600">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}