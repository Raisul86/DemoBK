/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, Flame, Utensils, Pizza, CupSoda, Tag, Plus } from 'lucide-react';
import { MENU_ITEMS, CATEGORIES } from '../constants';

const ICON_MAP: Record<string, any> = {
  Flame,
  Utensils,
  Pizza,
  CupSoda,
  Tag
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('burgers');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = MENU_ITEMS.filter(item => 
    item.category === activeCategory && 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-24 pb-32 bg-bk-beige min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-5xl font-black uppercase italic text-bk-brown mb-6">Our Menu</h1>
          
          <div className="flex flex-col md:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-bk-brown/40" size={20} />
              <input 
                type="text" 
                placeholder="Search your favorites..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-5 bg-white rounded-2xl border-2 border-transparent focus:border-bk-orange outline-none font-bold text-bk-brown shadow-sm transition-all"
              />
            </div>
            
            {/* Quick Filters */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
               {CATEGORIES.map(cat => {
                 const Icon = ICON_MAP[cat.icon];
                 return (
                   <button
                     key={cat.id}
                     onClick={() => setActiveCategory(cat.id)}
                     className={`flex items-center gap-2 px-6 py-4 rounded-2xl font-black uppercase italic transition-all whitespace-nowrap shadow-sm border-2 ${
                       activeCategory === cat.id 
                         ? 'bg-bk-red text-white border-bk-red' 
                         : 'bg-white text-bk-brown border-transparent hover:border-bk-orange'
                     }`}
                   >
                     {Icon && <Icon size={18} />}
                     {cat.name}
                   </button>
                 );
               })}
            </div>
          </div>
        </div>

        {/* Menu Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map(item => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                key={item.id}
                className="bg-white rounded-[32px] p-4 group hover:shadow-2xl transition-all duration-300 flex flex-col border border-bk-brown/5"
              >
                <div className="relative aspect-square mb-4 overflow-hidden rounded-2xl">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  {item.isBestSeller && (
                    <div className="absolute top-3 left-3 bg-bk-yellow px-3 py-1 rounded-full text-[10px] font-black uppercase text-bk-brown">
                      Best Seller
                    </div>
                  )}
                </div>
                
                <div className="flex-1 px-2">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h3 className="font-black uppercase italic text-lg leading-tight text-bk-brown">{item.name}</h3>
                    <span className="font-black text-bk-red">${item.price}</span>
                  </div>
                  <p className="text-xs text-bk-brown/60 font-medium line-clamp-2 mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-3 px-2 mt-auto">
                  <span className="text-[10px] font-bold text-bk-brown/40 uppercase tracking-widest">{item.calories} Cal</span>
                  <button className="flex-1 bg-bk-orange text-white py-3 rounded-xl font-black uppercase italic text-sm hover:bg-bk-orange/90 transition-transform active:scale-95 flex items-center justify-center gap-2">
                    <Plus size={16} /> Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-32 text-center">
            <h3 className="text-2xl font-black uppercase italic text-bk-brown/40">No items found</h3>
            <p className="text-bk-brown/30 font-bold mt-2">Try a different category or search term.</p>
          </div>
        )}
      </div>
    </div>
  );
}
