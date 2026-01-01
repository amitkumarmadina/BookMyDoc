import { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function HealthAssistantButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-white shadow-lg hover:bg-teal-700 transition"
      >
        <MessageCircle size={20} />
        <span className="hidden md:inline">Health Assistant</span>
      </button>

      {/* Chat Panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 rounded-xl bg-white shadow-2xl border">
          <div className="flex items-center justify-between p-4 border-b">
            <div>
              <h4 className="font-semibold text-gray-800">
                BookMyDoc Health Assistant
              </h4>
              <p className="text-xs text-gray-500">
                Ask about symptoms or doctors
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>

          <div className="p-4 h-64 text-sm text-gray-600">
            <p className="bg-gray-100 p-2 rounded-lg mb-2">
              👋 Hi! How can I help you today?
            </p>
          </div>

          <div className="border-t p-3">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
          </div>
        </div>
      )}
    </>
  );
}
