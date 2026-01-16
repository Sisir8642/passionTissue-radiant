'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15, // delay between each child animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function AboutPage() {
  const products = [
    'Bathroom Tissue',
    'Face Tissue',
    'Mini Face Tissue',
    'Pocket Face Tissue',
    'Kitchen Towel Tissue',
    'Elegant Soft Napkin Tissue',
    'Dinner Napkin Tissue',
    'Hard Napkin Tissue',
    'Face Wet Wipes',
    'Baby Wet Wipes',
    'Sanitary Pads',
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-100 via-pink-50 to-purple-200 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Header & Description */}
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-purple-800 mb-6">
          Mainali Industries
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Mainali Industries Pvt. Ltd., a part of the Mainali Group, is a manufacturer and distributor of premium hygiene products in Nepal. 
            Passion is the flagship brand, delivering high-quality and hygienic tissue and personal care products made from 100% virgin pulp, ensuring safety, comfort, and hygiene for everyday use.
          </p>
        </div>

        {/* Products List with animation */}
        <section className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border-l-4 border-purple-600 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Products</h2>
          <motion.ul
            className="list-disc list-inside text-gray-700 space-y-2 text-lg"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {products.map((product, idx) => (
              <motion.li key={idx} variants={itemVariants}>
                {product}
              </motion.li>
            ))}
          </motion.ul>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border-l-4 border-purple-500 hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Mission</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Our mission is to fulfill consumer needs by delivering high-quality, authentic, and affordable hygiene products under the Passion brand, proudly “Made in Nepal.” We focus on:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mt-3">
              <li>Customer Satisfaction</li>
              <li>Hygiene and Excellence</li>
              <li>Sustainability</li>
              <li>Nation Building</li>
              <li>Market Leadership</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border-l-4 border-pink-500 hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Vision</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Our vision is to establish Mainali Industries as a leading corporate conglomerate in Nepal, setting high standards for locally manufactured goods while competing confidently with international brands. We aim for:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mt-3">
              <li>Global Recognition for “Made in Nepal”</li>
              <li>Becoming a Trusted Household Name</li>
              <li>Sustainability and Future Growth</li>
              <li>Economic Contribution to the Nation</li>
              <li>Excellence in Hygiene and Comfort</li>
            </ul>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
