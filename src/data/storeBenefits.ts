import { Truck, Shield, CreditCard, Clock } from 'lucide-react';

export interface StoreBenefit {
  id: string;
  title: string;
  description: string;
  icon: typeof Truck;
}

export const storeBenefits: StoreBenefit[] = [
  {
    id: 'benefit1',
    title: 'Free Shipping',
    description: 'On orders over $50',
    icon: Truck
  },
  {
    id: 'benefit2',
    title: 'Money-Back Guarantee',
    description: '30-day return policy',
    icon: Shield
  },
  {
    id: 'benefit3',
    title: 'Secure Payments',
    description: 'SSL encrypted checkout',
    icon: CreditCard
  },
  {
    id: 'benefit4',
    title: '24/7 Support',
    description: 'Round-the-clock assistance',
    icon: Clock
  }
];