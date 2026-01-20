
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-indigo-100 rounded-full blur-[100px] -z-10 opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-blue-100 rounded-full blur-[100px] -z-10 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full font-semibold text-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
              Next-Gen Learning Experience
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
              Learn Anything <br />
              <span className="text-indigo-600">Twice as Fast</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
              Lumina is your 24/7 personal tutor. Powered by advanced AI, it understands your learning style and adapts lessons to help you master any subject with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-indigo-700 transition shadow-xl shadow-indigo-200">
                Start Learning Now
              </button>
              <button className="flex items-center justify-center gap-2 bg-white text-slate-700 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition border border-slate-200">
                <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch Demo
              </button>
            </div>
            <div className="mt-10 flex items-center gap-4 text-slate-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <img 
                    key={i} 
                    src={`https://picsum.photos/seed/${i + 100}/100/100`} 
                    className="w-10 h-10 rounded-full border-2 border-white object-cover" 
                    alt="Student"
                  />
                ))}
              </div>
              <p className="text-sm">Join <strong>50,000+</strong> students globally</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl animate-float">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
                alt="Students studying" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              
              {/* Floating UI Elements */}
              <div className="absolute top-10 right-10 glass-effect p-4 rounded-2xl shadow-lg border border-white/30 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Concept Mastered</p>
                    <p className="text-sm font-bold text-slate-800">Quantum Physics</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-10 left-10 glass-effect p-4 rounded-2xl shadow-lg border border-white/30 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold">
                    AI
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Personal Assistant</p>
                    <p className="text-sm font-bold text-slate-800">Ready to help 24/7</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative background shape */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-600 rounded-full -z-0 opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
