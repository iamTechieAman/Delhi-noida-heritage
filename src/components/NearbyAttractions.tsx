import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Star, Phone, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';
import { toast } from 'react-hot-toast';

interface Attraction {
  name: string;
  distance: string;
  description: string;
  imageUrl: string;
  rating?: number;
  openingHours?: string;
  phone?: string;
  website?: string;
  address?: string;
  category: 'monument' | 'restaurant' | 'hotel' | 'shopping';
  price?: string;
  cuisine?: string;
  specialties?: string[];
}

interface NearbyAttractionsProps {
  attractions: Attraction[];
}

const NearbyAttractions: React.FC<NearbyAttractionsProps> = ({ attractions }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const filteredAttractions = selectedCategory === 'all' 
    ? attractions 
    : attractions.filter(a => a.category === selectedCategory);

  const handleBooking = (attraction: Attraction) => {
    toast.success(`Booking initiated for ${attraction.name}`);
    // Add booking logic here
  };

  const handleGetDirections = (attraction: Attraction) => {
    const address = encodeURIComponent(attraction.address || attraction.name);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${address}`, '_blank');
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Nearby Attractions</h2>
          <p className="text-gray-600 mb-8">
            Discover interesting places and experiences near this location.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <CategoryButton 
              active={selectedCategory === 'all'}
              onClick={() => setSelectedCategory('all')}
            >
              All
            </CategoryButton>
            <CategoryButton 
              active={selectedCategory === 'monument'}
              onClick={() => setSelectedCategory('monument')}
            >
              Monuments
            </CategoryButton>
            <CategoryButton 
              active={selectedCategory === 'restaurant'}
              onClick={() => setSelectedCategory('restaurant')}
            >
              Restaurants
            </CategoryButton>
            <CategoryButton 
              active={selectedCategory === 'hotel'}
              onClick={() => setSelectedCategory('hotel')}
            >
              Hotels
            </CategoryButton>
            <CategoryButton 
              active={selectedCategory === 'shopping'}
              onClick={() => setSelectedCategory('shopping')}
            >
              Shopping
            </CategoryButton>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAttractions.map((attraction, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="relative group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <img 
                    src={attraction.imageUrl} 
                    alt={attraction.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">{attraction.name}</p>
                    <div className="flex items-center text-sm">
                      <MapPin size={14} className="mr-1" />
                      <span>{attraction.distance}</span>
                    </div>
                  </div>
                </div>
                
                <AnimatePresence>
                  {hoveredCard === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 border-t border-gray-100"
                    >
                      {attraction.rating && (
                        <div className="flex items-center mb-2">
                          <Star size={16} className="text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm font-medium">{attraction.rating}</span>
                        </div>
                      )}
                      
                      {attraction.openingHours && (
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <Clock size={14} className="mr-1" />
                          <span>{attraction.openingHours}</span>
                        </div>
                      )}
                      
                      {attraction.phone && (
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <Phone size={14} className="mr-1" />
                          <a href={`tel:${attraction.phone}`} className="hover:text-red-600">
                            {attraction.phone}
                          </a>
                        </div>
                      )}
                      
                      {attraction.website && (
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <Globe size={14} className="mr-1" />
                          <a 
                            href={attraction.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-red-600"
                          >
                            Visit Website
                          </a>
                        </div>
                      )}

                      {attraction.price && (
                        <div className="text-sm text-gray-600 mb-2">
                          <span className="font-medium">Price Range:</span> {attraction.price}
                        </div>
                      )}

                      {attraction.cuisine && (
                        <div className="text-sm text-gray-600 mb-2">
                          <span className="font-medium">Cuisine:</span> {attraction.cuisine}
                        </div>
                      )}

                      {attraction.specialties && (
                        <div className="mb-2">
                          <span className="text-sm font-medium text-gray-600">Specialties:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {attraction.specialties.map((specialty, i) => (
                              <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <p className="text-sm text-gray-600 mb-4">{attraction.description}</p>
                      
                      <div className="flex justify-between">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleGetDirections(attraction)}
                        >
                          <Navigation size={14} className="mr-1" />
                          Directions
                        </Button>
                        
                        <Button 
                          size="sm"
                          onClick={() => handleBooking(attraction)}
                        >
                          {attraction.category === 'restaurant' ? 'Reserve' : 
                           attraction.category === 'hotel' ? 'Book Room' :
                           'More Info'}
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface CategoryButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
      active 
        ? 'bg-red-600 text-white' 
        : 'bg-white text-gray-600 hover:bg-gray-100'
    }`}
  >
    {children}
  </button>
);

export default NearbyAttractions;