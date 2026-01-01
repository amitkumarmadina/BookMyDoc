import { Calendar, Sparkles, Heart, Thermometer, Baby, Brain } from 'lucide-react';
import Button from '../components/Button';
import Container from '../components/Container';

const specialties = [
  {
    icon: Calendar,
    title: 'Period doubts or Pregnancy',
    bgColor: 'bg-pink-100',
    iconColor: 'text-pink-600',
  },
  {
    icon: Sparkles,
    title: 'Acne, pimple or skin issues',
    bgColor: 'bg-amber-100',
    iconColor: 'text-amber-600',
  },
  {
    icon: Heart,
    title: 'Performance issues in bed',
    bgColor: 'bg-red-100',
    iconColor: 'text-red-600',
  },
  {
    icon: Thermometer,
    title: 'Cold, cough or fever',
    bgColor: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    icon: Baby,
    title: 'Child not feeling well',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: Brain,
    title: 'Depression or anxiety',
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
];

export default function OnlineConsultationSection() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-4">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Consult top doctors online for any health concern
            </h2>
            <p className="text-gray-600 text-lg">
              Private online consultations with verified doctors in all specialties
            </p>
          </div>
          <Button variant="outline" className="whitespace-nowrap">
            View All Specialties
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="group cursor-pointer bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-teal-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`${specialty.bgColor} rounded-full p-4 group-hover:scale-110 transition-transform duration-300`}>
                  <specialty.icon className={`w-8 h-8 ${specialty.iconColor}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{specialty.title}</h3>
                  <button className="text-teal-600 font-medium hover:text-teal-700 transition-colors">
                    Consult Now →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
