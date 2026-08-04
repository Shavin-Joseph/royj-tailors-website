// src/data/products.js
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