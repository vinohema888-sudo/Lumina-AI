
import React from 'react';

const testimonials = [
  {
    content: "Lumina helped me go from a D to an A in my Physics class. The way it breaks down complex formulas into simple stories is just incredible.",
    author: "Sarah Jenkins",
    role: "High School Junior",
    avatar: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    content: "As a medical student, I have thousands of pages to memorize. Lumina's active recall drills and personalized summaries save me hours every week.",
    author: "David Chen",
    role: "Med Student",
    avatar: "https://picsum.photos/seed/david/100/100"
  },
  {
    content: "The best part about Lumina is that it doesn't just give you the answer. It asks questions that guide you to think for yourself. It's a real teacher.",
    author: "Maria Garcia",
    role: "Self-taught Developer",
    avatar: "https://picsum.photos/seed/maria/100/100"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Loved by Students Worldwide</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[1, 2, 3, 4, 5].map(star => (
                    <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 italic mb-8 leading-relaxed">
                  "{t.content}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-slate-900">{t.author}</h4>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
