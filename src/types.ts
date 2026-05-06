/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  calories: number;
  isBestSeller: boolean;
}

export interface Deal {
  id: string;
  title: string;
  description: string;
  expiry: string;
  image: string;
}

export type PageId = 'home' | 'menu' | 'deals' | 'rewards' | 'locator';
