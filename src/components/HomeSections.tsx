/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Timer, Plus, ShoppingCart, Star } from 'lucide-react';
import { DEALS, MENU_ITEMS } from '../constants';

export function DealsStrip() {
  return (
    <section className="py-12 bg-bk-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="text-3xl font-black uppercase italic text-bk-brown">Deals too good to ignore</h2>
      </div>
      
      <div className="flex overflow-x-auto gap-6 px-4 sm:px-6 lg:px-8 no-scrollbar pb-6">
        {DEALS.map((deal, idx) => (
          <motion.div 
            key={deal.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-80 bg-white rounded-3xl overflow-hidden shadow-xl border border-bk-brown/5"
          >
            <div className="h-40 relative">
              <img src={deal.image} alt={deal.title} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-bk-yellow px-3 py-1 rounded-full flex items-center gap-1">
                <Timer size={14} className="text-bk-brown" />
                <span className="text-[10px] font-bold uppercase text-bk-brown">{deal.expiry}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-black uppercase italic mb-2 text-bk-brown">{deal.title}</h3>
              <p className="text-sm text-bk-brown/70 mb-6">{deal.description}</p>
              <button className="w-full py-3 border-2 border-bk-red text-bk-red font-black uppercase italic rounded-full hover:bg-bk-red hover:text-white transition-all">
                Claim Offer
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function BestSellers() {
  const bestSellers = MENU_ITEMS.filter(item => item.isBestSeller);
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-bk-red font-black uppercase tracking-widest text-sm">Most Wanted</span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase italic text-bk-brown mt-2">Crave It? Get It Now.</h2>
          </div>
          <button className="hidden sm:block text-bk-brown font-bold border-b-2 border-bk-yellow hover:text-bk-orange transition-colors">
            SEE FULL MENU
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestSellers.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-bk-beige/50 rounded-[40px] p-8 relative overflow-hidden"
            >
              <div className="mb-8 overflow-hidden rounded-2xl aspect-square">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-black uppercase italic text-bk-brown mb-1">{item.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-bk-brown/60 text-sm font-bold">{item.calories} Cal</span>
                    <span className="w-1 h-1 bg-bk-brown/20 rounded-full" />
                    <div className="flex items-center text-bk-yellow">
                      <Star size={14} fill="currentColor" />
                      <span className="text-bk-brown/80 text-xs font-bold ml-1">Top Rated</span>
                    </div>
                  </div>
                </div>
                <span className="text-xl font-black text-bk-red">${item.price}</span>
              </div>
              
              <div className="flex gap-3">
                <button className="flex-1 bg-bk-brown text-white py-4 rounded-2xl font-bold uppercase tracking-wide hover:bg-bk-brown/90 transition-colors flex items-center justify-center gap-2">
                  <Plus size={20} /> Add
                </button>
                <button className="w-16 flex items-center justify-center bg-white border-2 border-bk-brown/10 rounded-2xl text-bk-brown hover:bg-bk-brown/5 transition-colors">
                  <ShoppingCart size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MealBuilder() {
  return (
    <section className="py-20 bg-bk-brown text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl sm:text-6xl font-black uppercase italic leading-[0.9] mb-8">
              Build Your <br />
              <span className="text-bk-yellow underline decoration-bk-red decoration-8 underline-offset-[10px]">Kingdom.</span>
            </h2>
            <p className="text-xl mb-12 text-bk-beige/70 font-medium leading-relaxed max-w-lg">
              Customize every detail. Add extra bacon, swap the sauce, or make it a meal. Your burger, your way.
            </p>
            
            <div className="space-y-6">
              <Step number="01" label="Choose your base" active />
              <Step number="02" label="Load on toppings" />
              <Step number="03" label="Pick your perks" />
            </div>

            <button className="mt-12 px-10 py-5 bg-bk-orange text-white font-black uppercase italic rounded-full text-xl shadow-2xl hover:scale-105 active:scale-95 transition-transform">
              Start Customizing
            </button>
          </div>

          <div className="relative">
            <div className="absolute -inset-20 bg-bk-red/20 blur-[100px] rounded-full z-0" />
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=1000" 
                alt="Burger layers" 
                className="w-full max-w-md mx-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({ number, label, active = false }: { number: string; label: string; active?: boolean }) {
  return (
    <div className={`flex items-center gap-4 group cursor-pointer ${active ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}>
      <span className={`text-4xl font-black italic ${active ? 'text-bk-yellow' : 'text-white'}`}>{number}</span>
      <span className="text-xl font-bold uppercase tracking-wide">{label}</span>
      <div className={`h-[2px] flex-1 ${active ? 'bg-bk-yellow' : 'bg-white/20'}`} />
    </div>
  );
}
