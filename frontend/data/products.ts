export interface Product {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  image: string;
  pack?: string;
  sheets?: string;
  pulls?: string;
  ply?: string;
  highlights: string[];
  description: string;
}

export const products: Product[] = [
  //face tissue
  {
    id: 'face-tissue-100-pulls',
    name: 'Face Tissue 100 Pulls',
    category: 'Face-tissue',
    shortDesc: 'Lightweight 2-Ply tissue for personal hygiene',
    image: '/images/FaceT.png',
    pack: 'Box Pack',
    sheets: '200 sheets per Box',
    pulls: '100 Pulls',
    ply: '2-Ply',
    highlights: [
      "Nepal's No. 1 Premium Brand FACE tissue paper",
      '100% virgin Pulp',
      'Safe and hygienic choice for your family',
      'Affordable choice, daily choice',
      'Super soft FACIAL tissue with the smooth feel',
      'Daily use for Car, Bus, Office, Home, Hotel, Restaurant, Hospital, Clinic',
      'Passion Face Tissue - 100 and 200 Pulls BOX Pack',
      'Two ply paper for extra strength and softness',
      'Suitable for household, office, and commercial use'
    ],
    description: 'PASSION Face Tissue is lightweight and disposable. 2-Ply tissue can handle normal and hard nose/face blows, sop up water, and remove make-up easily.'
  },
  {
    id: 'mini-face-tissue',
    name: 'Mini Face Tissue',
    category: 'Face-tissue',
    shortDesc: 'Soft embossed 2-Ply mini tissue',
    image: '/images/MiniFT.png',
    pack: 'PP Pack',
    ply: '2-Ply',
    highlights: [
      "Nepal's No.1 Premium Brand MINI-FACE tissue paper",
      '100% virgin Pulp',
      'Safe and hygienic choice for your family',
      'Affordable choice, daily choice',
      'Super soft EMBOSSED MINI-FACIAL tissue with the smooth feel',
      'Daily use for office, Home, Hotel, Restaurant, Hospital, Clinic',
      'Passion MINI-FACE TISSUE PP Pack',
      'Two ply paper for extra strength and softness',
      'Special pack for Hotel and Restaurant'
    ],
    description: 'PASSION Mini Face Tissue is lightweight and disposable. 2-Ply embossed mini tissue can handle normal and hard nose/face blows, sop up water, and remove make-up easily.'
  },
  {
    id: 'pocket-face-tissue',
    name: 'Pocket Face Tissue',
    category: 'Face-tissue',
    shortDesc: 'Ultra soft 2-Ply pocket tissue',
    image: '/images/Pocket5FT.png',
    pack: '10 Packets family Pack',
    sheets: '20 sheets per Packet',
    pulls: '10 Pulls',
    ply: '2-Ply',
    highlights: [
      "Nepal's No. 1 Premium Brand tissue paper",
      '100% virgin Pulp',
      'Safe and hygienic choice for your family',
      'Affordable choice, daily choice',
      'Super soft Pocket FACIAL tissue with the smooth feel',
      'Daily use for your activities',
      'Two ply paper for extra strength and softness',
      'Pack of 10 for convenience and value for money',
      'Suitable for Travelling and commercial use'
    ],
    description: 'PASSION Pocket Face Tissue is lightweight and disposable. 2-Ply ultra soft embossed tissue is perfect for travel and daily use.'
  },

  //bathroom tissue
  {
    id: 'prime-3-ply-bathroom-tissue-240-sheets',
    name: 'Prime 3 Ply Bathroom Tissue 240 Sheets',
    category: 'Bathroom-Tissue',
    shortDesc: 'Soft 3-Ply tissue for everyday use',
    image: '/images/Prime4BT.png',
    sheets: '240 sheets per roll',
    ply: '3-Ply',
    highlights: [
      "Nepal's No.1 Premium Brand tissue paper",
      '100% virgin Pulp',
      'Safe and hygienic choice for your family',
      'Affordable choice, daily choice',
      'Super soft bathroom tissue with the smooth feel',
      'Daily use for office, Home, Hotel, Restaurant, Hospital, Clinic',
      'Passion Prime 3 Ply Bathroom Tissue',
      'Three ply paper for extra strength and softness',
      'Pack size: 1, 2, 4, 6, 10 rolls',
      'Suitable for household and commercial use',
      'Dispenser friendly'
    ],
    description: 'PASSION Prime 3-Ply Bathroom Tissue is soft, absorbent, and durable for everyday use.'
  },
  {
    id: 'compact-3-ply-bathroom-tissue-400-sheets',
    name: 'Compact 3 Ply Bathroom Tissue 400 Sheets',
    category: 'Bathroom-Tissue',
    shortDesc: 'Thick and luxurious 3-Ply tissue',
    image: '/images/CompactBT.png',
    sheets: '400 sheets per roll',
    ply: '3-Ply',
    highlights: [
      "Nepal's No.1 Premium Brand tissue paper",
      '100% virgin Pulp',
      'Safe and hygienic choice for your family',
      'Affordable choice, daily choice',
      'Super soft bathroom tissue with the smooth feel',
      'Daily use for office, Home, Hotel, Restaurant, Hospital, Clinic',
      'Passion Compact 3 Ply Bathroom Tissue',
      'Three ply paper for extra strength and softness',
      'Pack size: 1, 2, 4, 6, 10 rolls',
      'Suitable for household and commercial use',
      'Dispenser friendly'
    ],
    description: 'PASSION Compact 3-Ply Bathroom Tissue is plush and soft, offering long-lasting use.'
  },
  {
    id: 'perfume-3-ply-bathroom-tissue-290-sheets',
    name: 'Perfume 3 Ply Bathroom Tissue 290 Sheets',
    category: 'Bathroom-Tissue',
    shortDesc: 'Soft 3-Ply perfumed bathroom tissue',
    image: '/images/Perfume2Bt.png',
    sheets: '290 sheets per roll',
    ply: '3-Ply',
    highlights: [
      "Nepal's No.1 Premium Brand tissue paper",
      '100% virgin Pulp',
      'Safe and hygienic choice for your family',
      'Affordable choice, daily choice',
      'Super soft bathroom tissue with the smooth feel',
      'Daily use for office, Home, Hotel, Restaurant, Hospital, Clinic',
      'Passion Perfumed 3 Ply Bathroom Tissue',
      'Three ply paper for extra strength and softness',
      'Pack size: 1, 2, 4, 6, 10 rolls',
      'Suitable for household and commercial use',
      'Dispenser friendly'
    ],
    description: 'PASSION Perfumed 3-Ply Bathroom Tissue adds a soft fragrance and luxurious feel.'
  },
  {
    id: 'select-3-ply-bathroom-tissue-200-sheets',
    name: 'Select 3 Ply Bathroom Tissue 200 Sheets',
    category: 'Bathroom-Tissue',
    shortDesc: 'Durable 3-Ply tissue for daily use',
    image: '/images/SelectBt.png',
    sheets: '200 sheets per roll',
    ply: '3-Ply',
    highlights: [
      "Nepal's No.1 Premium Brand tissue paper",
      '100% virgin Pulp',
      'Safe and hygienic choice for your family',
      'Affordable choice, daily choice',
      'Super soft bathroom tissue with the smooth feel',
      'Daily use for office, Home, Hotel, Restaurant, Hospital, Clinic',
      'Passion Select 3 Ply Bathroom Tissue',
      'Three ply paper for extra strength and softness',
      '200 sheets per roll - 10 rolls family pack',
      'Suitable for household and commercial use',
      'Dispenser friendly'
    ],
    description: 'PASSION Select 3-Ply Bathroom Tissue is soft, strong, and convenient for family use.'
  },
//kitchen towel {
  {  
    id: 'prime-2-ply-kitchen-towel-roll-100-sheets',
    name: 'Prime 2 Ply Kitchen Towel Roll 100 Sheets',
    category: 'Kitchen-Towel',
    shortDesc: 'Absorbent and soft 2-Ply kitchen towel roll',
    image: '/images/PrimeKT.png',
    sheets: '100 sheets per roll',
    ply: '2-Ply',
    highlights: [
      "Nepal's No.1 Premium Brand tissue paper",
      '100% virgin Pulp',
      'Safe and hygienic choice for your family',
      'Affordable choice, daily choice',
      'Super soft embossed Kitchen Towels Roll with smooth feel',
      'Daily use for office, Home, Hotel, Restaurant, Hospital, and more',
      'Passion Prime 2 Ply Kitchen Towels Roll',
      'Two ply paper for extra strength and softness',
      'Pack size: 1 roll, 2 rolls',
      'Suitable for household and commercial use',
      'Dispenser friendly'
    ],
    description: 'PASSION Prime 2-Ply Kitchen Towels are absorbent, soft, and perfect for everyday kitchen use.'
  },
  //napkin group
  {
    id: 'dinner-napkin-paper',
    name: 'Dinner Napkin Paper',
    category: 'Napkin',
    shortDesc: 'Elegant soft disposable napkin paper',
    image: '/images/DinnerN.png',
    sheets: '400 sheets per PKT',
    ply: '2-Ply',
    highlights: [
      "Nepal's No.1 Premium Brand Dinner Napkin paper",
      '100% virgin Pulp',
      'Safe and hygienic choice for your family',
      'Affordable choice, daily choice',
      'Super soft DINNER Napkin tissue paper with smooth feel',
      'Daily use for office, Home, Hotel, Restaurant and more',
      'Two ply paper for extra strength and softness',
      'Only for bulk order: cartoon pack (40 packets in 1 CTN)',
      'Suitable for household and commercial use'
    ],
    description: 'Napkins are soft, disposable papers for cleaning hands and face during meals. Ideal for home, hotel, and commercial use.'
  },
  {
    id: 'elegant-soft-napkin',
    name: 'Elegant Soft Napkin',
    category: 'Napkin',
    shortDesc: 'Soft disposable napkin for everyday use',
    image: '/images/Elegant.png',
    ply: '2-Ply',
    highlights: [
      "Nepal's No.1 Premium Brand",
      'Safe and hygienic choice for your family',
      'Affordable choice, daily choice',
      'Suitable for household and commercial use'
    ],
    description: 'Elegant soft napkins suitable for dining and general use.'
  },
  {
    id: 'n-fold-paper-hand-towel',
    name: 'N-Fold Paper Hand Towel',
    category: 'Napkin',
    shortDesc: 'Disposable N-fold hand towel paper',
    image: '/images/additional.png',
    ply: '2-Ply',
    highlights: [
      "Nepal's No.1 Premium Brand",
      'Safe and hygienic choice for your family',
      'Affordable choice, daily choice',
      'Suitable for household and commercial use'
    ],
    description: 'N-Fold hand towels are disposable paper towels suitable for hand drying in homes and commercial spaces.'
  },
  //Wipes group
  {
    id: 'face-wet-wipes',
    name: 'Face Wet Wipes',
    category: 'Wipes',
    shortDesc: 'Saturated towel wipes for quick face and hand cleaning',
    image: '/images/FaceWW.png',
    highlights: [
      "Nepal's No.1 Premium Brand",
      'Safe and hygienic choice for your family',
      'Affordable choice, daily use',
      'Daily use for refreshment and quick cleaning',
      'Easy to open and reseal packaging ensures moisture stays',
      'Store in a cool and dry place'
    ],
    description: `Passion face wet wipes are saturated towel etches that give your face and hands a quick clean when you’re on the move or if you need sanitization quickly. These help in removing excess grime and sebum, giving your face a refreshed feel. However, there are many uses to facial wipes.

Ingredients: Water (Aqua), Aloe Vera, Propylene Glycol Menthol, PEG-75 lanolin, Chlorhexidine acetate

To Use: Lift resealable sticker and remove one wipe over the eyelids, face, and neck to cleanse the skin. Ensure that the pack is properly packed to prevent wipes from drying out.

Caution: Avoid direct contact with eyes. Avoid children and babies chewing or swallowing wipes. Do not store under sunlight and high temperature to prevent drying. Do not flush wipes.`
  },
  {
    id: 'budget-baby-wet-wipes',
    name: 'Budget Baby Wet Wipes',
    category: 'Wipes',
    shortDesc: 'Soft and gentle wipes for baby care',
    image: '/images/BabyWW2.png',
    highlights: [
      "Nepal's No.1 Premium Brand",
      'Safe and hygienic choice for your baby and family',
      'Affordable choice, daily use',
      'Daily use for refreshment and cleanliness',
      'Easy to open and reseal packaging ensures moisture stays',
      'Store in a cool and dry place'
    ],
    description: `Passion budget baby wet wipes provide the utmost care and protection for your baby. Specially formulated with time-tested herbs. These wipes are soft and gentle, with a skin-friendly pH for your baby’s delicate skin, clinically tested for mildness.

Ingredients: Water (Aqua), PREPYLENS GIYCOOL, POLYSORBATE 20, PHENOXYETHANOL, CAPRYL CAPRAMIDOPROPYL BETAINE, DISODIUM EDTA, PERFUME, METHYLPARAHEN, PROPYLPARABEN

To Use: Lift resealable sticker and remove one wipe.

Directions: Peel inner label and use as required. Reseal after use to keep wipes moist. Keep out of reach of children. Avoid contact with eyes. Do not store under direct sunlight and high temperature.`
  },
  //sanitary pad 
  {
    id: 'ultra-thin-prime',
    name: 'Ultra Thin Prime',
    category: 'Sanitary-Pad',
    shortDesc: 'Ultra-thin sanitary pad for daily comfort',
    image: '/images/Sanitary.png',
    highlights: [
      'Nepal’s No.1 Premium Brand',
      'Ultra-thin and comfortable',
      'Safe and hygienic choice',
      'Daily use for women’s hygiene'
    ],
    description: 'Ultra Thin Prime sanitary pads provide maximum comfort and protection for everyday use. Designed for women seeking a discreet, soft, and hygienic solution for menstrual care.'
  },
  {
    id: 'ultra-thin-select',
    name: 'Ultra Thin Select',
    category: 'Sanitary-Pad',
    shortDesc: 'Select ultra-thin sanitary pad for sensitive skin',
    image: '/images/Sanitary.png',
    highlights: [
      'Nepal’s No.1 Premium Brand',
      'Ultra-thin and gentle on skin',
      'Safe and hygienic choice',
      'Daily use for women’s hygiene'
    ],
    description: 'Ultra Thin Select sanitary pads are specially designed for sensitive skin, offering a soft, thin, and hygienic option for everyday menstrual care.'
  },
  {
    id: 'panty-lyner',
    name: 'Panty Liner',
    category: 'Sanitary-Pad',
    shortDesc: 'Soft panty liner for light protection',
    image: '/images/Sanitary.png',
    highlights: [
      'Nepal’s No.1 Premium Brand',
      'Soft and comfortable',
      'Safe and hygienic choice',
      'Ideal for light protection and daily freshness'
    ],
    description: 'Panty liners provide light protection and keep you feeling fresh throughout the day. Perfect for daily hygiene, spotting, or as a backup with sanitary pads.'
  }
];

export default products;