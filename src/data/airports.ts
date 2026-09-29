export interface AirportGuideData {
  slug: string;
  terminalCode: string;
  name: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  headline: string;
  subheadline: string;
  meetingPoint: {
    location: string;
    description: string;
    stepByStep: string[];
    tips: string[];
  };
  airlinesServed: string[];
  facilities: string[];
  distanceToDowntown: string; // Used for Hurghada City / Sheraton
  distanceToPyramids: string; // Used for El Gouna
  faqs: Array<{ q: string; a: string }>;
}

export const airportGuides: AirportGuideData[] = [
  {
    slug: "hurghada-international-airport",
    terminalCode: "HRG Hub",
    name: "Hurghada International Airport (HRG) - Complete Passenger Guide",
    shortTitle: "Hurghada Airport (HRG) Overview",
    metaTitle: "Hurghada International Airport (HRG) Guide | Terminals & Transfers",
    metaDescription: "Comprehensive Hurghada International Airport guide (HRG). Learn about Terminal 1, Terminal 2, Egypt Visa on arrival, baggage claim, and private transfers.",
    badge: "Official Airport Guide",
    headline: "Hurghada International Airport (HRG) Passenger & Transfer Guide",
    subheadline: "Everything you need to navigate the Red Sea's premier aviation gateway: Terminal 1, Terminal 2, the $25 Egypt visa on arrival, baggage reclaim, telecom SIM booths, and verified private limousine transfers to El Gouna, Makadi Bay, Sahl Hasheesh, and Soma Bay.",
    meetingPoint: {
      location: "Outside Terminal Arrival Exit Doors (Terminals 1 & 2)",
      description: "Chauffeurs meet travelers right outside the arrival terminal exit doors immediately after customs and baggage claim with a personalized name sign.",
      stepByStep: [
        "Disembark your aircraft via jet bridge (Terminal 1) or passenger mobile stairs into the air-conditioned arrival concourse.",
        "Immigration & Egypt Tourist Visa: Before proceeding to passport control, visit the official 24/7 bank kiosks (Banque Misr or National Bank of Egypt) located directly in the arrival hall before passport counters to purchase the official $25 USD Egypt Tourist Visa sticker (or present your pre-issued Egypt eVisa). Please note: Unlike Sinai, mainland Red Sea resorts require a valid Egypt Tourist Visa.",
        "Pass through Egyptian passport control where the immigration officer validates and stamps your visa sticker.",
        "Proceed down to the spacious baggage carousel hall to retrieve your checked luggage.",
        "Walk through the customs luggage screening checkpoint.",
        "Exit through the sliding glass arrival doors to the covered reception curbside where your licensed private chauffeur is holding a prominent personalized name sign."
      ],
      tips: [
        "Have $25 USD exact cash (or EUR/GBP equivalent) ready for the bank visa counter before passport control to ensure rapid clearance.",
        "Official 24/7 bank kiosks and telecom counters (Vodafone, Orange, WE, e&) are located right in the arrivals hall before and after customs.",
        "Complimentary 60 minutes waiting time begins only from actual flight touchdown, tracked via live flight radar."
      ]
    },
    airlinesServed: [
      "EasyJet", "Wizz Air", "TUI Airways", "Condor", "Corendon Airlines", 
      "Eurowings", "SunExpress", "Edelweiss Air", "Swiss International", "EgyptAir", 
      "Air Cairo", "Turkish Airlines", "Pegasus Airlines", "Transavia", "Neos", 
      "Smartwings", "Brussels Airlines", "Austrian Airlines", "flynas", "Jazeera Airways"
    ],
    facilities: [
      "24/7 Bank ATMs & Currency Exchange (Banque Misr & NBE)",
      "Pearl VIP Executive Lounges (Terminal 1 & Terminal 2)",
      "Official Egyptian Telecom Kiosks (Vodafone, Orange, WE, e&)",
      "Misr Duty-Free Arrivals Concourse (Available within 48h of arrival)",
      "Luggage Storage & Protective Wrapping Services",
      "Cafes, Bakeries & International Coffee Outlets (Costa, Starbucks)"
    ],
    distanceToDowntown: "10 km to Hurghada City Center & Sheraton Rd (12–15 mins)",
    distanceToPyramids: "38 km to El Gouna (30–35 mins)",
    faqs: [
      {
        q: "Do I need a visa to enter Egypt through Hurghada Airport?",
        a: "Yes. Hurghada is located in the Red Sea Governorate on mainland Egypt (unlike Sharm El Sheikh in Sinai which offers a free Sinai stamp). All foreign tourists from eligible nations (UK, EU countries, US, Canada, Australia, etc.) must obtain an Egypt Tourist Visa. You can purchase the $25 USD visa sticker upon arrival at the official bank counters (Banque Misr / NBE) right before passport control, or apply online in advance for an official Egypt eVisa."
      },
      {
        q: "How many passenger terminals are operating at Hurghada Airport?",
        a: "Hurghada Airport operates two active passenger terminals: Terminal 1, the newer 3-level terminal inaugurated with jet bridges and high passenger capacity, handling the majority of international scheduled flights and European holiday charters; and Terminal 2, the modernized facility handling domestic connections (EgyptAir, Air Cairo) from Cairo, Luxor, and Alexandria, along with select charter routes."
      },
      {
        q: "Where will my private chauffeur meet me upon arrival?",
        a: "In accordance with Egyptian airport security regulations, private chauffeurs wait right outside the arrival terminal sliding glass exit doors at the covered passenger greeting lane, holding an official personalized sign clearly displaying your name."
      },
      {
        q: "How far is Hurghada Airport from major Red Sea resort areas?",
        a: "Mamsha Promenade and Hurghada City Center are 8–12 km (10–15 mins); Sahl Hasheesh is 22 km (20–25 mins); Makadi Bay is 32 km (25–30 mins); El Gouna is 38 km (30–35 mins); and Soma Bay is 52 km (45–50 mins)."
      }
    ]
  },
  {
    slug: "hurghada-airport-terminal-1",
    terminalCode: "Terminal 1",
    name: "Hurghada Airport Terminal 1 Guide (International Flights & European Charters)",
    shortTitle: "Terminal 1 (International Hub)",
    metaTitle: "Hurghada Airport Terminal 1 Guide | International Arrivals & Transfers",
    metaDescription: "Guide to Hurghada Airport Terminal 1 (HRG T1). Modern 3-level hub with jet bridges handling European scheduled flights & charters. Arrivals meeting point and pre-booked transfers.",
    badge: "Flagship International Hub",
    headline: "Hurghada Airport Terminal 1 (T1) Arrivals & Transfers Guide",
    subheadline: "Serving major European and international scheduled and charter carriers including EasyJet, Wizz Air, TUI Airways, Condor, Eurowings, SunExpress, Turkish Airlines, and Edelweiss. Step-by-step arrivals and chauffeur greeting.",
    meetingPoint: {
      location: "Terminal 1 Outside Curbside Reception Lane",
      description: "Directly outside the Terminal 1 customs sliding glass exit doors at the covered passenger pickup curbside.",
      stepByStep: [
        "Exit aircraft through passenger boarding jet bridge into the modern Terminal 1 upper concourse.",
        "Descend to the immigration hall. Visit the official bank kiosk (Banque Misr / NBE) to obtain your $25 USD Egypt Tourist Visa sticker before queuing at passport control.",
        "Clear Passport Control and retrieve luggage from carousels in the spacious baggage reclaim hall.",
        "Pass through the customs luggage screening checkpoint.",
        "Walk straight out through the automatic sliding doors to the covered reception curb where your driver is holding your personalized white name board."
      ],
      tips: [
        "Terminal 1 features the renowned Pearl VIP Executive Lounge airside on the second floor.",
        "Free airport luggage trolleys are readily available throughout the carousel area.",
        "Official telecom stalls for Egyptian tourist SIM cards and eSIMs (Vodafone, Orange, WE, e&) are open 24/7 in the arrivals greeting area."
      ]
    },
    airlinesServed: [
      "EasyJet", "Wizz Air", "TUI Airways", "Condor", "Eurowings", 
      "SunExpress", "Corendon Airlines", "Edelweiss Air", "Swiss International", 
      "Turkish Airlines", "Pegasus Airlines", "Transavia", "Neos", "Smartwings", 
      "Brussels Airlines", "Austrian Airlines"
    ],
    facilities: [
      "Pearl VIP Executive Lounge T1 (Showers, buffet & Wi-Fi)",
      "Misr Duty-Free Arrivals Boutique (Tobacco, perfumes, confectionery)",
      "24/7 Banque Misr & National Bank of Egypt currency exchange & visa windows",
      "Vodafone, Orange, WE & e& official mobile carrier booths",
      "Spacious covered curbside private transfer pickup bay"
    ],
    distanceToDowntown: "10 km to Hurghada City Center (12–15 mins)",
    distanceToPyramids: "38 km to El Gouna (30–35 mins)",
    faqs: [
      {
        q: "Which airlines fly into Hurghada Airport Terminal 1?",
        a: "Terminal 1 is the primary hub for international flights from the UK, Germany, Switzerland, Italy, and across Europe, hosting airlines such as EasyJet, Wizz Air, TUI Airways, Condor, Eurowings, SunExpress, Corendon, Edelweiss, and Turkish Airlines."
      },
      {
        q: "Where does my driver wait at Terminal 1?",
        a: "Your driver will be stationed immediately outside the Terminal 1 glass exit doors at the covered pickup walkway, holding an official sign with your name."
      }
    ]
  },
  {
    slug: "hurghada-airport-terminal-2",
    terminalCode: "Terminal 2",
    name: "Hurghada Airport Terminal 2 Guide (Domestic & Regional/Charter Flights)",
    shortTitle: "Terminal 2 (Domestic & Regional)",
    metaTitle: "Hurghada Airport Terminal 2 Guide | EgyptAir, Air Cairo & Transfers",
    metaDescription: "Guide to Hurghada Airport Terminal 2 (HRG T2). Serving EgyptAir, Air Cairo domestic routes, and seasonal charters. Step-by-step arrivals and hotel transfers.",
    badge: "Modernized Regional Hub",
    headline: "Hurghada Airport Terminal 2 (T2) Arrivals & Transfers Guide",
    subheadline: "Home to EgyptAir, Air Cairo, domestic routes connecting Cairo, Luxor, and Alexandria, plus select regional charter flights. Learn where to meet your private chauffeur after customs.",
    meetingPoint: {
      location: "Terminal 2 Outside Curbside Greeting Zone",
      description: "Directly outside the Terminal 2 arrival sliding doors at the covered passenger greeting area.",
      stepByStep: [
        "Disembark and enter the modernized Terminal 2 arrivals hall.",
        "Domestic passengers proceed directly to the baggage reclaim area (no passport control required for domestic flights from Cairo, Luxor, or Alexandria). International passengers purchase their $25 visa sticker at the bank window and clear immigration.",
        "Collect your baggage from the carousel.",
        "Pass through the customs screening exit.",
        "Walk outside through the terminal exit doors where your designated driver is holding your name board."
      ],
      tips: [
        "Terminal 2 has dedicated rapid disembarkation and baggage return lanes.",
        "If you are arriving on a domestic connection from Cairo, you already completed passport control in Cairo and do not repeat it in Hurghada."
      ]
    },
    airlinesServed: [
      "EgyptAir", "Air Cairo", "Nile Air", "AlMasria Universal Airlines", 
      "flynas", "Jazeera Airways", "Nesma Airlines", "Sky Vision Airlines"
    ],
    facilities: [
      "Pearl VIP Lounge Terminal 2",
      "Domestic & International baggage claim carousels",
      "24/7 National Bank of Egypt ATMs & Currency Exchange",
      "Air-conditioned arrival waiting lounge & cafeterias",
      "Designated private transfer and limousine greeting stalls"
    ],
    distanceToDowntown: "10 km to Hurghada City Center (12–15 mins)",
    distanceToPyramids: "38 km to El Gouna (30–35 mins)",
    faqs: [
      {
        q: "Which flights arrive at Hurghada Airport Terminal 2?",
        a: "Terminal 2 serves domestic flights operated by EgyptAir and Air Cairo from Cairo International Airport (CAI), Sphinx Airport (SPX), and Luxor (LXR), as well as select regional Middle Eastern and charter flights."
      },
      {
        q: "Do I go through passport control if I flew from Cairo to Hurghada?",
        a: "No. If you arrived on a domestic flight from Cairo or another Egyptian airport to Hurghada, you already cleared immigration in Cairo. At Terminal 2 in Hurghada, you simply collect your bags and exit directly."
      }
    ]
  }
];
