/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header, { StickyNav } from './components/Navigation';
import HomeHero from './components/HomeHero';
import { DealsStrip, BestSellers, MealBuilder } from './components/HomeSections';
import { AppPromo, StoreLocator, Footer } from './components/HomeFooter';
import MenuPage from './components/MenuPage';
import { PageId } from './types';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handlePageChange = (page: PageId) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPage={currentPage} onPageChange={handlePageChange} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <HomeHero />
              <DealsStrip />
              <BestSellers />
              <MealBuilder />
              <AppPromo />
              <StoreLocator />
            </motion.div>
          )}

          {currentPage === 'menu' && (
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <MenuPage />
            </motion.div>
          )}

          {(currentPage === 'deals' || currentPage === 'rewards' || currentPage === 'locator') && (
            <motion.div
              key="fallback"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pt-32 pb-40 text-center px-4"
            >
              <h2 className="text-4xl font-black uppercase italic text-bk-brown mb-4">
                Coming Soon to the Kingdom
              </h2>
              <p className="text-xl text-bk-brown/60 mb-8 max-w-md mx-auto font-medium">
                We're still grilling this section. Stay tuned for legendary deals and rewards.
              </p>
              <button 
                onClick={() => setCurrentPage('menu')}
                className="px-8 py-4 bg-bk-red text-white text-xl font-black uppercase italic rounded-full shadow-xl hover:scale-105 active:scale-95 transition-transform"
              >
                Go to Menu
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
      
      {/* Mobile persistent navigation */}
      <StickyNav currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
}
