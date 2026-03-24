// ── NAVIGATION ────────────────────────────────────────────
export const navLinks = [
  { label: 'Accueil',    to: '/' },
  { label: 'Services',   to: '/services' },
  { label: 'À propos',   to: '/a-propos' },
  { label: 'Plans',      to: '/plans' },
  { label: 'Matériaux',  to: '/materiaux' },
  { label: 'Projets',    to: '/projets' },
  { label: 'Contact',    to: '/contact', cta: true },
]

// ── STATS ─────────────────────────────────────────────────
export const stats = [
  { num: '250+', label: 'Projets réalisés' },
  { num: '15+',  label: "Années d'expérience" },
  { num: '98%',  label: 'Clients satisfaits' },
  { num: '40+',  label: 'Experts qualifiés' },
]

// ── SERVICES ──────────────────────────────────────────────
export const services = [
  {
    id: 1,
    slug: 'architecture',
    title: 'Architecture & Design',
    short: 'Conception architecturale sur mesure',
    desc: "Nos architectes créent des espaces fonctionnels et esthétiques adaptés à vos besoins. De l'esquisse initiale au dossier de permis de construire, nous vous accompagnons à chaque étape.",
    features: [
      "Plans d'exécution complets",
      "Maquettes 3D et rendus réalistes",
      "Dépôt permis de construire",
      "Maîtrise d'œuvre complète",
      "Design intérieur & aménagement",
    ],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80',
    color: '#EAF0FB',
  },
  {
    id: 2,
    slug: 'genie-civil',
    title: 'Génie Civil',
    short: 'Travaux d\'infrastructure et de structure',
    desc: "Terrassement, fondations, béton armé, routes, ponts et ouvrages d'art. Nos ingénieurs garantissent solidité, conformité et respect des délais.",
    features: [
      'Terrassement & fondations spéciales',
      'Béton armé & charpente métallique',
      'Voiries & réseaux divers',
      "Ouvrages d'art & ponts",
      'Contrôle qualité rigoureux',
    ],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="6" height="14"/><rect x="9" y="4" width="6" height="17"/><rect x="16" y="10" width="6" height="11"/></svg>`,
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80',
    color: '#FFF9D6',
  },
  {
    id: 3,
    slug: 'plans',
    title: 'Plans de Maisons',
    short: 'Catalogue de 200+ plans architecturaux',
    desc: "Choisissez parmi notre vaste catalogue de plans prêts à l'emploi ou commandez un plan entièrement personnalisé selon votre terrain et budget.",
    features: [
      '200+ plans en catalogue',
      'Personnalisation complète possible',
      'Livrés en PDF & DWG',
      'Adaptation au terrain incluse',
      'Notice descriptive fournie',
    ],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
    img: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=900&q=80',
    color: '#EAF0FB',
  },
  {
    id: 4,
    slug: 'materiaux',
    title: 'Vente Matériaux',
    short: 'Stock permanent & livraison chantier',
    desc: "GCMBC Group commercialise une gamme complète de matériaux certifiés. Stock permanent disponible avec livraison directe sur votre chantier.",
    features: [
      'Ciment, acier, sable, graviers',
      'Briques, parpaings, hourdis',
      'Menuiseries aluminium & PVC',
      'Peintures & enduits pro',
      'Plomberie & électricité',
    ],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>`,
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80',
    color: '#FFF9D6',
  },
  {
    id: 5,
    slug: 'etudes',
    title: 'Études Techniques',
    short: 'Diagnostics et études de faisabilité',
    desc: "Étude de sol, diagnostic structurel, devis estimatif et expertise bâtiment. Une base technique solide avant chaque projet de construction.",
    features: [
      'Étude de sol & sondages',
      'Diagnostic structurel complet',
      'Devis estimatif détaillé',
      'Expertise bâtiment existant',
      'Conseils réglementaires',
    ],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80',
    color: '#EAF0FB',
  },
  {
    id: 6,
    slug: 'suivi',
    title: 'Suivi de Chantier',
    short: 'Coordination & contrôle qualité',
    desc: "Notre service de suivi garantit la conformité des travaux aux plans et aux normes. Nous coordonnons toutes les équipes jusqu'à la livraison clé en main.",
    features: [
      'Rapports hebdomadaires détaillés',
      'Contrôle conformité aux plans',
      'Coordination des corps de métier',
      'Respect strict du planning',
      'Réception & garanties décennales',
    ],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    img: 'https://images.unsplash.com/photo-1599707254554-027aeb4deacd?w=900&q=80',
    color: '#FFF9D6',
  },
]

// ── PLANS ─────────────────────────────────────────────────
export const plans = [
  {
    id: 1,
    name: 'Villa Moderne M120',
    type: 'Villa Résidentielle',
    badge: 'Populaire',
    surface: '120 m²',
    chambres: 3,
    salles: 2,
    niveaux: 'Plain-pied',
    style: 'Moderne',
    prix: '250 000 Fbu',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80',
  },
  {
    id: 2,
    name: 'Duplex Elite D180',
    type: 'Duplex',
    badge: 'Nouveau',
    surface: '180 m²',
    chambres: 4,
    salles: 3,
    niveaux: 'R+1',
    style: 'Contemporain',
    prix: '380 000 Fbu',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80',
  },
  {
    id: 3,
    name: 'Maison Familiale F90',
    type: 'Maison Standard',
    badge: 'Économique',
    surface: '90 m²',
    chambres: 3,
    salles: 1,
    niveaux: 'Plain-pied',
    style: 'Classique',
    prix: '150 000 Fbu',
    img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80',
  },
  {
    id: 4,
    name: 'Villa Prestige P250',
    type: 'Villa Haut Standing',
    badge: 'Premium',
    surface: '250 m²',
    chambres: 5,
    salles: 4,
    niveaux: 'R+1',
    style: 'Luxe',
    prix: '620 000 Fbu',
    img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=700&q=80',
  },
  {
    id: 5,
    name: 'Maison Compacte C60',
    type: 'Petit Budget',
    badge: 'Starter',
    surface: '60 m²',
    chambres: 2,
    salles: 1,
    niveaux: 'Plain-pied',
    style: 'Simple',
    prix: '90 000 Fbu',
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=700&q=80',
  },
  {
    id: 6,
    name: 'R+2 Immeuble I320',
    type: 'Immeuble Locatif',
    badge: 'Investissement',
    surface: '320 m²',
    chambres: 8,
    salles: 6,
    niveaux: 'R+2',
    style: 'Moderne',
    prix: '750 000 Fbu',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80',
  },
]

// ── MATÉRIAUX ─────────────────────────────────────────────
export const materiaux = [
  { icon: '🧱', name: 'Ciment & Béton',       desc: "Portland CPA 45, béton prêt à l'emploi, mortier colle." },
  { icon: '🔩', name: 'Acier & Ferraillage',  desc: 'Barres HA, treillis soudés, profilés métalliques.' },
  { icon: '🪨', name: 'Sable & Granulats',    desc: 'Sable de rivière lavé, gravier concassé, tout-venant.' },
  { icon: '🏗️', name: 'Briques & Parpaings',  desc: 'Blocs creux 15/20, briques cuites, hourdis plancher.' },
  { icon: '🪟', name: 'Menuiserie',           desc: 'Portes & fenêtres aluminium, PVC, acier et bois.' },
  { icon: '🎨', name: 'Peintures & Enduits',  desc: 'Peintures intérieur/extérieur, enduits de façade.' },
  { icon: '🚿', name: 'Plomberie & Sanitaire',desc: 'Tuyaux PVC et PPR, robinetterie, WC, lavabos.' },
  { icon: '⚡', name: 'Électricité',          desc: 'Câbles, tableaux électriques, disjoncteurs, prises.' },
  { icon: '🪵', name: 'Bois & Charpente',     desc: 'Bois traité, lamellé-collé, OSB, contreplaqué.' },
  { icon: '🏠', name: 'Couverture & Toiture', desc: 'Tôles galvanisées, tuiles, membrane étanchéité.' },
  { icon: '🏺', name: 'Carrelage & Faïence',  desc: 'Carrelage sol/mur, faïence, mosaïque, grès cérame.' },
  { icon: '🔧', name: 'Quincaillerie',        desc: 'Visserie, boulonnerie, fixations, outillage.' },
]

// ── PROJETS ───────────────────────────────────────────────
export const projects = [
  { id:1, name:'Résidence Les Palmiers',    cat:'Résidentiel',    tag:'Résidentiel',    lieu:'Bujumbura',  img:'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=700&q=80' },
  { id:2, name:'Centre Commercial Horizon', cat:'Commercial',     tag:'Commercial',     lieu:'Gitega',     img:'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80' },
  { id:3, name:'Pont Routier N5',           cat:'Infrastructure', tag:'Infrastructure', lieu:'Ngozi',      img:'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=700&q=80' },
  { id:4, name:'Villa Prestige 4 Chambres', cat:'Résidentiel',    tag:'Résidentiel',    lieu:'Bujumbura',  img:'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=700&q=80' },
  { id:5, name:'Immeuble de Bureaux GCMBC', cat:'Commercial',     tag:'Commercial',     lieu:'Bujumbura',  img:'https://images.unsplash.com/photo-1467533003447-e295ff1b0435?w=700&q=80' },
  { id:6, name:'Route Nationale Pavée',     cat:'Infrastructure', tag:'Infrastructure', lieu:'Bururi',     img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80' },
  { id:7, name:'Complexe Hôtelier Star',    cat:'Commercial',     tag:'Commercial',     lieu:'Bujumbura',  img:'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700&q=80' },
  { id:8, name:'Cité Résidentielle Nord',   cat:'Résidentiel',    tag:'Résidentiel',    lieu:'Bujumbura',  img:'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=700&q=80' },
  { id:9, name:'Barrage de Rétention',      cat:'Infrastructure', tag:'Infrastructure', lieu:'Makamba',    img:'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80' },
]

// ── TÉMOIGNAGES ───────────────────────────────────────────
export const temoignages = [
  {
    text: "GCMBC Group a réalisé notre villa en respectant parfaitement les délais et le budget. La qualité des finitions est vraiment impeccable. Je les recommande sans hésitation.",
    name: 'M. Hakizimana Jean',
    role: 'Propriétaire, Bujumbura',
    initials: 'HJ',
    stars: 5,
  },
  {
    text: "J'ai acheté un plan de maison et l'équipe l'a adapté à mon terrain sans frais supplémentaires. Service excellent, professionnel et très réactif.",
    name: 'Mme. Niyonkuru Aline',
    role: 'Cliente, Gitega',
    initials: 'NA',
    stars: 5,
  },
  {
    text: "Les travaux de fondation de notre entrepôt ont été réalisés avec un très haut niveau technique. GCMBC Group est une équipe sérieuse et compétente.",
    name: 'Ing. Ndayishimiye Paul',
    role: 'Directeur, Bâti+ SARL',
    initials: 'NP',
    stars: 5,
  },
]

// ── CONTACT INFOS ─────────────────────────────────────────
export const contactInfos = [
  {
    label: 'Adresse',
    val: 'Boulevard du Peuple Murundi, Bujumbura, Burundi',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  },
  {
    label: 'Téléphone',
    val: '+257 XX XXX XXX',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.77-.77a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  },
  {
    label: 'Email',
    val: 'info@gcmbc-group.com',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  },
  {
    label: 'Horaires',
    val: 'Lundi – Samedi : 8h00 – 18h00',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  },
]

// ── ÉQUIPE ────────────────────────────────────────────────
export const equipe = [
  { name: 'Ir. Bukuru Emmanuel', role: 'Directeur Général & Ingénieur Civil', initials: 'BE', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80' },
  { name: 'Arch. Nkurunziza Marie', role: 'Directrice Architecte', initials: 'NM', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
  { name: 'Ir. Havyarimana Luc', role: 'Chef de Projet Génie Civil', initials: 'HL', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
  { name: 'Mme. Cishahayo Grace', role: 'Responsable Commerciale', initials: 'CG', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80' },
]

// ── VALEURS ───────────────────────────────────────────────
export const valeurs = [
  { icon: '🏆', title: 'Excellence', desc: 'Nous visons la perfection dans chaque projet, des fondations aux finitions.' },
  { icon: '🤝', title: 'Confiance',  desc: 'La transparence et l\'honnêteté guident chacune de nos relations client.' },
  { icon: '⏱️', title: 'Ponctualité', desc: 'Respecter les délais convenus est une priorité absolue pour nos équipes.' },
  { icon: '♻️', title: 'Durabilité', desc: 'Nos constructions intègrent les meilleures pratiques environnementales.' },
]
