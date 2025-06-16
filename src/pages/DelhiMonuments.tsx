import React, { useEffect, useState } from 'react';
import { Search, Filter, MapPin } from 'lucide-react';
import MonumentCard from '../components/ui/MonumentCard';
import { delhiMonuments } from '../data/monuments';
import Map from '../components/Map';

const DelhiMonuments: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCentury, setFilterCentury] = useState('');
  const [filteredMonuments, setFilteredMonuments] = useState(delhiMonuments);

  useEffect(() => {
    document.title = 'Delhi Monuments - Historical Journey';
  }, []);

  useEffect(() => {
    let results = delhiMonuments;
    
    if (searchTerm) {
      results = results.filter(monument => 
        monument.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        monument.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (filterCentury) {
      results = results.filter(monument => monument.century === filterCentury);
    }
    
    setFilteredMonuments(results);
  }, [searchTerm, filterCentury]);

  const centuries = Array.from(new Set(delhiMonuments.map(monument => monument.century)));

  // Filter out invalid coordinates and transform valid ones
  const validMarkers = delhiMonuments
    .map(monument => {
      const [lng, lat] = monument.coordinates.split(',').map(coord => parseFloat(coord.trim()));
      if (!isNaN(lat) && !isNaN(lng)) {
        return {
          coordinates: [lat, lng] as [number, number],
          title: monument.name
        };
      }
      return null;
    })
    .filter((marker): marker is NonNullable<typeof marker> => marker !== null);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gray-900">
        <div className="absolute inset-0 opacity-45">
          <img 
            src="https://i.postimg.cc/KcKDN2x4/freepik-the-style-is-candid-image-photography-with-natural-11095.jpg" 
            alt="Delhi Monuments" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 md:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Delhi Monuments</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Explore the architectural marvels and historical landmarks that have defined Delhi's rich cultural heritage for centuries.
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
                placeholder="Search monuments by name or description..."
                className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <div className="flex items-center gap-3">
              <Filter size={20} className="text-gray-500" />
              <select
                className="py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                value={filterCentury}
                onChange={(e) => setFilterCentury(e.target.value)}
              >
                <option value="">All Centuries</option>
                {centuries.map(century => (
                  <option key={century} value={century}>{century}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Delhi Heritage Map</h2>
            <a 
              href="https://www.google.com/maps/search/delhi+heritage+sites"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-red-600 hover:text-red-800"
            >
              <MapPin size={20} className="mr-2" />
              <span className="font-medium">View on Google Maps</span>
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-96">
            <Map 
              center={[28.6139, 77.2090]} // Delhi coordinates (switched to [lat, lng] format)
              zoom={11}
              markers={validMarkers}
            />
          </div>
        </div>
      </section>

      {/* Monuments Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Exploring {filteredMonuments.length} Delhi Monuments
          </h2>
          
          {filteredMonuments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMonuments.map((monument) => (
                <MonumentCard key={monument.id} monument={monument} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No monuments match your search criteria.</p>
              <button 
                className="mt-4 text-red-600 font-medium hover:text-red-800"
                onClick={() => {
                  setSearchTerm('');
                  setFilterCentury('');
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Historical Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Delhi Through The Ages</h2>
            <p className="text-gray-600">
              Explore the rich historical timeline of Delhi, from ancient civilizations to modern times.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-200"></div>
            
            <div className="space-y-12">
              <TimelineItem 
                year="1000 BCE" 
                title="Ancient Delhi" 
                description="The earliest mention of a settlement in the Delhi area is found in the Mahabharata epic, which refers to a city called Indraprastha." 
                position="left"
              />
              <TimelineItem 
                year="736-1192 CE" 
                title="Tomara and Chauhan Dynasty" 
                description="The Tomaras established the city of Dhillika. Later, Prithviraj Chauhan expanded the territory and built numerous temples and fortifications." 
                position="right"
              />
              <TimelineItem 
                year="1192-1526 CE" 
                title="Delhi Sultanate" 
                description="Five dynasties ruled from Delhi: the Mamluk, Khalji, Tughlaq, Sayyid, and Lodi dynasties. This period saw the construction of Qutub Minar and numerous mosques." 
                position="left"
              />
              <TimelineItem 
                year="1526-1857 CE" 
                title="Mughal Era" 
                description="The Mughals established their capital at Delhi, constructing the Red Fort, Jama Masjid, and Humayun's Tomb among other architectural marvels." 
                position="right"
              />
              <TimelineItem 
                year="1858-1947" 
                title="British Rule" 
                description="The British shifted the capital from Calcutta to Delhi in 1911 and constructed New Delhi with its grand buildings like Rashtrapati Bhavan and India Gate." 
                position="left"
              />
              <TimelineItem 
                year="1947-Present" 
                title="Independent India" 
                description="Delhi became the capital of independent India, continuing to grow as a modern metropolitan city while preserving its rich historical heritage." 
                position="right"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  position: 'left' | 'right';
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, position }) => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Content */}
      <div className={`w-5/12 ${position === 'right' ? 'ml-auto' : 'mr-auto'}`}>
        <div className="bg-white rounded-lg shadow-md p-6">
          <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-2">
            {year}
          </span>
          <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      
      {/* Circle */}
      <div className="absolute w-4 h-4 bg-red-600 rounded-full left-1/2 transform -translate-x-1/2"></div>
    </div>
  );
};

export default DelhiMonuments;