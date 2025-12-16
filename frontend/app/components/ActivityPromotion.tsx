import { Button } from "@/components/ui/button";
import { Percent,Gift, TrendingUp,Users, Award, Calendar, ChevronRight} from "lucide-react";
import Link from "next/link";

export default function PromotionsSection() {
    
  const promotions = [
    {
      id: 1,
      icon: <Percent size={30} />,
      title: 'Bulk Order Discounts',
      description: 'Get up to 25% off on bulk orders for hotels, restaurants, and businesses',
      color: 'from-purple-500 to-pink-500',
      badge: 'Limited Time'
    },
    {
      id: 2,
      icon: <Gift size={32} />,
      title: 'Family Pack Deals',
      description: 'Buy 3 family packs and get 1 pocket tissue pack FREE',
      color: 'from-pink-500 to-purple-500',
      badge: 'Special Offer'
    },
    {
      id: 3,
      icon: <TrendingUp size={32} />,
      title: 'New Product Launch',
      description: 'Introducing Passion Premium 4-Ply - Ultra luxury softness',
      color: 'from-purple-500 to-pink-500',
      badge: 'Coming Soon'
    }
  ];

  const activities = [
    {
      id: 1,
      icon: <Users size={24}  color="purple" />,
      title: 'Community Support',
      description: 'We donate 1% of sales to local community hygiene programs',
      image: '/images/cummunity.jpg'
    },
    {
      id: 2,
      icon: <Award size={24} color="purple"  />,
      title: 'Quality Certified',
      description: 'ISO certified and awarded Nepal\'s Best Tissue Brand 2024',
      image: '/images/quality.jpg'
    },
    {
      id: 3,
      icon: <Calendar size={24} color="purple" />,
      title: 'Seasonal Campaigns',
      description: 'Join our monsoon hygiene awareness campaign across Nepal',
      image: '/images/seasonal.jpg'
    }
  ];

  return (
    <section className="py-16 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center mb-13">
          <h2 className="text-4xl font-bold text-gray-900 ">
            Current Promotions & Offers
          </h2>
          <p className="text-xl text-gray-600 mt-6 ">
            Exclusive offers and community initiatives
          </p>
        </div>

        {/* Promotions Cards */}
          <Link href='/products'>
        <div className="grid md:grid-cols-3 gap-6 mb-30">
          {promotions.map((promo, index) => (
            <div
              key={promo.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >

              <div className={`bg-linear-to-r ${promo.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
                
                <div className="relative z-10">
                  <div className="mb-4">{promo.icon}</div>
                  <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    {promo.badge}
                  </span>
                  <h3 className="text-2xl font-bold">{promo.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 mb-4">{promo.description}</p>
                <Button className="text-white font-semibold flex items-center gap-2 group-hover:gap-3 transition-all bg-pink-500 hover:bg-pink-600">
                  Learn More <ChevronRight size={18} />
                </Button>
              </div>
            </div>
          ))}
        </div>
          </Link>

        {/* Activities Grid */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Activities & Initiatives
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {activities.map((activity, index) => (
              <div
                key={activity.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-full">
                    <div className="text-blue-600">{activity.icon}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{activity.title}</h4>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="bg-linear-to-r from-purple-600 to-purple-400 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24" />
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Wholesale Partner Program
            </h3>
            <p className="text-xl mb-6 text-blue-100">
              Become a distributor and get exclusive benefits, priority support, and special pricing
            </p>
            <div className="flex flex-wrap justify-center gap-4">
            <Link href='/Distributor_form'>
              <button
              
               className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105">
                Become a Partner
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors transform hover:scale-105">
                Download Catalog
              </button>
            </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          opacity: 0;
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}