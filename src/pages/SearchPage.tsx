
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import AnimalCard from '@/components/AnimalCard';
import { searchAnimals, categories } from '@/data/animals';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchValue, setSearchValue] = React.useState(query);
  
  const animals = searchAnimals(query);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      setSearchParams({ q: searchValue });
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-6">Результаты поиска</h1>
        
        <form onSubmit={handleSearch} className="mb-8 max-w-xl">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Поиск животных..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Button type="submit">
              <Search className="h-4 w-4 mr-2" />
              Поиск
            </Button>
          </div>
        </form>
        
        {query ? (
          <>
            <p className="mb-6 text-gray-600">
              {animals.length > 0 
                ? `Найдено ${animals.length} результатов по запросу "${query}"` 
                : `По запросу "${query}" ничего не найдено`}
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
              <div className="py-12 text-center">
                <p className="text-gray-500 mb-4">Попробуйте изменить параметры поиска</p>
              </div>
            )}
          </>
        ) : (
          <div className="py-12 text-center">
            <p className="text-gray-500">Введите поисковый запрос выше</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SearchPage;
