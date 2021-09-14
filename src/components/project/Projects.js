import React, { useState } from 'react';
import data_projects from '../../data/projects_data';
import { ProjectCard } from '../projectCard/ProjectCard';

import './projects.css';

export const Projects = () => {
  const [projects, setProjects] = useState(data_projects);

  const handleFilterCategory = (name) => {
    console.log('clico');
    const new_array = data_projects.filter((project) =>
      project.category.includes(name)
    );
    setProjects(new_array);
  };

  return (
    <div className="container projects">
      <div className="projects_navbar">
        <div onClick={() => setProjects(data_projects)}>all</div>
        <div onClick={() => handleFilterCategory('react')}>React</div>
        <div onClick={() => handleFilterCategory('mongoDB')}>MongoDb</div>
        <div onClick={() => handleFilterCategory('node.js')}>Node</div>
        <div onClick={() => handleFilterCategory('vanilla')}>Vanilla</div>
      </div>
      <div className="row">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};
