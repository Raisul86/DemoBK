/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const BK_COLORS = {
  red: '#D62300',
  orange: '#F27000',
  yellow: '#FFB800',
  brown: '#502314',
  beige: '#F5EBDC',
  white: '#FFFFFF',
};

export const CATEGORIES = [
  { id: 'burgers', name: 'Burgers', icon: 'Flame' },
  { id: 'chicken', name: 'Chicken', icon: 'Utensils' },
  { id: 'sides', name: 'Sides', icon: 'Pizza' },
  { id: 'drinks', name: 'Drinks', icon: 'CupSoda' },
  { id: 'offers', name: 'Offers', icon: 'Tag' },
];

export const MENU_ITEMS = [
  {
    id: 'whopper',
    name: 'The Whopper',
    description: 'Flame-grilled beef, juicy tomatoes, fresh lettuce, creamy mayo, ketchup, crunchy pickles, and onions on a toasted sesame seed bun.',
    price: 6.49,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=800',
    calories: 660,
    isBestSeller: true,
  },
  {
    id: 'impossible-whopper',
    name: 'Impossible™ Whopper',
    description: 'A savory flame-grilled patty made from plants topped with tomatoes, lettuce, mayo, ketchup, pickles, and onions.',
    price: 7.49,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800',
    calories: 630,
    isBestSeller: true,
  },
  {
    id: 'bacon-king',
    name: 'Bacon King',
    description: 'Two flame-grilled beef patties, topped with thick-cut smoked bacon, melted American cheese, ketchup, and mayo.',
    price: 8.99,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=800',
    calories: 1150,
    isBestSeller: false,
  },
  {
    id: 'chicken-fries',
    name: 'Chicken Fries',
    description: 'White meat chicken coated in a light breading seasoned with savory spices and herbs.',
    price: 4.29,
    category: 'chicken',
    image: 'https://images.unsplash.com/photo-1562967914-6c8273932880?auto=format&fit=crop&q=80&w=800',
    calories: 280,
    isBestSeller: true,
  },
];

export const DEALS = [
  {
    id: 'deal-1',
    title: '$1 Whopper Wednesday',
    description: 'Exclusive app offer every Wednesday.',
    expiry: 'Ends in 2 days',
    image: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 'deal-2',
    title: 'BOGO Chicken Sandwiches',
    description: 'Buy one get one free Royal Crispy Chicken.',
    expiry: 'Limited time only',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=400',
  },
];
