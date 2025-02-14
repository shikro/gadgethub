import { Splide, SplideSlide } from "@splidejs/react-splide";
import { ProductCard } from "../product/ProductCard";
import { products } from "../../data/products";

export function NewArrivals() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Новинки</h2>
        <Splide
          options={{
            type: "loop",
            perPage: 3,
            perMove: 1,
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
                onExpand={() => {}}
                onCollapse={() => {}}
                addToCartButton={false}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}
