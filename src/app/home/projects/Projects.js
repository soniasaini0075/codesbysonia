'use client';

import React from 'react';
import { SplittingText } from '@/components/animate-ui/text/splitting';
import SpotlightCard from '@/app/widgets/SpotlightCard/SpotlightCard';
import Button from '../../widgets/buttons/Button';

import './projects.scss';

// Step 2: Project Data Array
const projectData = [
  {
    id: 'project1',
    weblink: "https://onething.design/",
    subtitle: 'Leading Global UI UX Design Agency',
    title: 'Onething Design Studio',
    description: 'global UI UX design agency building innovative user experiences to scale up growth for businesses.',
    tags: ['#UIUXAgency', '#DesignStudio', '#CompanyPortfolio'],
    spotlightColor: 'rgba(233, 16, 16, 0.2)',
  },
  {
    id: 'project2',
    weblink: "https://www.mymoneymantra.com/",
    subtitle: 'Financial Platform',
    title: 'MyMoneyMantra',
    description: 'Compare and apply online for best interest rates on personal loan, home loan, loan against property, business loan and credit cards.',
    tags: ['#Loans', '#FreeCreditScore', '#React'],
    spotlightColor: 'rgba(137, 193, 66, 0.2)',
  },
  {
    id: 'project3',
    weblink: "https://modl.ai/",
    subtitle: 'AI tools for video game studios',
    title: 'Modl.ai',
    description: 'At modl.ai, we provide game developers and publishers with technology that helps unlock the potential of their games.',
    tags: ['#Gaming', '#AIforGaming', '#GameTesting'],
    spotlightColor: 'rgba(242, 97, 24, 0.2)',
  },
];

const Projects = () => {
  return (
    <div className="investment-project main-wrapper-projects-page">
      <div className="container">
        <div className="title__">
          <div className="label-arrow">
            <img src="/assets/images/icons/execution.svg" alt="Arrow" />
          </div>
          <h2 className="main-title">
            <small><SplittingText className="brownist-text" text="From Idea to Execution" /></small>
            Projects
          </h2>
        </div>
      </div>

      <div className="project-container container">
        {projectData.map((project) => (
          <div className="card-wrapper" key={project.id}>
            <SpotlightCard
              className="custom-spotlight-card card"
              spotlightColor={project.spotlightColor}
            >
              <div className="phone-section">
                <figure>
                  <img
                    src={`/assets/images/projects/${project.id}.png`}
                    alt={project.title}
                  />
                </figure>
              </div>

              <div className="project-content-section">
                <h1 className="main-title">
                  <span className="brand-subtitle">{project.subtitle}</span>
                  {project.title}
                </h1>
                <p className="description">{project.description}</p>

                <div className="tags">
                  {project.tags.map((tag, index) => (
                    <span className="tag" key={index}>{tag}</span>
                  ))}
                </div>

                <div className="project__cta">
                <Button text="View Project" href={project.weblink} isExternal />

              </div>
              </div>
            </SpotlightCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
