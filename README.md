# 🌟 Personal Portfolio - Professional Vue.js Profile Showcase

[![Vue.js](https://img.shields.io/badge/Vue.js-2.6.11-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Vuetify](https://img.shields.io/badge/Vuetify-2.2.11-1976D2?style=for-the-badge&logo=vuetify&logoColor=white)](https://vuetifyjs.com/)
[![PWA](https://img.shields.io/badge/PWA-Progressive%20Web%20App-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
[![Responsive](https://img.shields.io/badge/Design-Responsive-FF6B6B?style=for-the-badge&logo=responsive&logoColor=white)](https://vuetifyjs.com/)

A modern, responsive personal portfolio website built with Vue.js and Vuetify, showcasing professional experience, education, skills, projects, publications, and achievements. Designed specifically for **Rohit Khati** - Geomatics Engineer, Remote Sensing Researcher, and Full-Stack Developer specializing in spatial data analysis and machine learning.

---

## 🌟 Portfolio Highlights

### **👨‍💻 Professional Identity**
- **Geomatics Engineer**: Bachelor's in Geomatics Engineering from Tribhuvan University
- **Research Assistant**: GLODAL - Google Earth Engine & Deep Learning specialist
- **Full-Stack Developer**: Vue.js, Django, Node.js expertise
- **Remote Sensing Expert**: Satellite data processing and AI-driven land cover mapping

### **🎯 Key Achievements**
- **Research Publications**: ISPRS Archives publication on E-CAD land management system
- **Academic Excellence**: Entrance topper and second topper in Geomatics Engineering
- **International Experience**: Internship at Asian Institute of Technology, Bangkok
- **Award Recognition**: COVID-19 Mapathon first prize winner

### **🔬 Research Focus Areas**
- **Satellite Data Processing**: Landsat, Sentinel-2 automation using Google Earth Engine
- **Deep Learning**: U-Net, FPN architectures for land cover classification
- **Web GIS Development**: OGC standards, spatial databases, web mapping
- **Land Management Systems**: Cadastral mapping, digital transformation

---

## 🏗️ Technology Stack

### **Frontend Framework**
- **Vue.js 2.6.11**: Progressive JavaScript framework
- **Vuetify 2.2.11**: Material Design component library
- **Vue Router 3.2.0**: Client-side routing
- **Vuex 3.4.0**: State management

### **UI/UX Design**
- **Material Design**: Modern, responsive interface
- **Progressive Web App**: PWA capabilities with service worker
- **Mobile-First**: Responsive design for all devices
- **Dark/Light Themes**: Customizable Vuetify themes

### **Development Tools**
- **Vue CLI**: Modern build toolchain
- **Babel**: JavaScript transpilation
- **ESLint**: Code quality and style
- **Sass/SCSS**: Advanced CSS preprocessing

---

## 📱 Portfolio Sections

### **🏠 Home Timeline**
Interactive career timeline showcasing:
- **Education Milestones**: From school to bachelor's degree
- **Professional Journey**: Research positions and internships
- **Academic Achievements**: Awards, certifications, publications
- **Project Highlights**: Major developments and contributions

### **👤 About Section**
Personal introduction featuring:
- **Professional Identity**: Engineer, Researcher, Student, Sportsman, Gamer
- **Core Expertise**: Data analysis, spatial background, programming, AI
- **Contact Information**: Location, phone, email with social links
- **Professional Title**: Research Assistant at GLODAL

### **🎓 Education Background**
Comprehensive academic history:
- **Bachelor's Degree**: Geomatics Engineering (80.04% - Distinction)
- **Higher Secondary**: Nepal Mega College (81.40% - Distinction)
- **Primary Education**: Nightingale International (83.88% - Distinction)
- **Academic Timeline**: Both A.D. and B.S. calendar systems

### **💼 Professional Experience**
Career progression details:
- **GLODAL Research Assistant** (October 2020 - Ongoing)
  - Landsat data automation using Google Earth Engine Python API
  - JavaScript to Python code conversion for land cover mapping
  - Deep learning model development for satellite analysis
- **AIT Internship** (October 2019 - January 2020)
  - GNSS training completion
  - Data mining and web scraping
  - Drone applications in agriculture

### **🛠️ Skills Assessment**
Interactive skill visualization:
- **Spatial Technologies**: ArcMap (75%), QGIS (80%), Google Earth Engine (60%)
- **Programming Languages**: Vue.js (80%), Python (54%), JavaScript (52%)
- **Basic Tools**: GitHub (90%), MS Office (80%), SQL (60%)
- **Specialized Skills**: Survey (80%), Deep Learning (55%), Django (53%)

### **🚀 Projects Showcase**
Featured project portfolio:
- **E-CAD Land Management System**: Web-based information service for land authorities
- **Parcel Identifier Mobile App**: Android application for ground parcel identification
- **COVID-19 Nepal App**: Real-time pandemic statistics visualization
- **UNEP Plastic Project**: Environmental monitoring initiative
- **Playlist App**: Full-stack music streaming application

### **🏆 Awards & Recognition**
Achievement highlights:
- **Government Scholarship**: Full funding for Geomatics Engineering degree
- **Academic Excellence**: Entrance topper and program second topper
- **COVID-19 Mapathon**: First prize in GESAN competition
- **Research Publication**: ISPRS Archives paper acceptance

### **📄 Publications**
Academic contributions:
- **"E-CAD: Web-based Information Service for Land Management"**
  - Published in ISPRS Archives (International Society for Photogrammetry & Remote Sensing)
  - DOI: [10.5194/isprs-archives-XLII-5-W3-65-2019](https://doi.org/10.5194/isprs-archives-XLII-5-W3-65-2019)
  - Focus: Digital transformation of Nepal's land management system

---

## 📱 Application Structure

```
my_portfolio/
├── public/                 # Static assets
│   ├── index.html         # Main HTML template
│   ├── favicon.ico        # Application icon
│   └── manifest.json      # PWA manifest
├── src/
│   ├── components/        # Vue components
│   │   ├── About.vue      # Personal introduction
│   │   ├── Education.vue  # Academic background
│   │   ├── Experience.vue # Professional experience
│   │   ├── Project.vue    # Project showcase
│   │   ├── Publications.vue # Research publications
│   │   ├── Awards.vue     # Achievements
│   │   ├── Panel.vue      # Reusable panel component
│   │   ├── Navbar/        # Navigation components
│   │   │   ├── Navbar.vue # Desktop navigation
│   │   │   └── Mobile.vue # Mobile navigation
│   │   └── Skills/        # Skill assessment
│   │       ├── Skills.vue     # Main skills component
│   │       ├── Spatial.vue    # GIS/Remote sensing skills
│   │       ├── Programming.vue # Coding skills
│   │       └── Basic.vue      # General skills
│   ├── views/             # Page components
│   │   └── Home.vue       # Timeline homepage
│   ├── assets/            # Images and media
│   │   ├── rohit.jpg      # Profile photo
│   │   └── navbg.jpg      # Navigation background
│   ├── router/            # Vue Router configuration
│   ├── store/             # Vuex state management
│   ├── plugins/           # Vue plugins
│   │   └── vuetify.js     # Vuetify configuration
│   ├── registerServiceWorker.js # PWA service worker
│   └── main.js           # Application entry point
├── server.js              # Express server for production
├── package.json           # Dependencies and scripts
└── vue.config.js         # Build configuration
```

---

## 🚀 Installation & Setup

### **Prerequisites**
- Node.js (v12.0.0 or higher)
- npm (v6.0.0 or higher)
- Git

### **Development Setup**
```bash
# Clone the repository
git clone <repository-url>
cd my_portfolio

# Install dependencies
npm install

# Start development server
npm run serve

# Access application at http://localhost:8080
```

### **Production Build**
```bash
# Build for production
npm run build

# Start production server
npm start

# Production server runs on port specified in server.js
```

### **Code Quality**
```bash
# Lint and fix code
npm run lint

# Check code formatting
npm run lint -- --no-fix
```

---

## 🎨 Design Features

### **Material Design Implementation**
- **Consistent Typography**: Vuetify's Material Design typography scale
- **Color Palette**: Teal accent theme with professional color scheme
- **Elevation System**: Consistent shadow and depth hierarchy
- **Responsive Grid**: Flexible layout system for all screen sizes

### **Interactive Elements**
- **Timeline Navigation**: Animated career progression timeline
- **Skill Visualizations**: Circular progress indicators for skill levels
- **Expandable Panels**: Organized content in collapsible sections
- **Hover Effects**: Enhanced user interaction feedback

### **Progressive Web App Features**
- **Service Worker**: Offline capability and caching
- **Responsive Design**: Mobile-first approach
- **Performance Optimization**: Lazy loading and code splitting
- **Web App Manifest**: Installable on mobile devices

---

## 🔧 Configuration

### **Vuetify Theme Configuration**
```javascript
// src/plugins/vuetify.js
export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#009688',    // Teal
        secondary: '#00BCD4',  // Cyan
        accent: '#4CAF50',     // Green
        error: '#F44336',      // Red
      }
    }
  }
})
```

### **Router Configuration**
```javascript
// src/router/index.js
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/education', name: 'Education', component: Education },
  { path: '/experience', name: 'Experience', component: Experience },
  { path: '/skills', name: 'Skills', component: Skills },
  { path: '/project', name: 'Project', component: Project },
  { path: '/awards', name: 'Awards', component: Awards },
  { path: '/publications', name: 'Publications', component: Publications }
]
```

---

## 📊 Professional Metrics

### **Technical Skills Distribution**
- **Spatial Technologies**: 65% average proficiency
- **Programming Languages**: 67% average proficiency  
- **Development Tools**: 70% average proficiency
- **Research Methods**: 75% average proficiency

### **Project Categories**
- **Web Applications**: 40% of portfolio projects
- **Mobile Applications**: 20% of portfolio projects
- **Research Publications**: 20% of portfolio projects
- **Data Analysis**: 20% of portfolio projects

### **Career Timeline Highlights**
- **2015-2019**: Bachelor's in Geomatics Engineering
- **2019-2020**: International internship experience
- **2020-Present**: Professional research position
- **2019-Present**: Multiple publication and project contributions

---

## 🌐 Social Media Integration

### **Professional Networks**
- **LinkedIn**: [linkedin.com/in/rhtkht](https://www.linkedin.com/in/rhtkht/)
- **GitHub**: [github.com/ro-hit81](https://github.com/ro-hit81)
- **Twitter**: [twitter.com/rohitkhati713](https://twitter.com/rohitkhati713)

### **Contact Information**
- **Email**: [rhtkhati@gmail.com](mailto:rhtkhati@gmail.com)
- **Location**: Dhangadhi, Nepal
- **Phone**: +977-9849218181

---

## 🔮 Future Enhancements

- **Blog Integration**: Technical articles and research insights
- **Project Gallery**: Enhanced visual project showcases
- **Interactive Maps**: GIS project demonstrations
- **Video Testimonials**: Professional recommendations
- **Multi-language Support**: Nepali language localization
- **Analytics Dashboard**: Portfolio performance metrics

---

## 🚀 Performance Optimizations

- **Lazy Loading**: Route-based code splitting
- **Image Optimization**: Responsive image loading
- **Bundle Analysis**: Optimized webpack builds
- **Service Worker**: Intelligent caching strategies
- **CDN Integration**: Fast asset delivery

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 Developer

**Rohit Khati**
- **Position**: Research Assistant at GLODAL
- **Specialization**: Geomatics Engineering, Remote Sensing, Full-Stack Development
- **Research Focus**: Satellite data processing, machine learning, web GIS development
- **Academic Background**: Bachelor's in Geomatics Engineering (Distinction)

---

*Showcasing expertise in geospatial technology, remote sensing research, and modern web development* 🌍
