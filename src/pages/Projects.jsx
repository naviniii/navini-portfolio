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
        <section className = "projects-hero">
            <h1 className = "projects-title"> Projects </h1>
            <div className = "projects-garden">
                {projects.map((project,i) => (
                    <div key = {project.id} className = {`project-flower ${selectedProject?.id === project.id ? 'active' : ''}`} 
                    /*explanation of code for future me: 
                    - ?. handles null 
                    - ` is for template literal - which is a string with JS expressions 
                    - the ? active is for shorthanding if condition is true use active or otherwise use empty string
                    
                    */
                    onClick = {() => handleFlowerClick(project)}>
                        <Flower to = "#" label = {project.name} variant = {( i % 3 ) + 1} />
                        </div>
                ))}
            </div>

            {selectedProject && (<ProjectView project = {selectedProject} /> )}
        </section>

    );


}

export default Projects;