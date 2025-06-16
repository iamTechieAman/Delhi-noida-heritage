import React, { useEffect, useState } from 'react';
import { Search, Filter, MapPin } from 'lucide-react';
import MonumentCard from '../components/ui/MonumentCard';
import { noidaMonuments } from '../data/monuments';

const NoidaMonuments: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCentury, setFilterCentury] = useState('');
  const [filteredMonuments, setFilteredMonuments] = useState(noidaMonuments);

  useEffect(() => {
    document.title = 'Noida Monuments - Historical Journey';
  }, []);

  useEffect(() => {
    let results = noidaMonuments;
    
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

  const centuries = Array.from(new Set(noidaMonuments.map(monument => monument.century)));

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gray-900">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://i.postimg.cc/05Xn703G/Gemini-Generated-Image-ty60nty60nty60nt.jpg" 
            alt="Noida Monuments" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 md:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Noida Historical Sites</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Discover the hidden historical treasures and cultural landmarks of Noida and surrounding areas.
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
                placeholder="Search sites by name or description..."
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
                <option value="">All Periods</option>
                {centuries.map(century => (
                  <option key={century} value={century}>{century}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Monuments Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Exploring {filteredMonuments.length} Noida Historical Sites
          </h2>
          
          {filteredMonuments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMonuments.map((monument) => (
                <MonumentCard key={monument.id} monument={monument} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No historical sites match your search criteria.</p>
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

      {/* Noida History */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                The Story of Noida
              </div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                From Ancient Villages to Modern City
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Noida, officially known as New Okhla Industrial Development Authority, was established in 1976 under the UP Industrial Area Development Act. However, the history of this region dates back much further.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ancient texts suggest that the area was part of the Kuru Kingdom during the Mahabharata period. The region has been inhabited for thousands of years, with archaeological findings indicating settlements dating back to the Harappan era.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Many villages in and around Noida have historical significance, with ancient temples, step wells, and other structures that bear witness to the rich cultural heritage of the region.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, while Noida has transformed into a modern city with gleaming skyscrapers and tech hubs, it still preserves pockets of historical importance that tell the story of its fascinating journey through time.
              </p>
            </div>
            
            <div>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg" 
                  alt="Ancient Noida" 
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
                <img 
                  src="https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg" 
                  alt="Old village" 
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
                <img 
                  src="https://images.pexels.com/photos/3214995/pexels-photo-3214995.jpeg" 
                  alt="Cultural heritage" 
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
                <img 
                  src="https://images.pexels.com/photos/2527572/pexels-photo-2527572.jpeg" 
                  alt="Modern Noida" 
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Did You Know Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-4">
              Interesting Facts
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Did You Know?</h2>
            <p className="text-gray-600">
              Fascinating historical facts about Noida and its surrounding areas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FactCard 
              number="01"
              fact="The name 'Noida' is an acronym for the New Okhla Industrial Development Authority, which was created in 1976."
            />
            <FactCard 
              number="02"
              fact="Archaeological excavations near Noida have revealed pottery and artifacts dating back to the Ochre Colored Pottery culture (2000-1500 BCE)."
            />
            <FactCard 
              number="03"
              fact="Some villages in Noida, like Shahdara, have historical structures that are over 500 years old."
            />
            <FactCard 
              number="04"
              fact="The region was part of the historical Delhi Sultanate and later the Mughal Empire, with several small forts and monuments from these periods."
            />
            <FactCard 
              number="05"
              fact="The Okhla Barrage, from which Noida gets part of its name, was constructed in 1874 during the British colonial period."
            />
            <FactCard 
              number="06"
              fact="Several temples in the region date back several centuries and are still active places of worship today."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

interface FactCardProps {
  number: string;
  fact: string;
}

const FactCard: React.FC<FactCardProps> = ({ number, fact }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
      <div className="text-3xl font-bold text-red-600 mb-3">{number}</div>
      <p className="text-gray-700">{fact}</p>
    </div>
  );
};

export default NoidaMonuments;