import { PromoBanner } from "../components/home/PromoBanner";
import { BestSellers } from "../components/home/BestSellers";
import { NewArrivals } from "../components/home/NewArrivals";
import { StoreBenefits } from "../components/home/StoreBenefits";
import { promotions } from "../data/promotions";
import { storeBenefits } from "../data/storeBenefits";

export function Home() {
  return (
    <div>
      <div className="max-w-7xl py-1"></div>
      <PromoBanner promotions={promotions} />
      <BestSellers />
      <NewArrivals />
      <StoreBenefits benefits={storeBenefits} />
    </div>
  );
}
