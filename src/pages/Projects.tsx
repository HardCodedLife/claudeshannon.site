import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import type { Project } from '../types';

const Projects = () => {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: 'Local Agent',
      description: 'An open-source AI agent that runs locally on your machine with functionality of web browsing, file handling.',
      technologies: ['Python', 'Ollama', 'MCP'],
      githubUrl: "https://github.com/HardCodedLife/local_agent"
    },
    {
      id: 2,
      title: 'MoodChat',
      description: 'An Ollama-powered AI chat application that automatically adapts its visual theme based on the emotional tone of your conversations.',
      technologies: ['React', 'Python', 'Ollama', 'CSS3', 'Typescript', 'Vite', 'FastAPI', 'WebSockets'],
      githubUrl: "https://github.com/HardCodedLife/ollama-moodchat"
    },
    {
      id: 3,
      title: 'First Github Portfolio',
      description: 'My first portfolio website hosted on Github Pages for the first time I learned HTML and CSS.',
      technologies: ['Astro', 'JavaScript', 'Typescript', 'CSS', 'Formspree', 'Frontend Deploy'],
      githubUrl: "https://github.com/HardCodedLife/hardcodedlife.github.io",
      liveUrl: "https://hardcodedlife.github.io"
    }
  ]);

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
