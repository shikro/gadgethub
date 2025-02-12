import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { formatPhoneNumber } from '../../utils/format';

const PHONE_NUMBER = '8-800-555-35-35';
const BUSINESS_HOURS = 'Ежедневно с 09:00 до 21:00';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
            <h3 className="text-xl font-bold mb-4">Частые вопросы</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">
                  О нас
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Контакты
                </a>
              </li>
              <li>
                <a href="/shipping" className="text-gray-400 hover:text-white">
                  Доставка
                </a>
              </li>
              <li>
                <a href="/returns" className="text-gray-400 hover:text-white">
                  Возврат
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Помощь покупателям</h3>
            <p className="text-3xl font-bold text-indigo-400 mb-2">
              {formatPhoneNumber(PHONE_NUMBER)}
            </p>
            <p className="text-gray-400 mb-1">{BUSINESS_HOURS}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Наши социальные сети</h3>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: 'https://facebook.com' },
                { Icon: Instagram, href: 'https://instagram.com' },
                { Icon: Twitter, href: 'https://twitter.com' }
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400 transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}