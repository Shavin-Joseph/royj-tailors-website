// src/data/products.js
<<<<<<< HEAD

export const products = [
  {
    id: 'dark-green-cargo-trousers',
    name: 'Dark Green Utility Cargo Trousers',
    category: 'trousers',
    price: 'LKR 8,500',
    priceValue: 8500,
    image: '/products/cargo-trousers-front.webp',
    backImage: '/products/cargo-trousers-back.webp',
    shortName: 'The utility cargo trouser',
    badge: 'The signature piece',
    isFeatured: true,
    type: 'trousers',
    fabric: 'Heavy-Duty Cotton Twill (Comfortable & Durable)',
    colors: ['Dark Forest Green', 'Black', 'Khaki Tan', 'Navy Blue'],
    measurements: ['Waist', 'Inseam (Leg Length)', 'Hips/Seat', 'Thigh', 'Leg Opening'],
    description: 'Our signature dark green utility cargo trousers featuring 2 deep side slash pockets, 2 side flap cargo pockets, and 2 back flap pockets. Double-stitched for extra strength and custom-cut to your exact waist and length.'
  },
  {
    id: 'children-school-uniform-set',
    name: "Boys' Sri Lankan School Uniform Set",
    category: 'uniforms',
    price: 'LKR 4,800',
    priceValue: 4800,
    image: '/products/school-uniform-shorts.webp',
    shortName: 'The school-day uniform',
    imageNote: 'White short-sleeve shirt with plain navy school shorts. Confirm your school’s required cut, badges and accessories with the studio.',
    badge: 'Ready for school',
    isFeatured: true,
    type: 'uniform',
    fabric: '100% Breathable Cotton & Easy-Iron Blend',
    colors: ['White & Navy'],
    measurements: ['Age / School Class', 'Collar / Neck', 'Chest', 'Waist', 'Shorts Length', 'Child Height'],
    description: 'A white short-sleeve school shirt with a plain chest pocket and navy knee-length shorts, tailored for Sri Lankan school days. Share your government school’s requirements so we can confirm the exact cut and details.',
    companionId: 'white-school-uniform-trousers',
    companionLabel: 'Need white full-length school trousers?'
  },
  {
    id: 'tailored-cargo-shorts',
    name: 'Men\'s Tailored Cargo Shorts',
    category: 'shorts',
    price: 'LKR 6,200',
    priceValue: 6200,
    image: '/products/cargo-shorts.webp',
    shortName: 'The off-duty cargo short',
    badge: 'Off-duty essential',
    isFeatured: true,
    type: 'shorts',
    fabric: '100% Premium Cotton Canvas',
    colors: ['Khaki Tan', 'Dark Green', 'Navy Blue', 'Black'],
    measurements: ['Waist', 'Shorts Length (Inseam)', 'Hips', 'Thigh'],
    description: 'Comfortable, stylish tailored cargo shorts with deep side flap pockets. Perfect for weekend outings, casual wear, and outdoor activities.'
  },
  {
    id: 'classic-white-shirt-long',
    name: 'Men\'s Custom Long Sleeve Shirt',
    category: 'shirts',
    price: 'LKR 5,500',
    priceValue: 5500,
    image: '/products/shirt-white-long.webp',
    shortName: 'The everyday cotton shirt',
    badge: 'A wardrobe essential',
    isFeatured: true,
    type: 'shirt-long',
    fabric: '100% Soft Breathable Cotton',
    colors: ['White', 'Light Blue', 'Soft Pink', 'Black'],
    measurements: ['Collar / Neck', 'Chest', 'Shoulder Width', 'Sleeve Length', 'Shirt Length'],
    description: 'Custom fitted long sleeve shirt with a sharp collar and neat cuffs. Perfect for daily office wear, weddings, and formal occasions.'
  },
  {
    id: 'modern-blue-oxford-short',
    name: 'Men\'s Casual Short Sleeve Shirt',
    category: 'shirts',
    price: 'LKR 4,800',
    priceValue: 4800,
    image: '/products/shirt-blue-short.webp',
    shortName: 'The casual Oxford shirt',
    badge: 'Easy everyday',
    isFeatured: false,
    type: 'shirt-short',
    fabric: 'Cotton Oxford Blend',
    colors: ['Light Blue', 'White', 'Charcoal Gray'],
    measurements: ['Collar', 'Chest', 'Shoulder', 'Sleeve Length'],
    description: 'Lightweight short sleeve shirt designed for tropical heat and smart-casual days. Comfortable fit with button-down collar.'
  },
  {
    id: 'essential-gray-trousers',
    name: 'Men\'s Classic Formal Trousers',
    category: 'trousers',
    price: 'LKR 7,200',
    priceValue: 7200,
    image: '/products/trousers-gray.webp',
    shortName: 'The classic tailored trouser',
    badge: 'The weekday staple',
    isFeatured: false,
    type: 'trousers',
    fabric: 'Smooth Wrinkle-Resistant Wool Blend',
    colors: ['Charcoal Gray', 'Black', 'Navy Blue'],
    measurements: ['Waist', 'Inseam (Leg Length)', 'Outseam', 'Thigh'],
    description: 'Clean formal trousers with smooth front drape and durable waistband. Tailored for daily office use and wedding wear.'
  },
  {
    id: 'white-school-uniform-trousers',
    name: "Boys' White Full-Length School Trousers",
    category: 'uniforms',
    price: 'Price on enquiry',
    priceValue: null,
    image: '/products/school-trousers-white.webp',
    shortName: 'The white school trouser',
    imageNote: 'Plain white full-length school trousers. Pocket, waistband and cut requirements are confirmed for your school.',
    badge: 'Senior school essential',
    isFeatured: false,
    type: 'uniform-trousers',
    fabric: 'White school-uniform fabric, confirmed with the studio',
    colors: ['White'],
    measurements: ['Age / School Class', 'Waist', 'Inseam (Leg Length)', 'Hips/Seat', 'Outseam', 'Child Height'],
    description: 'Plain white full-length trousers for Sri Lankan school uniforms, with a neat straight leg and pressed finish. Made to the student’s measurements and the school’s required details. Enquire for fabric options and a quotation.',
    companionId: 'children-school-uniform-set',
    companionLabel: 'Looking for the shirt & navy shorts set?'
  }
];
=======
export const products = [
  {
    id: 'classic-white-shirt-short',
    name: 'The Classic Short Sleeve Shirt',
    price: 'Price will available soon',
    image: '/shirt-white.png',
    colorImages: {
      'White': '/shirt-white.png',
      'Light Blue': '/shirt-blue-short.jpg',
      'Black': '/shirt-black-short.jpg'
    },
    type: 'shirt-short',
    colors: ['White', 'Light Blue', 'Black'],
    defaultConfig: {
      color: 'White',
      customColorName: '',
      fit: 'Slim Fit'
    },
    measurements: ['Collar', 'Chest', 'Shoulder', 'Sleeve Length (Short)'],
    description: 'Crafted from 100% premium cotton, this short sleeve shirt offers a breathable feel and a sharp, tailored fit. Choose your preferred color swatch and fit to personalize your shirt.'
  },
  {
    id: 'modern-blue-oxford-long',
    name: 'The Modern Long Sleeve Shirt',
    price: 'Price will available soon',
    image: '/shirt-blue.png',
    colorImages: {
      'Light Blue': '/shirt-blue.png',
      'White': '/shirt-white-long.jpg',
      'Black': '/shirt-black-long.jpg'
    },
    type: 'shirt-long',
    colors: ['Light Blue', 'White', 'Black'],
    defaultConfig: {
      color: 'Light Blue',
      customColorName: '',
      fit: 'Slim Fit'
    },
    measurements: ['Collar', 'Chest', 'Shoulder', 'Sleeve Length'],
    description: 'A modern take on the iconic oxford shirt. Featuring a button-down collar and premium fabric that pairs effortlessly with chinos or trousers. Choose your preferred color swatch and fit.'
  },
  {
    id: 'essential-gray-trousers',
    name: 'Essential Standard Office Trousers',
    price: 'Rs. 2,500 LKR',
    image: '/trousers-black.png',
    colorImages: {
      'Black': '/trousers-black.png',
      'Gray': '/trousers-gray.png',
      'Navy Blue': '/trousers-navy.jpg'
    },
    type: 'office-trousers',
    colors: ['Black', 'Gray', 'Navy Blue'],
    defaultConfig: {
      color: 'Black',
      customColorName: '',
      fit: 'Slim Fit',
      pleat: 'Flat Front (Modern)'
    },
    measurements: ['Waist', 'Inseam', 'Outseam', 'Thigh'],
    description: 'Designed for standard office and professional wear, our Essential Office Trousers feature a modern tailored cut, crisp front press crease, and durable wrinkle-resistant fabric. Choose your preferred color swatch and fit to complement your daily workplace attire.'
  },
  {
    id: 'custom-cargo-trousers',
    name: 'Customizable Cargo Trousers',
    price: 'Rs. 2,500 LKR',
    image: '/cargo-trousers-green-front.png',
    backImage: '/cargo-trousers-green-back.png',
    colorImages: {
      'Dark Green': '/cargo-trousers-green-front.png',
      'Gray': '/cargo-trousers-gray.jpg',
      'Butter': '/cargo-trousers-butter.jpg'
    },
    type: 'cargo-trousers',
    material: 'Twill',
    colors: ['Dark Green', 'Gray', 'Butter'],
    defaultConfig: {
      color: 'Dark Green',
      customColorName: '',
      frontPockets: 2,
      frontPocketShape: 'Deep Slant Hand Pockets',
      sidePockets: 2,
      sidePocketShape: 'Flap Box Pleat Pockets',
      backPockets: 2,
      backPocketShape: 'Flap Box Pleat Pockets',
      fit: 'Straight Fit',
      waistband: 'Belt Loops & Button',
      material: 'Heavyweight Cotton Twill'
    },
    measurements: ['Waist', 'Inseam', 'Outseam', 'Thigh', 'Hip'],
    description: 'Tailored from heavyweight premium cotton twill fabric, these fully customizable Cargo Trousers feature a default setup of 2 front pockets, 2 side cargo pockets with flap box pleats, and 2 back flap pockets. Personalize colors, pocket counts, pocket shapes, fit style, and custom measurements for a bespoke utility look.'
  }
];
>>>>>>> bbd6728eab04548842ae8036b6e641589e8eaba9
