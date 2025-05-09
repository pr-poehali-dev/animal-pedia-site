
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 py-8 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">© {currentYear} ЖивоМир. Все права защищены.</p>
          </div>
          
          <div className="flex space-x-6">
            <Link to="/about" className="text-gray-600 hover:text-green-700 transition">
              О сайте
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-green-700 transition">
              Контакты
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
