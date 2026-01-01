import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Card from '../components/Card';
import Container from '../components/Container';
import Physiotherapist from '../assets/Physiotherapist.jpg';
import Dentist from '../assets/Dentist.jpg';
import Dietition from '../assets/Dietition.jpg';
import Gynecologist from '../assets/Gynecologist.jpeg';
import GeneralPhysicisn from '../assets/GeneralPhysician.jpeg';
import Orthopedist from '../assets/Orthopodist.jpeg';

const specialties = [
  {
    title: 'Dentist',
    description: 'Teething troubles? Schedule a dental checkup',
    image: Dentist,
  },
  {
    title: 'Gynecologist / Obstetrician',
    description: 'Expert care for women\'s health and wellness',
    image: Gynecologist,
  },
  {
    title: 'Dietitian / Nutrition',
    description: 'Eating right, weight management and nutrition plans',
    image: Dietition,
  },
  {
    title: 'Physiotherapist',
    description: 'Muscle pain, injury treatment and rehabilitation',
    image: Physiotherapist,
  },
  {
    title: 'General Physician',
    description: 'Comprehensive care for all health concerns',
    image: GeneralPhysicisn,
  },
  {
    title: 'Orthopedist',
    description: 'Expert care for bone and joint problems',
    image: Orthopedist,
  },
];

export default function InClinicSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <div className="mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Book an appointment for an in-clinic consultation
          </h2>
          <p className="text-gray-600 text-lg">
            Find experienced doctors across all specialties
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {specialties.map((specialty, index) => (
              <Card key={index} hover className="flex-shrink-0 w-80 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={specialty.image}
                    alt={specialty.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{specialty.title}</h3>
                  <p className="text-gray-600 mb-4">{specialty.description}</p>
                  <button className="text-teal-600 font-medium hover:text-teal-700 transition-colors">
                    Book Appointment →
                  </button>
                </div>
              </Card>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </Container>
    </section>
  );
}
