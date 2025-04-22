import { MoodType, MoodPizza, PizzaBase, PizzaTopping } from '../types';

const pizzaBases: Record<MoodType, PizzaBase> = {
  happy: {
    name: 'Golden Crust',
    description: 'A light, airy crust with a golden finish, perfect for your cheerful mood',
    color: '#F8BD7F'
  },
  sad: {
    name: 'Comfort Deep Dish',
    description: 'A thick, warm, comforting base to help lift your spirits',
    color: '#DBD0C0'
  },
  excited: {
    name: 'Thin & Crispy',
    description: 'An energetic, crispy thin crust for your exhilarated state',
    color: '#F5D7A4'
  },
  angry: {
    name: 'Fiery Hot Crust',
    description: 'A spicy infused crust with a kick that matches your intensity',
    color: '#D9A577'
  },
  chill: {
    name: 'Relaxed Sourdough',
    description: 'A mellow, easy-going sourdough base for your laid-back vibe',
    color: '#E6CCAA'
  },
  love: {
    name: 'Heart-Shaped Focaccia',
    description: 'A soft, pillowy base made with love and care',
    color: '#FFDECC'
  }
};

const pizzaToppings: Record<MoodType, PizzaTopping[]> = {
  happy: [
    { name: 'Sweet Pineapple', description: 'Chunks of juicy pineapple', color: '#FEF301' },
    { name: 'Honey Ham', description: 'Tender slices of honey-glazed ham', color: '#FFB0B0' },
    { name: 'Bell Peppers', description: 'Colorful bell peppers', color: '#4CAF50' }
  ],
  sad: [
    { name: 'Dark Chocolate Chunks', description: 'Rich dark chocolate pieces for comfort', color: '#3D2B1F' },
    { name: 'Caramelized Bananas', description: 'Sweet, warm banana slices', color: '#FFE135' },
    { name: 'Marshmallows', description: 'Soft, fluffy marshmallows', color: '#F5F5F5' }
  ],
  excited: [
    { name: 'Spicy Pepperoni', description: 'Zesty pepperoni for an extra kick', color: '#BE3144' },
    { name: 'Jalapeños', description: 'Hot jalapeños to match your energy', color: '#316241' },
    { name: 'Red Chili Flakes', description: 'A sprinkle of heat', color: '#DE3909' }
  ],
  angry: [
    { name: 'Ghost Peppers', description: 'Intensely hot ghost peppers', color: '#CF1020' },
    { name: 'Spicy Sausage', description: 'Fiery Italian sausage', color: '#832A0D' },
    { name: 'Red Onions', description: 'Sharp, pungent red onions', color: '#C41E3A' }
  ],
  chill: [
    { name: 'Truffle Mushrooms', description: 'Earthy, aromatic mushrooms', color: '#8A664C' },
    { name: 'Spinach', description: 'Fresh, calming spinach leaves', color: '#006A4E' },
    { name: 'Goat Cheese', description: 'Smooth, mild goat cheese', color: '#F5F5F5' }
  ],
  love: [
    { name: 'Strawberry Slices', description: 'Sweet, heart-shaped strawberry slices', color: '#FF4040' },
    { name: 'Nutella Drizzle', description: 'Decadent chocolate hazelnut', color: '#3D2314' },
    { name: 'Edible Rose Petals', description: 'Delicate, aromatic petals', color: '#FB607F' }
  ]
};

const sauces: Record<MoodType, string> = {
  happy: 'Sweet Sunshine Tomato',
  sad: 'Creamy Alfredo Comfort',
  excited: 'Spicy Sriracha Tomato',
  angry: 'Hot Lava Arrabbiata',
  chill: 'Mellow Garlic Olive Oil',
  love: 'Sweet Berry Balsamic'
};

const cheeses: Record<MoodType, string> = {
  happy: 'Golden Mozzarella & Cheddar Blend',
  sad: 'Extra Rich Triple Cheese Blend',
  excited: 'Pepper Jack & Mozzarella Mix',
  angry: 'Spicy Habanero Cheddar',
  chill: 'Mild Provolone & Gouda',
  love: 'Creamy Mascarpone & Mozzarella'
};

const descriptions: Record<MoodType, string> = {
  happy: 'A bright, joyful pizza with sweet and savory notes to elevate your already cheerful mood.',
  sad: 'A comforting, indulgent dessert pizza designed to lift your spirits and provide warmth.',
  excited: 'An energetic, spicy creation that matches your enthusiasm and keeps the excitement going.',
  angry: 'An intensely hot and fiery pizza that lets you release your anger through heat and flavor.',
  chill: 'A relaxed, sophisticated combination of mild flavors to maintain your peaceful state.',
  love: 'A romantic, sweet dessert pizza crafted to celebrate love and affection.'
};

export const getMoodPizza = (mood: MoodType): MoodPizza => {
  return {
    base: pizzaBases[mood],
    sauce: sauces[mood],
    cheese: cheeses[mood],
    toppings: pizzaToppings[mood],
    description: descriptions[mood]
  };
};

export const moodEmojis: Record<MoodType, string> = {
  happy: '😀',
  sad: '😔',
  excited: '🤩',
  angry: '😡',
  chill: '😌',
  love: '❤️'
};

import type { ButtonVariant } from "@/components/ui/button";

export const moodColors: Record<MoodType, ButtonVariant> = {
  happy: 'mood-happy',
  sad: 'mood-sad',
  excited: 'mood-excited',
  angry: 'mood-angry',
  chill: 'mood-chill',
  love: 'mood-love'
};
