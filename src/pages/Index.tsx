import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Smartphone } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Frontend & Mobile Developer
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Showcasing modern web and mobile applications built with React, TypeScript, and cutting-edge technologies
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/projects">
            <Button size="lg" className="min-w-48">
              <Code className="w-4 h-4 mr-2" />
              View My Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <div className="flex items-center text-sm text-muted-foreground">
            <Smartphone className="w-4 h-4 mr-2" />
            Frontend & Mobile Portfolio
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
