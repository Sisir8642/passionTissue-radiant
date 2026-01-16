// export interface ProductSpecifications {
//   pack?: string;
//   sheets?: string;
//   pulls?: string;
//   ply?: string;
//   color?: string;
// }

// export interface ProductVariant {
//   id: string;
//   label: string; // "1 Roll", "4 Rolls", "10 Rolls"
//   rolls?: number;
//   images: string[]; // images for this variant (different colors)
// }

// export interface Product {
//   id: string;
//   name: string;
//   category: string;
//   shortDesc: string;
//   image: string; // default main image
//   specifications?: ProductSpecifications[];
//   variants?: ProductVariant[];
//   highlights: string[];
//   description: string;
// }

// const basePath = "/new";

// export const products: Product[] = [
//   // Face Tissue
//   {
//     id: "face-tissue-100-pulls",
//     name: "Face Tissue 100 Pulls",
//     category: "Face-tissue",
//     shortDesc: "Lightweight 2-Ply tissue for personal hygiene",
//     image: `${basePath}/images/FaceT.png`,
//     specifications: [
//       {
//         color: "blue",
//         pack: "Box Pack",
//         sheets: "200 sheets per Box",
//         pulls: "100 Pulls",
//         ply: "2-Ply",
//       },
//     ],
//     variants: [
//       {
//         id: "face-100-pulls",
//         label: "100 pulls",
//         // rolls: 1,
//         images: [
//           `${basePath}/images/face/100pulls/image.png`,
//           `${basePath}/images/face/100pulls/imageblue.png`,
//           `${basePath}/images/face/100pulls/imagegreen.png`,
//           `${basePath}/images/face/100pulls/imagepink.png`,
//           `${basePath}/images/face/100pulls/imagepurple.png`,
//           `${basePath}/images/face/100pulls/imageyelow.png`,
//         ],
//       },
//       {
//         id: "face-200-pulls",
//         label: "200 pulls",
//         // rolls: 4,
//         images: [
//           `${basePath}/images/face/100pulls/image200.png`,
//           `${basePath}/images/face/100pulls/image201.png`,
//         ],
//       },
//       // {
//       //   id: "face-10-roll",
//       //   label: "10 Rolls",
//       //   rolls: 10,
//       //   images: [
//       //     `${basePath}/images/face/10roll-purple.png`,
//       //     `${basePath}/images/face/10roll-yellow.png`,
//       //     `${basePath}/images/face/10roll-blue.png`,
//       //   ],
//       // },
//     ],
//     highlights: [
//       "Nepal's No. 1 Premium Brand FACE tissue paper",
//       "100% virgin pulp",
//       "Safe and hygienic choice for your family",
//       "Affordable choice, daily choice",
//       "Super soft FACIAL tissue with smooth feel",
//       "Daily use for car, bus, office, home, hotel, restaurant, clinic",
//       "Two ply paper for extra strength and softness",
//     ],
//     description:
//       "PASSION Face Tissue is lightweight and disposable. 2-Ply tissue can handle normal and hard nose/face blows, sop up water, and remove make-up easily.",
//   },
  
//   {
//     id: "mini-face-tissue",
//     name: "Mini Face Tissue",
//     category: "Face-tissue",
//     shortDesc: "Soft embossed 2-Ply mini tissue",
//     image: `${basePath}/images/MiniFT.png`,
//     specifications: [
//       {
//         color: "pink",
//         sheets: "200 sheets per Box",
//         pulls: "100 Pulls",
//         pack: "PP Pack",
//         ply: "2-Ply",
//       },
//     ],

//     variants:[
//       {
//         id: "mini-face-tissue",
//         label: "Mini Face",
//         // rolls: 1,
//         images: [
//           `${basePath}/images/face/mini/image.png`,
//         ],
//       },
//     ],
//     highlights: [
//       "Nepal's No.1 Premium Brand MINI-FACE tissue paper",
//       "100% virgin pulp",
//       "Safe and hygienic",
//       "Super soft embossed MINI-FACIAL tissue",
//     ],
//     description:
//       "PASSION Mini Face Tissue is lightweight, disposable, and soft. Perfect for travel or office use.",
//   },
//   {
//     id: "pocket-face-tissue",
//     name: "Pocket Face Tissue",
//     category: "Face-tissue",
//     shortDesc: "Ultra soft 2-Ply pocket tissue",
//     image: `${basePath}/images/Pocket5FT.png`,
//     specifications: [
//       {
//         pack: "10 Packets Family Pack",
//         sheets: "20 sheets per packet",
//         pulls: "10 Pulls",
//         ply: "2-Ply",
//       },
//     ],
//     variants:[
//       {
//         id: "pocket-single-face",
//         label: "Single Pocket",
//         // rolls: 4,
//         images: [
//           `${basePath}/images/face/pocket/singleblue.png`,
//           `${basePath}/images/face/pocket/singlegreen.png`,
//           `${basePath}/images/face/pocket/singlepink.png`,
//           `${basePath}/images/face/pocket/singlepurple.png`,
//           `${basePath}/images/face/pocket/singleyellow.png`,

//         ],
//       },
//       {
//         id: "pocket-bundle-face",
//         label: "Bundle Pocket",
//         // rolls: 4,
//         images: [
//           `${basePath}/images/face/pocket/bundleblue.png`,
//           `${basePath}/images/face/pocket/bundlegreen.png`,
//           `${basePath}/images/face/pocket/bundlepink.png`,
//           `${basePath}/images/face/pocket/bundlepurple.png`,
//           `${basePath}/images/face/pocket/bundleyellow.png`,
//         ],
//       },
//     ],

//     highlights: [
//       "Nepal's No.1 Premium Brand tissue paper",
//       "100% virgin pulp",
//       "Safe and hygienic",
//       "Ultra soft pocket FACIAL tissue",
//       "Convenient for travel and daily use",
//     ],
//     description:
//       "PASSION Pocket Face Tissue is ultra-soft, disposable, and ideal for travel or daily use.",
//   },

//   // Bathroom Tissue
//   {
//     id: "prime-3-ply-bathroom-tissue-240",
//     name: "Prime 3 Ply Bathroom Tissue 240 Sheets",
//     category: "Bathroom-Tissue",
//     shortDesc: "Soft 3-Ply tissue for everyday use",
//     image: `${basePath}/images/Prime4BT.png`, //image shown when clicked on the sub category
//     specifications: [
//       {
//         sheets: "240 ",
//         ply: "3-Ply",
//       },
//     ],
//     variants: [
//       {
//         id: "prime-1-roll",
//         label: "1 Rolls",
//         rolls: 1,
//         images: [
//           `${basePath}/images/bathroom/prime/pinkS.png`,
//           `${basePath}/images/bathroom/prime/blueS.png`,
          
//         ],
//       },
//       {
//         id: "prime-2-roll",
//         label: "2 Rolls",
//         rolls: 1,
//         images: [
//           `${basePath}/images/bathroom/prime/pinkD.png`,
//           `${basePath}/images/bathroom/prime/blueD.png`,
          
//         ],
//       },
//       {
//         id: "prime-4-roll",
//         label: "4 Rolls",
//         rolls: 4,
//         images: [
//           `${basePath}/images/bathroom/prime/pink4.png`,
//           `${basePath}/images/bathroom/prime/blue4.png`,
//         ],
//       },
//       {
//         id: "prime-6-roll",
//         label: "6 Rolls",
//         rolls: 10,
//         images: [
//           `${basePath}/images/bathroom/prime/pink6.png`,
//           `${basePath}/images/bathroom/prime/blue6.png`,
//         ],
//       },
//       {
//         id: "prime-10-roll",
//         label: "10 Rolls",
//         rolls: 10,
//         images: [
//           `${basePath}/images/bathroom/prime/pink10.png`,
//           `${basePath}/images/bathroom/prime/blue10.png`,
//         ],
//       },
//     ],
//     highlights: [
//       "Nepal's No.1 Premium Brand tissue paper",
//       "100% virgin pulp",
//       "Soft and hygienic",
//       "Dispenser friendly",
//       "Three ply paper for extra strength and softness",
//     ],
//     description:
//       "PASSION Prime 3-Ply Bathroom Tissue is soft, absorbent, and durable for everyday use.",
//   },
//   {
//     id: "compact-3-ply-bathroom-tissue-400",
//     name: "Compact 3 Ply 400 Sheets",
//     category: "Bathroom-Tissue",
//     shortDesc: "Thick and luxurious 3-Ply tissue",
//     image: `${basePath}/images/CompactBT.png`,
//     specifications: [
//       {
//         sheets: "400 ",
//         ply: "3-Ply",
//       },
//     ],
//     variants: [
//       {
//         id: "compact-1-roll",
//         label: "1 Rolls",
//         rolls: 1,
//         images: [
//           `${basePath}/images/bathroom/compact/400plyroll1.png`,
//           // `${basePath}/images/image.png`,
//           // `${basePath}/images/image.png`,
//         ],
//       },
//       {
//         id: "compact-2-roll",
//         label: "2 Rolls",
//         rolls: 1,
//         images: [`${basePath}/images/bathroom/compact/400plyroll2.png`],
//       },
//       {
//         id: "compact-4-roll",
//         label: "4 Rolls",
//         rolls: 4,
//         images: [`${basePath}/images/bathroom/compact/400plyroll4.png`],
//       },
//       {
//         id: "compact-6-roll",
//         label: "6 Rolls",
//         rolls: 10,
//         images: [`${basePath}/images/bathroom/compact/400plyroll6.png`],
//       },
//       {
//         id: "compact-10-roll",
//         label: "10 Rolls",
//         rolls: 10,
//         images: [`${basePath}/images/bathroom/compact/400plyroll10.png`],
//       },
//     ],
//     highlights: [
//       "Nepal's No.1 Premium Brand tissue paper",
//       "Soft and hygienic",
//       "Three ply paper for extra strength and softness",
//     ],
//     description:
//       "PASSION Compact 3-Ply Bathroom Tissue is plush and soft, offering long-lasting use.",
//   },

//   {
//     id: "perfume-3-ply-bathroom-tissue-290-sheets",
//     name: "Perfume 3 Ply Bathroom Tissue 290 Sheets",
//     category: "Bathroom-Tissue",
//     shortDesc: "Soft 3-Ply perfumed bathroom tissue",
//     image: `${basePath}/images/Perfume2Bt.png`,
//     specifications: [
//       {
//         sheets: "290 ",
//         ply: "3-Ply",
//       },
//     ],

//     variants: [
//       {
//         id: "perfume-1-roll",
//         label: "1 Rolls",
//         rolls: 1,
//         images: [
//           `${basePath}/images/bathroom/perfume/green1.png`,
//         ]
//       },
//       {
//         id: "perfume-2-roll",
//         label: "2 Rolls",
//         rolls: 1,
//         images: [ `${basePath}/images/bathroom/perfume/green2.png`],
//       },
//       {
//         id: "perfume-4-roll",
//         label: "4 Rolls",
//         rolls: 4,
//         images: [ `${basePath}/images/bathroom/perfume/green4.png`],
//       },
//       {
//         id: "perfume-6-roll",
//         label: "6 Rolls",
//         rolls: 10,
//         images: [ `${basePath}/images/bathroom/perfume/green6.png`],
//       },
//       {
//         id: "perfume-10-roll",
//         label: "10 Rolls",
//         rolls: 10,
//         images: [ `${basePath}/images/bathroom/perfume/green10.png`],
//       },
//     ],
//     highlights: [
//       "Nepal's No.1 Premium Brand tissue paper",
//       "100% virgin Pulp",
//       "Safe and hygienic choice for your family",
//       "Affordable choice, daily choice",
//       "Super soft bathroom tissue with the smooth feel",
//       "Daily use for office, Home, Hotel, Restaurant, Hospital, Clinic",
//       "Passion Perfumed 3 Ply Bathroom Tissue",
//       "Three ply paper for extra strength and softness",
//       "Pack size: 1, 2, 4, 6, 10 rolls",
//       "Suitable for household and commercial use",
//       "Dispenser friendly",
//     ],
//     description:
//       "PASSION Perfumed 3-Ply Bathroom Tissue adds a soft fragrance and luxurious feel.",
//   },
//   {
//     id: "select-3-ply-bathroom-tissue-200-sheets",
//     name: "Select 3 Ply Bathroom Tissue 200 Sheets",
//     category: "Bathroom-Tissue",
//     shortDesc: "Durable 3-Ply tissue for daily use",
//     image: `${basePath}/images/SelectBt.png`,
//     specifications: [
//       {
//         sheets: "200 ",
//         ply: "3-Ply",
//       },
//     ],

//     variants: [
//       {
//         id: "select-10-roll",
//         label: "10 Rolls",
//         rolls: 10,
//         images: [
//           `${basePath}/images/bathroom/select/green10.png`,        
//         ],
//       },
      
//     ],
//     highlights: [
//       "Nepal's No.1 Premium Brand tissue paper",
//       "100% virgin Pulp",
//       "Safe and hygienic choice for your family",
//       "Affordable choice, daily choice",
//       "Super soft bathroom tissue with the smooth feel",
//       "Daily use for office, Home, Hotel, Restaurant, Hospital, Clinic",
//       "Passion Select 3 Ply Bathroom Tissue",
//       "Three ply paper for extra strength and softness",
//       "200 sheets per roll - 10 rolls family pack",
//       "Suitable for household and commercial use",
//       "Dispenser friendly",
//     ],
//     description:
//       "PASSION Select 3-Ply Bathroom Tissue is soft, strong, and convenient for family use.",
//   },

//   // Kitchen Towel
//   {
//     id: "prime-2-ply-kitchen-towel-100",
//     name: "Prime 2 Ply Kitchen Towel Roll 100 Sheets",
//     category: "Kitchen-Towel",
//     shortDesc: "Absorbent 2-Ply kitchen towel roll",
//     image: `${basePath}/images/PrimeKT.png`,
//     specifications: [
//       {
//         sheets: "100 ",
//         ply: "2-Ply",
//       },
//     ],

//     variants: [
//       {
//         id: "kt-1-roll",
//         label: "1 Rolls",
//         rolls: 1,
//         images: [`${basePath}/images/kitchen/blue1.png`],
//       },
//       {
//         id: "kt-2-roll",
//         label: "2 Rolls",
//         rolls: 1,
//         images: [`${basePath}/images/kitchen/blue2.png`],
//       },
      
//     ],
//     highlights: [
//       "Nepal's No.1 Premium Brand tissue paper",
//       "Soft embossed Kitchen Towels",
//       "Absorbent and strong for everyday use",
//     ],
//     description:
//       "PASSION Prime 2-Ply Kitchen Towels are soft, absorbent, and perfect for daily kitchen use.",
//   },

//   // Napkin
//   {
//     id: "dinner-napkin-paper",
//     name: "Dinner Napkin Paper",
//     category: "Napkin",
//     shortDesc: "Soft disposable napkin paper",
//     image: `${basePath}/images/DinnerN.png`,
//     specifications: [
//       {
//         sheets: "400 ",
//         ply: "2-Ply",
//       },
//     ],

//     variants: [
//       {
//         id: "napkin-dinner",
//         label: "Dinner",
//         // rolls: 1,
//         images: [
//           `${basePath}/images/napkin/dinner.png`,
//         ]
//       },
//     ],

//     highlights: [
//       "Nepal's No.1 Premium Brand Dinner Napkin paper",
//       "Soft and hygienic",
//       "Bulk pack suitable for home and commercial use",
//     ],
//     description:
//       "Napkins are soft, disposable papers for cleaning hands and face during meals.",
//   },
//   {
//     id: "elegant-soft-napkin",
//     name: "Elegant Soft Napkin",
//     category: "Napkin",
//     shortDesc: "Soft disposable napkin for everyday use",
//     image: `${basePath}/images/Elegant.png`,
//     specifications: [
//       {
//         ply: "2-Ply",
//       },
//     ],

//     variants:[
//       {
//         id: "napkin-elegant",
//         label: "Elegant",
//         rolls: 1,
//         images: [
//           `${basePath}/images/napkin/elegant.png`,
//         ]
//       },
//     ],
//     highlights: [
//       "Nepal's No.1 Premium Brand",
//       "Soft, hygienic, and suitable for household and commercial use",
//     ],
//     description: "Elegant soft napkins suitable for dining and general use.",
//   },

//   // Wipes
//   {
//     id: "face-wet-wipes",
//     name: "Face Wet Wipes",
//     category: "Wipes",
//     shortDesc: "Saturated towel wipes for quick cleaning",
//     image: `${basePath}/images/FaceWW.png`,
//     specifications: [
//       {},
//     ],
//     highlights: [
//       "Nepal's No.1 Premium Brand",
//       "Soft, hygienic, and easy to use",
//     ],
//     variants:[
//       {
//         id: "face-wet",
//         label: "Face wet ",
//         rolls: 1,
//         images: [
//           `${basePath}/images/wipes/red1.png`,
//           `${basePath}/images/wipes/purple1.png`,
//         ]
//       },
//     ],
//     description:
//       "Passion face wet wipes are quick-clean wipes for hands and face on the go.",
//   },
//   {
//     id: "budget-baby-wet-wipes",
//     name: "Budget Baby Wet Wipes",
//     category: "Wipes",
//     shortDesc: "Soft and gentle wipes for baby care",
//     image: `${basePath}/images/BabyWW2.png`,
//     specifications: [
//       {},
//     ],
//     variants:[
//       {
//         id: "face-wet",
//         label: "Budget",
//         rolls: 1,
//         images: [
//           `${basePath}/images/wipes/pinkbudget1.png`,
//           `${basePath}/images/wipes/greenbudget1.png`,
//         ]
//       },
//     ],
//     highlights: [
//       "Nepal's No.1 Premium Brand",
//       "Soft, gentle, and safe for baby skin",
//     ],
//     description: "Soft baby wipes, perfect for daily use and travel.",
//   },

//   // Sanitary Pads
//   {
//     id: "ultra-thin-prime",
//     name: "Ultra Thin Prime",
//     category: "Sanitary-Pad",
//     shortDesc: "Ultra-thin sanitary pad for daily comfort",
//     image: `${basePath}/images/Sanitary.png`,
//     specifications: [
//       {},
//     ],
//     variants:[
//       {
//         id: "perfume-1-roll",
//         label: "Ultra Prime",
//         // rolls: 1,
//         images: [
//           `${basePath}/images/pad/image.png`,
//         ]
//       },
//     ],
//     highlights: ["Nepal’s No.1 Premium Brand", "Ultra-thin and comfortable"],
//     description:
//       "Ultra Thin Prime sanitary pads provide comfort and protection for everyday use.",
//   },
//   {
//     id: "ultra-thin-select",
//     name: "Ultra Thin select",
//     category: "Sanitary-Pad",
//     shortDesc: "Ultra-thin sanitary pad for daily comfort",
//     image: `${basePath}/images/Sanitary.png`,
//     specifications: [
//       {},
//     ],
//     variants:[
//       {
//         id: "perfume-1-roll",
//         label: "Ultra Select",
//         // rolls: 1,
//         images: [
//           `${basePath}/images/pad/image.png`,
//         ]
//       },
//     ],
//     highlights: ["Nepal’s No.1 Premium Brand", "Ultra-thin and comfortable"],
//     description:
//       "Ultra Thin Prime sanitary pads provide comfort and protection for everyday use.",
//   },
//   {
//     id: "panty-liner",
//     name: "Panty Liner",
//     category: "Sanitary-Pad",
//     shortDesc: "Soft panty liner for light protection",
//     image: `${basePath}/images/Sanitary.png`,
//     specifications: [
//       {},
//     ],
//     variants:[
//       {
//         id: "perfume-1-roll",
//         label: "Panty ",
//         // rolls: 1,
//         images: [
//          `${basePath}/images/pad/image.png`,
//         ]
//       },
//     ],
//     highlights: ["Nepal’s No.1 Premium Brand", "Soft and comfortable"],
//     description: "Panty liners provide light protection and daily freshness.",
//   },
// ];

// export default products;
