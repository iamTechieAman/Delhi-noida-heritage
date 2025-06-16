import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, Calendar, Info, ArrowLeft, Star } from 'lucide-react';
import Button from '../components/ui/Button';
import ImageGallery from '../components/ui/ImageGallery';
import { delhiMonuments, noidaMonuments } from '../data/monuments';
import { popularTours } from '../data/tours';
import NearbyAttractions from '../components/NearbyAttractions';
import HotelBooking from '../components/HotelBooking';

const MonumentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Find the monument from either Delhi or Noida monuments
  const monument = [...delhiMonuments, ...noidaMonuments].find(m => m.id === id);
  
  // Find tours that include this monument
  const relatedTours = popularTours.filter(tour => 
    tour.includes.includes(monument?.id || '')
  ).slice(0, 3);

  useEffect(() => {
    if (monument) {
      document.title = `${monument.name} - Historical Journey`;
    } else {
      document.title = 'Monument Not Found';
    }
  }, [monument]);

  if (!monument) {
    return (
      <div className="container mx-auto px-4 md:px-8 pt-32 pb-16 text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Monument Not Found</h1>
        <p className="text-gray-600 mb-8">The monument you're looking for doesn't exist in our database.</p>
        <Link to="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gray-900">
        <div className="absolute inset-0 opacity-40">
          <img 
            src={monument.imageUrl} 
            alt={monument.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 md:px-8">
          <Link to={monument.location === 'Delhi' ? "/delhi" : "/noida"} className="inline-flex items-center text-white mb-6">
            <ArrowLeft size={16} className="mr-2" />
            <span>Back to {monument.location} Monuments</span>
          </Link>
          
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-4">
              <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {monument.century}
              </span>
              {monument.unesco && (
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  UNESCO World Heritage
                </span>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{monument.name}</h1>
            
            <div className="flex flex-wrap gap-y-2 text-white/90">
              <div className="flex items-center mr-6">
                <MapPin size={18} className="mr-2" />
                <span>{monument.location}, India</span>
              </div>
              <div className="flex items-center mr-6">
                <Clock size={18} className="mr-2" />
                <span>{monument.visitingHours}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                <span>Built: {monument.builtYear}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Monument Info */}
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="border-b border-gray-200 mb-8">
                <nav className="flex space-x-8">
                  <TabButton 
                    active={activeTab === 'overview'} 
                    onClick={() => setActiveTab('overview')}
                  >
                    Overview
                  </TabButton>
                  <TabButton 
                    active={activeTab === 'history'} 
                    onClick={() => setActiveTab('history')}
                  >
                    History
                  </TabButton>
                  <TabButton 
                    active={activeTab === 'architecture'} 
                    onClick={() => setActiveTab('architecture')}
                  >
                    Architecture
                  </TabButton>
                  <TabButton 
                    active={activeTab === 'reviews'} 
                    onClick={() => setActiveTab('reviews')}
                  >
                    Reviews
                  </TabButton>
                </nav>
              </div>
              
              {/* Tab Content */}
              <div className="mb-8">
                {activeTab === 'overview' && (
                  <div>
                    <ImageGallery images={monument.gallery} />
                    <div className="mt-8">
                      <h2 className="text-2xl font-bold mb-4 text-gray-900">About {monument.name}</h2>
                      <p className="text-gray-600 mb-4 leading-relaxed">{monument.longDescription}</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                        <InfoCard 
                          title="Built By" 
                          value={monument.builtBy} 
                          icon={<Calendar size={20} className="text-red-600" />} 
                        />
                        <InfoCard 
                          title="Entry Fee" 
                          value={monument.entryFee} 
                          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>} 
                        />
                        <InfoCard 
                          title="Best Time" 
                          value={monument.bestTime} 
                          icon={<Clock size={20} className="text-red-600" />} 
                        />
                        <InfoCard 
                          title="Duration" 
                          value={monument.visitDuration} 
                          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>} 
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'history' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-gray-900">Historical Significance</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">{monument.history}</p>
                    
                    <div className="relative pl-6 border-l-2 border-red-200 mb-6">
                      <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7px] top-2"></div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">{monument.historyTimeline[0].year}</h3>
                      <p className="text-gray-600 mb-4">{monument.historyTimeline[0].event}</p>
                    </div>
                    
                    <div className="relative pl-6 border-l-2 border-red-200 mb-6">
                      <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7px] top-2"></div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">{monument.historyTimeline[1].year}</h3>
                      <p className="text-gray-600 mb-4">{monument.historyTimeline[1].event}</p>
                    </div>
                    
                    <div className="relative pl-6 border-l-2 border-red-200">
                      <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-[7px] top-2"></div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">{monument.historyTimeline[2].year}</h3>
                      <p className="text-gray-600">{monument.historyTimeline[2].event}</p>
                    </div>
                  </div>
                )}
                
                {activeTab === 'architecture' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-gray-900">Architectural Marvel</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <img 
                        src={monument.architectureImage} 
                        alt={`Architecture of ${monument.name}`} 
                        className="w-full h-64 object-cover rounded-lg shadow-md"
                      />
                      <div>
                        <p className="text-gray-600 mb-4 leading-relaxed">{monument.architecture}</p>
                        <ul className="space-y-2 text-gray-600">
                          {monument.architecturalFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-3 text-gray-900">Materials Used</h3>
                      <p className="text-gray-600">{monument.materialsUsed}</p>
                    </div>
                  </div>
                )}
                
                {activeTab === 'reviews' && (
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold text-gray-900">Visitor Reviews</h2>
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={20} 
                              className={i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"}
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-gray-600 font-medium">4.0/5</span>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <ReviewCard 
                        name="Rahul Sharma"
                        date="June 15, 2025"
                        rating={5}
                        review="An incredible place with such rich history. The guide was knowledgeable and shared fascinating stories about the monument. Highly recommend visiting early morning to avoid crowds."
                      />
                      <ReviewCard 
                        name="Emily Johnson"
                        date="May 23, 2025"
                        rating={4}
                        review="Beautiful architecture and well-preserved. It was crowded but still manageable. The light and sound show in the evening is a must-see!"
                      />
                      <ReviewCard 
                        name="Arjun Patel"
                        date="April 10, 2025"
                        rating={3}
                        review="The monument itself is stunning, but the facilities could be improved. More information signs in multiple languages would be helpful for international tourists."
                      />
                    </div>
                    
                    <div className="mt-8">
                      <Button variant="outline" fullWidth>Load More Reviews</Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Right Column - Sidebar */}
            <div>
              {/* Quick Info Card */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Visitor Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <MapPin size={18} className="text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Location</h4>
                      <p className="text-gray-600 text-sm">{monument.address}</p>
                      <a href="#" className="text-red-600 text-sm hover:underline">Get Directions</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <Clock size={18} className="text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Opening Hours</h4>
                      <p className="text-gray-600 text-sm">{monument.visitingHours}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px] text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Entry Fee</h4>
                      <p className="text-gray-600 text-sm">Indians: {monument.entryFee.split('/')[0]}</p>
                      <p className="text-gray-600 text-sm">Foreigners: {monument.entryFee.split('/')[1]}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <Info size={18} className="text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Photography</h4>
                      <p className="text-gray-600 text-sm">{monument.photography}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  
                </div>
              </div>
              
              {/* Related Tours */}
              {relatedTours.length > 0 && (
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Tours Including This Monument</h3>
                  
                  <div className="space-y-4">
                    {relatedTours.map(tour => (
                      <div key={tour.id} className="flex border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                        <img 
                          src={tour.imageUrl} 
                          alt={tour.name} 
                          className="w-20 h-20 object-cover rounded-md mr-4"
                        />
                        <div>
                          <h4 className="font-medium text-gray-900">{tour.name}</h4>
                          <div className="flex items-center text-sm text-gray-500 mb-1">
                            <Clock size={14} className="mr-1" />
                            <span>{tour.duration}</span>
                          </div>
                          <p className="text-red-600 font-semibold">₹{tour.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4">
                    <Link to="/tours">
                      <Button variant="outline" fullWidth>View All Tours</Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Booking Section */}
      <HotelBooking />

      {/* Nearby Attractions */}
      <NearbyAttractions attractions={monument.nearbyAttractions.map(attraction => ({
        ...attraction,
        category: 'monument',
        rating: 4.5,
        openingHours: '9:00 AM - 5:00 PM',
        phone: '+91 1234567890',
        website: 'https://example.com'
      }))} />
    </div>
  );
};

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ active, onClick, children }) => {
  return (
    <button
      className={`py-4 px-1 border-b-2 font-medium text-sm ${
        active 
          ? 'border-red-600 text-red-600' 
          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

interface InfoCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="flex items-center mb-2">
        {icon}
        <h3 className="text-sm font-medium text-gray-500 ml-2">{title}</h3>
      </div>
      <p className="text-gray-900 font-medium">{value}</p>
    </div>
  );
};

interface ReviewCardProps {
  name: string;
  date: string;
  rating: number;
  review: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, date, rating, review }) => {
  return (
    <div className="border-b border-gray-200 pb-6">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h4 className="font-medium text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
            />
          ))}
        </div>
      </div>
      <p className="text-gray-600">{review}</p>
    </div>
  );
};

export default MonumentDetail;