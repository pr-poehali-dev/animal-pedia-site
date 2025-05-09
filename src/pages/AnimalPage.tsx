
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { getAnimalById, categories } from '@/data/animals';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Share2, Heart } from 'lucide-react';

const AnimalPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const animal = id ? getAnimalById(id) : undefined;
  
  if (!animal) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold mb-8 text-center">Животное не найдено</h1>
          <div className="text-center">
            <Link to="/">
              <Button>Вернуться на главную</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const category = categories.find(cat => cat.id === animal.category);

  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-4">
            <Link to="/" className="text-green-700 hover:text-green-900 inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <path d="M5 12h14"></path>
                <path d="m12 5-7 7 7 7"></path>
              </svg>
              Назад
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-96">
              <img 
                src={animal.image} 
                alt={animal.name} 
                className="w-full h-full object-cover"
              />
              <Link to={`/category/${animal.category}`}>
                <Badge className="absolute top-4 right-4 bg-green-600 hover:bg-green-700">
                  {category?.name || 'Категория'}
                </Badge>
              </Link>
            </div>
            
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                <div>
                  <h1 className="text-3xl font-bold mb-1">{animal.name}</h1>
                  <p className="text-gray-500 italic">{animal.latinName}</p>
                </div>
                
                <div className="flex space-x-3 mt-4 md:mt-0">
                  <Button variant="outline" size="sm">
                    <Heart className="h-4 w-4 mr-2" />
                    Сохранить
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Поделиться
                  </Button>
                </div>
              </div>
              
              <div className="prose max-w-none mb-8">
                <h2 className="text-xl font-bold mb-4">Описание</h2>
                <p className="text-gray-700">{animal.description}</p>
              </div>
              
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-4">Интересные факты</h2>
                <ul className="space-y-2">
                  {animal.facts.map((fact, index) => (
                    <li key={index} className="bg-gray-50 p-4 rounded-md flex">
                      <span className="text-green-600 font-bold mr-2">•</span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AnimalPage;
