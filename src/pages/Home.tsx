import React from 'react';
import { PromoBanner } from '../components/home/PromoBanner';
import { BestSellers } from '../components/home/BestSellers';
import { NewArrivals } from '../components/home/NewArrivals';
import { StoreBenefits } from '../components/home/StoreBenefits';
import { promotions } from '../data/promotions';
import { bestSellers } from '../data/bestSellers';
import { newArrivals } from '../data/newArrivals';
import { storeBenefits } from '../data/storeBenefits';

export function Home() {
  return (
    <div>
      <PromoBanner promotions={promotions} />
      <BestSellers products={bestSellers} />
      <NewArrivals products={newArrivals} />
      <StoreBenefits benefits={storeBenefits} />
    </div>
  );
}