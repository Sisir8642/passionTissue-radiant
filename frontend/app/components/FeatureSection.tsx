import { Package, Star, ShoppingCart } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: Package,
      title: "100% Virgin Pulp",
      description: "Premium quality materials for superior softness",
      bgColor: "bg-blue-100",
      iconColor: "text-purple-600",
      gradientFrom: "from-blue-500",
      gradientTo: "to-blue-600"
    },
    {
      icon: Star,
      title: "Nepal's #1 Brand",
      description: "Trusted by millions of families across Nepal",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      gradientFrom: "from-purple-500",
      gradientTo: "to-purple-600"
    },
    {
      icon: ShoppingCart,
      title: "Affordable Quality",
      description: "Premium products at accessible prices",
      bgColor: "bg-green-100",
      iconColor: "text-purple-600",
      gradientFrom: "from-green-500",
      gradientTo: "to-green-600"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Choose Passion Tissue?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7b2cbf] to-pink-500 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience the perfect blend of quality, trust, and affordability
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center border border-gray-100 hover:border-transparent hover:-translate-y-2"
            >
            
              <div className={`${feature.bgColor} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-br group-hover:${feature.gradientFrom} group-hover:${feature.gradientTo} transition-all duration-300`}>
                <feature.icon 
                  size={36} 
                  className={`${feature.iconColor} group-hover:text-white transition-colors duration-300`}
                />
              </div>

             
              <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              <div className="mt-6 w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto group-hover:w-16 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}