import { useState } from 'react';
import { Smartphone, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import Container from '../components/Container';

export default function AppDownloadSection() {
  const [phone, setPhone] = useState('');

  const handleSendSMS = () => {
    alert('SMS sent! Check your phone for the download link.');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-teal-600 to-blue-700 text-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl max-w-sm">
                <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-6 mb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Video Consultation</p>
                      <p className="text-xs text-gray-500">Available 24/7</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-teal-100 rounded-full"></div>
                        <div className="flex-1">
                          <div className="h-2 bg-gray-200 rounded w-3/4 mb-2"></div>
                          <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full"></div>
                        <div className="flex-1">
                          <div className="h-2 bg-gray-200 rounded w-2/3 mb-2"></div>
                          <div className="h-2 bg-gray-200 rounded w-1/3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-2">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Download the BookMyDoc app
            </h2>
            <p className="text-xl text-teal-50 mb-8">
              Access video consultation with top doctors. Available 24/7 from the comfort of your home.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <p className="text-sm font-medium mb-3">Get the link via SMS</p>
              <div className="flex gap-3">
                <div className="flex-1 bg-white rounded-lg overflow-hidden flex">
                  <span className="bg-gray-100 text-gray-700 px-4 py-3 font-medium">+91</span>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="flex-1 px-4 py-3 text-gray-900 outline-none"
                    maxLength={10}
                  />
                </div>
                <Button
                  onClick={handleSendSMS}
                  className="bg-green text-teal-600 hover:bg-gray-100"
                >
                  Send SMS
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors flex items-center gap-3"
              >
                <div className="text-2xl">▶</div>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="font-bold">Google Play</div>
                </div>
              </a>
              <a
                href="#"
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors flex items-center gap-3"
              >
                <div className="text-2xl"></div>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="font-bold">App Store</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
