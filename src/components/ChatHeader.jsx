'use client'
import { motion } from 'framer-motion';

export default function ChatHeader() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.2 }}
      className="flex items-center justify-between px-4 py-3 border-b bg-white"
    >
      <div>
        <h3 className="font-semibold text-lg">Alice</h3>
        <p className="text-sm text-gray-500">Online</p>
      </div>
      <div className="flex space-x-3">
        <button className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded">Note</button>
        <button className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded">Tag</button>
        <button className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded">Assign</button>
      </div>
    </motion.div>
  );
}