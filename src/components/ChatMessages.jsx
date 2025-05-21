'use client'
import { motion } from 'framer-motion';


const messages = [
  { id: 1, from: 'user', text: 'Hello! I need help with my order.' },
  { id: 2, from: 'agent', text: "Sure, I can help you. What's your order ID?" },
  { id: 3, from: 'user', text: '#12345' },
];

export default function ChatMessages() {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3 bg-[#f9fafb]">
      {messages.map((msg) => (
        <motion.div
          key={msg.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: msg.id * 0.1 }}
          className={`max-w-sm px-4 py-2 rounded-lg ${
            msg.from === 'user' ? 'bg-gray-200 self-start' : 'bg-blue-100 self-end ml-auto'
          }`}
        >
          {msg.text}
        </motion.div>
      ))}
    </div>
  );
}
