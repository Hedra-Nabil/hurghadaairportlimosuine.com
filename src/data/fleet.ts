export interface FleetRate {
  destination: string;
  priceUSD: number;
  time: string;
  distance: string;
}

export interface FleetModelBrand {
  brand: string;
  model: string;
  year: string;
  note: string;
}

export interface FleetVehicle {
  id: string;
  slug: string;
  title: string;
  name: string;
  category: string;
  tag: string;
  subtitle: string;
  image: string;
  alt: string;
  maxPax: number;
  maxLuggageLarge: number;
  maxLuggageCabin: number;
  capacity: string;
  models: string[];
  modelBrands: FleetModelBrand[];
  features: string[];
  samplePriceCairo: number;
  samplePriceGiza: number;
  samplePriceAlexandria: number;
  rates: FleetRate[];
  bestFor: string;
  description: string;
  fullDescription: string;
  luggageGuide: {
    checkedBags: string;
    handLuggage: string;
    stroller: string;
    specialBaggage: string;
  };
  faqs: { q: string; a: string }[];
}

export const fleetVehicles: FleetVehicle[] = [
  {
    id: "standard-sedan",
    slug: "private-taxi",
    title: "Private Taxi",
    name: "Standard Private Taxi Sedan",
    category: "Economy & Solo Travel",
    tag: "Most Popular",
    subtitle: "Ideal for solo travelers or couples with luggage",
    image: "/images/fleet/private-taxi.webp",
    alt: "Hurghada Airport Private Taxi Sedan - Toyota Corolla / Hyundai Elantra Transfer",
    maxPax: 3,
    maxLuggageLarge: 2,
    maxLuggageCabin: 2,
    capacity: "Up to 3 passengers • 2 bags",
    models: ["Toyota Corolla", "Hyundai Elantra", "Nissan Sentra", "Skoda Octavia", "Kia Cerato"],
    modelBrands: [
      {
        brand: "Toyota",
        model: "Corolla / Belta",
        year: "2022 - 2025",
        note: "Egypt's benchmark for reliable, quiet, and smooth Red Sea resort transit."
      },
      {
        brand: "Hyundai",
        model: "Elantra CN7 / HD",
        year: "2022 - 2025",
        note: "Modern interior styling, exceptional rear legroom, and powerful A/C."
      },
      {
        brand: "Nissan",
        model: "Sentra / Sunny",
        year: "2021 - 2024",
        note: "Spacious trunk accommodating two standard 28-inch checked suitcases with ease."
      },
      {
        brand: "Skoda",
        model: "Octavia",
        year: "2021 - 2024",
        note: "Premium European build quality with an oversized liftback cargo area."
      }
    ],
    features: [
      "High-output dual air conditioning tailored for Red Sea sunshine",
      "Free flight delay tracking & terminal monitoring (T1 & T2)",
      "Driver meets you outside arrival exit with personalized name sign",
      "Complimentary chilled mineral water on board",
      "Clean, non-smoking, strictly inspected interior",
      "60 minutes complimentary waiting time after flight touchdown"
    ],
    samplePriceCairo: 15,
    samplePriceGiza: 18,
    samplePriceAlexandria: 25,
    rates: [
      { destination: "Hurghada City & Mamsha Promenade", priceUSD: 15, time: "10-15 mins", distance: "10 km" },
      { destination: "Sahl Hasheesh Luxury Bay", priceUSD: 18, time: "20-25 mins", distance: "22 km" },
      { destination: "Makadi Bay & Madinat Makadi", priceUSD: 22, time: "25-30 mins", distance: "32 km" },
      { destination: "El Gouna & Abu Tig Marina", priceUSD: 25, time: "30-35 mins", distance: "38 km" },
      { destination: "Soma Bay Peninsula Resorts", priceUSD: 32, time: "45-50 mins", distance: "52 km" },
      { destination: "Safaga & Cruise Port", priceUSD: 35, time: "50-60 mins", distance: "60 km" },
      { destination: "El Quseir Historic Coastal Hotels", priceUSD: 65, time: "1.5 - 2 hours", distance: "135 km" },
      { destination: "Port Ghalib & Marsa Alam", priceUSD: 95, time: "2.5 - 3 hours", distance: "220 km" }
    ],
    bestFor: "Solo travelers, couples, light packers, and holidaymakers arriving at Hurghada for beach vacations.",
    description: "Our modern, air-conditioned private sedans offer reliable, fixed-rate door-to-door transport from Hurghada Airport (HRG) directly to any resort in El Gouna, Sahl Hasheesh, Makadi Bay, or Soma Bay.",
    fullDescription: "The Private Taxi class is the most popular transfer choice at Hurghada International Airport (HRG). You receive a guaranteed private modern sedan (Toyota Corolla, Hyundai Elantra, or similar) driven by an experienced, licensed local chauffeur. Unlike negotiating with unmetered street taxis outside the terminal, your price is 100% fixed upfront, flight delays are tracked automatically in real time, and your driver greets you right outside the arrivals exit holding a personalized name sign.",
    luggageGuide: {
      checkedBags: "Up to 2 standard checked suitcases (28 in / 70 cm, up to 23 kg each).",
      handLuggage: "Up to 2 standard carry-on bags or beach backpacks.",
      stroller: "One compact folding umbrella stroller fits alongside 2 suitcases.",
      specialBaggage: "For scuba diving bags or oversized golf gear, we recommend our Private Minivan."
    },
    faqs: [
      {
        q: "What exact car brand will arrive for my Private Taxi booking?",
        a: "In the Private Taxi category, you will receive a late-model, clean, fully air-conditioned 4-door sedan such as a Toyota Corolla, Hyundai Elantra, Nissan Sentra, or Skoda Octavia. All vehicles are guaranteed to meet our strict cleanliness, safety, and model year standards."
      },
      {
        q: "Is the price per person or per car?",
        a: "All prices on hurghadaairportlimosuine.com are strictly per vehicle, NOT per person. A private sedan costs the same flat rate whether 1, 2, or 3 passengers are traveling."
      },
      {
        q: "Where will the driver meet me at Hurghada Airport?",
        a: "Your chauffeur will wait right outside the arrival terminal exit doors holding an official sign with your name, ready to assist you with luggage directly to your vehicle."
      },
      {
        q: "What if my flight arrives late?",
        a: "We continuously monitor your flight number in real time via live radar. If your flight is delayed or lands early, your pickup time is adjusted automatically with zero extra charge."
      }
    ]
  },
  {
    id: "private-minivan",
    slug: "private-minivan",
    title: "Private Minivan",
    name: "Spacious Private Minivan",
    category: "Families & Small Groups",
    tag: "Family Choice",
    subtitle: "Spacious comfort for families, diving gear & strollers",
    image: "/images/fleet/private-minivan.webp",
    alt: "Hurghada Airport Private Minivan - Mercedes-Benz Vito / Toyota HiAce Combi Transfer",
    maxPax: 7,
    maxLuggageLarge: 6,
    maxLuggageCabin: 6,
    capacity: "Up to 7 passengers • 6 bags",
    models: ["Mercedes-Benz Vito", "Toyota HiAce Combi", "Hyundai H1", "Ford Transit Custom"],
    modelBrands: [
      {
        brand: "Mercedes-Benz",
        model: "Vito / V-Class Tourer",
        year: "2021 - 2025",
        note: "Luxurious German multi-passenger van with whisper-quiet ride and plush individual seats."
      },
      {
        brand: "Toyota",
        model: "HiAce Grand Luxury",
        year: "2022 - 2025",
        note: "Renowned worldwide for maximum reliability, elevated panoramic windows, and cavernous cargo capacity."
      },
      {
        brand: "Hyundai",
        model: "H1 / Staria",
        year: "2021 - 2025",
        note: "Futuristic comfort with flexible passenger rows and dual-zone roof-mounted cooling vents."
      },
      {
        brand: "Ford",
        model: "Transit Custom",
        year: "2021 - 2024",
        note: "Wide sliding side doors allowing effortless boarding for children and senior passengers."
      }
    ],
    features: [
      "Generous cargo hold for 6 oversized suitcases + diving bags or strollers",
      "Child & baby booster seats pre-installed on request",
      "Dual-zone front & rear climate control with individual roof vents",
      "Spacious legroom & tinted privacy windows for Red Sea sun protection",
      "Dedicated baggage porterage & chauffeur luggage assistance",
      "60 minutes complimentary waiting time from actual flight touchdown"
    ],
    samplePriceCairo: 24,
    samplePriceGiza: 28,
    samplePriceAlexandria: 38,
    rates: [
      { destination: "Hurghada City & Mamsha Promenade", priceUSD: 24, time: "10-15 mins", distance: "10 km" },
      { destination: "Sahl Hasheesh Luxury Family Resorts", priceUSD: 28, time: "20-25 mins", distance: "22 km" },
      { destination: "Makadi Bay & Madinat Makadi", priceUSD: 34, time: "25-30 mins", distance: "32 km" },
      { destination: "El Gouna Resorts & Private Villas", priceUSD: 38, time: "30-35 mins", distance: "38 km" },
      { destination: "Soma Bay Peninsula & Abu Soma", priceUSD: 48, time: "45-50 mins", distance: "52 km" },
      { destination: "Safaga Windsurfing Lodges & Port", priceUSD: 52, time: "50-60 mins", distance: "60 km" },
      { destination: "El Quseir Beach Resorts", priceUSD: 95, time: "1.5 - 2 hours", distance: "135 km" },
      { destination: "Port Ghalib & Marsa Alam Resorts", priceUSD: 145, time: "2.5 - 3 hours", distance: "220 km" }
    ],
    bestFor: "Families traveling with children, groups with diving equipment, kite surfers, and travelers with multiple bags.",
    description: "The ideal choice for families landing at Hurghada Airport with multiple checked suitcases, strollers, or diving gear. Ensuring everyone rides together in air-conditioned comfort.",
    fullDescription: "When landing at Hurghada Airport for a Red Sea holiday with family or diving equipment, cramming into two separate street taxis is frustrating. Our Private Minivan category (featuring Mercedes-Benz Vito, Toyota HiAce, and Hyundai H1) guarantees that your entire party travels together seamlessly. With elevated headroom, dual-zone air conditioning that cools the rear rows rapidly, and a massive dedicated boot space for up to 6 large checked bags, your Red Sea holiday starts relaxed.",
    luggageGuide: {
      checkedBags: "Up to 6 large suitcases (28–32 in / 23–32 kg).",
      handLuggage: "Up to 6 carry-ons, backpacks, or duty-free bags.",
      stroller: "Easily fits full-size foldable baby prams or dual strollers.",
      specialBaggage: "Can accommodate scuba diving gear bags, kite-surf bags, or golf clubs."
    },
    faqs: [
      {
        q: "Can we request child or infant safety seats?",
        a: "Yes! We provide certified European safety seats (infant capsules, toddler seats, booster cushions) pre-installed upon request. Simply specify your child's age in your booking."
      },
      {
        q: "Will our scuba diving or kitesurfing bags fit?",
        a: "Yes. Our minivans feature expansive rear cargo compartments specifically suitable for heavy scuba gear bags, kiteboards, and oversized suitcases."
      }
    ]
  },
  {
    id: "executive-vip",
    slug: "executive-vip",
    title: "Executive / VIP",
    name: "Executive VIP Luxury Sedan",
    category: "Business & Premium Comfort",
    tag: "Premium",
    subtitle: "Luxury Mercedes-Benz sedans with Wi-Fi & water",
    image: "/images/fleet/executive-vip.webp",
    alt: "Hurghada Airport VIP Executive Sedan - Mercedes-Benz Chauffeur Service",
    maxPax: 3,
    maxLuggageLarge: 3,
    maxLuggageCabin: 3,
    capacity: "Up to 3 passengers • 3 bags",
    models: ["Mercedes-Benz E-Class", "BMW 5-Series", "Audi A6", "Mercedes-Benz S-Class"],
    modelBrands: [
      {
        brand: "Mercedes-Benz",
        model: "E-Class (W213 / W214)",
        year: "2022 - 2025",
        note: "The international benchmark for executive resort travel, featuring hand-crafted leather and acoustic glass."
      },
      {
        brand: "BMW",
        model: "5-Series (G30 / G60)",
        year: "2022 - 2025",
        note: "Dynamic executive luxury with active seat ventilation and supreme highway poise."
      },
      {
        brand: "Audi",
        model: "A6 Sedan",
        year: "2022 - 2024",
        note: "Understated elegance, cutting-edge suspension comfort, and seamless multi-zone climate control."
      },
      {
        brand: "Mercedes-Benz",
        model: "S-Class (Available on VIP Request)",
        year: "2022 - 2025",
        note: "Ultra-luxury flagship sedan for dignitaries, VIP delegations, and high-profile guests."
      }
    ],
    features: [
      "Suited, English-speaking executive chauffeur with discreet etiquette",
      "High-speed onboard 4G/5G Wi-Fi hotspot",
      "Premium hand-stitched leather seating with multi-zone climate control",
      "Chilled mineral water, fresh wet wipes & fast charging ports",
      "VIP curbside terminal coordination & luggage handling",
      "90 minutes complimentary waiting time with real-time flight tracking"
    ],
    samplePriceCairo: 45,
    samplePriceGiza: 50,
    samplePriceAlexandria: 65,
    rates: [
      { destination: "Hurghada City & Steigenberger ALDAU", priceUSD: 45, time: "10-15 mins", distance: "10 km" },
      { destination: "Sahl Hasheesh Baron Palace & The Oberoi", priceUSD: 50, time: "20-25 mins", distance: "22 km" },
      { destination: "Makadi Bay Luxury Enclaves", priceUSD: 55, time: "25-30 mins", distance: "32 km" },
      { destination: "El Gouna The Chedi & Casa Cook", priceUSD: 65, time: "30-35 mins", distance: "38 km" },
      { destination: "Soma Bay Kempinski & The Cascades", priceUSD: 80, time: "45-50 mins", distance: "52 km" },
      { destination: "El Quseir Mövenpick Resort", priceUSD: 145, time: "1.5 - 2 hours", distance: "135 km" },
      { destination: "Port Ghalib The Palace Resort", priceUSD: 210, time: "2.5 hours", distance: "220 km" }
    ],
    bestFor: "VIP resort guests, honeymooners, corporate attendees, and travelers seeking maximum comfort and prestige.",
    description: "Travel in uncompromised sophistication with our executive Mercedes-Benz chauffeur service from Hurghada Airport to five-star luxury resorts like The Chedi El Gouna, Baron Palace Sahl Hasheesh, and Kempinski Soma Bay.",
    fullDescription: "For discerning visitors to Hurghada, our Executive / VIP class delivers unmatched prestige and seamless discretion. Featuring sleek Mercedes-Benz E-Class and BMW 5-Series vehicles, you are received by a professional, immaculately suited chauffeur who assists with your luggage and coordinates directly outside the terminal exit. Enjoy high-speed Wi-Fi, chilled mineral water, and whisper-quiet cabin insulation as you transition smoothly from your flight to your Red Sea suite.",
    luggageGuide: {
      checkedBags: "Up to 3 medium-to-large luxury suitcases (up to 28 in).",
      handLuggage: "Up to 3 designer carry-ons, backpacks, or duty-free bags.",
      stroller: "Compact cabin-approved folding stroller fits in trunk.",
      specialBaggage: "Garment suit carriers can be hung in rear passenger hooks."
    },
    faqs: [
      {
        q: "What makes the Executive VIP tier different?",
        a: "The Executive VIP tier guarantees a luxury German vehicle (principally Mercedes-Benz E-Class or BMW 5-Series) in immaculate showroom condition, piloted by a senior bilingual chauffeur in dark business suit. Amenities include high-speed Wi-Fi, premium chilled water, smartphone charging, and 90 minutes of free terminal waiting time."
      },
      {
        q: "Can you provide VIP transfers to The Chedi El Gouna or The Oberoi Sahl Hasheesh?",
        a: "Yes! We specialize in executive transfers to premier luxury properties across the Red Sea, including The Chedi El Gouna, The Oberoi Beach Resort Sahl Hasheesh, Baron Palace, and Kempinski Soma Bay."
      }
    ]
  },
  {
    id: "private-minibus",
    slug: "airport-minibus",
    title: "Airport Shuttle & Minibus",
    name: "Group Transport Airport Shuttle & Minibus",
    category: "Tour Groups & Delegations",
    tag: "Group Saver",
    subtitle: "High capacity transport for large tour groups",
    image: "/images/fleet/airport-minibus.webp",
    alt: "Hurghada Airport Shuttle & Minibus - Toyota Coaster / Mercedes Sprinter Group Transfer",
    maxPax: 16,
    maxLuggageLarge: 16,
    maxLuggageCabin: 16,
    capacity: "Up to 16 passengers • 16 bags",
    models: ["Mercedes-Benz Sprinter", "Toyota Coaster", "Toyota HiAce Extended 14-Seat"],
    modelBrands: [
      {
        brand: "Mercedes-Benz",
        model: "Sprinter Tourer (15-16 Pax)",
        year: "2021 - 2025",
        note: "Premium high-roof shuttle with reclining plush seats, individual reading lamps, and standing aisle."
      },
      {
        brand: "Toyota",
        model: "Coaster Luxury Minibus",
        year: "2020 - 2024",
        note: "The undisputed workhorse for organized Egyptian resort and excursion group transfers."
      },
      {
        brand: "Toyota",
        model: "HiAce Super Long Wheelbase (13-14 Pax)",
        year: "2022 - 2025",
        note: "Generous group capacity combined with agile resort road transit."
      }
    ],
    features: [
      "High roof with comfortable walk-through aisle & standing height",
      "Separate rear luggage storage bay holding up to 16 full-size suitcases",
      "Individual overhead reading lights & high-capacity dual AC vents",
      "Public Address (PA) microphone system for group organizers",
      "Full group airport curbside coordination & resort drop-off",
      "60 minutes complimentary waiting time for group passport clearance"
    ],
    samplePriceCairo: 65,
    samplePriceGiza: 75,
    samplePriceAlexandria: 95,
    rates: [
      { destination: "Hurghada City & Mamsha Hotels", priceUSD: 65, time: "10-15 mins", distance: "10 km" },
      { destination: "Sahl Hasheesh Resorts", priceUSD: 75, time: "20-25 mins", distance: "22 km" },
      { destination: "Makadi Bay All-Inclusive Resorts", priceUSD: 85, time: "25-30 mins", distance: "32 km" },
      { destination: "El Gouna Resorts & Abu Tig Marina", priceUSD: 95, time: "30-35 mins", distance: "38 km" },
      { destination: "Soma Bay Peninsula Hotels", priceUSD: 115, time: "45-50 mins", distance: "52 km" },
      { destination: "Safaga Port & Diving Centers", priceUSD: 125, time: "50-60 mins", distance: "60 km" },
      { destination: "Luxor Nile Valley Day Excursions", priceUSD: 380, time: "3.5 - 4 hours", distance: "300 km" }
    ],
    bestFor: "Diving clubs, wedding parties, conference delegates, extended families, and tour groups.",
    description: "Designed for tour groups and large families landing together at Hurghada Airport. Keep your entire party in one vehicle with ample room for all checked bags and diving equipment.",
    fullDescription: "Organizing transportation for 8 to 16 passengers landing at Hurghada Airport can be stressful when splitting across small taxis. Our Airport Minibus service provides the ultimate stress-free group transfer. With high-roof Mercedes-Benz Sprinter and Toyota Coaster minibuses, your entire group stays together under the care of an experienced licensed driver. Every passenger enjoys a comfortable reclining seat, personalized air conditioning vents, and plenty of space in the dedicated rear luggage compartment for up to 16 large suitcases and diving gear.",
    luggageGuide: {
      checkedBags: "Up to 16 standard large suitcases (28 in / 23 kg each) in dedicated rear cargo bay.",
      handLuggage: "16 overhead or underseat backpacks and carry-on bags.",
      stroller: "Multiple foldable strollers, wheelchairs, or dive gear boxes fit easily.",
      specialBaggage: "Custom luggage space available for scuba club expeditions."
    },
    faqs: [
      {
        q: "How does the driver coordinate with a large group of 10 to 16 passengers?",
        a: "Our dispatch team monitors your flight number and communicates with your group organizer via WhatsApp prior to landing. Your chauffeur meets you right outside the baggage exit with an oversized company sign to assemble all passengers smoothly before escorting everyone directly to the designated minibus terminal bay."
      },
      {
        q: "Is there enough room for both 16 passengers AND all their suitcases?",
        a: "Yes. Our Mercedes Sprinter and Toyota Coaster shuttles are equipped with dedicated rear luggage compartments designed specifically for airport luggage transit."
      }
    ]
  }
];
