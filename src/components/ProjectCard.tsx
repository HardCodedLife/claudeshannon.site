import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      {project.imageUrl && (
        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.githubUrl && (
            <a href={project.githubUrl} className="text-blue-600 hover:underline">GitHub</a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} className="text-blue-600 hover:underline">Live Demo</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
