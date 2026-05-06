/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, Flame } from 'lucide-react';

export default function HomeHero() {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden bg-bk-brown">
      {/* Background Image / Pattern */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=100&w=1920" 
          alt="Flame Grilled Burger"
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bk-brown via-bk-brown/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 bg-bk-orange rounded-lg">
              <Flame className="text-white" size={20} />
            </div>
            <span className="text-bk-yellow font-black uppercase tracking-[0.2em] text-sm">
              Flame-Grilled Since 1954
            </span>
          </div>
          
          <h1 className="text-6xl sm:text-8xl font-black text-white leading-[0.9] uppercase tracking-tighter mb-6 italic">
            Flame-Grilled <br />
            <span className="text-bk-orange">Perfection.</span>
          </h1>
          
          <p className="text-xl text-bk-beige/80 mb-8 max-w-lg font-medium leading-relaxed">
            Real fire. Real flavor. Get the legendary taste delivered to your door or pick up at your nearest location.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-bk-red text-white text-xl font-black uppercase italic rounded-full flex items-center justify-center gap-2 hover:bg-bk-red/90 transition-all transform hover:scale-105 active:scale-95 shadow-xl">
              Order Now <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 bg-bk-yellow text-bk-brown text-xl font-black uppercase italic rounded-full flex items-center justify-center gap-2 hover:bg-bk-yellow/90 transition-all transform hover:scale-105 active:scale-95 shadow-xl">
              View Deals
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Badge */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-10 hidden lg:flex w-32 h-32 rounded-full border-4 border-dashed border-bk-yellow/30 items-center justify-center"
      >
        <div className="text-bk-yellow font-black text-center text-xs uppercase leading-none">
          Freshly <br /> Made <br /> Daily
        </div>
      </motion.div>
    </section>
  );
}
