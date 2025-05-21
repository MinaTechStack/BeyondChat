'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';

const mockConversations = [
  { id: 1, name: 'Alice', message: 'Hey, I need help!', time: '2m ago' },
  { id: 2, name: 'Bob', message: 'Thanks for the support.', time: '10m ago' },
  { id: 3, name: 'Charlie', message: 'What are your pricing plans?', time: '30m ago' },
];

export default function ConversationList() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <aside className="hidden md:flex flex-col w-64 bg-gray-100 border-r overflow-y-auto">
      <h2 className="p-4 font-semibold text-lg border-b">Inbox</h2>
      {mockConversations.map((c) => (
        <motion.div
          key={c.id}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`cursor-pointer px-4 py-3 border-b hover:bg-white transition-all duration-200 ${
            selectedId === c.id ? 'bg-white shadow-inner' : ''
          }`}
          onClick={() => setSelectedId(c.id)}
        >
          <div className="font-medium">{c.name}</div>
          <div className="text-sm text-gray-500 truncate">{c.message}</div>
          <div className="text-xs text-gray-400 mt-1">{c.time}</div>
        </motion.div>
      ))}
    </aside>
  );
}