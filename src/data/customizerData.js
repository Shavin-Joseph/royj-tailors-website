// src/data/customizerData.js

export const customizerOptions = {
  garmentTypes: [
    { id: 'suit', name: 'Bespoke Suit & Blazer', basePrice: 75000, icon: '👔' },
    { id: 'shirt', name: 'Custom Tailored Shirt', basePrice: 13500, icon: '👕' },
    { id: 'trousers', name: 'Executive Trousers', basePrice: 17500, icon: '👖' },
    { id: 'tuxedo', name: 'Grand Gala Tuxedo', basePrice: 92000, icon: '🤵' }
  ],
  fabrics: [
    { id: 'italian-wool', name: 'Super 150s Italian Merino Wool', origin: 'Biella, Italy', priceOffset: 12000, colorHex: '#1C2333', swatchName: 'Midnight Navy' },
    { id: 'egyptian-cotton', name: '100% 2-Ply Egyptian Giza Cotton', origin: 'Egypt', priceOffset: 0, colorHex: '#F7F7F7', swatchName: 'Crisp Ivory White' },
    { id: 'irish-linen', name: 'Pure Irish Linen', origin: 'Belfast', priceOffset: 5000, colorHex: '#D1C7BD', swatchName: 'Natural Sand Linen' },
    { id: 'cashmere-blend', name: 'Wool-Cashmere Luxury Flannel', origin: 'Scotland', priceOffset: 18000, colorHex: '#2B2B2B', swatchName: 'Charcoal Tweed' }
  ],
  fitStyles: [
    { id: 'bespoke-slim', name: 'Royj Bespoke Slim Fit', desc: 'Contoured to body silhouette with narrow waist and sleek sleeve drape.' },
    { id: 'classic-executive', name: 'Classic Executive Fit', desc: 'Comfortable chest width and traditional taper for timeless dignity.' },
    { id: 'modern-tapered', name: 'Modern Athletic Taper', desc: 'Broader shoulder taper with trim waist line.' }
  ],
  lapelStyles: [
    { id: 'notch', name: 'Classic Notch Lapel', desc: 'Versatile standard lapel suitable for business and semi-formal wear.' },
    { id: 'peak', name: 'Commanding Peak Lapel', desc: 'Dramatic pointed lapel that adds height and formal grandeur.' },
    { id: 'shawl', name: 'Smooth Satin Shawl Lapel', desc: 'Continuous curved lapel reserved for tuxedos and black-tie galas.' }
  ],
  monogramColors: [
    { id: 'gold', name: 'Imperial Gold Thread', hex: '#D4AF37' },
    { id: 'silver', name: 'Sterling Silver Thread', hex: '#C0C0C0' },
    { id: 'navy', name: 'Deep Navy Thread', hex: '#000080' },
    { id: 'burgundy', name: 'Royal Burgundy Thread', hex: '#800020' }
  ]
};
