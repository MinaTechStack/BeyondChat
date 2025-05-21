// ✅ Sidebar.jsx
'use client'
import { motion } from 'framer-motion';

export default function Sidebar() {
  return (
    <motion.aside 
      initial={{ x: -100, opacity: 0 }} 
      animate={{ x: 0, opacity: 1 }} 
      transition={{ duration: 0.3 }}
      className="w-16 md:w-20 bg-white border-r flex flex-col items-center py-4 space-y-6"
    >
      <div className="w-10 h-10 rounded-full bg-gray-300" />
      <div className="w-6 h-6 bg-gray-400 rounded" />
      <div className="w-6 h-6 bg-gray-400 rounded" />
      <div className="w-6 h-6 bg-gray-400 rounded" />
    </motion.aside>
  );
}
