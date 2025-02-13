import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useExpandedCard } from "../../hooks/useExpandedCard";
import { products } from "../../data/products";
import { ProductCard } from "../product/ProductCard";

export function BestSellers() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Хиты продаж</h2>
        <Splide
          options={{
            type: "loop",
            perPage: 3,
            gap: "2rem",
            pagination: false,
            arrows: true,
          }}
        >
          {products.map((product) => (
            <SplideSlide>
              <ProductCard
                key={product.id}
                product={product}
                isExpanded={false}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}
