import { useState, useEffect } from 'react';
import './ProjectView.css';

function ProjectView({project, onClose}){
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        setActiveIndex(0);
    }, [project]);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % project.images.length); 
    }
    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }

    const hasMultipleImages = project.images.length > 1;
    return (

        <div className="project-view">
            <button type = "button"  className="close-btn" onClick={onClose}>✕</button>
            
            <div className="project-carousel"> 
                <button type = "button"  className="carousel-btn prev" onClick={prevSlide} disabled = {!hasMultipleImages}>&#10094;</button>
                <div className="project-image-wrap">
                    <img src={project.images[activeIndex]}
                    alt={project.name}
                    className="project-image"
                    />
                </div>
                <button type = "button"  className="carousel-btn next" onClick={nextSlide} disabled = {!hasMultipleImages}>&#10095;</button>
                
            </div>

            <div className="project-info">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
               <div className = "tech-tags">
                 {project.tech.split(' • ').map((tech)=>(
                    <span key = {tech} className = "tech-tag">{tech}</span>
                ))}
               </div>
            </div>
        </div>
    );
}

export default ProjectView;