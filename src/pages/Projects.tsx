import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Calendar, Code2 } from 'lucide-react';
import { useState } from 'react';

const PROJECT_TYPES = [
  { label: 'Frontend', value: 'frontend' },
  { label: 'Mobile', value: 'mobile' },
];

const Projects = () => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const handleTypeChange = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };

  const filteredProjects =
    selectedTypes.length === 0
      ? projects
      : projects.filter((project) =>
        project.projectType.some((type) => selectedTypes.includes(type))
      );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of frontend and mobile applications I've built with modern technologies
          </p>
        </div>

        {/* Project Type Filter */}
        <div className="mb-10 flex flex-wrap gap-4 justify-center">
          {PROJECT_TYPES.map((type) => (
            <label
              key={type.value}
              className={`inline-flex items-center px-4 py-2 rounded-full border cursor-pointer transition-colors text-sm font-medium ${selectedTypes.includes(type.value) ? 'bg-primary text-primary-foreground border-primary' : 'bg-muted text-muted-foreground border-muted-foreground/20'}`}
            >
              <input
                type="checkbox"
                className="hidden"
                checked={selectedTypes.includes(type.value)}
                onChange={() => handleTypeChange(type.value)}
              />
              {type.label}
            </label>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              {/* Preview Images */}
              <div className="relative h-48 overflow-hidden">
                <div className="flex space-x-2 p-4">
                  {project.previewImages.slice(0, 3).map((image, index) => (
                    <div
                      key={index}
                      className="flex-1 h-32 bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm"
                    >
                      <img src={image} alt={project.name} className="w-full object-fit" />
                    </div>
                  ))}
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex gap-1">
                    {project.projectType.map((type) => (
                      <Badge key={type} variant="secondary" className="capitalize">
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.name}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {project.shortDescription}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Code2 className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span className="text-sm font-medium">Tech Stack</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.techStack.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* View Details Link */}
                <Link
                  to={`/${project.slug}`}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-muted-foreground text-lg">
              No projects found. Check back soon for updates!
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;