
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Link to="/" className="text-2xl font-bold text-green-700 hover:text-green-800 transition">
          <div className="flex items-center">
            <span role="img" aria-label="Животные" className="mr-2 text-3xl">🦊</span>
            <span className="font-playfair">ЖивоМир</span>
          </div>
        </Link>
        
        <form onSubmit={handleSearch} className="w-full md:w-1/3 relative">
          <Input
            type="text"
            placeholder="Поиск животных..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pr-10"
          />
          <Button 
            type="submit" 
            variant="ghost" 
            size="icon" 
            className="absolute right-0 top-0 h-full"
          >
            <Search className="h-5 w-5 text-gray-500" />
            <span className="sr-only">Поиск</span>
          </Button>
        </form>
      </div>
    </header>
  );
};

export default Header;
