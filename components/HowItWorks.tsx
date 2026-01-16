
import React from 'react';
import { Search, ShoppingCart, ShieldCheck, Truck } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Browse Catalog",
    description: "Explore our comprehensive collection of professional-grade materials",
    icon: <Search className="w-8 h-8" strokeWidth={2} />
  },
  {
    id: 2,
    title: "Select Products",
    description: "Add items to cart with detailed specifications and quantity options",
    icon: <ShoppingCart className="w-8 h-8" strokeWidth={2} />
  },
  {
    id: 3,
    title: "Secure Checkout",
    description: "Complete purchase with encrypted payment and order confirmation",
    icon: <ShieldCheck className="w-8 h-8" strokeWidth={2} />
  },
  {
    id: 4,
    title: "Fast Delivery",
    description: "Receive professionally packaged materials with tracking information",
    icon: <Truck className="w-8 h-8" strokeWidth={2} />
  }
];

const StepCard: React.FC<{ step: Step }> = ({ step }) => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Icon with Badge */}
      <div className="relative mb-6">
        <div className="w-24 h-24 bg-white border-2 border-gray-200 rounded-2xl flex items-center justify-center shadow-sm">
          {step.icon}
        </div>
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-[#c9a961] rounded-lg flex items-center justify-center shadow-md">
          <span className="text-white font-bold text-lg">
            {step.id.toString().padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed max-w-sm">
        {step.description}
      </p>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            Streamlined ordering process designed for professional efficiency
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

