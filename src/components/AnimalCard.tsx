
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export interface AnimalCardProps {
  id: string;
  name: string;
  image: string;
  category: string;
  shortDescription?: string;
}

const AnimalCard: React.FC<AnimalCardProps> = ({ 
  id, 
  name, 
  image, 
  category,
  shortDescription 
}) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Badge 
          className="absolute top-2 right-2 bg-green-600 hover:bg-green-700"
        >
          {category}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2">{name}</h3>
        {shortDescription && (
          <p className="text-gray-600 text-sm line-clamp-2">{shortDescription}</p>
        )}
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Link 
          to={`/animal/${id}`} 
          className="text-green-700 hover:text-green-900 font-medium inline-flex items-center"
        >
          Узнать больше
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default AnimalCard;
