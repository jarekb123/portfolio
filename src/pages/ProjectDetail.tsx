import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '@/data/projects';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Calendar, Code2, Lightbulb, Target, Users } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
} from '@/components/ui/dialog';
import { ProjectImageGallery } from '@/components/ui/ProjectImageGallery';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {project.name}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                {project.fullDescription}
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end space-y-2 mt-4 md:mt-0">
              <div className="flex gap-1">
                {project.projectType.map((type) => (
                  <Badge key={type} variant="secondary" className="capitalize">
                    {type}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project Images */}
        {Array.isArray(project.allImages) && project.allImages.length > 0 && project.allImages[0] !== '/placeholder.svg' && (
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Project Gallery</CardTitle>
              <CardDescription>
                Screenshots and visuals from the {project.name} project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ProjectImageGallery images={project.allImages} alt={project.name} />
            </CardContent>
          </Card>
        )}

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Tech Stack */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code2 className="w-5 h-5 mr-2" />
                Technology Stack
              </CardTitle>
              <CardDescription>
                Core technologies and frameworks used in this project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="default">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Libraries */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code2 className="w-5 h-5 mr-2" />
                Libraries & Tools
              </CardTitle>
              <CardDescription>
                Additional libraries and tools integrated into the project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.libraries.map((library) => (
                  <Badge key={library} variant="outline">
                    {library}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Responsibilities */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="w-5 h-5 mr-2" />
              My Responsibilities
            </CardTitle>
            <CardDescription>
              Key responsibilities and tasks I handled in this project
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {project.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-foreground">{responsibility}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Interesting Cases */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lightbulb className="w-5 h-5 mr-2" />
              Interesting Cases & Challenges
            </CardTitle>
            <CardDescription>
              Notable technical challenges solved and interesting implementations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {project.interestingCases.map((case_, index) => (
                <div key={index} className="p-4 bg-muted rounded-lg">
                  <p className="text-foreground">{case_}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-center">
          <Link to="/projects">
            <Button size="lg">
              <ArrowLeft className="w-4 h-4 mr-2" />
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;