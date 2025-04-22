import { useEffect, useState } from 'react';
import { MoodType, MoodPizza } from '@/types';
import { getMoodPizza, moodEmojis, moodColors } from '@/utils/pizzaUtils';
import { Button } from '@/components/ui/button';
import PizzaVisualization from './PizzaVisualization';

interface PizzaCreatorProps {
  selectedMood: MoodType;
  onReset: () => void;
}

const PizzaCreator = ({ selectedMood, onReset }: PizzaCreatorProps) => {
  const [pizza, setPizza] = useState<MoodPizza | null>(null);
  const [isCreating, setIsCreating] = useState(true);
  const [creationStep, setCreationStep] = useState(0);
  
  useEffect(() => {
    setPizza(getMoodPizza(selectedMood));
    
    const timer = setTimeout(() => {
      setIsCreating(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [selectedMood]);
  
  useEffect(() => {
    if (isCreating) {
      const interval = setInterval(() => {
        setCreationStep(prev => (prev < 4 ? prev + 1 : prev));
      }, 750);
      
      return () => clearInterval(interval);
    }
  }, [isCreating]);

  if (!pizza) return null;
  
  const creationSteps = [
    `Preparing ${pizza.base.name}...`,
    `Adding ${pizza.sauce} sauce...`,
    `Sprinkling ${pizza.cheese}...`,
    `Adding toppings...`,
    `Finishing your mood pizza...`
  ];

  return (
    <div className="w-full max-w-3xl mx-auto py-8">
      {isCreating ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-8">Creating Your Mood Pizza</h2>
          <div className="relative w-60 h-60 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full bg-yellow-100 animate-spin-slow"></div>
            <div className="absolute inset-4 rounded-full" style={{ backgroundColor: pizza.base.color }}></div>
          </div>
          <p className="text-xl font-medium animate-pulse-gentle">{creationSteps[creationStep]}</p>
        </div>
      ) : (
        <div className="animate-appear">
          <div className="flex items-center justify-center mb-8">
            <h2 className="text-3xl font-bold mr-3">Your {selectedMood.charAt(0).toUpperCase() + selectedMood.slice(1)} Pizza</h2>
            <span className="text-3xl">{moodEmojis[selectedMood]}</span>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-8">
            <div className="p-6 flex flex-col md:flex-row gap-6">
              {/* Pizza visualization */}
              <div className="flex-shrink-0">
                <PizzaVisualization mood={selectedMood} size="md" animated={false} />
              </div>
              
              {/* Pizza details */}
              <div className="flex-grow">
                <p className="text-lg mb-4">{pizza.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Base</h3>
                    <p>{pizza.base.name} - {pizza.base.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold">Sauce</h3>
                    <p>{pizza.sauce}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold">Cheese</h3>
                    <p>{pizza.cheese}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold">Toppings</h3>
                    <ul className="list-disc pl-5">
                      {pizza.toppings.map((topping, index) => (
                        <li key={index}>{topping.name} - {topping.description}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={onReset} 
              size="lg" 
              variant={moodColors[selectedMood]}
              className="animate-pulse-gentle"
            >
              Create Another Mood Pizza
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PizzaCreator;
