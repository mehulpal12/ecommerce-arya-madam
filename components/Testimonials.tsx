import { FC } from "react";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  text: string;
  name: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Exceptional quality and consistency. Perfect for professional projects.",
    name: "Priya Sharma",
    role: "Creative Director",
    company: "Artisan Studios",
  },
  {
    id: 2,
    text: "Premium products and outstanding service. Highly recommended.",
    name: "Rajesh Kumar",
    role: "Product Designer",
    company: "Craft Innovations",
  },
  {
    id: 3,
    text: "Exceptional quality and consistency. Perfect for professional projects.",
    name: "Priya Sharma",
    role: "Creative Director",
    company: "Artisan Studios",
  },
  {
    id: 4,
    text: "Premium products and outstanding service. Highly recommended.",
    name: "Rajesh Kumar",
    role: "Product Designer",
    company: "Craft Innovations",
  },
  {
    id: 5,
    text: "Exceptional quality and consistency. Perfect for professional projects.",
    name: "Priya Sharma",
    role: "Creative Director",
    company: "Artisan Studios",
  },
  {
    id: 6,
    text: "Premium products and outstanding service. Highly recommended.",
    name: "Rajesh Kumar",
    role: "Product Designer",
    company: "Craft Innovations",
  },
];

const Testimonials: FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#3d6b82] mb-3">
            Trusted by Professionals
          </h2>
          <p className="text-gray-600">
            What industry experts say about us
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="bg-white p-8 rounded-lg border hover:shadow-md transition"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6">"{t.text}"</p>

              <div>
                <h4 className="font-semibold text-[#3d6b82]">{t.name}</h4>
                <p className="text-sm text-gray-600">{t.role}</p>
                <p className="text-sm text-gray-400">{t.company}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
