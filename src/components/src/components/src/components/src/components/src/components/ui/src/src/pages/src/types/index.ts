export type MoodType = 'happy' | 'sad' | 'excited' | 'angry' | 'chill' | 'love';

export interface PizzaIngredient {
  name: string;
  image?: string;
  color: string;
}

export interface PizzaBase {
  name: string;
  description: string;
  color: string; 
}

export interface PizzaTopping {
  name: string;
  description: string;
  color: string;
}

export interface MoodPizza {
  base: PizzaBase;
  sauce: string;
  cheese: string;
  toppings: PizzaTopping[];
  description: string;
}
