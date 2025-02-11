import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 'iphone-15-pro',
    name: 'iPhone 15 Pro',
    description: 'Latest flagship iPhone with A17 Pro chip and titanium design',
    price: 999.99,
    rating: 4.8,
    category: 'smartphone',
    brand: 'apple',
    color: 'gray',
    model: 'A2849',
    releaseDate: new Date('2023-09-22'),
    stock: 50,
    image: 'https://images.unsplash.com/photo-1696426051769-627646c99fef?w=800',
    images: [
      'https://images.unsplash.com/photo-1696426051769-627646c99fef?w=800',
      'https://images.unsplash.com/photo-1697391788225-30fec29b7a8d?w=800'
    ],
    variants: [
      { id: 'iphone-15-pro-gray', color: 'gray', price: 999.99, stock: 50, images: [] },
      { id: 'iphone-15-pro-gold', color: 'gold', price: 999.99, stock: 30, images: [] }
    ],
    specifications: [
      { name: 'Display', value: '6.1-inch', unit: 'inches' },
      { name: 'Processor', value: 'A17 Pro' },
      { name: 'RAM', value: '8', unit: 'GB' },
      { name: 'Storage', value: '256', unit: 'GB' }
    ],
    features: [
      'ProMotion display',
      'Action button',
      'USB-C connector',
      'Titanium design'
    ],
    dimensions: {
      width: 70.6,
      height: 146.6,
      depth: 8.25,
      weight: 187
    },
    warranty: '1 year',
    characteristics: {
      'Display': '6.1-inch OLED',
      'Processor': 'A17 Pro',
      'Camera': '48MP Main',
      'Battery': 'Up to 23 hours'
    }
  },
  {
    id: 'galaxy-s24-ultra',
    name: 'Samsung Galaxy S24 Ultra',
    description: 'Premium Android flagship with S Pen and AI features',
    price: 1199.99,
    rating: 4.7,
    category: 'smartphone',
    brand: 'samsung',
    color: 'black',
    model: 'SM-S928',
    releaseDate: new Date('2024-01-17'),
    stock: 40,
    image: 'https://images.unsplash.com/photo-1707227156544-eb145fb5ce60?w=800',
    images: [
      'https://images.unsplash.com/photo-1707227156544-eb145fb5ce60?w=800',
      'https://images.unsplash.com/photo-1707343843437-caacff5cfa74?w=800'
    ],
    variants: [
      { id: 'galaxy-s24-ultra-black', color: 'black', price: 1199.99, stock: 40, images: [] },
      { id: 'galaxy-s24-ultra-silver', color: 'silver', price: 1199.99, stock: 25, images: [] }
    ],
    specifications: [
      { name: 'Display', value: '6.8-inch', unit: 'inches' },
      { name: 'Processor', value: 'Snapdragon 8 Gen 3' },
      { name: 'RAM', value: '12', unit: 'GB' },
      { name: 'Storage', value: '512', unit: 'GB' }
    ],
    features: [
      'S Pen included',
      'AI-powered features',
      'Titanium frame',
      '200MP camera'
    ],
    dimensions: {
      width: 79.0,
      height: 162.3,
      depth: 8.6,
      weight: 233
    },
    warranty: '1 year',
    characteristics: {
      'Display': '6.8-inch AMOLED',
      'Processor': 'Snapdragon 8 Gen 3',
      'Camera': '200MP Main',
      'Battery': '5000mAh'
    }
  },
  {
    id: 'macbook-pro-16',
    name: 'MacBook Pro 16-inch',
    description: 'Powerful laptop with M3 Max chip for professionals',
    price: 2499.99,
    rating: 4.9,
    category: 'laptop',
    brand: 'apple',
    color: 'silver',
    model: 'A2485',
    releaseDate: new Date('2023-10-30'),
    stock: 20,
    image: 'https://images.unsplash.com/photo-1702580711321-117ca71e7c04?w=800',
    images: [
      'https://images.unsplash.com/photo-1702580711321-117ca71e7c04?w=800',
      'https://images.unsplash.com/photo-1702580711319-8c5b3f713f3c?w=800'
    ],
    specifications: [
      { name: 'Processor', value: 'M3 Max' },
      { name: 'RAM', value: '32', unit: 'GB' },
      { name: 'Storage', value: '1', unit: 'TB' },
      { name: 'Display', value: '16.2', unit: 'inches' }
    ],
    features: [
      'Liquid Retina XDR display',
      'Up to 22 hours battery life',
      'Advanced thermal system',
      'Six-speaker sound'
    ],
    dimensions: {
      width: 355.7,
      height: 248.1,
      depth: 16.8,
      weight: 2.16
    },
    warranty: '1 year',
    characteristics: {
      'Display': '16.2-inch Liquid Retina XDR',
      'Processor': 'M3 Max',
      'Memory': '32GB unified memory',
      'Storage': '1TB SSD'
    }
  }
  // Additional products would continue here...
];