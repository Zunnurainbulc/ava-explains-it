
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Brain, Target, Clock, Users, Shield } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Instant AI Responses',
    description: 'Get explanations in seconds, not hours. Our AI processes your questions immediately.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Brain,
    title: 'Step-by-Step Explanations',
    description: 'Learn the process, not just the answer. Understand every step of the solution.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Target,
    title: 'Adaptive Learning',
    description: 'Personalized tutoring that adapts to your learning style and pace.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Study anytime, anywhere. Your AI tutor never sleeps or takes breaks.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Users,
    title: 'Multi-Language Support',
    description: 'Get help in your preferred language with our multilingual AI tutor.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Shield,
    title: 'Safe Learning Environment',
    description: 'Privacy-focused platform designed specifically for students and educators.',
    color: 'from-red-500 to-pink-500'
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Why Students Love AskAva
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Advanced AI technology meets educational excellence to create the perfect learning companion
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => {
          const IconComponent = feature.icon;
          return (
            <Card 
              key={feature.title}
              className="group hover:scale-105 transition-all duration-300 border-0 shadow-lg hover:shadow-xl"
            >
              <CardContent className="p-8 space-y-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturesSection;
