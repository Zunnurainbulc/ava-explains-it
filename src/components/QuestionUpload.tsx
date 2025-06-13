
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Upload, Camera, Type, Send, Sparkles } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const QuestionUpload = () => {
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showExample, setShowExample] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    setShowExample(true);
    // Simulate AI processing
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Card className="w-full max-w-lg mx-auto shadow-2xl border-0 bg-card/50 backdrop-blur">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2">
          <Sparkles className="h-5 w-5 text-purple-600" />
          Ask Your Question
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Tabs defaultValue="text" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="text" className="flex items-center gap-2">
              <Type className="h-4 w-4" />
              Type
            </TabsTrigger>
            <TabsTrigger value="upload" className="flex items-center gap-2">
              <Camera className="h-4 w-4" />
              Photo
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="text" className="space-y-4">
            <Textarea
              placeholder="Type your homework question here... e.g., 'Solve for x: 2x + 5 = 15'"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="min-h-[120px] resize-none"
            />
          </TabsContent>
          
          <TabsContent value="upload" className="space-y-4">
            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center space-y-4 hover:border-primary/50 transition-colors cursor-pointer">
              <Upload className="h-8 w-8 mx-auto text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Upload a photo of your question</p>
                <p className="text-xs text-muted-foreground">PNG, JPG up to 10MB</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <Button 
          onClick={handleSubmit}
          disabled={isLoading || (!question.trim() && true)}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Analyzing...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Send className="h-4 w-4" />
              Get Explanation
            </div>
          )}
        </Button>

        {showExample && (
          <Card className="mt-4 border-green-200 bg-green-50/50">
            <CardContent className="p-4">
              <h4 className="font-semibold text-green-800 mb-2">AI Explanation:</h4>
              <div className="space-y-2 text-sm text-green-700">
                <p><strong>Step 1:</strong> Start with the equation: 2x + 5 = 15</p>
                <p><strong>Step 2:</strong> Subtract 5 from both sides: 2x = 10</p>
                <p><strong>Step 3:</strong> Divide both sides by 2: x = 5</p>
                <p className="text-green-600 font-medium">✓ Answer: x = 5</p>
              </div>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
};

export default QuestionUpload;
