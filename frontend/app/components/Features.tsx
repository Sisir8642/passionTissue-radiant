import React from 'react';

export default function LifetimeTissue() {
  const features = [
    {
      icon: (
        <svg
          className="w-12 h-12 text-purple-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M7 21c.5-3.5 2-7 4-9 1.5-1.5 3-2 4-2 .5 0 1 .5 1.5 1.5.5 1 1 2.5 1.5 4.5.5 2 .5 4 0 5.5-.5 1.5-1.5 2.5-3 2.5-2 0-4-1-6-3z" />
          <path d="M12 10c0-2 1-4 3-5" />
        </svg>
      ),
      title: 'Super Soft',
      description: 'Softness is desirable for something to go with skin',
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-purple-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="8" r="3" />
          <path d="M12 11v4" />
          <path d="M7 21l5-8 5 8" />
          <circle cx="12" cy="8" r="6" />
        </svg>
      ),
      title: 'Supreme Quality',
      description: 'Quality of materials used and the finished products are of premium grade',
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-purple-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
          <circle cx="12" cy="12" r="3" />
          <circle cx="12" cy="12" r="6" />
        </svg>
      ),
      title: '100% Virgin Pulp',
      description: 'No additional residues in raw materials, we believe in purity',
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-purple-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="3" y="6" width="18" height="13" rx="2" />
          <path d="M8 10h8M8 14h5" />
          <rect x="7" y="3" width="3" height="3" rx="0.5" />
          <rect x="12" y="3" width="3" height="3" rx="0.5" />
          <rect x="17" y="3" width="3" height="3" rx="0.5" />
        </svg>
      ),
      title: 'Dispenser Friendly',
      description: 'Goes with dispensers and can be used anywhere',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-purple-700">
      <div className="max-w-7xl mx-auto px-4 py-16">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-purple-600 mb-4">
            The Lifetime Tissue
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-40 bg-purple-400"></div>
            <svg
              className="w-6 h-6 text-purple-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <div className="h-px w-40 bg-purple-400"></div>
          </div>
          <p className="text-2xl text-gray-700 mt-4">Our Quality Features</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border-3 border-purple-600 p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}