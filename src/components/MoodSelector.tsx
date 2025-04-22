import { useState } from 'react';
import { moodEmojis, moodColors } from '@/utils/pizzaUtils';
import { MoodType } from '@/types';
import { Button } from '@/components/ui/button';

interface MoodSelectorProps {
  onMoodSelected: (mood: MoodType) => void;
}

const MoodSelector = ({ onMoodSelected }: MoodSelectorProps) => {
  const [hoveredMood, setHoveredMood] = useState<MoodType | null>(null);
  
  const moods: MoodType[] = ['happy', 'sad', 'excited', 'angry', 'chill', 'love'];
  
  const moodLabels: Record<MoodType, string> = {
    happy: 'Happy',
    sad: 'Sad',
    excited: 'Excited',
    angry: 'Angry',
    chill: 'Chill',
    love: 'In Love'
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">How are you feeling today?</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {moods.map((mood) => (
          <Button
            key={mood}
            className={`h-24 md:h-32 text-xl rounded-xl transition-all duration-300 hover:shadow-lg`}
            variant={hoveredMood === mood ? moodColors[mood] : "outline"}
            onMouseEnter={() => setHoveredMood(mood)}
            onMouseLeave={() => setHoveredMood(null)}
            onClick={() => onMoodSelected(mood)}
          >
            <div className="flex flex-col items-center justify-center space-y-2">
              <span className="text-3xl md:text-4xl animate-bounce-small">{moodEmojis[mood]}</span>
              <span className="font-medium">{moodLabels[mood]}</span>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;
