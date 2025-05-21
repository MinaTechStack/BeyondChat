'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Copilot() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = () => {
    if (!input.trim()) return;

    setLoading(true);
    setResponse(null);

    // Simulated AI delay
    setTimeout(() => {
      setResponse(`AI Copilot response to: "${input}"`);
      setLoading(false);
    }, 1000);

    setInput('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
      className="hidden lg:flex flex-col w-80 border-l bg-white"
    >
      <div className="flex items-center justify-between border-b px-4 py-3 text-sm font-medium">
        <div className="flex space-x-4">
          <button className="text-blue-600 border-b-2 border-blue-600 pb-1">
            AI Copilot
          </button>
          <button className="text-gray-500 hover:text-black transition">
            Details
          </button>
        </div>
        <button className="text-gray-400 hover:text-gray-700">⋮</button>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center text-center px-4">
        <Sparkles className="mb-2 text-purple-500" size={32} />
        <h2 className="text-sm font-semibold">Hi, I'm Fin AI Copilot</h2>
        <p className="text-sm text-gray-500 mt-1">
          Ask me anything about this conversation.
        </p>

        {loading ? (
          <p className="mt-4 text-sm text-gray-600 italic">Thinking...</p>
        ) : response ? (
          <div className="mt-4 text-sm text-gray-800 bg-gray-100 p-3 rounded w-full">
            {response}
          </div>
        ) : null}
      </div>

      <div className="border-t p-3">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            className="flex-1 border rounded px-3 py-2 text-sm"
            placeholder="Ask a question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
          />
          <button
            className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700"
            onClick={handleAsk}
          >
            Send
          </button>
        </div>
      </div>
    </motion.div>
  );
}
