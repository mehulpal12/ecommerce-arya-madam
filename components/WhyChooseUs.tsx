import { ShieldCheck, Leaf, Lock, Award } from "lucide-react";

const features = [
  {
    title: "Premium Quality",
    description:
      "Rigorously tested materials meeting professional standards with quality certifications.",
    icon: Award,
  },
  {
    title: "Sustainable Sourcing",
    description:
      "Ethically sourced materials with environmental responsibility and transparency.",
    icon: Leaf,
  },
  {
    title: "Secure Transactions",
    description:
      "Enterprise-grade security with encrypted payments and data protection.",
    icon: Lock,
  },
  {
    title: "Expert Support",
    description:
      "Dedicated account managers and technical assistance for professional clients.",
    icon: ShieldCheck,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-b from-[#1f4f66] to-[#163b4d] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Why Choose Us
          </h2>
          <p className="mt-4 text-sm md:text-base text-blue-100">
            Professional-grade materials backed by industry expertise and
            exceptional service
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur-md transition hover:bg-white/15"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-400/20">
                <feature.icon className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm text-blue-100">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}