/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Menu, User, ShoppingBag, MapPin } from 'lucide-react';
import { PageId } from '../types';

interface HeaderProps {
  currentPage: PageId;
  onPageChange: (page: PageId) => void;
}

export default function Header({ onPageChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-bk-beige/95 backdrop-blur-sm border-b border-bk-brown/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div 
            className="flex-shrink-0 cursor-pointer flex items-center gap-2"
            onClick={() => onPageChange('home')}
          >
            <div className="w-10 h-10 bg-bk-red rounded-full flex items-center justify-center">
              <span className="text-white font-black text-xl italic uppercase">BK</span>
            </div>
            <span className="hidden sm:block font-black text-2xl uppercase tracking-tighter text-bk-red">
              BURGER KING
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => onPageChange('home')} className="font-bold hover:text-bk-orange transition-colors">HOME</button>
            <button onClick={() => onPageChange('menu')} className="font-bold hover:text-bk-orange transition-colors">MENU</button>
            <button onClick={() => onPageChange('deals')} className="font-bold hover:text-bk-orange transition-colors">OFFERS</button>
            <button onClick={() => onPageChange('rewards')} className="font-bold hover:text-bk-orange transition-colors">REWARDS</button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="p-2 text-bk-brown hover:bg-bk-brown/5 rounded-full transition-colors">
              <MapPin size={24} />
            </button>
            <button className="p-2 text-bk-brown hover:bg-bk-brown/5 rounded-full transition-colors">
              <User size={24} />
            </button>
            <button className="relative p-2 bg-bk-red text-white rounded-full hover:bg-bk-red/90 transition-transform active:scale-95">
              <ShoppingBag size={24} />
              <span className="absolute top-0 right-0 w-5 h-5 bg-bk-yellow text-bk-brown text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-bk-beige">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export function StickyNav({ currentPage, onPageChange }: HeaderProps) {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-bk-brown/10 px-6 py-3 flex justify-between items-center bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <NavItem 
        icon={<Menu size={24} />} 
        label="Menu" 
        active={currentPage === 'menu'} 
        onClick={() => onPageChange('menu')} 
      />
      <NavItem 
        icon={<MapPin size={24} />} 
        label="Find" 
        active={currentPage === 'locator'} 
        onClick={() => onPageChange('locator')} 
      />
      <div className="relative -mt-12 bg-bk-red p-4 rounded-full border-4 border-bk-beige shadow-lg active:scale-95 transition-transform" onClick={() => onPageChange('home')}>
        <span className="text-white font-black text-xl italic uppercase">BK</span>
      </div>
      <NavItem 
        icon={<TagIcon size={24} />} 
        label="Offers" 
        active={currentPage === 'deals'} 
        onClick={() => onPageChange('deals')} 
      />
      <NavItem 
        icon={<User size={24} />} 
        label="Profile" 
        active={currentPage === 'rewards'} 
        onClick={() => onPageChange('rewards')} 
      />
    </nav>
  );
}

function NavItem({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center gap-1 transition-colors ${active ? 'text-bk-red' : 'text-bk-brown/60'}`}
    >
      {icon}
      <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
      {active && (
        <motion.div 
          layoutId="activeTab"
          className="w-1 h-1 bg-bk-red rounded-full"
        />
      )}
    </button>
  );
}

function TagIcon({ size }: { size: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="m15 5 4 4" />
      <path d="M13 7 8.707 11.293a1 1 0 0 0 0 1.414l5.586 5.586a1 1 0 0 0 1.414 0L20 14" />
      <path d="m10.5 14.5-5-5a2 2 0 0 0-2.828 0l-.5.5a2 2 0 0 0 0 2.828l9 9a2 2 0 0 0 2.828 0l.5-.5a2 2 0 0 0 0-2.828l-4-4Z" />
      <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  );
}
