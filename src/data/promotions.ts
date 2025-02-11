export interface Promotion {
  id: string;
  title: string;
  description: string;
  originalPrice: number;
  currentPrice: number;
  validFrom: Date;
  validUntil: Date;
  image: string;
}

export const promotions: Promotion[] = [
  {
    id: 'promo1',
    title: 'Premium Headphones',
    description: 'Noise-cancelling wireless headphones with 30-hour battery life',
    originalPrice: 299.99,
    currentPrice: 199.99,
    validFrom: new Date('2024-03-01'),
    validUntil: new Date('2024-03-31'),
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800'
  },
  {
    id: 'promo2',
    title: '4K Smart TV',
    description: '65" Ultra HD Smart TV with HDR',
    originalPrice: 1299.99,
    currentPrice: 999.99,
    validFrom: new Date('2024-03-15'),
    validUntil: new Date('2024-04-15'),
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800'
  }
];