
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, Brain, BookOpen, TrendingUp } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Upload,
    title: 'Upload Your Question',
    description: 'Take a photo or type your homework question. Our AI accepts text, images, and even handwritten problems.',
    color: 'from-blue-500 to-purple-600'
  },
  {
    step: '02',
    icon: Brain,
    title: 'AI Analysis',
    description: 'Our advanced AI analyzes your question, identifies the subject and difficulty level, then crafts a personalized explanation.',
    color: 'from-purple-500 to-pink-600'
  },
  {
    step: '03',
    icon: BookOpen,
    title: 'Step-by-Step Learning',
    description: 'Receive detailed explanations broken down into simple steps. Learn the concept, not just the answer.',
    color: 'from-pink-500 to-red-600'
  },
  {
    step: '04',
    icon: TrendingUp,
    title: 'Track Progress',
    description: 'Monitor your learning journey with progress tracking and personalized recommendations for improvement.',
    color: 'from-green-500 to-blue-600'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="container mx-auto px-4 py-16 bg-muted/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          How AskAva Works
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          From question to understanding in four simple steps
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <div key={step.step} className="relative">
              <Card className="group hover:scale-105 transition-all duration-300 border-0 shadow-lg hover:shadow-xl h-full">
                <CardContent className="p-8 text-center space-y-6 h-full flex flex-col">
                  <div className="space-y-4">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r ${step.color} text-white`}>
                      Step {step.step}
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-muted-foreground/30 to-transparent transform -translate-y-1/2 z-10"></div>
              )}
            </div>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <p className="text-lg text-muted-foreground mb-6">
          Ready to transform your learning experience?
        </p>
        <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
          Start Learning for Free
        </button>
      </div>
    </section>
  );
};

export default HowItWorks;
