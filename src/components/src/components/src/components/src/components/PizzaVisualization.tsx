import * as React from 'react';
import { MoodType } from '@/types';
import { getMoodPizza } from '@/utils/pizzaUtils';

interface PizzaVisualizationProps {
  mood: MoodType;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

const PizzaVisualization = ({ mood, size = 'md', animated = true }: PizzaVisualizationProps) => {
  const pizza = getMoodPizza(mood);
  
  const sizeClass = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64',
  }[size];
  
  const animationClass = animated ? 'animate-pulse-gentle' : '';

  return (
    <div className={`relative ${sizeClass} mx-auto`}>
      {/* Base/Crust */}
      <div 
        className={`absolute inset-0 rounded-full ${animationClass}`} 
        style={{ backgroundColor: pizza.base.color }}
      ></div>
      
      {/* Sauce swirl - decorative */}
      <div className="absolute inset-[15%] rounded-full opacity-30 bg-gradient-to-r from-red-300 to-yellow-200"></div>
      
      {/* Toppings */}
      {pizza.toppings.map((topping, index) => (
        <React.Fragment key={index}>
          {/* Generate multiple pieces of each topping */}
          {Array.from({ length: 5 }, (_, i) => (
            <div 
              key={`${index}-${i}`}
              className={`absolute rounded-full ${animated ? 'animate-bounce-small delay-300' : ''}`}
              style={{
                width: `${8 + Math.random() * 16}px`,
                height: `${8 + Math.random() * 16}px`,
                backgroundColor: topping.color,
                top: `${20 + Math.random() * 60}%`,
                left: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 2}s`,
                zIndex: 2
              }}
            ></div>
          ))}
        </React.Fragment>
      ))}
      
      {/* Cheese drips/highlights */}
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={`cheese-${i}`}
          className="absolute rounded-full bg-yellow-100 opacity-60"
          style={{
            width: `${6 + Math.random() * 10}px`,
            height: `${6 + Math.random() * 10}px`,
            top: `${10 + Math.random() * 80}%`,
            left: `${10 + Math.random() * 80}%`,
            zIndex: 1
          }}
        ></div>
      ))}
    </div>
  );
};

export default PizzaVisualization;
