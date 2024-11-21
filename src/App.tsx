import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Works from './components/Works';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-200 to-emerald-400">
      <Header />
      <main className="container mx-auto px-4">
        <Hero />
        <Works />
        <Skills />
        <Contact />
      </main>
      <footer className="py-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2"
        >
          <Gamepad2 className="h-6 w-6" />
        </motion.div>
      </footer>
    </div>
  );
}

export default App;