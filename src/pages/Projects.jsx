import { useState } from 'react';
import Flower from '../components/Flower';
import ProjectView from '../components/ProjectView';
import projects from '../data/projects';
import './Projects.css';

function Projects(){
    const [selectedProject, setSelectedProject] = useState(null);

    const handleFlowerClick = (project) => {
        if (selectedProject?.id === project.id){
            setSelectedProject(null); 
        }else{
            setSelectedProject(project); 
        }
    };

    return (
        <section className="projects-hero">
            <h1 className="projects-title">Projects</h1>
            <p className = "projects-caption"> Click on the flowers to learn about what I've been up to!</p>
            <div className="projects-garden">
                {projects.map((project,i) => (
                    <button type = "button"  key={project.id} className={`project-flower ${selectedProject?.id === project.id ? 'active' : ''}`} 
                    onClick={() => handleFlowerClick(project)}>
                        <Flower to="#" label={project.name} variant={(i % 3) + 1} />
                    </button>
                ))}
            </div>

            {selectedProject && (
                <ProjectView 
                    project={selectedProject} 
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
}

export default Projects;