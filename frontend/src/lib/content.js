// Central content + imagery for Susan Tumuhairwe's brand ecosystem.
// Brand colours: Green (health), Pink (business), Blue (speaking) on a warm off-white base.

export const IMAGES = {
  // Susan — real client campaign photos
  susanHero: "https://customer-assets-4nw71qhi.emergentagent.net/job_susan-speaks/artifacts/bw0jeu94_4eae0226-ab10-438c-8773-1b6c95b17bba.JPG",
  susanPortrait: "https://customer-assets-4nw71qhi.emergentagent.net/job_susan-speaks/artifacts/nbd90ifk_5d25fa02-c533-4e6b-ba00-d554779317fd.JPG",

  // Health / maternal / family (African)
  healthPerson: "https://customer-assets-4nw71qhi.emergentagent.net/job_susan-speaks/artifacts/nbd90ifk_5d25fa02-c533-4e6b-ba00-d554779317fd.JPG",
  maternity: "https://images.pexels.com/photos/33903892/pexels-photo-33903892.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1000&w=760",
  motherBaby: "https://images.pexels.com/photos/38385864/pexels-photo-38385864.png?auto=compress&cs=tinysrgb&dpr=2&h=1000&w=760",
  motherBack: "https://images.unsplash.com/photo-1487546331507-fcf8a5d27ab3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHxBZnJpY2FuJTIwbW90aGVyJTIwaG9sZGluZyUyMG5ld2Jvcm4lMjBiYWJ5fGVufDB8fHx8MTc4Njk4MTAyOHww&ixlib=rb-4.1.0&q=85",
  children: "https://images.unsplash.com/photo-1521493959102-bdd6677fdd81?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwzfHxoYXBweSUyMEFmcmljYW4lMjBjaGlsZHJlbiUyMHNtaWxpbmd8ZW58MHx8fHwxNzg2OTgxMDI4fDA&ixlib=rb-4.1.0&q=85",
  localFood: "https://images.pexels.com/photos/38343259/pexels-photo-38343259.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1000&w=760",
  healthSupplements: "https://images.pexels.com/photos/38343259/pexels-photo-38343259.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1000&w=760",

  // Business / community (African)
  prosperMeeting: "https://images.unsplash.com/photo-1655720357872-ce227e4164ba?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwyfHxBZnJpY2FuJTIwd29tZW4lMjBncm91cCUyMG1lZXRpbmclMjBjb2xsYWJvcmF0aW9ufGVufDB8fHx8MTc4Njk4MTAyOHww&ixlib=rb-4.1.0&q=85",
  prosperSigning: "https://images.unsplash.com/photo-1573165706511-3ffde6ef1fe3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHw0fHxBZnJpY2FuJTIwd29tZW4lMjBncm91cCUyMG1lZXRpbmclMjBjb2xsYWJvcmF0aW9ufGVufDB8fHx8MTc4Njk4MTAyOHww&ixlib=rb-4.1.0&q=85",
  prosperVendor: "https://images.unsplash.com/photo-1687422808311-a776f467a468?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwd29tYW4lMjBlbnRyZXByZW5ldXIlMjBzbWFsbCUyMGJ1c2luZXNzfGVufDB8fHx8MTc4Njk4MTAyOHww&ixlib=rb-4.1.0&q=85",

  // Speaking (African)
  stageHero: "https://images.pexels.com/photos/10035603/pexels-photo-10035603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1100&w=1500",
  workshopRoom: "https://images.unsplash.com/photo-1778877035189-60f41e9d18bf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxBZnJpY2FuJTIwYnVzaW5lc3MlMjBzZW1pbmFyJTIwYXVkaWVuY2UlMjB0cmFpbmluZ3xlbnwwfHx8fDE3ODY5ODEwMjh8MA&ixlib=rb-4.1.0&q=85",
  workshopSeminar: "https://images.pexels.com/photos/8761729/pexels-photo-8761729.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=700&w=1000",
};

export const TRACKS = [
  {
    id: "nourish",
    path: "/nourish-and-thrive",
    index: "01",
    name: "Nourish & Thrive",
    tagline: "Health & Nutrition Coaching",
    blurb: "Evidence-informed support for fertility, hormonal balance, gut health and everyday family nutrition.",
    accent: "#33501D",
    accentSoft: "#E7E2CF",
    image: IMAGES.maternity,
  },
  {
    id: "prosper",
    path: "/women-prosper",
    index: "02",
    name: "Women Prosper",
    tagline: "Financial Freedom & Enterprise",
    blurb: "A vibrant community building additional income, leadership, and the courage to begin — together.",
    accent: "#C24E76",
    accentSoft: "#F5DEE7",
    image: IMAGES.prosperMeeting,
  },
  {
    id: "speaking",
    path: "/speaking-and-workshops",
    index: "03",
    name: "Speaking & Workshops",
    tagline: "Corporate Training & Keynotes",
    blurb: "Polished, structured programs for HR leaders, executives, and NGOs ready to invest in their people.",
    accent: "#3E71A8",
    accentSoft: "#DCE8F4",
    image: IMAGES.stageHero,
  },
];

export const SUSAN_BIO = {
  intro: "I'm Susan Tumuhairwe — a coach, mentor, and speaker helping African women build health, wealth, and the confidence to lead.",
  paragraphs: [
    "For over a decade I've walked with women across Uganda and beyond, guided by one belief: a woman who feels well in her body is a woman ready to build the life she imagines.",
    "My work spans three worlds — evidence-informed nutrition coaching, community-led financial mentorship, and boardroom keynotes. Different rooms, one thread: holistic female empowerment.",
  ],
  stats: [
    { value: "10+", label: "Years mentoring" },
    { value: "3,400+", label: "Women coached" },
    { value: "120+", label: "Organisations trained" },
  ],
};

// ---- Nourish & Thrive ----
export const NOURISH = {
  marquee: ["Fertility Support", "Hormonal Balance", "Gut Health", "Family Nutrition", "Energy & Sleep", "Supplementation"],
  specialties: [
    { title: "Fertility Support", desc: "Nourish, balance and prepare your body to conceive — supporting egg quality, cycle health and reproductive wellbeing." },
    { title: "Hormonal Balance", desc: "Cycle syncing, perimenopause support, and calming the cortisol rollercoaster with food-first strategies." },
    { title: "Gut Health", desc: "Restore digestion and the microbiome through gentle, sustainable protocols — no elimination overwhelm." },
    { title: "Family Nutrition", desc: "Wholesome, local-food guidance for new mothers, growing children and the whole household." },
  ],
  family: [
    { key: "maternity", label: "Trying to conceive", note: "Fertility & hormonal support" },
    { key: "motherBaby", label: "New mothers", note: "Postnatal nourishment" },
    { key: "children", label: "Growing families", note: "Nutrition for little ones" },
  ],
  supplements: [
    { name: "Magnesium Glycinate", note: "For calm & sleep" },
    { name: "Omega-3 (EPA/DHA)", note: "Mood & inflammation" },
    { name: "Vitamin D3 + K2", note: "Immunity & bone" },
    { name: "Prenatal & Folate", note: "Fertility & pregnancy" },
  ],
  packages: [
    { name: "The Reset", length: "6 weeks", desc: "A focused foundation — labs review, personalised nutrition map, and weekly check-ins.", featured: false },
    { name: "Fertility Journey", length: "12 weeks", desc: "My signature Nourish · Balance · Conceive programme through hormones, gut and lifestyle.", featured: true },
    { name: "Thrive Membership", length: "Ongoing", desc: "Monthly guidance, seasonal protocols, and a private space to ask anything.", featured: false },
  ],
};

// ---- Women Prosper ----
export const PROSPER = {
  manifesto: [
    { n: "1", title: "Wealth is Wellness", desc: "Financial freedom is self-care. When money stops being a source of fear, everything else in your life exhales." },
    { n: "2", title: "Community over Competition", desc: "We rise in rooms, not in silos. Every woman here is a collaborator, not a rival." },
    { n: "3", title: "Begin Before Ready", desc: "You don't need permission or a perfect plan. You need one small, brave step — and people beside you." },
  ],
  programs: [
    { name: "First Income", desc: "For beginners: turn a skill or idea into your first extra stream of income in 90 days.", tag: "Beginner" },
    { name: "Scale Circle", desc: "A mastermind for women growing an existing side hustle into a real business.", tag: "Growth" },
    { name: "Lead Boldly", desc: "Leadership and money mindset for women stepping into bigger rooms and bigger numbers.", tag: "Leadership" },
  ],
  testimonials: [
    { quote: "I went from too scared to name a price, to running a business that pays my rent. Susan gave me the room and the nerve.", name: "Aisha K.", role: "Founder, Bloom Textiles" },
    { quote: "This community feels like a warm push. Every week someone reminds me I'm capable of more.", name: "Grace M.", role: "Market Trader, Kampala" },
    { quote: "Wealth finally feels like something I'm allowed to want. That shift changed my whole year.", name: "Patience A.", role: "Salon Owner" },
  ],
};

// ---- Speaking & Workshops ----
export const SPEAKING = {
  value: "Structured, research-backed keynotes and workshops that leave teams healthier, braver, and better led.",
  topics: [
    { title: "Wellbeing at Work", outcome: "Reduce burnout & absenteeism", desc: "Practical, physiology-based habits that protect energy and focus across high-pressure teams." },
    { title: "Women in Leadership", outcome: "Build a pipeline of leaders", desc: "Confidence, negotiation, and money mindset frameworks for emerging women leaders." },
    { title: "Financial Literacy", outcome: "Empower every employee", desc: "Demystifying money for staff and communities — from budgeting to first investments." },
    { title: "Resilience & Change", outcome: "Navigate uncertainty", desc: "Tools for teams and NGOs weathering rapid change without losing their people." },
  ],
  formats: [
    { name: "Keynote", detail: "45–60 min", desc: "A signature talk to open or anchor your event." },
    { name: "Half-Day Workshop", detail: "3–4 hours", desc: "Interactive, hands-on team development." },
    { name: "Programme", detail: "Multi-session", desc: "A sustained series with measurable outcomes." },
  ],
  clients: ["NGO & Development", "Financial Services", "Healthcare", "Government", "Tech & Startups", "Education"],
  eventTypes: ["Keynote", "Half-Day Workshop", "Multi-Session Programme", "Panel / Fireside", "Not sure yet"],
};
