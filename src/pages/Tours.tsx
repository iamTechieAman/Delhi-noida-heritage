import React, { useEffect, useState } from 'react';
import { Search, Filter, Clock, Users, MapPin, Calendar } from 'lucide-react';
import TourCard from '../components/ui/TourCard';
import Button from '../components/ui/Button';
import { popularTours } from '../data/tours';
import PrivateTourModal from '../components/PrivateTourModal';

const Tours: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDuration, setFilterDuration] = useState('');
  const [filterPrice, setFilterPrice] = useState('');
  const [filteredTours, setFilteredTours] = useState(popularTours);
  const [isPrivateTourModalOpen, setIsPrivateTourModalOpen] = useState(false);

  useEffect(() => {
    document.title = 'Heritage Tours - Delhi and Noida';
  }, []);

  useEffect(() => {
    let results = popularTours;
    
    if (searchTerm) {
      results = results.filter(tour => 
        tour.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tour.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (filterDuration) {
      results = results.filter(tour => {
        const hours = parseInt(tour.duration.split(' ')[0]);
        
        switch(filterDuration) {
          case 'short':
            return hours <= 3;
          case 'medium':
            return hours > 3 && hours <= 6;
          case 'long':
            return hours > 6;
          default:
            return true;
        }
      });
    }
    
    if (filterPrice) {
      results = results.filter(tour => {
        switch(filterPrice) {
          case 'budget':
            return tour.price < 1000;
          case 'standard':
            return tour.price >= 1000 && tour.price <= 3000;
          case 'premium':
            return tour.price > 3000;
          default:
            return true;
        }
      });
    }
    
    setFilteredTours(results);
  }, [searchTerm, filterDuration, filterPrice]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gray-900">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/d8/5c/4b/la-tour-de-peilz.jpg?w=2000&amp;h=800&amp;s=1" 
            alt="Heritage Tours" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 md:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Curated Heritage Tours</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Experience the best of Delhi and Noida's rich historical heritage with our expert-guided tours.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white shadow-md">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="relative flex-grow max-w-2xl">
              <input
                type="text"
                placeholder="Search tours by name or description..."
                className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex items-center gap-2">
                <Clock size={20} className="text-gray-500" />
                <select
                  className="py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  value={filterDuration}
                  onChange={(e) => setFilterDuration(e.target.value)}
                >
                  <option value="">All Durations</option>
                  <option value="short">Short (≤ 3 hours)</option>
                  <option value="medium">Medium (4-6 hours)</option>
                  <option value="long">Long (&gt; 6 hours)</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <Filter size={20} className="text-gray-500" />
                <select
                  className="py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  value={filterPrice}
                  onChange={(e) => setFilterPrice(e.target.value)}
                >
                  <option value="">All Prices</option>
                  <option value="budget">Budget (&lt; &#8377;1000)</option>
                  <option value="standard">Standard (&#8377;1000-&#8377;3000)</option>
                  <option value="premium">Premium (&gt; &#8377;3000)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tour */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg" 
                  alt="Heritage Full Day Tour" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold">
                  FEATURED
                </div>
              </div>
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-4">
                  Best Seller
                </span>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Delhi Heritage Full Day Tour</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Experience the best of Delhi's rich historical heritage in one comprehensive tour. 
                  Visit the iconic Red Fort, majestic Qutub Minar, serene Humayun's Tomb, and other 
                  significant monuments with our expert historian guides.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Clock size={20} className="text-red-600 mr-2" />
                    <span className="text-gray-700">8 hours</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={20} className="text-red-600 mr-2" />
                    <span className="text-gray-700">Max 12 people</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={20} className="text-red-600 mr-2" />
                    <span className="text-gray-700">5 Monuments</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={20} className="text-red-600 mr-2" />
                    <span className="text-gray-700">Daily departures</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  
                 
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Explore Our Tours ({filteredTours.length})
          </h2>
          
          {filteredTours.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No tours match your search criteria.</p>
              <button 
                className="mt-4 text-red-600 font-medium hover:text-red-800"
                onClick={() => {
                  setSearchTerm('');
                  setFilterDuration('');
                  setFilterPrice('');
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Private Tours */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
              VIP Experience
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Customize Your Private Tour
            </h2>
            <p className="text-gray-600">
              Create a personalized heritage experience tailored to your interests, schedule, and preferences.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Private Tour Benefits</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">Personalized itinerary based on your interests</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">Flexible timing - start when you want</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">Dedicated expert guide for in-depth knowledge</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">Luxury air-conditioned transportation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">Skip-the-line entry at all monuments</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">Complimentary refreshments and lunch</span>
                  </li>
                </ul>
                
                <Button 
                  variant="primary" 
                  size="lg" 
                  onClick={() => setIsPrivateTourModalOpen(true)}
                >
                  Inquire About Private Tours
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-0">
                <img 
                  src="https://images.pexels.com/photos/3580531/pexels-photo-3580531.jpeg" 
                  alt="Private Tour" 
                  className="w-full h-full object-cover"
                />
                <img 
                  src="https://images.pexels.com/photos/415708/pexels-photo-415708.jpeg" 
                  alt="Luxury Experience" 
                  className="w-full h-full object-cover"
                />
                <img 
                  src="https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg" 
                  alt="Personalized Guide" 
                  className="w-full h-full object-cover"
                />
                <img 
                  src="https://images.pexels.com/photos/3876394/pexels-photo-3876394.jpeg" 
                  alt="Heritage Tour" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              Common Questions
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find answers to common questions about our heritage tours and booking process.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <FaqItem 
                question="What should I bring on the tour?" 
                answer="We recommend comfortable walking shoes, sun protection (hat, sunglasses, sunscreen), a water bottle, and your camera. For monument visits, modest clothing is recommended as some religious sites have dress codes."
              />
              <FaqItem 
                question="Are entrance fees included in the tour price?" 
                answer="Yes, all standard tour packages include entrance fees to the monuments listed in the itinerary. Any additional or optional attractions would be at your own expense."
              />
              <FaqItem 
                question="Can I customize the itinerary of a group tour?" 
                answer="Group tours follow a set itinerary to ensure all participants get to enjoy the planned experiences. For customized experiences, we recommend booking a private tour where the itinerary can be tailored to your preferences."
              />
              <FaqItem 
                question="What is your cancellation policy?" 
                answer="Cancellations made more than 48 hours before the tour start time receive a full refund. Cancellations within 48-24 hours receive a 50% refund. Cancellations less than 24 hours before the tour or no-shows are non-refundable."
              />
              <FaqItem 
                question="Are your tours suitable for children?" 
                answer="Yes, most of our tours are family-friendly. We offer engaging experiences for children with stories and interactive elements. For families with very young children, we recommend private tours where the pace can be adjusted accordingly."
              />
            </div>
          </div>
        </div>
      </section>

      <PrivateTourModal 
        isOpen={isPrivateTourModalOpen}
        onClose={() => setIsPrivateTourModalOpen(false)}
      />
    </div>
  );
};

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 pb-4">
      <button 
        className="flex justify-between items-center w-full text-left py-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <svg 
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div className={`mt-2 transition-all duration-200 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-600 pb-2">{answer}</p>
      </div>
    </div>
  );
};

export default Tours;