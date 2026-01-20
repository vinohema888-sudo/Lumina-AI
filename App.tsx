
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import InteractiveDemo from './components/InteractiveDemo';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <section className="py-20 bg-white">
          <div className="max-container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Experience the Future</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Ask Lumina any question right now. Experience how our AI simplifies complex topics and guides you to the answer.
              </p>
            </div>
            <InteractiveDemo />
          </div>
        </section>
        <Testimonials />
        <section className="py-20 bg-indigo-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Master Any Subject?</h2>
            <p className="text-xl opacity-90 mb-10">
              Join over 50,000 students who are accelerating their learning with Lumina.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-indigo-600 font-bold px-8 py-4 rounded-full text-lg hover:bg-slate-100 transition shadow-xl">
                Get Started for Free
              </button>
              <button className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-white/10 transition">
                View Pricing
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
