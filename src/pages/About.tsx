import React, { useEffect } from 'react';
import { History, Users, Award, Target, MapPin } from 'lucide-react';
import Button from '../components/ui/Button';

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us - Heritage Journey';
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gray-900">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.pexels.com/photos/2526935/pexels-photo-2526935.jpeg" 
            alt="About Us" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 md:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About हेरिटेज सफर</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Passionate about preserving and sharing the rich historical heritage of Delhi and Noida.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4">
                Our Team journey 
              </div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                The Story Behind हेरिटेज सफर
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Every journey begins with a spark — a curiosity to explore, a desire to discover. हेरिटेज सफर was born from that very spark in the hearts of four passionate students: Aryan, Harshita, Divyanshi, and Aman.

As part of our college's minor project, we set out not just to create a platform, but to tell a story — a story of India’s soul, woven through its timeless monuments, vibrant cultures, and untold histories. With a shared love for travel and an eye for the richness of our heritage, we built हेरिटेज सफर — a travel and tourism experience that invites people to step into the past and walk through the legacy of our land.
 </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                This wasn’t just a college assignment — it was our tribute to India’s incredible diversity. From conceptualization to coding, from research to design, every part of this journey brought us closer to understanding the beauty of our own roots.
              </p>
              <p className="text-gray-600 leading-relaxed">
               Join us, as we turn every trip into a tale, every destination into a memory, and every step into a सफर through heritage.
Our name, हेरिटेज सफर (Heritage Safar), combines the English word "Heritage" with 
                the Hindi word "Safar" (journey), reflecting our mission to take visitors on a 
                meaningful journey through time and culture.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://img.freepik.com/free-photo/silhouette-confident-businesspeople_1098-1768.jpg"
                alt="Our Team" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl hidden md:block">
                <p className="text-3xl font-bold text-red-600">5+</p>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              Our Purpose
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Mission, Vision & Values
            </h2>
            <p className="text-gray-600">
              We are guided by our commitment to preserving and promoting the rich historical heritage 
              of Delhi and Noida through authentic and engaging experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Target className="text-red-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">Our Mission</h3>
              <p className="text-gray-600 text-center">
                To preserve and share the authentic historical narratives of Delhi and Noida 
                through immersive, educational, and enjoyable tour experiences that connect 
                visitors to the rich cultural heritage of the region.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">Our Vision</h3>
              <p className="text-gray-600 text-center">
                To be recognized as the premier heritage tourism company in India, known for 
                our historical expertise, engaging storytelling, and commitment to sustainable 
                tourism that benefits local communities and preserves historical sites.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Award className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">Our Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong>Authenticity:</strong> We present history as it happened, with accuracy and context.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong>Education:</strong> We believe in making history accessible and engaging for all.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong>Respect:</strong> We honor the cultural and religious significance of historical sites.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong>Sustainability:</strong> We promote responsible tourism that preserves heritage for future generations.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong>Excellence:</strong> We strive for the highest quality in all our services and experiences.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
              Meet Our Experts
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              The Team Behind हेरिटेज सफर
            </h2>
            <p className="text-gray-600">
              Our team of passionate historians, expert guides, and dedicated professionals work together 
              to create unforgettable heritage experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember 
              name=" Aman kumar"
              position="Developer"
              image="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
              bio="College student"
            />
            <TeamMember 
              name="Harshita Pal"
              position="Researcher"
              image="https://img.freepik.com/free-vector/woman-traditional-costume_1308-175787.jpg"
              bio="College Student"
            />
            <TeamMember 
              name="Aryan Singh "
              position="Near By loaction finder "
              image="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-173524.jpg"
              bio="College Student"
            />
            <TeamMember 
              name="Divyanshi Gupta "
              position="Assistant"
              image="https://img.freepik.com/free-vector/woman-floral-traditional-costume_1308-176159.jpg"
              bio="College Student"
            />
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline">View Full Team</Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-4">
              Our Advantages
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Why Choose हेरिटेज सफर?
            </h2>
            <p className="text-gray-600">
              We offer more than just tours; we provide immersive historical experiences that connect you 
              with the rich cultural heritage of Delhi and Noida.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<History size={24} className="text-red-600" />}
              title="Expert Historians"
              description="Our tours are led by qualified historians and researchers who provide accurate historical context and engaging narratives."
            />
            <FeatureCard 
              icon={<Users size={24} className="text-red-600" />}
              title="Small Group Sizes"
              description="We limit our group sizes to ensure personalized attention and an intimate experience with the historical sites."
            />
            <FeatureCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>}
              title="Engaging Storytelling"
              description="We bring history to life through compelling stories, anecdotes, and contextual information that makes the past relevant."
            />
            <FeatureCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
              </svg>}
              title="Comprehensive Coverage"
              description="Our tours include both famous landmarks and hidden gems, providing a complete picture of the region's historical significance."
            />
            <FeatureCard 
              icon={<MapPin size={24} className="text-red-600" />}
              title="Off-the-Beaten-Path Sites"
              description="Discover lesser-known historical treasures that most tourists miss but are integral to understanding the region's heritage."
            />
            <FeatureCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>}
              title="Safe & Comfortable"
              description="Your safety and comfort are our priorities, with air-conditioned transportation, certified guides, and carefully planned routes."
            />
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                Our Achievements
              </div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Recognition & Impact
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Over the years, हेरिटेज सफर has been recognized for our commitment to historical 
                accuracy, educational value, and exceptional guest experiences. We're proud of 
                the impact we've made in promoting and preserving the cultural heritage of Delhi and Noida.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="bg-gray-100 p-2 rounded-full mr-4">
                    <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">TripAdvisor Certificate of Excellence (2025)</h3>
                    <p className="text-gray-600 text-sm">Consistently rated 4.8/5 stars by our guests</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-gray-100 p-2 rounded-full mr-4">
                    <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Delhi Tourism Heritage Award (2025)</h3>
                    <p className="text-gray-600 text-sm">For excellence in promoting Delhi's cultural heritage</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-gray-100 p-2 rounded-full mr-4">
                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Responsible Tourism Certification</h3>
                    <p className="text-gray-600 text-sm">For sustainable practices and community engagement</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-red-600">10,000+</p>
                  <p className="text-gray-600">Guests Served</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-red-600">25+</p>
                  <p className="text-gray-600">Historical Sites</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-red-600">15+</p>
                  <p className="text-gray-600">Expert Guides</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-red-600">98%</p>
                  <p className="text-gray-600">Satisfaction Rate</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg" 
                alt="Award ceremony" 
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg" 
                alt="Team meeting" 
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg" 
                alt="Tour group" 
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://images.pexels.com/photos/8117889/pexels-photo-8117889.jpeg" 
                alt="Certificate" 
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your Historical Journey Today</h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto mb-8">
            Join us for an unforgettable exploration of Delhi and Noida's rich historical heritage. 
            Our expert guides are ready to take you on a journey through time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              Browse Our Tours
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, image, bio }) => {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1 text-gray-900">{name}</h3>
        <p className="text-red-600 font-medium mb-3">{position}</p>
        <p className="text-gray-600">{bio}</p>
        <div className="flex space-x-3 mt-4">
          <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="bg-red-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default About;