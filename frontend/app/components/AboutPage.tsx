export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-purple-200 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-purple-800 mb-4">
            About Us
          </h1>
          <div className="w-32 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <section className="mb-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition-shadow duration-300 border-l-4 border-purple-600">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Mainali Industries
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Being a delegated part of Mainali Group, Mainali Industries Pvt. Ltd. serves 
              as manufacturer and distributor of various food and non-food items with 
              other daily hacks products. It is a business and service-oriented one of 
              the sister companies of Mainali Group. With vision and mission of producing 
              and providing quality products with high quality services at affordable 
              cost to satisfy emerging needs of consumers we work as product manufacturer 
              under brand "Passion" bathroom tissue, face tissue, napkins and other 
              sanitary products.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition-shadow duration-300 border-l-4 border-pink-600">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Mainali Group
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Mainali Group of Companies, a reputed group with proud brands, concedes 
              culture and rich traditions. Mainali Group serves through Mainali Industries 
              Pvt. Ltd., Pareli Business House Pvt. Ltd. and Mainali Marketing, sister 
              companies of Mainali Group of Companies. We are here to fulfil the needs 
              of consumers with satisfying products since 2068 BS, becoming a perfect 
              group with a well experienced team of business professionals. We have grown 
              to become a leading manufacturer of varieties of food and non-food items 
              that satisfy your needs. Our diversified industries include different kinds 
              of food and non-food items.
            </p>
          </div>
        </section>

        <section>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition-shadow duration-300 border-l-4 border-purple-500">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
                Passion Tissue
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Manufactured and marketed by Mainali Industries, Passion Tissue is one of 
              the popular tissue brands in Nepal.
            </p>
          </div>
        </section>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl shadow-lg p-6 text-white text-center">
            <div className="text-4xl font-bold mb-2">Since 2068 BS</div>
            <div className="text-purple-200">Years of Excellence</div>
          </div>
          <div className="bg-gradient-to-br from-pink-600 to-pink-700 rounded-xl shadow-lg p-6 text-white text-center">
            <div className="text-4xl font-bold mb-2">3+</div>
            <div className="text-pink-200">Sister Companies</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-6 text-white text-center">
            <div className="text-4xl font-bold mb-2">Quality</div>
            <div className="text-purple-200">Products & Service</div>
          </div>
        </div>
      </div>
    </div>
  );
}