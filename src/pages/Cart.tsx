import { Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import { ProductImage } from "../components/product/ProductImage";

export function Cart() {
  const { items, removeFromCart, updateQuantity, clearCart, total } = useCart();

  const handleSubmit = async () => {
    fetch("http://127.0.0.1:8000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        id: 1,
        items: { items },
      }),
    });
    clearCart();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Корзина</h1>
      {items.length === 0 ? (
        <p className="text-gray-500 text-center">Ваша корзина пуста</p>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center space-x-4">
                  <ProductImage
                    src={"http://localhost:8000/images/" + item.id}
                    alt={item.name}
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">{item.price.toFixed(2)}р</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                    className="w-16 px-2 py-1 border rounded"
                  />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-between items-center">
            <span className="text-lg font-semibold">Стоимость заказа:</span>
            <span className="text-2xl font-bold text-indigo-600">
              {total.toFixed(2)}р
            </span>
          </div>
          <button
            onClick={() => handleSubmit()}
            className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Оформить заказ
          </button>
        </div>
      )}
    </div>
  );
}
