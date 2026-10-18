export const studio = {
  phone: '94775532642', displayPhone: '+94 77 553 2642',
  address: 'No. 176/17A Alwistown, Hendala, Wattala, Sri Lanka',
  hours: 'Monday – Saturday, 9am – 7pm',
};
export const whatsappUrl = (message = 'Hello Royj Tailors, I would like to ask about custom tailoring.') =>
  'https://wa.me/' + studio.phone + '?text=' + encodeURIComponent(message);
export const categories = [
  { id: 'all', name: 'All pieces' }, { id: 'trousers', name: 'Trousers' },
  { id: 'shirts', name: 'Shirts' }, { id: 'shorts', name: 'Shorts' }, { id: 'uniforms', name: 'School uniforms' },
];
export const colorHex = {
  'Dark Forest Green':'#344b3c', 'Dark Green':'#344b3c', Black:'#30312f',
  'Khaki Tan':'#b4a07b', 'Navy Blue':'#343e50', White:'#f4f2e9', 'Light Blue':'#a9c3d1',
  'Soft Pink':'#d7bbb6', 'Sapphire Blue':'#526b8b', 'Charcoal Gray':'#62635f',
  'White & Navy':'#343e50', 'White & Khaki':'#b4a07b', 'White & Blue':'#526b8b',
};
