// Central content + imagery for Susan Tumuhairwe's brand ecosystem.

export const IMAGES = {
  susanHero: "https://images.unsplash.com/photo-1563132337-f159f484226c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxjb25maWRlbnQlMjBibGFjayUyMHdvbWFuJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWwlMjB3YXJtfGVufDB8fHx8MTc4Njk3NzU5Mnww&ixlib=rb-4.1.0&q=85",
  susanPortrait: "https://images.pexels.com/photos/32222060/pexels-photo-32222060.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700",
  // Health
  healthPerson: "https://images.pexels.com/photos/5622215/pexels-photo-5622215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700",
  healthBowl: "https://images.unsplash.com/photo-1547592180-85f173990554?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxoZWFsdGh5JTIwZm9vZCUyMG51dHJpdGlvbiUyMHdlbGxuZXNzJTIwZmxhdGxheXxlbnwwfHx8fDE3ODY5Nzc2NjJ8MA&ixlib=rb-4.1.0&q=85",
  healthSupplements: "https://images.pexels.com/photos/7615467/pexels-photo-7615467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  healthVeg: "https://images.pexels.com/photos/7223295/pexels-photo-7223295.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  healthEgg: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMG51dHJpdGlvbiUyMHdlbGxuZXNzJTIwZmxhdGxheXxlbnwwfHx8fDE3ODY5Nzc2NjJ8MA&ixlib=rb-4.1.0&q=85",
  // Business
  prosperHero: "https://images.pexels.com/photos/27086165/pexels-photo-27086165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  prosperMeeting: "https://images.pexels.com/photos/7491015/pexels-photo-7491015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700",
  prosperSigning: "https://images.pexels.com/photos/5710198/pexels-photo-5710198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  // Speaking
  stageHero: "https://images.unsplash.com/photo-1564522365984-c08ed1f78893?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwzfHx3b21hbiUyMHNwZWFrZXIlMjBvbiUyMHN0YWdlJTIwY29uZmVyZW5jZXxlbnwwfHx8fDE3ODY5Nzc2NjJ8MA&ixlib=rb-4.1.0&q=85",
  workshopRoom: "https://images.unsplash.com/photo-1664382953481-141e97ad9825?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwzfHxjb3Jwb3JhdGUlMjB3b3Jrc2hvcCUyMHRyYWluaW5nJTIwc2Vzc2lvbiUyMGJ1c2luZXNzfGVufDB8fHx8MTc4Njk3NzY2Mnww&ixlib=rb-4.1.0&q=85",
  workshopSeminar: "https://images.pexels.com/photos/8761336/pexels-photo-8761336.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
};

export const TRACKS = [
  {
    id: "nourish",
    path: "/nourish-and-thrive",
    index: "01",
    name: "Nourish & Thrive",
    tagline: "Health & Nutrition Coaching",
    blurb: "Evidence-informed support for hormonal balance, gut health, and the everyday rhythms of feeling well.",
    accent: "#33501D",
    accentSoft: "#E7E2CF",
    image: IMAGES.healthPerson,
  },
  {
    id: "prosper",
    path: "/women-prosper",
    index: "02",
    name: "Women Prosper",
    tagline: "Financial Freedom & Enterprise",
    blurb: "A vibrant community building additional income, leadership, and the courage to begin — together.",
    accent: "#D49A3E",
    accentSoft: "#F0E5D1",
    image: IMAGES.prosperMeeting,
  },
  {
    id: "speaking",
    path: "/speaking-and-workshops",
    index: "03",
    name: "Speaking & Workshops",
    tagline: "Corporate Training & Keynotes",
    blurb: "Polished, structured programs for HR leaders, executives, and NGOs ready to invest in their people.",
    accent: "#1E2B3C",
    accentSoft: "#D8DCE3",
    image: IMAGES.stageHero,
  },
];

export const SUSAN_BIO = {
  intro: "I'm Susan Tumuhairwe — a coach, mentor, and speaker helping women build health, wealth, and the confidence to lead.",
  paragraphs: [
    "For over a decade I've worked at the intersection of wellbeing and ambition, guided by one belief: a woman who feels well in her body is a woman ready to build the life she imagines.",
    "My work spans three worlds — clinical-grade nutrition coaching, community-led financial mentorship, and boardroom keynotes. Different rooms, one thread: holistic female empowerment.",
  ],
  stats: [
    { value: "10+", label: "Years mentoring" },
    { value: "3,400+", label: "Women coached" },
    { value: "120+", label: "Organisations trained" },
  ],
};

// ---- Nourish & Thrive ----
export const NOURISH = {
  marquee: ["Gut Health", "Hormonal Balance", "Mindful Nutrition", "Energy & Sleep", "Metabolic Wellness", "Supplementation"],
  specialties: [
    { title: "Hormonal Balance", desc: "Cycle syncing, perimenopause support, and calming the cortisol rollercoaster with food-first strategies." },
    { title: "Gut Health", desc: "Restore digestion and the microbiome through gentle, sustainable protocols — no elimination overwhelm." },
    { title: "Energy & Sleep", desc: "Rebuild deep, restorative rest and steady all-day energy without stimulants or crashes." },
    { title: "Metabolic Wellness", desc: "Blood-sugar stability and body-composition goals rooted in evidence, not restriction." },
  ],
  supplements: [
    { name: "Magnesium Glycinate", note: "For calm & sleep" },
    { name: "Omega-3 (EPA/DHA)", note: "Mood & inflammation" },
    { name: "Vitamin D3 + K2", note: "Immunity & bone" },
    { name: "Adaptogenic Blends", note: "Stress resilience" },
  ],
  packages: [
    { name: "The Reset", length: "6 weeks", desc: "A focused foundation — labs review, personalised nutrition map, and weekly check-ins.", featured: false },
    { name: "Deep Restore", length: "12 weeks", desc: "My signature journey through hormones, gut, and lifestyle with full protocol design.", featured: true },
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
    { quote: "This community feels like a warm push. Every week someone reminds me I'm capable of more.", name: "Grace M.", role: "Consultant" },
    { quote: "Wealth finally feels like something I'm allowed to want. That shift changed my whole year.", name: "Priya S.", role: "Coach" },
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
