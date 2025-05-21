'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function MessageInput() {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!message.trim()) return;
    alert(`Sending message: ${message}`);
    setMessage('');
  };

  return (
    <motion.div 
      initial={{ y: 30, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.2 }}
      className="flex items-center border-t px-4 py-3 bg-white"
    >
      <input
        type="text"
        className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />
      <button
        className="ml-3 p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600"
        onClick={handleSend}
      >
        <Send size={18} />
      </button>
    </motion.div>
  );
}
