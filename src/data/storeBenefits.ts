import { Truck, Shield, CreditCard, Clock } from "lucide-react";

export interface StoreBenefit {
  id: string;
  title: string;
  description: string;
  icon: typeof Truck;
}

export const storeBenefits: StoreBenefit[] = [
  {
    id: "1",
    title: "Бесплатная доставка",
    description: "При заказе от 2000р",
    icon: Truck,
  },
  {
    id: "2",
    title: "Можно вернуть",
    description: "Возврат в течении 30 дней",
    icon: Shield,
  },
  {
    id: "3",
    title: "Безопасная оплата",
    description: "Платежные данные под SSL",
    icon: CreditCard,
  },
  {
    id: "4",
    title: "Поддержка 24/7",
    description: "Заботимся о Вас с 9 до 21",
    icon: Clock,
  },
];
