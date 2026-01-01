import { Video, MapPin, TestTube, Scissors } from 'lucide-react';
import Card from '../components/Card';
import Container from '../components/Container';
//import video from '../assets/video.jpeg';
const services = [
  {
    icon: Video,
    title: 'Instant Video Consultation',
    subtitle: 'Connect within 60 seconds',
    gradient: 'from-blue-50 to-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: MapPin,
    title: 'Find Doctors Near You',
    subtitle: 'Confirmed appointments',
    gradient: 'from-teal-50 to-teal-100',
    iconColor: 'text-teal-600',
  },
  {
    icon: TestTube,
    title: 'Lab Tests',
    subtitle: 'Safe and trusted lab tests',
    gradient: 'from-cyan-50 to-cyan-100',
    iconColor: 'text-cyan-600',
  },
  {
    icon: Scissors,
    title: 'Surgeries',
    subtitle: 'Safe and trusted surgery centers',
    gradient: 'from-blue-50 to-blue-100',
    iconColor: 'text-blue-700',
  },
];

export default function HeroSection() {
  return (
    <section className="py-12 bg-gradient-to-b from-teal-50/30 to-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} hover className="p-6">
              <div className={`bg-gradient-to-br ${service.gradient} rounded-xl p-8 mb-4`}>
                <service.icon className={`w-16 h-16 ${service.iconColor}`} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.subtitle}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
