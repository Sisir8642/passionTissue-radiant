const products = [
  {
    id: 'face-tissue-100-pulls',
    name: 'Face Tissue 100 Pulls',
    category: 'Face-Tissue',
    shortDesc: 'Nepal\'s #1 Premium Brand Face Tissue',
    price: 'Rs. 450',
    image: '/images/tissue.jpg',
    pack: '5 Box Family Pack',
    sheets: '200 sheets per Box',
    pulls: '100 Pulls',
    ply: '2-Ply',
    highlights: [
      'Nepal\'s #1 Premium Brand FACE tissue paper',
      '100% virgin Pulp',
      'Safe and hygienic choice for your family',
      'Super soft FACIAL tissue with smooth feel',
      'Two ply paper for extra strength and softness',
      'Suitable for household and commercial use'
    ],
    description: 'Face tissue paper is a lightweight and disposable paper for personal hygiene and cleaning. The two-ply face tissue paper can withstand both normal and hard nose, face blows, sop up water and remove make-up easily.'
  },
  {
    id: 'mini-face-tissue',
    name: 'Mini Face Tissue',
    category: 'Face-Tissue',
    shortDesc: 'Soft Embossed Mini-Facial Tissue',
    price: 'Rs. 180',
    image: '/images/tissue2.png',
    pack: 'Single Pack',
    sheets: '150 sheets',
    pulls: '75 Pulls',
    ply: '2-Ply',
    highlights: [
      'Nepal\'s #1 Premium Brand MINI-FACE tissue paper',
      '100% virgin Pulp',
      'Super soft EMBOSSED MINI-FACIAL tissue',
      'Special pack for restaurant',
      'Two ply paper for extra strength and softness',
      'Suitable for household and commercial use'
    ],
    description: 'Mini face tissue paper is a lightweight and disposable paper for personal hygiene and cleaning. Perfect for hotels, restaurants, offices, and homes.'
  },
  {
    id: 'pocket-tissue',
    name: 'Pocket Face Tissue',
    category: 'Face-Tissue',
    shortDesc: 'Convenient Travel Pack',
    price: 'Rs. 120',
    image:'/images/tissue3.png',
    pack: '10 Packets Pack',
    sheets: '20 sheets per Packet',
    pulls: '10 Pulls',
    ply: '2-Ply',
    highlights: [
      '100% virgin Pulp',
      'Perfect for travelling',
      'Super soft Pocket FACIAL tissue',
      'Pack of 10 for convenience',
      'Two ply paper for extra strength',
      'Suitable for Travelling and commercial use'
    ],
    description: 'Ultra soft pocket tissue perfect for your daily activities and travel needs. Compact and convenient packaging.'
  },
  {
    id: 'prime-bathroom-240',
    name: 'Prime 3 Ply Bathroom Tissue',
    category: 'Bathroom-Tissue',
    shortDesc: 'Luxury 3-Ply Softness',
    price: 'Rs. 890',
    image: '/images/tissue4.png',
    pack: '10 Roll Family Pack',
    sheets: '240 sheets per roll',
    ply: '3-Ply',
    highlights: [
      'Nepal\'s #1 Premium Brand',
      '100% virgin Pulp',
      'Three-layers for ultimate softness',
      'Three ply paper for extra strength',
      'Dispenser friendly',
      'Pack of 10 Roll for convenience'
    ],
    description: 'Passion Prime 3-Ply Bathroom Tissue with its three-layers, is the epitome of softness and luxury, often chosen for its plush feel.'
  },
  {
    id: 'compact-bathroom-400',
    name: 'Compact 3 Ply Bathroom Tissue',
    category: 'Bathroom-Tissue',
    shortDesc: 'Long-lasting 400 Sheets',
    price: 'Rs. 1,050',
    image: '/images/tissue5.png',
    pack: '10 Roll Family Pack',
    sheets: '400 sheets per roll',
    ply: '3-Ply',
    highlights: [
      '100% virgin Pulp',
      'Extra long-lasting use',
      'Three ply paper for extra strength',
      'Dispenser friendly',
      'Suitable for household and commercial use',
      'Pack of 10 Roll'
    ],
    description: 'Passion Compact 3-Ply Bathroom Tissue offers maximum sheets per roll for long-lasting use with superior softness.'
  },
  {
    id: 'perfume-bathroom',
    name: 'Perfume 3 Ply Bathroom Tissue',
    category: 'Bathroom-Tissue',
    shortDesc: 'Scented Luxury Tissue',
    price: 'Rs. 920',
    image: '/images/tissue6.png',
    pack: '10 Roll Family Pack',
    sheets: '290 sheets per roll',
    ply: '3-Ply',
    highlights: [
      'Perfumed for freshness',
      '100% virgin Pulp',
      'Three ply paper for extra strength',
      'Dispenser friendly',
      'Pack of 10 Roll',
      'Suitable for household and commercial use'
    ],
    description: 'Passion Perfume 3-Ply Bathroom Tissue combines luxury softness with a pleasant fragrance for an enhanced experience.'
  },
  {
    id: 'select-bathroom',
    name: 'Select 3 Ply Bathroom Tissue',
    category: 'Bathroom-Tissue',
    shortDesc: 'Premium Quality Choice',
    price: 'Rs. 820',
    image: '/images/tissue7.png',
    pack: '10 Roll Family Pack',
    sheets: '200 sheets per roll',
    ply: '3-Ply',
    highlights: [
      '100% virgin Pulp',
      'Three ply paper for extra strength',
      'Dispenser friendly',
      'Pack of 10',
      'Suitable for household and commercial use',
      'Nepal\'s #1 Premium Brand'
    ],
    description: 'Passion Select 3-Ply Bathroom Tissue offers the perfect balance of quality and value for your family.'
  },
  {
    id: 'kitchen-towel',
    name: 'Prime 2 Ply Kitchen Towel Roll',
    category: 'Kitchen-Towel',
    shortDesc: 'Absorbent Kitchen Paper',
    price: 'Rs. 180',
    image: '/images/tissue8.png',
    pack: '1 Roll Pack',
    sheets: '100 sheets per roll',
    ply: '2-Ply',
    highlights: [
      '100% virgin Pulp',
      'Super absorbent',
      'Embossed for extra strength',
      'Two ply paper',
      'Dispenser friendly',
      'Suitable for household and commercial use'
    ],
    description: 'Passion Kitchen Towels Paper is absorbent, disposable towels made from paper, perfect for kitchen use in homes, restaurants, and hotels.'
  },
  {
    id: 'dinner-napkin',
    name: 'Dinner Napkin Paper',
    category: 'Napkins',
    shortDesc: '40x40cm Premium Napkins',
    price: 'Rs. 380',
    image: '/images/tissue10.png',
    pack: '400 sheets per PKT',
    size: '40x40cm',
    ply: '2-Ply',
    highlights: [
      '100% virgin Pulp',
      'Super soft dinner napkin',
      'Two ply paper for extra strength',
      '400 sheets per PKT',
      'Suitable for household and commercial use',
      'Perfect for restaurants and hotels'
    ],
    description: 'A dinner napkin for cleaning the face and hands during meals. Super soft and suitable for both household and commercial use.'
  },
  {
    id: 'face-wet-wipes',
    name: 'Face Wet Wipes',
    category: 'Wet-Wipes',
    shortDesc: 'Rose & Lavender Scented',
    price: 'Rs. 120',
    image: '/images/tissue2.png',
    pack: '1 Pack',
    variants: ['Rose', 'Lavender'],
    highlights: [
      'Saturated towelettes for quick cleaning',
      'Removes excess grime and sebum',
      'Contains Aloe Vera',
      'Easy to open and reseal packaging',
      'Store in cool and dry place',
      'Nepal\'s #1 Premium Brand'
    ],
    description: 'Passion Face Wet Wipes give your face and hands a quick clean when you\'re on the move. These help in removing excess grime and sebum, giving your face a refreshed feel.',
    ingredients: 'Water (Aqua), Aloe Vera, Propylene Glycol Menthol, PEG-75 lanolin, Chlorhexidine acetate'
  },
  {
    id: 'baby-wet-wipes',
    name: 'Budget Baby Wet Wipes',
    category: 'Wet-Wipes',
    shortDesc: 'Gentle Care for Baby',
    price: 'Rs. 95',
    image: '/images/tissue2.png',
    pack: '1 Pack',
    variants: ['Pink', 'Green'],
    highlights: [
      'Specially formulated for babies',
      'Soft and gentle',
      'Skin friendly pH',
      'Clinically tested for mildness',
      'Easy to open and reseal packaging',
      'Nepal\'s #1 Premium Brand'
    ],
    description: 'Passion Budget Baby Wet Wipes provides the utmost care and protection for your baby. Specially formulated with time tested herbs, soft and gentle with skin friendly pH.',
    ingredients: 'Water (Aqua), Propylene Glycol, Polysorbate 20, Phenoxyethanol, Caprylic Capramidopropyl Betaine, Disodium EDTA, Perfume, Methylparaben, Propylparaben'
  }
];

export default products;