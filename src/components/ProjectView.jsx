import { useState, useEffect } from 'react';
import './ProjectView.css';

function ProjectView({project}){
    const [activeIndex, setActiveIndex] = useState(0);


    //for the carousel 
    useEffect(() => {
        setActiveIndex(0);
    }, [project]);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % project.images.length); 
    }
    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }

    return (
        <div className = "project-view">
            <div className = "project-carousel"> 
                <button className = "carousel-btn prev" onClick = {prevSlide}>&#10094;</button>
                <div className = "project-image-wrap">
                <img src = {project.images[activeIndex]}
                alt = {`${project.name} screenshot ${activeIndex + 1}`}
                className = "project-image"
                />
                </div>
                <button className = "carousel-btn next" onClick = {nextSlide}>&#10095;</button>
            </div>

            <div className = "project-info">
                <span className = "project-tech">{project.tech}</span>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
            </div>
        </div>
    );

}

export default ProjectView;