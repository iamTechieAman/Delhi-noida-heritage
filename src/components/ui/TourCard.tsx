import React, { useState } from 'react';
import { Clock, Users, Calendar, Star } from 'lucide-react';
import Button from './Button';
import BookingModal from '../BookingModal';
import { Tour } from '../../types';

interface TourCardProps {
  tour: Tour;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative">
        <img 
          src={tour.imageUrl} 
          alt={tour.name} 
          className="w-full h-56 object-cover"
        />
        {tour.discount > 0 && (
          <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full font-medium text-sm">
            {tour.discount}% OFF
          </div>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900">{tour.name}</h3>
          <div className="flex items-center">
            <Star size={16} className="text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium">{tour.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{tour.description}</p>
        
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center text-gray-500 text-sm">
            <Clock size={16} className="mr-1.5" />
            <span>{tour.duration}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Users size={16} className="mr-1.5" />
            <span>Max {tour.groupSize} people</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar size={16} className="mr-1.5" />
            <span>{tour.availability}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span>{tour.language}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-gray-500 text-sm line-through">{tour.originalPrice > 0 ? `₹${tour.originalPrice}` : ''}</span>
            <p className="text-xl font-bold text-red-600">₹{tour.price}</p>
            <span className="text-gray-500 text-sm">per person</span>
          </div>
          <Button 
            variant="primary" 
            size="md"
            onClick={() => setIsBookingModalOpen(true)}
          >
            Book Now
          </Button>
        </div>
      </div>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        tourName={tour.name}
        price={tour.price}
      />
    </div>
  );
};

export default TourCard;