import React from 'react';
import "./project-card.css";

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <div className="project-info">
                <label className="project-title">{project.title}</label>
                <div className="project-links">
                    {project.demo && (
                        <a className="project-link" href={project.demo} target="_blank" rel="noopener noreferrer">
                            <div className="link-button">
                                <i className="fi-rr-globe"></i> Demo
                            </div>
                        </a>
                    )}

                    {project.github && (
                        <a className="project-link" href={project.github} target="_blank" rel="noopener noreferrer">
                            <div className="link-button">
                                <i className="devicon-github-original colored"></i> GitHub
                            </div>
                        </a>
                    )}
                </div>
                <p>{project.about}</p>
                <div className="project-tags">
                    {project.tags.map((tag, index) => (
                        <label key={index} className="tag">{tag}</label>
                    ))}
                </div>
            </div>
            <img src={project.image} className="project-photo" alt="Project" />
        </div>
    );
}

export default ProjectCard;
