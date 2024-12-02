import React from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import SupportSection from './components/SupportSection';
import Footer from './components/Footer';
import MeetBuddies from './components/MeetBuddies';
import FAQSection from './components/FAQSection';
import TestimonialSection from './components/Testimonials';


function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Layout>
      <Hero />
      <Services />
      <HowItWorks />
      <Benefits />
      <MeetBuddies />
      <SupportSection />
      <FAQSection />
      <TestimonialSection/>
      </Layout>
    </div>
  );
}

export default App;