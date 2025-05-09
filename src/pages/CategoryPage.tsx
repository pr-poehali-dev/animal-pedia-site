
import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import AnimalCard from '@/components/AnimalCard';
import { getAnimalsByCategory, categories } from '@/data/animals';

const CategoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const animals = id ? getAnimalsByCategory(id) : [];
  const category = id ? categories.find(cat => cat.id === id) : null;

  if (!category) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold mb-8 text-center">Категория не найдена</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-center mb-8">
          <span className="text-5xl mr-4" role="img" aria-label={category.name}>
            {category.icon}
          </span>
          <h1 className="text-3xl font-bold">{category.name}</h1>
        </div>
        
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
          {category.description}
        </p>
        
        {animals.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {animals.map(animal => (
              <AnimalCard
                key={animal.id}
                id={animal.id}
                name={animal.name}
                image={animal.image}
                category={categories.find(cat => cat.id === animal.category)?.name || ''}
                shortDescription={animal.description.substring(0, 100) + '...'}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">В этой категории пока нет животных.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;
