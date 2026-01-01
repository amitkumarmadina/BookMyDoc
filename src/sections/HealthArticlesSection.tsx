import { BookOpen } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import Container from '../components/Container';
import Covid from '../assets/Covid.jpg';
import Vitamins from '../assets/Vitamins.jpg';

const articles = [
  {
    title: 'Coronavirus: Myths vs Facts',
    category: 'COVID-19',
    author: 'Dr. Krishna Gopal',
    image: Covid,
    excerpt: 'Understanding the truth behind common coronavirus misconceptions',
  },
  {
    title: 'Vitamins and Immunity: What You Need to Know',
    category: 'Nutrition',
    author: 'Dr. Amit Madina',
    image: Vitamins,
    excerpt: 'Boost your immune system with the right vitamins and minerals',
  },
];

export default function HealthArticlesSection() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-teal-600" />
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Read top articles from health experts
              </h2>
            </div>
            <p className="text-gray-600 text-lg mb-8">
              Health articles that keep you informed about good health practices and achieve your goals.
            </p>
            <Button variant="outline">See all articles</Button>
          </div>

          <div className="space-y-6">
            {articles.map((article, index) => (
              <Card key={index} hover className="overflow-hidden">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-40 h-40 sm:h-auto overflow-hidden flex-shrink-0">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <div className="inline-block bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {article.category}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{article.excerpt}</p>
                    <p className="text-sm text-gray-500">By {article.author}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
