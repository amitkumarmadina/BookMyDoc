import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Container from '../components/Container';

const testimonials = [
  {
    text: 'Very helpful. Far easier than doing the same things on computer. The app is well designed and makes it seamless to book appointments and consult with doctors.',
    author: 'Priya Sharma',
    location: 'Mumbai',
  },
  {
    text: 'BookMyDoc has been a lifesaver! I was able to get a consultation within minutes, and the doctor was very professional and helpful. Highly recommend!',
    author: 'Rahul Verma',
    location: 'Delhi',
  },
  {
    text: 'The online consultation feature is amazing. I could talk to a specialist from the comfort of my home. The platform is user-friendly and efficient.',
    author: 'Anjali Patel',
    location: 'Bangalore',
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-teal-50/30 to-white">
      <Container>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
          What our users have to say
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 relative">
            <Quote className="w-16 h-16 text-teal-200 mb-6" />

            <div className="min-h-[180px] flex items-center">
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8">
                "{testimonials[currentIndex].text}"
              </p>
            </div>

            <div className="text-center">
              <p className="font-bold text-lg text-gray-900">{testimonials[currentIndex].author}</p>
              <p className="text-gray-600">{testimonials[currentIndex].location}</p>
            </div>

            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                onClick={prev}
                className="bg-gray-100 hover:bg-gray-200 rounded-full p-3 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex ? 'bg-teal-600 w-8' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="bg-gray-100 hover:bg-gray-200 rounded-full p-3 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
