
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Calculator, 
  Atom, 
  Globe, 
  BookOpen, 
  Palette, 
  Code, 
  TrendingUp, 
  Languages 
} from 'lucide-react';

const subjects = [
  { name: 'Mathematics', icon: Calculator, color: 'from-blue-500 to-blue-600', count: '1.2k+ questions' },
  { name: 'Science', icon: Atom, color: 'from-green-500 to-green-600', count: '850+ questions' },
  { name: 'History', icon: Globe, color: 'from-amber-500 to-amber-600', count: '600+ questions' },
  { name: 'Literature', icon: BookOpen, color: 'from-purple-500 to-purple-600', count: '450+ questions' },
  { name: 'Arts', icon: Palette, color: 'from-pink-500 to-pink-600', count: '300+ questions' },
  { name: 'Programming', icon: Code, color: 'from-indigo-500 to-indigo-600', count: '400+ questions' },
  { name: 'Economics', icon: TrendingUp, color: 'from-emerald-500 to-emerald-600', count: '250+ questions' },
  { name: 'Languages', icon: Languages, color: 'from-rose-500 to-rose-600', count: '350+ questions' },
];

const SubjectsGrid = () => {
  return (
    <section id="subjects" className="container mx-auto px-4 py-16 bg-muted/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Get Help in Any Subject
        </h2>
        <p className="text-xl text-muted-foreground">
          Our AI tutor covers all academic subjects with expert-level knowledge
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {subjects.map((subject) => {
          const IconComponent = subject.icon;
          return (
            <Card 
              key={subject.name}
              className="group hover:scale-105 transition-all duration-300 cursor-pointer border-0 shadow-lg hover:shadow-xl"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${subject.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{subject.name}</h3>
                  <p className="text-xs text-muted-foreground">{subject.count}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default SubjectsGrid;
