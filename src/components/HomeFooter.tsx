/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Smartphone, Download, MapPin, Search, Navigation } from 'lucide-react';

export function AppPromo() {
  return (
    <section className="py-24 bg-bk-red text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-bk-orange skew-x-[-15deg] translate-x-1/2 z-0 opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
              <Smartphone size={18} />
              <span className="text-xs font-black uppercase tracking-wider">Exclusive app offers</span>
            </div>
            <h2 className="text-5xl sm:text-7xl font-black uppercase italic leading-none mb-8 tracking-tighter">
              Eat <span className="text-bk-yellow">Free-ish</span> <br />
              with the app.
            </h2>
            <p className="text-xl font-medium mb-10 text-white/90 leading-relaxed max-w-lg">
              Download the Burger King app and start earning Royal Perks with every bite. First order? That's on us (almost).
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-3 px-8 py-4 bg-black rounded-2xl hover:scale-105 transition-transform border border-white/10">
                <div className="text-left leading-none uppercase">
                  <span className="text-[10px] block opacity-60 mb-1">Download on</span>
                  <span className="text-lg font-black">App Store</span>
                </div>
              </button>
              <button className="flex items-center gap-3 px-8 py-4 bg-black rounded-2xl hover:scale-105 transition-transform border border-white/10">
                <div className="text-left leading-none uppercase">
                  <span className="text-[10px] block opacity-60 mb-1">Get it on</span>
                  <span className="text-lg font-black">Google Play</span>
                </div>
              </button>
            </div>
          </motion.div>

          <div className="relative">
            <motion.div 
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative z-10 drop-shadow-[0_50px_50px_rgba(0,0,0,0.4)]"
            >
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400" 
                alt="BK App screen" 
                className="w-full max-w-[300px] mx-auto rounded-[3rem] border-[12px] border-bk-brown"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StoreLocator() {
  return (
    <section className="py-20 bg-bk-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[50px] p-8 sm:p-16 shadow-2xl flex flex-col lg:flex-row gap-12 items-center overflow-hidden relative">
          <div className="absolute top-0 left-0 w-2 h-full bg-bk-yellow" />
          
          <div className="flex-1 w-full">
            <h2 className="text-4xl font-black uppercase italic text-bk-brown mb-4">Find a BK Near You</h2>
            <p className="text-bk-brown/70 font-medium mb-10">We'll find the closest flame-grilled goodness for you.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-bk-brown/40" size={20} />
                <input 
                  type="text" 
                  placeholder="Enter city or zip code" 
                  className="w-full pl-12 pr-4 py-5 bg-bk-beige/50 rounded-2xl border-2 border-transparent focus:border-bk-orange outline-none font-bold text-bk-brown transition-all"
                />
              </div>
              <button className="px-8 py-5 bg-bk-brown text-white rounded-2xl font-black uppercase italic hover:bg-bk-brown/90 transition-all flex items-center justify-center gap-2">
                Search
              </button>
            </div>
            
            <button className="mt-8 flex items-center gap-2 text-bk-red font-black uppercase italic hover:text-bk-orange transition-colors">
              <Navigation size={18} /> Use My Current Location
            </button>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="bg-bk-beige rounded-3xl p-6 border-2 border-bk-brown/5">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-bk-red rounded-full flex items-center justify-center">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-black uppercase italic text-bk-brown">Nearest Store</h4>
                  <p className="text-sm font-bold text-bk-brown/60">Flame Grill #42, Main St.</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm font-bold mb-6">
                <span className="text-bk-red">Open Now</span>
                <span className="text-bk-brown/40">1.2 miles away</span>
              </div>
              <button className="w-full py-4 bg-bk-yellow text-bk-brown font-black uppercase italic rounded-xl hover:bg-bk-yellow/90 transition-all">
                Order Here
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-bk-brown text-bk-beige pt-20 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2 md:col-span-1">
             <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-bk-red rounded-full flex items-center justify-center">
                <span className="text-white font-black text-xl italic uppercase">BK</span>
              </div>
              <span className="font-black text-2xl uppercase tracking-tighter text-white">
                BURGER KING
              </span>
            </div>
            <p className="text-sm text-bk-beige/60 font-medium max-w-xs leading-relaxed">
              We started with a flame and a dream. Today, we're still grilling and still dreaming. BK is the original home of the Whopper.
            </p>
          </div>

          <div>
            <h4 className="font-black uppercase italic mb-6">Menu</h4>
            <ul className="space-y-4 text-sm font-bold text-bk-beige/60">
              <li className="hover:text-bk-yellow cursor-pointer transition-colors">Burgers</li>
              <li className="hover:text-bk-yellow cursor-pointer transition-colors">Chicken & Fish</li>
              <li className="hover:text-bk-yellow cursor-pointer transition-colors">Sides</li>
              <li className="hover:text-bk-yellow cursor-pointer transition-colors">Drinks</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase italic mb-6">Info</h4>
            <ul className="space-y-4 text-sm font-bold text-bk-beige/60">
              <li className="hover:text-bk-yellow cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-bk-yellow cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-bk-yellow cursor-pointer transition-colors">Support</li>
              <li className="hover:text-bk-yellow cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase italic mb-6">BK Rewards</h4>
            <ul className="space-y-4 text-sm font-bold text-bk-beige/60">
              <li className="hover:text-bk-yellow cursor-pointer transition-colors">Join Royal Perks</li>
              <li className="hover:text-bk-yellow cursor-pointer transition-colors">App Download</li>
              <li className="hover:text-bk-yellow cursor-pointer transition-colors">Redeem Deals</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-widest text-bk-beige/40">
          <p>© 2026 FlameGrill Co. TM & © 2026 Burger King Company LLC. All Rights Reserved.</p>
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
