import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import Map from '../components/Map';
import { toast } from 'react-hot-toast';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    document.title = 'Contact Us - Heritage Journey';
  }, []);

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Invalid email address' : '';
      case 'phone':
        return !/^\+?[\d\s-]{10,}$/.test(value) ? 'Invalid phone number' : '';
      case 'subject':
        return !value ? 'Please select a subject' : '';
      case 'message':
        return value.length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Real-time validation
    setFormErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate all fields
    const errors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      subject: validateField('subject', formData.subject),
      message: validateField('message', formData.message)
    };

    setFormErrors(errors);

    // Check if there are any errors
    if (Object.values(errors).some(error => error)) {
      setIsSubmitting(false);
      toast.error('Please fix the errors in the form');
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success('Message sent successfully! We will get back to you soon.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const mapCenter: [number, number] = [28.4601, 77.4849];
  const mapMarkers = [
    {
      coordinates: [28.4601, 77.4849],
      title: "IILM College of Engineering"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gray-900">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.pexels.com/photos/4275885/pexels-photo-4275885.jpeg" 
            alt="Contact Us" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 md:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Have questions or need assistance? We're here to help you plan your perfect heritage journey.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ContactCard 
              icon={<MapPin size={24} className="text-red-600" />}
              title="Our Location"
              details={[
                "IILM College of Engineering",
                "Knowledge Park II",
                "Greater Noida, 201310",
                "India"
              ]}
            />
            <ContactCard 
              icon={<Phone size={24} className="text-red-600" />}
              title="Phone Numbers"
              details={[
                "+91 620181**** (Aman)",
                "+91 85409**** (Aryan)",
                "+91 8********* (Harshita)",
                "+91 9********* (Divyanshi)"
              ]}
            />
            <ContactCard 
              icon={<Mail size={24} className="text-red-600" />}
              title="Email Us"
              details={[
                "aman.cs27@iilm.edu",
                "aryan.singh.cs27@iilm.edu",
                "harshita.pal.cs27@iilm.edu",
                "divyanshi.gupta.cs27@iilm.edu"
              ]}
            />
            <ContactCard 
              icon={<Clock size={24} className="text-red-600" />}
              title="Working Hours"
              details={[
                "Monday - Friday: 9 AM - 6 PM",
                "Saturday: 10 AM - 4 PM",
                "Sunday: Closed"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Send Us a Message</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you have a question about our tours, need help with a booking, or want 
                to provide feedback, fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                        formErrors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-red-500'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                        formErrors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-red-500'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                        formErrors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-red-500'
                      }`}
                    />
                    {formErrors.phone && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.phone}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                        formErrors.subject ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-red-500'
                      }`}
                    >
                      <option value="">Select a topic</option>
                      <option value="Tour Inquiry">Tour Inquiry</option>
                      <option value="Booking Information">Booking Information</option>
                      <option value="Private Tour">Private Tour</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                    {formErrors.subject && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.subject}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                      formErrors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-red-500'
                    }`}
                  ></textarea>
                  {formErrors.message && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>
                  )}
                </div>
                
                <div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="flex items-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⌛</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
            
            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Find Us</h2>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-96 mb-6">
                <Map 
                  center={mapCenter}
                  zoom={15}
                  markers={mapMarkers}
                />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Directions</h3>
                <p className="text-gray-600 mb-4">
                  Our office is located in IILM College of Engineering, Knowledge Park II, Greater Noida.
                </p>
                <h4 className="font-medium text-gray-900 mb-1">Public Transport:</h4>
                <p className="text-gray-600 mb-2">
                  Nearest Metro Station: Knowledge Park II (Aqua Line)
                </p>
                <h4 className="font-medium text-gray-900 mb-1">Parking:</h4>
                <p className="text-gray-600">
                  Parking is available within the college premises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Meet Our Team</h2>
            <p className="text-gray-600">
              A group of passionate students working together to make heritage tourism accessible and engaging.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember 
              name="Aman Kumar"
              position="Team Lead"
              image="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
              email="aman.cs27@iilm.edu"
            />
            <TeamMember 
              name="Aryan Singh"
              position="Near By loaction finder"
              image="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-173524.jpg"
              email="aryan.singh.cs27@iilm.edu"
            />
            <TeamMember 
              name="Harshita Pal"
              position="Researcher"
              image="https://img.freepik.com/free-vector/woman-traditional-costume_1308-175787.jpg"
              email="harshita.pal.cs27@iilm.edu"
            />
            <TeamMember 
              name="Divyanshi Gupta"
              position="Assistant"
              image="https://img.freepik.com/free-vector/woman-floral-traditional-costume_1308-176159.jpg"
              email="divyanshi.gupta.cs27@iilm.edu"
            />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">The Story Behind the Project</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-600 mb-6">
                As a group of travel enthusiasts, we noticed that many students in college want to explore 
                new places but often don't know where to go, how to plan, or how to budget their trips. 
                After a lot of late-night hostel discussions, chai breaks, and weekend hangouts, we decided 
                to build a platform that could help students and young travelers explore destinations, plan 
                their journeys, and connect with like-minded explorers.
              </p>
              <p className="text-gray-600 mb-6">
                "WanderVista" was born out of our shared love for travel and our goal to simplify tourism 
                planning for students and budget-conscious travelers. It's more than a project—it's a 
                passion turned into a website.
              </p>
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Project Goals</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    Help users discover popular and offbeat travel destinations
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    Provide itineraries and budget-friendly travel tips
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    Allow users to submit their own travel stories
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    Integrate a basic booking or suggestion feature
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    Make it mobile-friendly and visually engaging
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Recognition & Impact</h2>
            <p className="text-gray-600">
              Our journey from a college project to a growing platform.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-gray-600 text-center">
              Started as a college project, currently under development with plans to add more features, 
              animations, and AR capabilities to enhance the user experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, details }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300">
      <div className="inline-flex items-center justify-center bg-white rounded-full p-3 shadow-sm mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-gray-900">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="text-gray-600">{detail}</li>
        ))}
      </ul>
    </div>
  );
};

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
  email: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, image, email }) => {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1 text-gray-900">{name}</h3>
        <p className="text-red-600 font-medium mb-2">{position}</p>
        <p className="text-gray-600 text-sm">{email}</p>
      </div>
    </div>
  );
};

export default Contact;