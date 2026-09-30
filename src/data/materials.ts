export interface MaterialSpec {
  id: string;
  name: string;
  code: string;
  category: 'iron-ore' | 'coke' | 'ferroalloys' | 'refractories';
  categoryLabel: string;
  description: string;
  primaryChemistry: { element: string; value: string }[];
  sizing: string;
  application: string;
  standards: string[];
  stockStatus: 'In Stock' | 'Allocated' | 'Production Run';
  minOrderQuantity: string;
}

export const MATERIALS_DATA: MaterialSpec[] = [
  {
    id: 'dr-pellets-67',
    name: 'Direct Reduction Grade Iron Ore Pellets',
    code: 'HM-FE-DRP92',
    category: 'iron-ore',
    categoryLabel: 'Iron Ore & DRI',
    description: 'High-basicity blast furnace & direct reduction pellets with ultra-low gangue and superior cold crushing strength for high-efficiency shaft furnaces.',
    primaryChemistry: [
      { element: 'Fe (Total)', value: '≥ 67.50%' },
      { element: 'SiO₂ + Al₂O₃', value: '≤ 1.75%' },
      { element: 'P', value: '≤ 0.025%' },
      { element: 'S', value: '≤ 0.005%' },
    ],
    sizing: '9.0 – 16.0 mm (≥ 94.5%)',
    application: 'HYL/Energiron & Midrex Shaft Furnaces, Blast Furnace enrichments',
    standards: ['ISO 4701', 'ISO 3082', 'ASTM E382'],
    stockStatus: 'In Stock',
    minOrderQuantity: '5,000 MT',
  },
  {
    id: 'hbi-metallized',
    name: 'Hot Briquetted Iron (HBI / DRI)',
    code: 'HM-FE-HBI94',
    category: 'iron-ore',
    categoryLabel: 'Iron Ore & DRI',
    description: 'High-density, low-residual virgin metallic unit for Electric Arc Furnaces (EAF) and Basic Oxygen Furnaces (BOF) to dilute tramp elements in prime steel grades.',
    primaryChemistry: [
      { element: 'Total Fe', value: '≥ 91.20%' },
      { element: 'Metallic Fe', value: '≥ 85.80%' },
      { element: 'Metallization', value: '≥ 94.20%' },
      { element: 'Carbon (C)', value: '1.20 – 2.40%' },
    ],
    sizing: 'Approx. 110 × 60 × 30 mm briquettes',
    application: 'EAF Steelmaking, Scrap Substitution, Stainless Steel dilution',
    standards: ['IMO IMSBC Code (MHB)', 'ISO 10835'],
    stockStatus: 'In Stock',
    minOrderQuantity: '3,000 MT',
  },
  {
    id: 'bf-met-coke',
    name: 'Premium Blast Furnace Metallurgical Coke',
    code: 'HM-CK-BF65',
    category: 'coke',
    categoryLabel: 'Coke & Carbon',
    description: 'Heavy structural metallurgical coke engineered for high-top-pressure blast furnaces. Delivers superior permeability, low reactivity, and high thermal stability.',
    primaryChemistry: [
      { element: 'CSR (Strength)', value: '≥ 66.5%' },
      { element: 'CRI (Reactivity)', value: '≤ 23.0%' },
      { element: 'Ash', value: '≤ 10.20%' },
      { element: 'Fixed Carbon', value: '≥ 88.50%' },
    ],
    sizing: '30 – 80 mm (≥ 90%)',
    application: 'Large-Volume Blast Furnaces (>2500 m³), Smelters',
    standards: ['ASTM D5341', 'ISO 18894', 'DIN 51717'],
    stockStatus: 'In Stock',
    minOrderQuantity: '10,000 MT',
  },
  {
    id: 'pci-pulverized-coal',
    name: 'Granular Pulverized Coal Injection (PCI)',
    code: 'HM-CK-PCI80',
    category: 'coke',
    categoryLabel: 'Coke & Carbon',
    description: 'Low-volatile bituminous injection coal providing rapid combustion burnout kinetics and high blast furnace coke replacement ratios.',
    primaryChemistry: [
      { element: 'Calorific Value', value: '≥ 7,950 kcal/kg' },
      { element: 'Volatile Matter', value: '11.0 – 14.5%' },
      { element: 'Ash', value: '≤ 8.50%' },
      { element: 'Sulfur (S)', value: '≤ 0.55%' },
    ],
    sizing: '0 – 3.0 mm (Pre-ground milling specs available)',
    application: 'Tuyère injection in blast furnaces, partial coke replacement',
    standards: ['ASTM D3172', 'ISO 17246'],
    stockStatus: 'In Stock',
    minOrderQuantity: '8,000 MT',
  },
  {
    id: 'ferrosilicon-75',
    name: 'Ferrosilicon 75 (FeSi 75 Standard & Low-Al)',
    code: 'HM-FA-FESI75',
    category: 'ferroalloys',
    categoryLabel: 'Ferroalloys',
    description: 'Crucial deoxidizer and alloying agent in high-carbon and structural steels, electrical sheet production, and foundry inoculation.',
    primaryChemistry: [
      { element: 'Silicon (Si)', value: '75.0 – 78.5%' },
      { element: 'Aluminum (Al)', value: '≤ 1.20% (Low-Al ≤ 0.20%)' },
      { element: 'Carbon (C)', value: '≤ 0.08%' },
      { element: 'Phosphorus (P)', value: '≤ 0.035%' },
    ],
    sizing: '10 – 50 mm / 10 – 100 mm',
    application: 'Ladle furnace deoxidation, Silicon electrical steels, Cast iron inoculant',
    standards: ['EN 10204 3.1', 'ASTM A100', 'ISO 5445'],
    stockStatus: 'In Stock',
    minOrderQuantity: '100 MT',
  },
  {
    id: 'hc-ferromanganese',
    name: 'High-Carbon Ferromanganese (HC FeMn)',
    code: 'HM-FA-FEMN78',
    category: 'ferroalloys',
    categoryLabel: 'Ferroalloys',
    description: 'High-purity manganese addition for sulfur binding, hot shortness prevention, and tensile toughness enhancement in flat and long steel production.',
    primaryChemistry: [
      { element: 'Manganese (Mn)', value: '76.0 – 80.0%' },
      { element: 'Carbon (C)', value: '6.5 – 7.5%' },
      { element: 'Silicon (Si)', value: '≤ 1.00%' },
      { element: 'Phosphorus (P)', value: '≤ 0.18%' },
    ],
    sizing: '10 – 50 mm / 20 – 80 mm',
    application: 'Structural steel, rebar, heavy plate metallurgy, deoxidizer',
    standards: ['ASTM A99', 'ISO 5446'],
    stockStatus: 'In Stock',
    minOrderQuantity: '200 MT',
  },
  {
    id: 'refractory-mgo-c',
    name: 'Resin-Bonded Magnesia-Carbon Bricks',
    code: 'HM-RF-MGOC82',
    category: 'refractories',
    categoryLabel: 'Refractories & Fluxes',
    description: 'Antioxidant-doped fused magnesia and crystalline graphite refractory linings designed for severe slag-line erosion and thermal shock resistance.',
    primaryChemistry: [
      { element: 'MgO', value: '≥ 82.0%' },
      { element: 'Residual Carbon', value: '12.0 – 14.5%' },
      { element: 'Cold Crushing (CCS)', value: '≥ 45.0 MPa' },
      { element: 'Bulk Density', value: '≥ 2.92 g/cm³' },
    ],
    sizing: 'Standard tapered and custom engineered EAF/Ladle drawings',
    application: 'Electric Arc Furnace hot spots, Steel Ladle slag zones, BOF cones',
    standards: ['DIN EN 993', 'ASTM C133'],
    stockStatus: 'Production Run',
    minOrderQuantity: '50 MT',
  },
  {
    id: 'cc-mold-flux',
    name: 'Continuous Casting Mold Powder & Tundish Flux',
    code: 'HM-RF-CCF18',
    category: 'refractories',
    categoryLabel: 'Refractories & Fluxes',
    description: 'Granulated, hollow-sphere synthetic casting powder engineered for precise meniscus thermal insulation, inclusion absorption, and lubricated strand withdrawal.',
    primaryChemistry: [
      { element: 'Basicity (CaO/SiO₂)', value: '0.95 – 1.15' },
      { element: 'Melting Point', value: '1,120 – 1,180 °C' },
      { element: 'Viscosity (1300°C)', value: '1.8 – 2.6 dPa·s' },
      { element: 'Free Carbon', value: '3.5 – 5.0%' },
    ],
    sizing: 'Spherical dust-free granules (0.2 – 1.2 mm)',
    application: 'High-speed slab, bloom, and billet continuous casters',
    standards: ['ISO 9001:2015 Process Audited'],
    stockStatus: 'In Stock',
    minOrderQuantity: '20 MT',
  },
];
