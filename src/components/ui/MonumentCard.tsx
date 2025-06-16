import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { Monument } from '../../types';

interface MonumentCardProps {
  monument: Monument;
}

const MonumentCard: React.FC<MonumentCardProps> = ({ monument }) => {
  const getDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${monument.coordinates}`;

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={monument.imageUrl} 
          alt={monument.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
        <a 
          href={getDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 left-3 flex items-center text-white hover:text-yellow-300 transition-colors duration-300"
        >
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">Get Directions</span>
        </a>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
            {monument.name}
          </h3>
          <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {monument.century}
          </span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-3">{monument.shortDescription}</p>
        <div className="flex justify-between items-center">
          <Link 
            to={`/monument/${monument.id}`}
            className="text-red-600 font-medium hover:text-red-800 transition-colors duration-300 inline-flex items-center"
          >
            Explore More
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
          {monument.unesco && (
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">UNESCO</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MonumentCard;