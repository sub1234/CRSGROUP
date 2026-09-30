export interface MaterialSpec {
  id: string;
  name: string;
  code: string;
  division: 'hitzemeister' | 'crs-enterprises';
  divisionName: string;
  category: 'tundish' | 'refractory' | 'minerals' | 'scrap' | 'iron-billets';
  categoryLabel: string;
  description: string;
  primaryChemistry: { element: string; value: string }[];
  sizing: string;
  application: string;
  standards: string[];
  stockStatus: 'Manufacturing' | 'In Stock' | 'Direct Supply';
  minOrderQuantity: string;
  highlightPoints?: string[];
}

export const GROUP_COMPANIES = [
  {
    id: 'crs-enterprises',
    name: 'CRS ENTERPRISES PRIVATE LIMITED',
    location: 'Purulia, West Bengal',
    tagline: 'Minerals • Industrial Materials • Steel Supplies',
    role: 'Trading, Mining & Sourcing',
    description: 'Operates across the mining, mineral and industrial material supply chain. Focuses on sourcing, processing, trading and supplying materials required by industrial customers.',
    highlights: [
      'Quartzite & Mineral Supply',
      'Ferro & MS Scrap',
      'Industrial Raw Materials (Pig Iron, Sponge & Billet Trading)',
      'Mining & Mineral Sourcing',
    ],
  },
  {
    id: 'hitzemeister',
    name: 'HITZEMEISTER PRIVATE LIMITED',
    location: 'Purulia, West Bengal',
    tagline: 'Refractories • Tundish Boards • Steel Industry Consumables',
    role: 'Specialized Manufacturing Arm',
    description: 'The Group’s specialized refractory manufacturing and steel-industry solutions company. Inspired by the German meaning “Master of Heating”, focusing on high-temperature continuous casting and metallurgical consumables.',
    highlights: [
      'Tundish Boards for Continuous Casting',
      'Refractory Consumables (Ball Mill Powder & Ramming Mass)',
      'Customized Refractory Products engineered to plant drawings',
      'High Temperature Resistance & Dimensional Accuracy',
    ],
  },
  {
    id: 'sugarbiz',
    name: 'SUGARBIZ LIMITED',
    location: 'London, United Kingdom',
    tagline: 'International Business, Finance & Technology',
    role: 'Global Advisory & Trade Finance',
    description: 'London-based international advisory arm providing business, finance, and software consulting for global commodities and metals commerce.',
    highlights: [
      'Commodity trade finance structuring',
      'Cross-border corporate advisory',
      'Software & metallurgical supply chain tech',
    ],
  },
  {
    id: 'anandi',
    name: 'ANANDI',
    location: 'Purulia, West Bengal',
    tagline: 'Industrial Logistics & Freight Fleet',
    role: 'Logistics & Transportation',
    description: 'Dedicated logistics network managing heavy multi-axle trailers and freight transportation of bulk minerals, scrap, and refractory goods directly to steel mills.',
    highlights: [
      'Fleet of heavy dumpers & trailers',
      'Guaranteed just-in-time dispatch',
      'Transit insurance & route tracking',
    ],
  },
];

export const ESTEEMED_CUSTOMERS = [
  { name: 'SHYAM STEEL INDUSTRIES LTD.', region: 'India (National)', sector: 'TMT & Structural Steel' },
  { name: 'SHYAM SEL AND POWER LTD.', region: 'India (Eastern Hub)', sector: 'Integrated Steel & Power' },
  { name: 'GAGAN GROUP', region: 'India', sector: 'Iron & Steel Manufacturing' },
  { name: 'AIC GROUP', region: 'India', sector: 'Metallurgical & Rolling Mills' },
  { name: 'SHAKAMBHARI GROUP', region: 'India', sector: 'Integrated Alloy & Sponge' },
  { name: 'RASHMI METALIKS LTD.', region: 'India', sector: 'Pig Iron, Pellets & Billets' },
  { name: 'MAITHAN STEEL & POWER LTD.', region: 'India', sector: 'Billets, TMT & Power' },
];

export const MATERIALS_DATA: MaterialSpec[] = [
  // HITZEMEISTER MANUFACTURED PRODUCTS
  {
    id: 'tundish-boards',
    name: 'High-Performance Tundish Boards',
    code: 'HM-TB-CC18',
    division: 'hitzemeister',
    divisionName: 'Hitzemeister (Manufacturing)',
    category: 'tundish',
    categoryLabel: 'Tundish Boards',
    description: 'Specialized refractory insulating boards designed for continuous casting tundishes. Delivers superior thermal insulation, rapid pre-heating response, and pristine clean-stripping after casting sequences.',
    primaryChemistry: [
      { element: 'MgO / Silica Blend', value: 'High Purity' },
      { element: 'Bulk Density', value: '0.90 – 1.25 g/cm³' },
      { element: 'Thermal Shock', value: 'Crack-Resistant' },
      { element: 'Operating Temp', value: 'Up to 1,680 °C' },
    ],
    sizing: 'Custom dimensions as per continuous casting machine (CCM) mould specs',
    application: 'Continuous casting of billets, blooms, and slabs',
    standards: ['IS 1528', 'Controlled Batch Quality Tested'],
    stockStatus: 'Manufacturing',
    minOrderQuantity: '1,000 Sets',
    highlightPoints: [
      'High Temperature Resistance for demanding casting',
      'Consistent Quality with controlled batch reliability',
      'Dimensional Accuracy tailored to tundish drawings',
      'Application focused with reliable supply cycles',
    ],
  },
  {
    id: 'ramming-mass',
    name: 'Premix Silica & Magnesite Ramming Mass',
    code: 'HM-RM-IND98',
    division: 'hitzemeister',
    divisionName: 'Hitzemeister (Manufacturing)',
    category: 'refractory',
    categoryLabel: 'Refractory Consumables',
    description: 'Pre-mixed, scientifically grain-sized ramming mass optimized for coreless induction furnaces. Delivers superior sintering speed, exceptional resistance to metal corrosion, and longer lining campaign life.',
    primaryChemistry: [
      { element: 'SiO₂ (Silica)', value: '≥ 98.80%' },
      { element: 'Boric Acid Binder', value: 'Pre-mixed 0.8 – 1.2%' },
      { element: 'Fe₂O₃', value: '≤ 0.05%' },
      { element: 'Bulk Density', value: '≥ 2.15 g/cm³' },
    ],
    sizing: 'Graded grain sizes (0 – 1mm, 1 – 2mm, 2 – 4mm, 4 – 5mm)',
    application: 'Lining for Induction Furnaces melting MS Scrap, Sponge Iron & Ferroalloys',
    standards: ['IS 1528 Part 15', 'ASTM C862'],
    stockStatus: 'In Stock',
    minOrderQuantity: '20 MT',
    highlightPoints: [
      'Thermally stable up to 1,720 °C',
      'Zero thermal spalling during slag skimming',
      'Available with premixed customized binder ratios',
    ],
  },
  {
    id: 'ball-mill-powder',
    name: 'Engineered Ball Mill Refractory Powder',
    code: 'HM-BM-PWD90',
    division: 'hitzemeister',
    divisionName: 'Hitzemeister (Manufacturing)',
    category: 'refractory',
    categoryLabel: 'Refractory Consumables',
    description: 'Finely ground micronized mineral powder manufactured through closed-circuit ball mills. Used as critical refractory binder and thermal barrier compound.',
    primaryChemistry: [
      { element: 'Mesh Fineness', value: '300 – 400 Mesh' },
      { element: 'Refractoriness (PCE)', value: '≥ 32 Orton Cone' },
      { element: 'Moisture', value: '≤ 0.50%' },
      { element: 'Al₂O₃ + SiO₂', value: '≥ 92.5%' },
    ],
    sizing: 'Micro-pulverized 300 Mesh (≥ 98% passing)',
    application: 'Refractory mortar, tundish slurry coating, castable bonding',
    standards: ['DIN 51060', 'ISO 5019'],
    stockStatus: 'In Stock',
    minOrderQuantity: '15 MT',
    highlightPoints: [
      'Precision micronized particle distribution',
      'Controlled moisture and consistent bonding strength',
      'Packed in moisture-proof 50kg HDPE bags or 1MT jumbo bags',
    ],
  },
  {
    id: 'custom-refractories',
    name: 'Customized Refractory Products & Well Blocks',
    code: 'HM-CR-ENG20',
    division: 'hitzemeister',
    divisionName: 'Hitzemeister (Manufacturing)',
    category: 'refractory',
    categoryLabel: 'Customized Refractory Products',
    description: 'Bespoke precast, prefired and monolithic refractory blocks, ladle well blocks, seating bricks, and impact pads engineered specifically to steel plant drawings.',
    primaryChemistry: [
      { element: 'Al₂O₃', value: '70.0 – 90.0% (Custom)' },
      { element: 'CCS (Cold Crushing)', value: '≥ 60 MPa' },
      { element: 'Bulk Density', value: '≥ 2.85 g/cm³' },
      { element: 'Refractoriness', value: '> 1,780 °C' },
    ],
    sizing: 'Custom cast to plant engineering drawings',
    application: 'Steel ladles, tundish pour pads, furnace runners & spouts',
    standards: ['ASTM C133', 'Plant Specific QA Tolerances'],
    stockStatus: 'Manufacturing',
    minOrderQuantity: 'Batch Basis',
    highlightPoints: [
      'Tailored formulation based on plant slag chemistry',
      'Pre-cured & heat-treated ready for immediate assembly',
      'Drastically reduces plant turnaround downtime',
    ],
  },

  // CRS ENTERPRISES TRADING & SOURCING
  {
    id: 'quartzite-mineral',
    name: 'High-Purity Quartzite & Industrial Minerals',
    code: 'CRS-MN-QZ98',
    division: 'crs-enterprises',
    divisionName: 'CRS Enterprises (Trading & Sourcing)',
    category: 'minerals',
    categoryLabel: 'Quartzite & Mineral Supply',
    description: 'Sourced from premium geological deposits in Eastern India. Selected for exceptionally high silica content, thermal decrepitation resistance, and minimal iron/alumina impurities.',
    primaryChemistry: [
      { element: 'SiO₂ (Silica)', value: '≥ 98.50%' },
      { element: 'Al₂O₃', value: '≤ 0.60%' },
      { element: 'Fe₂O₃', value: '≤ 0.25%' },
      { element: 'P & S', value: 'Trace only (< 0.02%)' },
    ],
    sizing: '10 – 40 mm, 20 – 60 mm, or custom crusher fractions',
    application: 'Ferro Silicon production, Silicomanganese, Refractory silica bricks',
    standards: ['Geologically Tested', 'IS 10831'],
    stockStatus: 'Direct Supply',
    minOrderQuantity: '100 MT',
    highlightPoints: [
      'High thermal stability under reduction furnace arcs',
      'Uniform screening and dust-free washed lots',
      'Available for bulk rake dispatch or road logistics',
    ],
  },
  {
    id: 'ferro-ms-scrap',
    name: 'Ferro & MS Scrap (Heavy Melting Scrap HMS 1 & 2)',
    code: 'CRS-SC-HMS01',
    division: 'crs-enterprises',
    divisionName: 'CRS Enterprises (Trading & Sourcing)',
    category: 'scrap',
    categoryLabel: 'Ferro & MS Scrap',
    description: 'Dependable sourcing and yard processing of industrial Heavy Melting Scrap (HMS 1 & 2), cut lengths, plate scrap, and turning bundles for induction and electric arc furnaces.',
    primaryChemistry: [
      { element: 'Ferrous Content (Fe)', value: '≥ 98.0%' },
      { element: 'Density', value: '≥ 0.8 MT/m³ (Heavy cut)' },
      { element: 'Impurities / Trash', value: '≤ 1.0% Guaranteed' },
      { element: 'Hazardous Residues', value: '0% Guaranteed Clean' },
    ],
    sizing: 'Prepared sizes (under 1.5m cut lengths for furnace charger doors)',
    application: 'Induction furnace charge, electric arc steelmaking, foundry cupolas',
    standards: ['ISRI 200 - 206 Standard', 'Domestic Yard Inspected'],
    stockStatus: 'Direct Supply',
    minOrderQuantity: '50 MT',
    highlightPoints: [
      'Rigorous yard sorting eliminates non-ferrous and hollow materials',
      'High bulk density ensures lower melting power consumption',
      'Daily dispatch capability across Eastern India steel belts',
    ],
  },
  {
    id: 'pig-iron-sponge-billet',
    name: 'Industrial Raw Materials (Pig Iron, Sponge Iron & Billet Trading)',
    code: 'CRS-RM-PISB',
    division: 'crs-enterprises',
    divisionName: 'CRS Enterprises (Trading & Sourcing)',
    category: 'iron-billets',
    categoryLabel: 'Pig Iron, Sponge & Billets',
    description: 'Comprehensive raw material trading encompassing steel-grade and foundry-grade Pig Iron, Direct Reduced Sponge Iron (FeM ≥ 80%), and prime continuous-cast MS Billets (IS 2830).',
    primaryChemistry: [
      { element: 'Pig Iron Carbon', value: '3.8 – 4.2%' },
      { element: 'Sponge Iron Fe (Total)', value: '≥ 88.0% (FeM ≥ 80%)' },
      { element: 'Billet Grade', value: 'IS 2830 / Fe 500D' },
      { element: 'Sulfur & Phosphorus', value: '≤ 0.045% Max' },
    ],
    sizing: 'Standard pig ingots, lump sponge (3 – 18mm), billets (100x100mm, 125x125mm)',
    application: 'Furnace charge dilution, rolling mills, rebar production',
    standards: ['IS 2830', 'IS 1355', 'BIS Certified Mills'],
    stockStatus: 'Direct Supply',
    minOrderQuantity: '100 MT',
    highlightPoints: [
      'Commercial arbitrage ensuring competitive market pricing',
      'Direct partnerships with leading blast furnace & DRI producers',
      'Immediate delivery coordination through Anandi freight fleet',
    ],
  },
  {
    id: 'mining-mineral-sourcing',
    name: 'Mining & Geological Mineral Sourcing',
    code: 'CRS-MN-MINE',
    division: 'crs-enterprises',
    divisionName: 'CRS Enterprises (Trading & Sourcing)',
    category: 'minerals',
    categoryLabel: 'Mining & Mineral Sourcing',
    description: 'End-to-end mineral procurement, pit-head excavation coordination, and statutory compliance handling for industrial minerals including Manganese Ore, Iron Ore Fines, and Fluxes.',
    primaryChemistry: [
      { element: 'Traceability', value: '100% Pit-Head Traceable' },
      { element: 'Chemical Assay', value: 'Independent Lab Certified' },
      { element: 'Moisture Control', value: 'Seasonally Managed' },
      { element: 'Permits', value: 'Full E-Transit Pass Compliance' },
    ],
    sizing: 'Crushed and run-of-mine fractions available',
    application: 'Blast furnace burden, sintering plants, ferroalloy smelters',
    standards: ['IBM (Indian Bureau of Mines) Compliant', 'ISO 9001 Sourced'],
    stockStatus: 'Direct Supply',
    minOrderQuantity: '250 MT',
    highlightPoints: [
      'Decades of mining sector relationships in Odisha & Jharkhand belts',
      'Direct pit-head testing and weighbridge verification',
      'Reliable year-round continuity even during monsoon cycles',
    ],
  },
];
