export interface TransferRouteData {
  slug: string;
  destinationName: string;
  targetKeyword: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  distanceKm: number;
  driveTimeMin: string;
  expressway: string;
  startingPriceUSD: number;
  featuredImage: string;
  overview: string;
  routeDescription: string;
  rushHourNote: string;
  terminalPickupAdvice: string;
  keyHotels: string[];
  landmarks: string[];
  geoCoordinates: {
    lat: number;
    lng: number;
  };
  pricing: {
    sedan: number;
    minivan: number;
    executive: number;
    minibus: number;
  };
  faqs: Array<{ q: string; a: string }>;
}

export const transferRoutes: TransferRouteData[] = [
  {
    slug: "hurghada-airport-to-el-gouna",
    destinationName: "El Gouna & Abu Tig Marina",
    targetKeyword: "hurghada airport to el gouna transfer",
    metaTitle: "Hurghada Airport to El Gouna Transfer | Private Taxi & Fixed Rates",
    metaDescription: "Book private transfer from Hurghada Airport (HRG) to El Gouna. Fixed rates from $25, air-conditioned fleet, flight tracking, and driver meets outside with sign.",
    heroHeadline: "Private Transfer from Hurghada Airport to El Gouna",
    distanceKm: 38,
    driveTimeMin: "30 - 35 mins",
    expressway: "Hurghada - El Gouna Coastal Highway",
    startingPriceUSD: 25,
    featuredImage: "/images/hero-banner.webp",
    overview: "Skip the taxi haggling at the arrivals gate. Our licensed private chauffeur meets you outside Hurghada Airport with your personalized name placard and drives you directly to your El Gouna resort or private villa in air-conditioned comfort.",
    routeDescription: "Departing Hurghada International Airport (HRG), your chauffeur takes the modern dual-carriageway coastal highway heading north past El Dahar. Driving smoothly along the Red Sea shoreline, the route enters El Gouna through its secure security gates, delivering you directly to the lobby of your resort or your private residence in Abu Tig Marina.",
    rushHourNote: "Standard travel time is 30-35 minutes. Traffic flows smoothly around the clock along the El Gouna highway.",
    terminalPickupAdvice: "At Terminal 1 or Terminal 2, your driver waits outside the arrivals sliding glass exit doors in the designated covered meeting lane holding a personalized name sign. Real-time flight tracking is included.",
    keyHotels: ["The Chedi El Gouna", "Steigenberger Golf Resort", "Casa Cook El Gouna", "Mövenpick Resort & Spa El Gouna", "Sheraton Miramar Resort", "Cook's Club El Gouna", "Ancient Sands Golf Resort"],
    landmarks: ["Abu Tig Marina & Superyachts", "El Gouna Downtown & Tamr Henna Square", "Clubhouse El Gouna", "Sliders Cable Park", "Smokery Beach"],
    geoCoordinates: {
      lat: 27.3949,
      lng: 33.6766
    },
    pricing: { sedan: 25, minivan: 38, executive: 65, minibus: 95 },
    faqs: [
      {
        q: "How far is El Gouna from Hurghada Airport?",
        a: "El Gouna is approximately 38 kilometers (24 miles) north of Hurghada Airport (HRG). The drive takes around 30 to 35 minutes via the direct coastal highway."
      },
      {
        q: "Can the driver drop us directly inside El Gouna gated communities or marina villas?",
        a: "Yes! All transfers are 100% private and door-to-door. Our drivers have full tourism licensing to enter all El Gouna security gates and drop you directly at your villa, apartment, or hotel lobby."
      },
      {
        q: "What if our flight arrives late at night?",
        a: "Our dispatch center operates 24/7/365. We track your flight number in real time, so even if your flight is delayed, your driver will be waiting outside when you exit."
      }
    ]
  },
  {
    slug: "hurghada-airport-to-makadi-bay",
    destinationName: "Makadi Bay & Madinat Makadi",
    targetKeyword: "hurghada airport to makadi bay transfer",
    metaTitle: "Hurghada Airport to Makadi Bay Transfer | Private Taxi & Fixed Rates",
    metaDescription: "Reliable private transfer from Hurghada Airport (HRG) to Makadi Bay. Fixed rates from $22, luxury AC cars, flight tracking, and driver meets outside with sign.",
    heroHeadline: "Private Transfer from Hurghada Airport to Makadi Bay",
    distanceKm: 32,
    driveTimeMin: "25 - 30 mins",
    expressway: "Hurghada - Safaga Highway (Route 65)",
    startingPriceUSD: 22,
    featuredImage: "/images/hero-banner.webp",
    overview: "Travel swiftly to the scenic holiday enclave of Makadi Bay. Famous for expansive all-inclusive family resorts, championship golf, and vibrant house reefs, our transfer ensures a relaxed start to your vacation.",
    routeDescription: "Exiting HRG terminals south along the Hurghada-Safaga Highway, the vehicle bypasses Sahl Hasheesh junction and glides smoothly into the tranquil Madinat Makadi bay boulevard.",
    rushHourNote: "A relaxed 25 to 30-minute journey with minimal traffic delays day or night.",
    terminalPickupAdvice: "After clearing customs and baggage reclaim at Terminal 1 or 2, step outside the glass exit doors to meet your chauffeur holding your personalized name board.",
    keyHotels: ["Jaz Makadi Oasis", "Steigenberger Makadi (Adults Only)", "Cleopatra Luxury Resort Makadi Bay", "Labranda Royal Makadi", "Serenity Makadi Beach", "Sunrise Royal Makadi Resort", "TUI BLUE Makadi Gardens"],
    landmarks: ["Madinat Makadi Golf Resort (18-hole championship)", "Makadi Water World Aqua Park", "Makadi Bay House Reef", "Souk Makadi"],
    geoCoordinates: {
      lat: 26.9890,
      lng: 33.8980
    },
    pricing: { sedan: 22, minivan: 34, executive: 55, minibus: 85 },
    faqs: [
      {
        q: "How long does the transfer take from Hurghada Airport to Makadi Bay?",
        a: "Makadi Bay is located 32 km south of Hurghada Airport. The drive takes only 25 to 30 minutes in private air-conditioned comfort."
      },
      {
        q: "Do you drop guests at all hotels in Madinat Makadi?",
        a: "Yes! We provide direct door-to-door chauffeur transfers to all Jaz, Steigenberger, Cleopatra, and Labranda resorts across Makadi Bay with full luggage assistance."
      }
    ]
  },
  {
    slug: "hurghada-airport-to-sahl-hasheesh",
    destinationName: "Sahl Hasheesh & Old Town Boardwalk",
    targetKeyword: "hurghada airport to sahl hasheesh transfer",
    metaTitle: "Hurghada Airport to Sahl Hasheesh Transfer | Private Taxi & Fixed Rates",
    metaDescription: "Fast private transfer from Hurghada Airport (HRG) to Sahl Hasheesh luxury bay. Fixed rates from $18, 20-minute drive, flight tracking, driver meets outside.",
    heroHeadline: "Private Transfer from Hurghada Airport to Sahl Hasheesh",
    distanceKm: 22,
    driveTimeMin: "20 - 25 mins",
    expressway: "Sahl Hasheesh Coastal Road",
    startingPriceUSD: 18,
    featuredImage: "/images/hero-banner.webp",
    overview: "Located just 20 minutes south of Hurghada Airport, Sahl Hasheesh is an exclusive gated luxury bay featuring pristine sandy beaches, opulent 5-star beachfront palaces, and a picturesque pier with sunken ruins.",
    routeDescription: "Departing HRG, your driver follows the south highway through the grand pharaonic gateway into Sahl Hasheesh, driving down the palm-lined boulevard directly to your resort lobby.",
    rushHourNote: "Fast 20-25 minute trip with zero congestion.",
    terminalPickupAdvice: "Meet your chauffeur right outside the arrival terminal exit doors holding your name placard.",
    keyHotels: ["Baron Palace Sahl Hasheesh", "The Oberoi Beach Resort Sahl Hasheesh", "Premier Le Reve Hotel & Spa", "Tropitel Sahl Hasheesh", "Gravity Hotel & Aqua Park Sahl Hasheesh", "Old Palace Resort"],
    landmarks: ["Sahl Hasheesh Sunken City Pier", "Piazza & Dancing Fountain", "Old Town Boardwalk Promenade", "Pharaonic Gate Entrance"],
    geoCoordinates: {
      lat: 27.0500,
      lng: 33.8500
    },
    pricing: { sedan: 18, minivan: 28, executive: 50, minibus: 75 },
    faqs: [
      {
        q: "How close is Sahl Hasheesh to Hurghada Airport?",
        a: "Sahl Hasheesh is very close—just 22 km south of Hurghada Airport. The drive takes approximately 20 to 25 minutes."
      },
      {
        q: "Can you drop us at Baron Palace or The Oberoi?",
        a: "Yes, our drivers drop guests directly at the front entrance and reception of Baron Palace, The Oberoi, and all private luxury residences in Sahl Hasheesh."
      }
    ]
  },
  {
    slug: "hurghada-airport-to-soma-bay",
    destinationName: "Soma Bay Peninsula & Abu Soma",
    targetKeyword: "hurghada airport to soma bay transfer",
    metaTitle: "Hurghada Airport to Soma Bay Transfer | Private Chauffeur & Rates",
    metaDescription: "Book private transfer from Hurghada Airport (HRG) to Soma Bay. Fixed rates from $32, Kempinski & Cascades drop-off, AC vehicles, and driver meets outside.",
    heroHeadline: "Private Transfer from Hurghada Airport to Soma Bay",
    distanceKm: 52,
    driveTimeMin: "45 - 50 mins",
    expressway: "Hurghada - Safaga Highway South",
    startingPriceUSD: 32,
    featuredImage: "/images/hero-banner.webp",
    overview: "Reach the idyllic, self-contained peninsula of Soma Bay. Known for panoramic turquoise lagoons, championship golf, the world-class Cascades Thalasso spa, and legendary kitesurfing.",
    routeDescription: "Traveling south along the scenic coastal highway past Makadi Bay, your chauffeur turns onto the dedicated Soma Bay peninsula road leading directly through security into your luxury beachfront resort.",
    rushHourNote: "Average transit is 45-50 minutes. The highway is wide and clearly paved with smooth movement.",
    terminalPickupAdvice: "Chauffeur waits outside the arrivals doors with an official personalized name board.",
    keyHotels: ["Kempinski Hotel Soma Bay", "The Cascades Golf Resort, Spa & Thalasso", "Sheraton Soma Bay Resort", "Robinson Club Soma Bay", "The Breakers Diving & Surfing Lodge", "Sentido Palm Royale Soma Bay"],
    landmarks: ["The Cascades Championship Golf Course", "The Cascades Thalasso Spa & Hydrotherapy Pool", "7Bft KiteSurf Center Soma Bay", "Abu Soma Coral Reef Drop-off"],
    geoCoordinates: {
      lat: 26.8500,
      lng: 33.9800
    },
    pricing: { sedan: 32, minivan: 48, executive: 80, minibus: 115 },
    faqs: [
      {
        q: "How long is the transfer from Hurghada Airport to Soma Bay?",
        a: "The drive covers 52 km and takes approximately 45 to 50 minutes in private air-conditioned comfort."
      },
      {
        q: "Do you provide transfers to The Cascades Golf & Thalasso?",
        a: "Yes, we regularly transport guests directly to The Cascades, Kempinski, and Robinson Club in Soma Bay with complete luggage and golf equipment handling."
      }
    ]
  },
  {
    slug: "hurghada-airport-to-hurghada-city",
    destinationName: "Hurghada City, Mamsha & Sheraton Road",
    targetKeyword: "hurghada airport to hurghada city transfer",
    metaTitle: "Hurghada Airport to Hurghada City & Mamsha Transfer | Taxi",
    metaDescription: "Direct private transfer from Hurghada Airport (HRG) to El Mamsha, Sheraton Road & Downtown Dahar. Fixed rates from $15, AC comfort, driver meets outside.",
    heroHeadline: "Private Transfer from Hurghada Airport to Hurghada City",
    distanceKm: 10,
    driveTimeMin: "12 - 15 mins",
    expressway: "Airport Road / El Mamsha Promenade / Sheraton St",
    startingPriceUSD: 15,
    featuredImage: "/images/hero-banner.webp",
    overview: "Arrive at the heart of Hurghada. Whether staying along the vibrant El Mamsha pedestrian promenade, bustling Sheraton Road, or the historic Dahar quarter, enjoy an effortless 15-minute transfer.",
    routeDescription: "Exiting HRG terminal access onto Airport Road, the route connects seamlessly to El Mamsha promenade or Sheraton Road, dropping you right at your hotel lobby.",
    rushHourNote: "Standard duration is 12-15 minutes.",
    terminalPickupAdvice: "Your chauffeur will greet you outside the terminal exit doors with your name clearly displayed.",
    keyHotels: ["Steigenberger ALDAU Beach Hotel", "Sunrise Aqua Joy Resort", "Hurghada Marriott Beach Resort", "Hilton Hurghada Plaza", "Swiss Inn Resort Hurghada", "Sindbad Club"],
    landmarks: ["El Mamsha Tourist Promenade", "Hurghada Marina Boulevard", "El Dahar Traditional Old Souk", "Al Mina Mosque"],
    geoCoordinates: {
      lat: 27.2150,
      lng: 33.8300
    },
    pricing: { sedan: 15, minivan: 24, executive: 45, minibus: 65 },
    faqs: [
      {
        q: "How far is Hurghada Airport from the hotel strip on El Mamsha?",
        a: "El Mamsha is just 8 to 10 km from the airport; the drive takes approximately 10 to 12 minutes."
      }
    ]
  },
  {
    slug: "hurghada-airport-to-safaga",
    destinationName: "Safaga & Port Safaga",
    targetKeyword: "hurghada airport to safaga transfer",
    metaTitle: "Hurghada Airport to Safaga Transfer | Private Taxi & Port Drop-off",
    metaDescription: "Private transfer from Hurghada Airport (HRG) to Safaga windsurfing resorts and cruise port. Fixed rates from $35, AC fleet, driver meets outside with sign.",
    heroHeadline: "Private Transfer from Hurghada Airport to Safaga",
    distanceKm: 60,
    driveTimeMin: "50 - 60 mins",
    expressway: "Hurghada - Safaga Highway (Route 65)",
    startingPriceUSD: 35,
    featuredImage: "/images/hero-banner.webp",
    overview: "Travel south along the coast to Safaga. Renowned for black sand therapeutic beaches, uncrowded windsurfing, and its commercial and passenger ferry/cruise port.",
    routeDescription: "Follow Route 65 south past Makadi Bay and Soma Bay junction straight into the town of Safaga, dropping you at your beach resort or the cruise terminal gates.",
    rushHourNote: "Scenic coastal highway taking 50 to 60 minutes with steady flow.",
    terminalPickupAdvice: "Step outside the arrivals exit doors to meet your waiting driver holding your name placard.",
    keyHotels: ["Amarina Abu Soma Resort & Aquapark", "Menaville Resort Safaga", "Shams Safaga Resort", "Lotus Bay Beach Resort"],
    landmarks: ["Port of Safaga (Cruise Terminal & Jordan/Saudi Ferry)", "Tobias Reef & Panorama Reef", "Safaga Windsurfing & Kitesurfing Bays"],
    geoCoordinates: {
      lat: 26.7300,
      lng: 33.9350
    },
    pricing: { sedan: 35, minivan: 52, executive: 85, minibus: 125 },
    faqs: [
      {
        q: "Can you drop us directly at Safaga Cruise Port?",
        a: "Yes! We provide direct transfers to Safaga Passenger Cruise Terminal and coordinate drop-off right at the cruise ship check-in gates."
      }
    ]
  },
  {
    slug: "hurghada-airport-to-el-quseir",
    destinationName: "El Quseir Historic Coastal Town",
    targetKeyword: "hurghada airport to el quseir transfer",
    metaTitle: "Hurghada Airport to El Quseir Transfer | Private Chauffeur & Rates",
    metaDescription: "Comfortable private transfer from Hurghada Airport (HRG) to El Quseir historic Red Sea hotels. Fixed rates from $65, AC vehicles, and driver meets outside.",
    heroHeadline: "Private Transfer from Hurghada Airport to El Quseir",
    distanceKm: 135,
    driveTimeMin: "1 hour 45 mins - 2 hours",
    expressway: "Red Sea Coastal Highway (Route 65 South)",
    startingPriceUSD: 65,
    featuredImage: "/images/hero-banner.webp",
    overview: "Journey along the Red Sea coast to the tranquil, historic town of El Quseir. Famous for its 5,000-year history, 16th-century Ottoman fort, pristine coral drop-offs, and serene luxury ecolodges.",
    routeDescription: "Heads south past Safaga through open coastal desert plains, delivering guests smoothly to the tranquil beachfront resorts of El Quseir.",
    rushHourNote: "Scenic 1.5 to 2-hour highway drive.",
    terminalPickupAdvice: "Chauffeur waits outside the arrivals doors with an official name placard.",
    keyHotels: ["Mövenpick Resort El Quseir", "Radisson Blu Resort El Quseir", "Flamenco Beach & Resort", "Sirena Beach Resort"],
    landmarks: ["El Quseir Ottoman Fortress (16th Century)", "Historic Old Harbor & Phosphate Railway", "Coral Reef Bays of Sirena and Mangrove Bay"],
    geoCoordinates: {
      lat: 26.1080,
      lng: 34.2800
    },
    pricing: { sedan: 65, minivan: 95, executive: 145, minibus: 195 },
    faqs: [
      {
        q: "How far is Mövenpick Resort El Quseir from Hurghada Airport?",
        a: "Mövenpick El Quseir is approximately 135 km south of Hurghada Airport. The transfer takes about 1 hour 45 minutes to 2 hours."
      }
    ]
  },
  {
    slug: "hurghada-airport-to-port-ghalib-marsa-alam",
    destinationName: "Port Ghalib & Marsa Alam",
    targetKeyword: "hurghada airport to port ghalib marsa alam transfer",
    metaTitle: "Hurghada Airport to Port Ghalib & Marsa Alam Transfer | Fixed Rates",
    metaDescription: "Private overland transfer from Hurghada Airport (HRG) to Port Ghalib Marina and Marsa Alam resorts. Fixed rates from $95, AC vehicles, flight tracking.",
    heroHeadline: "Private Transfer from Hurghada Airport to Port Ghalib",
    distanceKm: 220,
    driveTimeMin: "2.5 - 3 hours",
    expressway: "Red Sea Coastal Highway 65 South",
    startingPriceUSD: 95,
    featuredImage: "/images/hero-banner.webp",
    overview: "Connecting Hurghada Airport directly with Port Ghalib Marina and northern Marsa Alam resorts. Perfect for European travelers flying into HRG who are heading to Marsa Alam's premier diving lodges and yacht harbor.",
    routeDescription: "Departing HRG, your driver follows Route 65 south past Safaga and El Quseir directly into the luxury resort community and marina of Port Ghalib.",
    rushHourNote: "Relaxed 2.5 to 3-hour coastal drive with rest stop available upon request.",
    terminalPickupAdvice: "Your driver meets you outside arrivals exit doors with your name board, loads luggage, and heads straight onto the southern coastal highway.",
    keyHotels: ["The Palace Port Ghalib", "Marina Resort Port Ghalib", "Pickalbatros Oasis Port Ghalib", "Steigenberger Coraya Beach", "Jaz Lamaya Resort"],
    landmarks: ["Port Ghalib International Marina", "Abu Dabbab Turtle Bay & Dugong Sanctuary", "Coraya Bay", "Elphinstone Reef Dive Expeditions"],
    geoCoordinates: {
      lat: 25.5340,
      lng: 34.6370
    },
    pricing: { sedan: 95, minivan: 145, executive: 210, minibus: 280 },
    faqs: [
      {
        q: "Why book a transfer from Hurghada Airport to Port Ghalib / Marsa Alam?",
        a: "Hurghada Airport offers vastly more international flight frequencies and affordable airfares from Europe than Marsa Alam Airport. Our direct private transfer takes you straight to your Port Ghalib resort in under 3 hours."
      }
    ]
  },
  {
    slug: "hurghada-to-luxor",
    destinationName: "Luxor & Nile Valley (Overland Chauffeur)",
    targetKeyword: "hurghada to luxor private transfer",
    metaTitle: "Hurghada to Luxor Private Chauffeur Transfer | Fixed Rates & Day Trip",
    metaDescription: "Private overland transfer from Hurghada to Luxor. Valley of the Kings, Karnak Temple, hotel or Nile cruise drop-off. Fixed rates from $140, AC vehicles.",
    heroHeadline: "Private Overland Chauffeur from Hurghada to Luxor",
    distanceKm: 300,
    driveTimeMin: "3.5 - 4 hours",
    expressway: "Safaga - Qena - Luxor Desert Highway",
    startingPriceUSD: 140,
    featuredImage: "/images/hero-banner.webp",
    overview: "Experience a seamless private transfer from the Red Sea coast to the world's greatest open-air museum. Direct drop-off at any hotel, private villa, or Nile cruise ship in Luxor.",
    routeDescription: "Travels south to Safaga before turning west across the dramatic Eastern Desert mountain pass into the Nile Valley at Qena, proceeding straight to your accommodation or cruise dock in Luxor.",
    rushHourNote: "Scenic 3.5 to 4-hour highway drive. All tourist convoy and checkpoint formalities are handled smoothly by our licensed drivers.",
    terminalPickupAdvice: "Pickup available from Hurghada Airport terminals or directly from any resort lobby in Hurghada, El Gouna, or Makadi Bay.",
    keyHotels: ["Sofitel Winter Palace Luxor", "Hilton Luxor Resort & Spa", "Steigenberger Nile Palace", "Sonesta St. George Hotel", "Jolie Ville Kings Island Luxor"],
    landmarks: ["Karnak Temple & Luxor Temple", "Valley of the Kings & King Tut Tomb", "Temple of Hatshepsut", "Colossi of Memnon", "Nile Cruise Docks"],
    geoCoordinates: {
      lat: 25.6872,
      lng: 32.6396
    },
    pricing: { sedan: 140, minivan: 195, executive: 290, minibus: 380 },
    faqs: [
      {
        q: "How long is the drive from Hurghada to Luxor?",
        a: "The drive covers 300 km via the paved Safaga-Qena desert highway and takes approximately 3.5 to 4 hours."
      },
      {
        q: "Can you provide a round-trip day excursion to Luxor with waiting time?",
        a: "Yes! We frequently organize private day trips where your chauffeur drives you to Luxor in the morning, waits while you tour Karnak, Luxor Temple, and the Valley of the Kings, and returns you to your Hurghada hotel in the evening."
      }
    ]
  },
  {
    slug: "hurghada-to-cairo",
    destinationName: "Cairo & Giza (Overland Chauffeur)",
    targetKeyword: "hurghada to cairo private transfer",
    metaTitle: "Hurghada to Cairo Private Chauffeur Transfer | Fixed Rates",
    metaDescription: "Comfortable overland transfer from Hurghada to Cairo & Giza via modern Galala Highway. Fixed rates from $180, AC vehicles, and door-to-door drop-off.",
    heroHeadline: "Private Overland Chauffeur from Hurghada to Cairo",
    distanceKm: 455,
    driveTimeMin: "5 - 5.5 hours",
    expressway: "New Galala Mountain Highway / Ain Sokhna Expressway",
    startingPriceUSD: 180,
    featuredImage: "/images/hero-banner.webp",
    overview: "Prefer to travel overland instead of flying? Enjoy a private, VIP chauffeur transfer between Hurghada and Cairo/Giza via the new Galala Mountain expressway and Ain Sokhna highway.",
    routeDescription: "Departs Hurghada north past El Gouna and Ras Gharib, ascending the scenic Galala coastal plateau before entering New Cairo, Downtown Cairo, or Giza directly to your hotel or airport.",
    rushHourNote: "Fast modern expressway taking 5 to 5.5 hours with scenic stops for refreshments and rest.",
    terminalPickupAdvice: "Pickup available from Hurghada Airport terminals or directly from any hotel lobby in Hurghada.",
    keyHotels: ["Cairo Marriott Hotel", "Four Seasons Nile Plaza", "Marriott Mena House Giza", "The Nile Ritz-Carlton", "InterContinental Citystars"],
    landmarks: ["Galala Mountain Plateau", "Ain Sokhna Coastal Strip", "Cairo Citadel", "Giza Pyramids & Grand Egyptian Museum"],
    geoCoordinates: {
      lat: 30.0444,
      lng: 31.2357
    },
    pricing: { sedan: 180, minivan: 270, executive: 370, minibus: 470 },
    faqs: [
      {
        q: "How long does it take to drive from Hurghada to Cairo?",
        a: "Thanks to the newly opened Galala Mountain expressway, the trip takes approximately 5 to 5.5 hours."
      }
    ]
  }
];
