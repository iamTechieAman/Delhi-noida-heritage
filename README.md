# हेरिटेज सफर (Heritage Safar) 🏛️

A comprehensive heritage tourism website showcasing the rich historical monuments and cultural sites of Delhi and Noida. This project was developed as a minor college project by students from IILM College of Engineering.

## 🌟 Features

### 🏛️ Monument Exploration
- **Delhi Monuments**: Explore iconic sites like Red Fort, Qutub Minar, Humayun's Tomb, and more
- **Noida Historical Sites**: Discover hidden gems and ancient sites in Noida and surrounding areas
- **Detailed Information**: Comprehensive details about each monument including history, architecture, visiting hours, and entry fees
- **Interactive Maps**: Integrated maps with monument locations and directions
- **Image Galleries**: High-quality images showcasing the beauty of each site

### 🎯 Tour Packages
- **Curated Tours**: Professionally designed tour packages for different interests and durations
- **Private Tours**: Customizable private tour experiences
- **Group Tours**: Affordable group tour options
- **Booking System**: Complete booking system with payment integration
- **Expert Guides**: Professional historian guides for authentic experiences

### 🎨 Modern UI/UX
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Beautiful animations using Framer Motion
- **Interactive Elements**: Engaging user interactions and micro-animations
- **Accessibility**: WCAG compliant design for inclusive user experience
- **Performance Optimized**: Fast loading times and optimized images

### 🔧 Technical Features
- **React 18**: Built with the latest React features and hooks
- **TypeScript**: Type-safe development for better code quality
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Framer Motion**: Advanced animations and transitions
- **Supabase Integration**: Backend services for authentication and data management
- **PWA Ready**: Progressive Web App capabilities
- **SEO Optimized**: Search engine optimization for better visibility

## 🚀 Live Demo

Visit the live website: [https://phenomenal-lebkuchen-24281c.netlify.app](https://phenomenal-lebkuchen-24281c.netlify.app)

## 👥 Team Members

This project was developed by students from IILM College of Engineering:

- **Aman Kumar** - Team Lead & Full Stack Developer
  - Email: aman.cs27@iilm.edu
  - Role: Project architecture, backend integration, deployment

- **Aryan Singh** - Location Services & Maps Integration
  - Email: aryan.singh.cs27@iilm.edu
  - Role: Maps integration, location services, nearby attractions

- **Harshita Pal** - Research & Content Management
  - Email: harshita.pal.cs27@iilm.edu
  - Role: Historical research, content creation, data collection

- **Divyanshi Gupta** - UI/UX Design & Frontend Development
  - Email: divyanshi.gupta.cs27@iilm.edu
  - Role: Design system, user interface, user experience

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript for better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icon library

### Backend & Services
- **Supabase** - Backend-as-a-Service for authentication and database
- **Netlify** - Hosting and deployment platform
- **OpenCage API** - Geocoding services for location data

### Development Tools
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing and optimization
- **Git** - Version control system

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Git

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/heritage-safar.git
   cd heritage-safar
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🏗️ Project Structure

```
heritage-safar/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # Basic UI components
│   │   ├── layout/        # Layout components
│   │   └── ...            # Feature-specific components
│   ├── pages/             # Page components
│   ├── data/              # Static data and content
│   ├── contexts/          # React contexts
│   ├── services/          # API services
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions
│   └── styles/            # Global styles
├── supabase/              # Supabase configuration
└── ...                    # Configuration files
```

## 🎯 Key Features Breakdown

### Monument Information System
- Comprehensive database of historical monuments
- Detailed descriptions, historical timelines, and architectural information
- High-quality image galleries with zoom functionality
- Interactive maps with precise locations
- Visitor information including timings, fees, and accessibility

### Tour Booking System
- Multiple tour packages with different themes and durations
- Real-time availability checking
- Secure payment processing
- Booking confirmation and management
- Customer support integration

### User Experience
- Intuitive navigation and search functionality
- Responsive design for all screen sizes
- Fast loading times with optimized images
- Accessibility features for inclusive design
- Multi-language support (English and Hindi)

### Content Management
- Rich historical content researched by our team
- Regular updates with new monuments and information
- User-generated content and reviews
- Social media integration for sharing experiences

## 🔮 Future Enhancements

### Planned Features
- **Augmented Reality (AR)**: AR experiences at monument locations
- **Virtual Tours**: 360° virtual tours of monuments
- **Mobile App**: Native mobile applications for iOS and Android
- **AI Guide**: AI-powered personal tour guide
- **Community Features**: User forums and travel communities
- **Gamification**: Achievement system and travel badges

### Technical Improvements
- **Performance**: Further optimization for faster loading
- **Offline Support**: Offline functionality for mobile users
- **Analytics**: Advanced analytics and user behavior tracking
- **Internationalization**: Support for more languages
- **API Development**: Public API for third-party integrations

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Ways to Contribute
1. **Bug Reports**: Report bugs and issues
2. **Feature Requests**: Suggest new features
3. **Code Contributions**: Submit pull requests
4. **Documentation**: Improve documentation
5. **Content**: Add information about new monuments

### Development Guidelines
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards
- Follow TypeScript best practices
- Use ESLint configuration provided
- Write meaningful commit messages
- Add comments for complex logic
- Ensure responsive design compatibility

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

### Special Thanks
- **IILM College of Engineering** for providing the platform and support
- **Faculty Mentors** for guidance and feedback
- **Archaeological Survey of India** for historical information
- **Open Source Community** for amazing tools and libraries

### Data Sources
- Historical information from verified archaeological sources
- Images from Pexels and other royalty-free sources
- Maps and location data from OpenStreetMap
- Cultural information from government tourism departments

## 📞 Contact & Support

### Project Team
- **Email**: er.amankumar@hotmail.com
- **College**: IILM College of Engineering, Greater Noida
- **Project Type**: Minor College Project (Computer Science)

---

**Made with ❤️ by IILM College of Engineering Students**

*This project represents our passion for preserving and promoting India's rich cultural heritage through modern technology.*
