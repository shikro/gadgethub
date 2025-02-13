import { formatDate, formatPrice, calculateSavings } from "../../utils";
import { Promotion } from "../../types/product";

interface PromoBannerProps {
  promotions: Promotion[];
}

export function PromoBanner({ promotions }: PromoBannerProps) {
  return (
    <div className="bg-indigo-600">
      <div className="max-w-7xl mx-auto py-3 px-4">
        <div className="text-center">
          <p className="text-white font-semibold text-lg mb-2">
            СУПЕР РАСПРОДАЖА
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {promotions.map((promo) => (
              <div
                key={promo.id}
                className="grid md:grid-cols-2 bg-white rounded-lg p-6 shadow-lg"
              >
                <div className="ml-2">
                  <h3 className="font-semibold text-gray-900">{promo.title}</h3>
                  <p className="text-sm text-gray-600">{promo.description}</p>
                  <div className="mt-2">
                    <span className="text-lg font-bold text-indigo-600">
                      {formatPrice(promo.currentPrice)}
                    </span>
                    <span className="ml-2 text-sm text-gray-500 line-through">
                      {formatPrice(promo.originalPrice)}
                    </span>
                    <span className="ml-2 text-sm text-green-600">
                      Скидка{" "}
                      {calculateSavings(
                        promo.originalPrice,
                        promo.currentPrice
                      )}
                      %
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Успей купить до {formatDate(promo.validUntil)}
                  </p>
                </div>
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="ml-24 w-24 h-24 object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
