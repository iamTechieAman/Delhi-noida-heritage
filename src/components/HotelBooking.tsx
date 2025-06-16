import React, { useState } from 'react';
import { Calendar, Users, Bed, CreditCard, Search, Star, Wifi, Coffee, Car, Tv, Phone, Globe, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';
import { toast } from 'react-hot-toast';

interface Hotel {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  rating: number;
  amenities: string[];
  roomTypes: {
    name: string;
    price: number;
    capacity: number;
    description: string;
    images: string[];
    features: string[];
  }[];
  location: {
    address: string;
    coordinates: [number, number];
    landmarks: string[];
  };
  policies: {
    checkIn: string;
    checkOut: string;
    cancellation: string;
    houseRules: string[];
  };
  contact: {
    phone: string;
    email: string;
    website: string;
  };
  reviews: {
    user: string;
    rating: number;
    comment: string;
    date: string;
  }[];
}

const HotelBooking: React.FC = () => {
  const [searchParams, setSearchParams] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomType: '',
    location: '',
    priceRange: ''
  });

  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  const [selectedRoomType, setSelectedRoomType] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<Hotel[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('recommended');

  const validateDates = () => {
    if (!searchParams.checkIn || !searchParams.checkOut) {
      toast.error('Please select both check-in and check-out dates');
      return false;
    }

    const checkIn = new Date(searchParams.checkIn);
    const checkOut = new Date(searchParams.checkOut);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (checkIn < today) {
      toast.error('Check-in date cannot be in the past');
      return false;
    }

    if (checkOut <= checkIn) {
      toast.error('Check-out date must be after check-in date');
      return false;
    }

    return true;
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateDates()) return;

    setIsSearching(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      const results = sampleHotels.filter(hotel => {
        if (searchParams.priceRange) {
          const [min, max] = searchParams.priceRange.split('-').map(Number);
          if (hotel.price < min || hotel.price > max) return false;
        }
        return true;
      });

      // Sort results
      const sortedResults = [...results].sort((a, b) => {
        switch (sortBy) {
          case 'price-low':
            return a.price - b.price;
          case 'price-high':
            return b.price - a.price;
          case 'rating':
            return b.rating - a.rating;
          default:
            return 0;
        }
      });

      setSearchResults(sortedResults);
      toast.success('Found matching hotels!');
    } catch (error) {
      toast.error('Failed to search hotels. Please try again.');
    } finally {
      setIsSearching(false);
    }
  };

  const handleBooking = (hotel: Hotel) => {
    setSelectedHotel(hotel);
  };

  const calculateTotalPrice = (basePrice: number) => {
    const checkIn = new Date(searchParams.checkIn);
    const checkOut = new Date(searchParams.checkOut);
    const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
    return basePrice * nights * searchParams.guests;
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Find Your Perfect Stay</h2>
          <p className="text-gray-600">
            Book comfortable accommodations near historical sites and attractions
          </p>
        </motion.div>

        <div className="bg-white rounded-xl p-8 shadow-lg mb-12 backdrop-blur-sm bg-white/90">
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-100 transition-all duration-200"
                  placeholder="Where are you going?"
                  value={searchParams.location}
                  onChange={(e) => setSearchParams({ ...searchParams, location: e.target.value })}
                />
                <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Check-in
              </label>
              <div className="relative">
                <input
                  type="date"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-100 transition-all duration-200"
                  value={searchParams.checkIn}
                  onChange={(e) => setSearchParams({ ...searchParams, checkIn: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Check-out
              </label>
              <div className="relative">
                <input
                  type="date"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-100 transition-all duration-200"
                  value={searchParams.checkOut}
                  onChange={(e) => setSearchParams({ ...searchParams, checkOut: e.target.value })}
                  min={searchParams.checkIn || new Date().toISOString().split('T')[0]}
                  required
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Guests
              </label>
              <div className="relative">
                <select
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-100 appearance-none transition-all duration-200"
                  value={searchParams.guests}
                  onChange={(e) => setSearchParams({ ...searchParams, guests: Number(e.target.value) })}
                  required
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
                <Users className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range
              </label>
              <div className="relative">
                <select
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-100 appearance-none transition-all duration-200"
                  value={searchParams.priceRange}
                  onChange={(e) => setSearchParams({ ...searchParams, priceRange: e.target.value })}
                >
                  <option value="">Any Price</option>
                  <option value="0-2000">Under ₹2,000</option>
                  <option value="2000-5000">₹2,000 - ₹5,000</option>
                  <option value="5000-10000">₹5,000 - ₹10,000</option>
                  <option value="10000-999999">Above ₹10,000</option>
                </select>
                <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>

            <div className="lg:col-span-6">
              <Button 
                type="submit" 
                fullWidth
                disabled={isSearching}
                className="py-3 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                {isSearching ? (
                  <>
                    <span className="animate-spin mr-2">⌛</span>
                    Searching...
                  </>
                ) : (
                  <>
                    <Search size={20} className="mr-2" />
                    Search Hotels
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>

        {/* Search Results */}
        <AnimatePresence>
          {searchResults.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {searchResults.length} Hotels Found
                </h3>
                <div className="flex items-center space-x-4">
                  <label className="text-sm text-gray-600">Sort by:</label>
                  <select
                    className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-100"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="recommended">Recommended</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Rating</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {searchResults.map((hotel) => (
                  <motion.div
                    key={hotel.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="relative">
                      <img 
                        src={hotel.imageUrl} 
                        alt={hotel.name} 
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-lg shadow-md flex items-center">
                        <Star size={16} className="text-yellow-400 fill-current" />
                        <span className="ml-1 font-medium">{hotel.rating}</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{hotel.name}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{hotel.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {hotel.amenities.map((amenity, i) => (
                          <span 
                            key={i}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                          >
                            {amenity === 'Free WiFi' && <Wifi size={12} className="mr-1" />}
                            {amenity === 'Restaurant' && <Coffee size={12} className="mr-1" />}
                            {amenity === 'Free Parking' && <Car size={12} className="mr-1" />}
                            {amenity === 'TV' && <Tv size={12} className="mr-1" />}
                            {amenity}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-end justify-between">
                        <div>
                          <p className="text-sm text-gray-500">Starting from</p>
                          <p className="text-2xl font-bold text-red-600">₹{hotel.price}</p>
                          <p className="text-xs text-gray-500">per night</p>
                        </div>
                        <Button
                          onClick={() => handleBooking(hotel)}
                          className="transform hover:scale-105 transition-transform"
                        >
                          View Rooms
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hotel Details Modal */}
        {selectedHotel && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>

              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                      <h3 className="text-2xl leading-6 font-bold text-gray-900 mb-4">
                        {selectedHotel.name}
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <img 
                            src={selectedHotel.imageUrl} 
                            alt={selectedHotel.name}
                            className="w-full h-64 object-cover rounded-lg"
                          />
                        </div>
                        
                        <div>
                          <div className="flex items-center mb-4">
                            <Star size={20} className="text-yellow-400 fill-current" />
                            <span className="ml-2 font-semibold">{selectedHotel.rating} / 5</span>
                          </div>
                          
                          <p className="text-gray-600 mb-4">{selectedHotel.description}</p>
                          
                          <div className="space-y-3">
                            <div className="flex items-center">
                              <MapPin size={20} className="text-gray-400 mr-2" />
                              <span className="text-gray-600">Location details</span>
                            </div>
                            <div className="flex items-center">
                              <Phone size={20} className="text-gray-400 mr-2" />
                              <span className="text-gray-600">{selectedHotel.contact.phone}</span>
                            </div>
                            <div className="flex items-center">
                              <Globe size={20} className="text-gray-400 mr-2" />
                              <a href={selectedHotel.contact.website} className="text-red-600 hover:underline">
                                Visit Website
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h4 className="text-lg font-semibold mb-4">Available Rooms</h4>
                        <div className="space-y-4">
                          {selectedHotel.roomTypes.map((room, index) => (
                            <div 
                              key={index}
                              className={`p-4 border rounded-lg ${
                                selectedRoomType === room.name 
                                  ? 'border-red-500 bg-red-50' 
                                  : 'border-gray-200'
                              }`}
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <h5 className="font-semibold text-gray-900">{room.name}</h5>
                                  <p className="text-sm text-gray-600">{room.description}</p>
                                  <ul className="mt-2 space-y-1">
                                    {room.features.map((feature, i) => (
                                      <li key={i} className="text-sm text-gray-600 flex items-center">
                                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="text-right">
                                  <p className="text-2xl font-bold text-red-600">₹{room.price}</p>
                                  <p className="text-sm text-gray-500">per night</p>
                                  <Button
                                    onClick={() => setSelectedRoomType(room.name)}
                                    variant={selectedRoomType === room.name ? 'primary' : 'outline'}
                                    className="mt-2"
                                  >
                                    Select
                                  </Button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <Button
                    onClick={() => {
                      if (!selectedRoomType) {
                        toast.error('Please select a room type');
                        return;
                      }
                      toast.success('Proceeding to payment...');
                      // Add payment processing logic here
                    }}
                    className="w-full sm:w-auto sm:ml-3"
                  >
                    Book Now
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedHotel(null);
                      setSelectedRoomType('');
                    }}
                    className="mt-3 w-full sm:mt-0 sm:w-auto"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const sampleHotels: Hotel[] = [
  {
    id: 'hotel1',
    name: 'Heritage Palace Hotel',
    description: 'Luxury hotel with traditional architecture and modern amenities',
    imageUrl: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
    price: 5999,
    rating: 4.8,
    amenities: ['Free WiFi', 'Pool', 'Restaurant', 'TV'],
    roomTypes: [
      {
        name: 'Deluxe Room',
        price: 5999,
        capacity: 2,
        description: 'Spacious room with city view',
        images: [
          'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg',
          'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg'
        ],
        features: [
          'King-size bed',
          'City view',
          'Mini bar',
          'Work desk',
          'En-suite bathroom'
        ]
      },
      {
        name: 'Heritage Suite',
        price: 8999,
        capacity: 3,
        description: 'Luxury suite with traditional decor',
        images: [
          'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg',
          'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg'
        ],
        features: [
          'Separate living area',
          'Traditional furnishings',
          'Balcony',
          'Jacuzzi',
          'Butler service'
        ]
      }
    ],
    location: {
      address: '123 Heritage Street, Delhi',
      coordinates: [28.6139, 77.2090],
      landmarks: ['Red Fort', 'Chandni Chowk']
    },
    policies: {
      checkIn: '2:00 PM',
      checkOut: '12:00 PM',
      cancellation: '24 hours before check-in',
      houseRules: [
        'No smoking',
        'No parties',
        'Pets not allowed'
      ]
    },
    contact: {
      phone: '+91 11 2234 5678',
      email: 'info@heritagepalace.com',
      website: 'https://heritagepalace.com'
    },
    reviews: [
      {
        user: 'John D.',
        rating: 5,
        comment: 'Excellent service and beautiful property',
        date: '2025-03-15'
      }
    ]
  },
  {
    id: 'hotel2',
    name: 'Royal Gardens Resort',
    description: 'Peaceful retreat surrounded by landscaped gardens',
    imageUrl: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg',
    price: 4499,
    rating: 4.6,
    amenities: ['Free WiFi', 'Restaurant', 'Free Parking', 'TV'],
    roomTypes: [
      {
        name: 'Garden View Room',
        price: 4499,
        capacity: 2,
        description: 'Comfortable room with garden view',
        images: [
          'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg',
          'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg'
        ],
        features: [
          'Queen-size bed',
          'Garden view',
          'Tea/coffee maker',
          'Seating area',
          'Private balcony'
        ]
      },
      {
        name: 'Family Suite',
        price: 7499,
        capacity: 4,
        description: 'Spacious suite for families',
        images: [
          'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg',
          'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg'
        ],
        features: [
          'Two bedrooms',
          'Living room',
          'Dining area',
          'Kitchen',
          'Garden access'
        ]
      }
    ],
    location: {
      address: '45 Garden Road, Noida',
      coordinates: [28.5355, 77.3910],
      landmarks: ['Botanical Garden', 'Mall of India']
    },
    policies: {
      checkIn: '3:00 PM',
      checkOut: '11:00 AM',
      cancellation: '48 hours before check-in',
      houseRules: [
        'No smoking',
        'Pets allowed with prior notice',
        'Quiet hours 10 PM - 6 AM'
      ]
    },
    contact: {
      phone: '+91 120 4567 890',
      email: 'stay@royalgardens.com',
      website: 'https://royalgardens.com'
    },
    reviews: [
      {
        user: 'Sarah M.',
        rating: 4.5,
        comment: 'Beautiful gardens and peaceful atmosphere',
        date: '2025-02-28'
      }
    ]
  },
  {
    id: 'hotel3',
    name: 'Monument View Hotel',
    description: 'Prime location with stunning views of historical monuments',
    imageUrl: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',
    price: 6499,
    rating: 4.7,
    amenities: ['Free WiFi', 'Restaurant', 'Free Parking', 'TV'],
    roomTypes: [
      {
        name: 'Classic Room',
        price: 6499,
        capacity: 2,
        description: 'Elegant room with city view',
        images: [
          'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg',
          'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg'
        ],
        features: [
          'King-size bed',
          'Monument view',
          'Premium amenities',
          'Work area',
          'Rain shower'
        ]
      },
      {
        name: 'Monument Suite',
        price: 9999,
        capacity: 2,
        description: 'Luxury suite with monument view',
        images: [
          'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg',
          'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg'
        ],
        features: [
          'Panoramic views',
          'Living room',
          'Private terrace',
          'Luxury bathroom',
          'Executive lounge access'
        ]
      }
    ],
    location: {
      address: '78 Monument Road, Delhi',
      coordinates: [28.6129, 77.2295],
      landmarks: ['Humayun\'s Tomb', 'India Gate']
    },
    policies: {
      checkIn: '2:00 PM',
      checkOut: '12:00 PM',
      cancellation: '72 hours before check-in',
      houseRules: [
        'No smoking',
        'No parties',
        'Professional photography requires permit'
      ]
    },
    contact: {
      phone: '+91 11 3456 7890',
      email: 'info@monumentview.com',
      website: 'https://monumentview.com'
    },
    reviews: [
      {
        user: 'Michael R.',
        rating: 5,
        comment: 'Incredible views and excellent service',
        date: '2025-03-01'
      }
    ]
  }
];

export default HotelBooking;