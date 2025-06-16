import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Clock, Users, Star, Mail, Bell, Gift, Award, Globe, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { delhiMonuments, noidaMonuments } from '../data/monuments';
import { popularTours } from '../data/tours';
import MonumentCard from '../components/ui/MonumentCard';
import TourCard from '../components/ui/TourCard';
import FadeInSection from '../components/ui/FadeInSection';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import TypewriterText from '../components/ui/TypewriterText';
import ParallaxSection from '../components/ui/ParallaxSection';
import FloatingCard from '../components/ui/FloatingCard';
import { toast } from 'react-hot-toast';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Heritage Tour - Delhi and Noida Historical Journey';
  }, []);

  // Take a sample of monuments for the homepage
  const featuredDelhiMonuments = delhiMonuments.slice(0, 3);
  const featuredNoidaMonuments = noidaMonuments.slice(0, 3);
  const featuredTours = popularTours.slice(0, 3);

  const heroTexts = [
    "Discover the Rich Heritage of Delhi & Noida",
    "Explore Ancient Monuments & Historical Sites",
    "Experience Centuries of Cultural Legacy",
    "Journey Through Time & Architecture"
  ];

  return (
    <div>
      {/* Enhanced Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <motion.img 
            src="https://i.postimg.cc/7hNcXrrB/freepik-the-style-is-candid-image-photography-with-natural-11094.jpg"
            alt="Red Fort Delhi" 
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl text-white">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mb-6"
              >
                <span className="inline-block px-4 py-2 bg-red-600/20 backdrop-blur-sm rounded-full text-sm font-medium border border-red-400/30">
                  Welcome to हेरिटेज सफर
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                <TypewriterText 
                  texts={heroTexts}
                  speed={80}
                  deleteSpeed={40}
                  delayBetween={3000}
                />
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Embark on a journey through time, exploring ancient monuments, 
                historical sites, and cultural landmarks with expert guides.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.3 }}
              >
                <Link to="/tours">
                  <Button size="lg" className="group">
                    Explore Tours
                    <motion.span
                      className="ml-2 inline-block"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Button>
                </Link>
                <Link to="/delhi">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    View Monuments
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-10 w-16 h-16 bg-red-400/20 rounded-full blur-xl"
          animate={{ 
            y: [0, 15, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
            backgroundSize: "60px 60px"
          }}
        />
        
        <div className="container mx-auto px-4 md:px-8 relative">
          <FadeInSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter end={25} suffix="+" />
                </div>
                <p className="text-white/90">Heritage Sites</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter end={10000} suffix="+" />
                </div>
                <p className="text-white/90">Happy Visitors</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter end={15} suffix="+" />
                </div>
                <p className="text-white/90">Expert Guides</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter end={5000} suffix="+" />
                </div>
                <p className="text-white/90">Years of History</p>
              </motion.div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Introduction Section with Enhanced Animations */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInSection direction="left">
              <div className="relative">
                <motion.img 
                  src="https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg" 
                  alt="Delhi Heritage" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute -bottom-8 -right-8 bg-red-600 text-white px-8 py-6 rounded-2xl shadow-xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-3xl font-bold">
                    <AnimatedCounter end={5000} suffix="+" />
                  </p>
                  <p className="text-sm">Years of History</p>
                </motion.div>
              </div>
            </FadeInSection>
            
            <FadeInSection direction="right" delay={0.3}>
              <div>
                <motion.div
                  className="inline-block px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  Experience The Journey
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
                  Unveiling the Historical Tapestry of 
                  <span className="text-red-600"> Delhi & Noida</span>
                </h2>
                
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    Delhi, the heart of India, has witnessed the rise and fall of numerous empires over 
                    thousands of years. From the Tomars to the Mughals, from the British Raj to 
                    Independent India, each ruler has left an indelible mark on the city's landscape.
                  </p>
                  <p>
                    Noida, though younger, carries its own historical significance with ancient 
                    villages, archaeological sites, and cultural connections that trace back to the 
                    Mahabharata era.
                  </p>
                </div>
                
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.2
                      }
                    }
                  }}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div 
                    className="flex items-center p-4 bg-gray-50 rounded-xl"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ scale: 1.05, backgroundColor: "#FEF2F2" }}
                  >
                    <MapPin size={24} className="text-red-600 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900">25+</p>
                      <p className="text-sm text-gray-600">Heritage Sites</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center p-4 bg-gray-50 rounded-xl"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ scale: 1.05, backgroundColor: "#FEF2F2" }}
                  >
                    <Calendar size={24} className="text-red-600 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900">Daily</p>
                      <p className="text-sm text-gray-600">Guided Tours</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center p-4 bg-gray-50 rounded-xl"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ scale: 1.05, backgroundColor: "#FEF2F2" }}
                  >
                    <Users size={24} className="text-red-600 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900">Expert</p>
                      <p className="text-sm text-gray-600">Historians</p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Featured Delhi Monuments with Enhanced Cards */}
      <section className="py-20 bg-gray-50 relative">
        <ParallaxSection offset={30}>
          <div className="container mx-auto px-4 md:px-8">
            <FadeInSection>
              <div className="text-center max-w-4xl mx-auto mb-16">
                <motion.div
                  className="inline-block px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  Delhi's Heritage
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  Iconic Monuments of Delhi
                </h2>
                <p className="text-xl text-gray-600">
                  Explore the majestic structures that have stood as silent witnesses to Delhi's rich and tumultuous history.
                </p>
              </div>
            </FadeInSection>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
              initial="hidden"
              animate="visible"
            >
              {featuredDelhiMonuments.map((monument, index) => (
                <motion.div
                  key={monument.id}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <FloatingCard hoverScale={1.03} hoverRotate={1}>
                    <MonumentCard monument={monument} />
                  </FloatingCard>
                </motion.div>
              ))}
            </motion.div>
            
            <FadeInSection delay={0.5}>
              <div className="text-center mt-12">
                <Link to="/delhi">
                  <Button variant="outline" size="lg" className="group">
                    View All Delhi Monuments
                    <motion.span
                      className="ml-2 inline-block"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Button>
                </Link>
              </div>
            </FadeInSection>
          </div>
        </ParallaxSection>
      </section>

      {/* Noida Monuments */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <FadeInSection>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <motion.div
                className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6"
                whileHover={{ scale: 1.05 }}
              >
                Noida's Treasures
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Historical Sites of Noida
              </h2>
              <p className="text-xl text-gray-600">
                Discover the lesser-known but equally fascinating historical sites that make Noida a hidden gem for history enthusiasts.
              </p>
            </div>
          </FadeInSection>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            animate="visible"
          >
            {featuredNoidaMonuments.map((monument, index) => (
              <motion.div
                key={monument.id}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <FloatingCard hoverScale={1.03} hoverRotate={-1}>
                  <MonumentCard monument={monument} />
                </FloatingCard>
              </motion.div>
            ))}
          </motion.div>
          
          <FadeInSection delay={0.5}>
            <div className="text-center mt-12">
              <Link to="/noida">
                <Button variant="outline" size="lg">
                  View All Noida Monuments
                </Button>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Popular Tours with Enhanced Design */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-5"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E')",
            backgroundSize: "100px 100px"
          }}
        />
        
        <div className="container mx-auto px-4 md:px-8 relative">
          <FadeInSection>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <motion.div
                className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-6"
                whileHover={{ scale: 1.05 }}
              >
                Curated Experiences
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Popular Heritage Tours
              </h2>
              <p className="text-xl text-gray-600">
                Join our expert guides on carefully curated tours, designed to provide the most comprehensive and enjoyable historical experience.
              </p>
            </div>
          </FadeInSection>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            animate="visible"
          >
            {featuredTours.map((tour, index) => (
              <motion.div
                key={tour.id}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <FloatingCard hoverScale={1.03} hoverRotate={index % 2 === 0 ? 1 : -1}>
                  <TourCard tour={tour} />
                </FloatingCard>
              </motion.div>
            ))}
          </motion.div>
          
          <FadeInSection delay={0.5}>
            <div className="text-center mt-12">
              <Link to="/tours">
                <Button size="lg" className="group">
                  View All Tour Packages
                  <motion.span
                    className="ml-2 inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Button>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <FadeInSection>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <motion.div
                className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6"
                whileHover={{ scale: 1.05 }}
              >
                Guest Experiences
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                What Our Visitors Say
              </h2>
              <p className="text-xl text-gray-600">
                Don't just take our word for it. Here's what travelers from around the world have to say about their heritage journey with us.
              </p>
            </div>
          </FadeInSection>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3
                }
              }
            }}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <TestimonialCard 
                name="Harshita Pal"
                location="Mumbai, India"
                image="https://img.freepik.com/premium-vector/people-profile-icon_24877-40756.jpg?w=1380"
                text="The Delhi Heritage Tour was an eye-opening experience. Our guide was incredibly knowledgeable and made history come alive with fascinating stories and insights."
                rating={5}
              />
            </motion.div>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <TestimonialCard 
                name="Aman Kumar"
                location="London, UK"
                image="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1746458295~exp=1746461895~hmac=bf2d55aee85f3d04259f6728e08e26900d83f1cd89f4d7f0ab4f15b796fe4a6b&w=1380"
                text="I never knew Noida had such interesting historical sites! The tour was well-organized, and I especially loved the cultural experiences included alongside the monument visits."
                rating={4}
              />
            </motion.div>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <TestimonialCard 
                name="Divyanshi Gupta"
                location="Singapore"
                image="https://img.freepik.com/free-vector/woman-with-braided-hair-illustration_1308-174675.jpg?t=st=1746458482~exp=1746462082~hmac=0f4ff640a32c50116f2111d6b31fb32400695195fbd79d424abcc1fe08e3ce2e&w=900"
                text="As a history enthusiast, I was thoroughly impressed by the depth of information provided. The Golden Triangle tour was perfectly paced, allowing enough time to appreciate each monument."
                rating={5}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Newsletter */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
            backgroundSize: "60px 60px"
          }}
        />
        
        <div className="container mx-auto px-4 md:px-8 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeInSection direction="left">
                <div>
                  <motion.div 
                    className="flex items-center mb-6"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Mail size={32} className="mr-3" />
                    <h2 className="text-4xl md:text-5xl font-bold">Newsletter</h2>
                  </motion.div>
                  
                  <p className="text-xl text-white/90 mb-8">
                    Subscribe to our newsletter and receive:
                  </p>
                  
                  <motion.ul 
                    className="space-y-4 mb-10"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.2
                        }
                      }
                    }}
                    initial="hidden"
                    animate="visible"
                  >
                    {[
                      { icon: Bell, text: "Early access to special tour packages" },
                      { icon: Gift, text: "Exclusive discounts and promotions" },
                      { icon: Calendar, text: "Monthly heritage event calendar" },
                      { icon: Globe, text: "Travel tips and cultural insights" },
                      { icon: Award, text: "VIP member benefits and rewards" },
                      { icon: Heart, text: "Personalized tour recommendations" }
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-center"
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 }
                        }}
                        whileHover={{ x: 10, transition: { duration: 0.2 } }}
                      >
                        <item.icon size={20} className="mr-3 text-yellow-300" />
                        <span>{item.text}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </FadeInSection>
              
              <FadeInSection direction="right" delay={0.3}>
                <motion.div 
                  className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      toast.success('Thank you for subscribing! Check your email for confirmation.');
                    }} 
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <motion.input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all duration-300"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address</label>
                      <motion.input
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all duration-300"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-3">Interests</label>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          "Heritage Tours",
                          "Photography", 
                          "Cultural Events",
                          "Special Offers"
                        ].map((interest, index) => (
                          <motion.label 
                            key={index}
                            className="flex items-center space-x-2 cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <input 
                              type="checkbox" 
                              className="rounded border-white/30 bg-white/20 text-yellow-300 focus:ring-yellow-300" 
                            />
                            <span className="text-sm">{interest}</span>
                          </motion.label>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <motion.label 
                        className="flex items-center space-x-2 cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                      >
                        <input 
                          type="checkbox" 
                          required
                          className="rounded border-white/30 bg-white/20 text-yellow-300 focus:ring-yellow-300" 
                        />
                        <span className="text-sm">
                          I agree to receive promotional emails and can unsubscribe at any time
                        </span>
                      </motion.label>
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        type="submit"
                        className="w-full bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-semibold py-4 text-lg"
                      >
                        Subscribe Now
                      </Button>
                    </motion.div>
                  </form>
                </motion.div>
              </FadeInSection>
            </div>
            
            <FadeInSection delay={0.6}>
              <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm">
                <p className="text-white/70">
                  By subscribing, you agree to our Privacy Policy and Terms of Service. 
                  We respect your privacy and will never share your information.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  );
};

interface TestimonialCardProps {
  name: string;
  location: string;
  image: string;
  text: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, location, image, text, rating }) => {
  return (
    <motion.div 
      className="bg-gray-50 p-8 rounded-2xl shadow-lg h-full"
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-6">
        <motion.img 
          src={image} 
          alt={name} 
          className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-white shadow-md" 
          whileHover={{ scale: 1.1 }}
        />
        <div>
          <h4 className="font-semibold text-gray-900 text-lg">{name}</h4>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
      
      <p className="text-gray-600 italic mb-6 leading-relaxed">"{text}"</p>
      
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
          >
            <Star 
              size={20} 
              className={i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Home;