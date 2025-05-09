
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import AnimalCard from '@/components/AnimalCard';
import { getRandomAnimal, categories } from '@/data/animals';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Index = () => {
  const animalOfTheDay = getRandomAnimal();
  
  return (
    <Layout>
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-green-800 mb-4 text-center">
            Откройте удивительный мир животных
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8">
            Познакомьтесь с разнообразными видами животных, изучите интересные факты о них и погрузитесь в захватывающий мир природы.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-playfair font-bold text-center mb-8">Животное дня</h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center max-w-5xl mx-auto">
            <div className="w-full md:w-1/2">
              <img 
                src={animalOfTheDay.image} 
                alt={animalOfTheDay.name} 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-2">{animalOfTheDay.name}</h3>
              <p className="text-gray-500 italic mb-4">{animalOfTheDay.latinName}</p>
              <p className="text-gray-700 mb-4">{animalOfTheDay.description}</p>
              <div className="mb-4">
                <h4 className="font-bold mb-2">Интересный факт:</h4>
                <p className="text-gray-700">
                  {animalOfTheDay.facts[Math.floor(Math.random() * animalOfTheDay.facts.length)]}
                </p>
              </div>
              <Link to={`/animal/${animalOfTheDay.id}`}>
                <Button className="bg-green-600 hover:bg-green-700">
                  Узнать больше
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-playfair font-bold text-center mb-8">Категории животных</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link to={`/category/${category.id}`} key={category.id}>
                <Card className="h-full hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <span className="text-5xl mb-4" role="img" aria-label={category.name}>
                      {category.icon}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
