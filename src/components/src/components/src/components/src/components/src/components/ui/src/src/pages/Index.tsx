
import { useState, useEffect } from 'react';
import { MoodType } from '@/types';
import MoodSelector from '@/components/MoodSelector';
import PizzaCreator from '@/components/PizzaCreator';
import PageTransition from '@/components/PageTransition';

const Index = () => {
  const [selectedMood, setSelectedMood] = useState<MoodType | null>(null);

  const handleMoodSelected = (mood: MoodType) => {
    setSelectedMood(mood);
  };

  const handleReset = () => {
    setSelectedMood(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-50 to-indigo-100">
      <header className="py-6 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            Mood Pizza
            <span className="ml-2 animate-bounce-small inline-block">🍕</span>
          </h1>
          <p className="text-center mt-2 text-lg max-w-2xl mx-auto">
            A custom pizza experience based on your emotions
          </p>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <PageTransition>
              {selectedMood ? (
                <PizzaCreator selectedMood={selectedMood} onReset={handleReset} />
              ) : (
                <MoodSelector onMoodSelected={handleMoodSelected} />
              )}
            </PageTransition>
          </div>
        </div>

        <div className="mt-16 text-center text-gray-600">
          <p className="max-w-2xl mx-auto">
            Mood Pizza uses your emotional state to craft a unique pizza experience tailored just for you.
            Each ingredient is carefully selected to complement or enhance your current mood.
          </p>
        </div>
      </main>

      <footer className="py-6 bg-gray-100">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Mood Pizza. Emotions to flavor.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
