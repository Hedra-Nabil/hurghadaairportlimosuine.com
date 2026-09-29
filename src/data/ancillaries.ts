export interface AncillaryService {
  slug: string;
  title: string;
  arabicTitle: string;
  tag: string;
  badgeColor: string;
  priceUSD: number;
  priceUnit: string;
  image: string;
  alt: string;
  shortDescription: string;
  metaDescription: string;
  fullDescription: string;
  benefits: string[];
  howItWorks: Array<{ step: number; title: string; desc: string }>;
  terminalsAvailable: string[];
  faqs: Array<{ q: string; a: string }>;
}

export const ancillaryServices: AncillaryService[] = [
  {
    slug: "vip-fast-track",
    title: "Hurghada Airport VIP Fast-Track & Meet and Assist",
    arabicTitle: "خدمة المسار السريع وكبار الزوار بمطار الغردقة",
    tag: "Skip All Queues",
    badgeColor: "bg-amber-400 text-slate-950",
    priceUSD: 45,
    priceUnit: "per passenger",
    image: "/images/ancillaries/vip-fast-track.webp",
    alt: "Hurghada International Airport VIP Fast Track Hostess and Pearl Assist Service",
    shortDescription: "Bypass long arrival queues. A dedicated VIP protocol officer meets you at the jet bridge and expedites Egypt visa issuance, passport control, and customs.",
    metaDescription: "Bypass queues at Hurghada Airport (HRG). Dedicated VIP officer greets you at the gate for express passport control & luggage assistance. From $45/person.",
    fullDescription: "Arriving at Hurghada International Airport (HRG) during peak European flight banks can mean waiting in crowded holiday queues at visa purchase windows, passport control, and luggage screening. Our VIP Fast-Track Meet & Assist service assigns a dedicated airport protocol representative who greets you right at the aircraft disembarkation jet bridge or terminal entrance. You are guided through priority diplomatic/VIP lanes for rapid Egypt tourist visa processing, accelerated passport clearance, and dedicated baggage assistance, escorting you straight to your waiting chauffeur.",
    benefits: [
      "Personal protocol officer meets you directly at the aircraft jet bridge",
      "Expedited VIP priority lane through Egyptian Passport Control",
      "Assistance with official $25 Egypt Tourist Visa purchase and validation",
      "Dedicated baggage porterage from carousel directly to vehicle trunk",
      "Seamless escort straight through customs screening to your chauffeur",
      "Available 24/7 across Terminal 1 and Terminal 2"
    ],
    howItWorks: [
      {
        step: 1,
        title: "Jet Bridge Welcome",
        desc: "As you step off the plane, your uniformed protocol host greets you holding a customized electronic tablet displaying your name."
      },
      {
        step: 2,
        title: "Express Visa & Passport Clearance",
        desc: "You are escorted directly to obtain your visa sticker and through the dedicated VIP passport counter in under 5 minutes."
      },
      {
        step: 3,
        title: "Luggage Porterage & Direct Handover",
        desc: "Your porter collects all checked suitcases from the carousel and escorts you out to your waiting private chauffeur."
      }
    ],
    terminalsAvailable: ["Terminal 1", "Terminal 2"],
    faqs: [
      {
        q: "What is the difference between standard transfer pickup and VIP Fast-Track?",
        a: "For standard transfers, your chauffeur waits right outside the arrival terminal exit doors holding your personalized name sign. VIP Fast-Track begins inside the airport before passport control—right at the aircraft gate—with an airport protocol host who escorts you through express visa purchase, passport control, baggage reclaim, and customs directly to your chauffeur."
      },
      {
        q: "Can I book Fast-Track for both arrivals and departures at Hurghada Airport?",
        a: "Yes! We provide both Arrival Fast-Track and Departure VIP Escort (which includes priority check-in, fast-track security, and lounge access)."
      }
    ]
  },
  {
    slug: "child-safety-seats",
    title: "Certified Child & Infant Car Safety Seats",
    arabicTitle: "كراسي أمان الأطفال والرضع",
    tag: "Family Essential",
    badgeColor: "bg-indigo-600 text-white",
    priceUSD: 10,
    priceUnit: "per seat / transfer",
    image: "/images/ancillaries/child-safety-seat.webp",
    alt: "Certified European Standard ISOFIX Infant and Toddler Car Safety Seat in Hurghada Airport Transfer",
    shortDescription: "Travel with peace of mind. European-certified (ECE R44/04 / i-Size) rear-facing infant capsules, toddler seats, and booster cushions pre-installed.",
    metaDescription: "Certified child, infant, and booster car seats for Hurghada Airport transfers. ECE R44/04 compliant, professionally installed before pickup. From $10.",
    fullDescription: "Road safety along Red Sea highways is paramount, especially when traveling with babies or young children. Unlike standard street taxis which do not provide child seats, Hurghada Airport Limousine provides pre-installed, sanitized, European-certified child safety seats fitted securely via ISOFIX anchors. Whether you need a rear-facing infant capsule (0-13 kg), a forward-facing toddler seat (9-18 kg), or a booster seat for older children, your vehicle arrives with the seat securely installed and ready for immediate departure.",
    benefits: [
      "Certified to rigorous European safety standards (ECE R44/04 and i-Size)",
      "Rear-facing infant capsules (0–13 kg) & forward-facing seats (9–18 kg)",
      "Ergonomic booster cushions for children aged 4 to 11 years (15–36 kg)",
      "Secure ISOFIX click-in anchors with side-impact protection padding",
      "Thoroughly steam-sanitized, inspected, and fresh before every trip",
      "Seamlessly installed prior to vehicle arrival at airport pickup"
    ],
    howItWorks: [
      {
        step: 1,
        title: "Specify Age & Weight",
        desc: "During booking or over WhatsApp, simply tell us the age and weight of your child so our operations team allocates the correct seat type."
      },
      {
        step: 2,
        title: "Pre-Installation & Inspection",
        desc: "Your chauffeur securely mounts the seat via ISOFIX anchors and carries out safety checks prior to parking at the terminal."
      },
      {
        step: 3,
        title: "Relaxed Family Journey",
        desc: "Your child rests comfortably in certified safety as you ride smoothly from Hurghada Airport to your resort in El Gouna or Makadi Bay."
      }
    ],
    terminalsAvailable: ["Terminal 1", "Terminal 2"],
    faqs: [
      {
        q: "What types of child seats are available?",
        a: "We offer three certified options: Group 0+ rear-facing infant capsules (newborn to 13 kg), Group 1 toddler seats (9 to 18 kg), and Group 2/3 booster seats with backrests (15 to 36 kg)."
      },
      {
        q: "Can I request more than one child seat?",
        a: "Yes! Our Private Minivans and Minibuses can easily accommodate two or three child seats simultaneously."
      }
    ]
  },
  {
    slug: "hurghada-airport-lounges",
    title: "Hurghada Airport Pearl VIP Executive Lounge Pass",
    arabicTitle: "دخول صالات كبار الزوار بمطار الغردقة الدولي",
    tag: "Executive Luxury",
    badgeColor: "bg-slate-900 text-amber-300",
    priceUSD: 38,
    priceUnit: "per passenger (3h access)",
    image: "/images/ancillaries/hurghada-vip-lounge.webp",
    alt: "Hurghada International Airport Pearl VIP Executive Lounge Pass Access",
    shortDescription: "Relax before your departure or transit flight. Gourmet buffet, chilled beverages, high-speed Wi-Fi, shower suites, and quiet resting pods in Terminal 1 and Terminal 2.",
    metaDescription: "Book Hurghada Airport VIP lounge access across T1 & T2. Fresh buffet, high-speed Wi-Fi, flight departure monitors, and comfortable seating. From $38.",
    fullDescription: "Escape the crowded departure concourses of Hurghada Airport with a guaranteed pass to the Pearl VIP Executive Lounge. Available in both Terminal 1 and Terminal 2, guests enjoy up to 3 hours of peaceful relaxation featuring runway views, complimentary fresh buffet snacks and hot dishes, premium coffee and chilled refreshments, high-speed Wi-Fi, flight display screens, charging stations, and dedicated quiet zones.",
    benefits: [
      "Guaranteed entry to the Pearl Executive VIP Lounge (Terminal 1 & Terminal 2)",
      "Complimentary hot and cold buffet snacks, fresh salads, and pastries",
      "Unlimited premium coffee, tea, mineral water, and chilled refreshments",
      "High-speed Wi-Fi network and international charging hubs",
      "Comfortable air-conditioned quiet seating areas",
      "Dedicated flight departure status monitors"
    ],
    howItWorks: [
      {
        step: 1,
        title: "Digital Lounge Voucher",
        desc: "Receive your instant digital QR lounge voucher upon booking, valid for up to 3 hours of access."
      },
      {
        step: 2,
        title: "Seamless Reception Check-in",
        desc: "Show your digital boarding pass and voucher at the Pearl Lounge reception desk in Terminal 1 or 2."
      },
      {
        step: 3,
        title: "Unwind Before Takeoff",
        desc: "Enjoy comfortable hospitality, dining, and refreshments before your return flight home."
      }
    ],
    terminalsAvailable: ["Terminal 1", "Terminal 2"],
    faqs: [
      {
        q: "Can I enter the lounge regardless of what airline or ticket class I fly?",
        a: "Yes! Our VIP Lounge passes are 100% independent of your airline ticket. Whether you are flying on EasyJet, Wizz Air, TUI, Condor, EgyptAir, or a charter flight, you receive full lounge privileges."
      },
      {
        q: "Where are the lounges located in Hurghada Airport?",
        a: "Pearl Lounges are located airside (after security and passport control) in both Terminal 1 and Terminal 2, within easy walking distance of the boarding gates."
      }
    ]
  }
];
