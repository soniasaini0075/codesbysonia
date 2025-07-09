'use client';

import React from 'react';
import { SplittingText } from '@/components/animate-ui/text/splitting';
import SpotlightCard from '@/app/widgets/SpotlightCard/SpotlightCard';
import './projects.scss';

// Step 2: Project Data Array
const projectData = [
  {
    id: 'project1',
    subtitle: 'Leading Global UI UX Design Agency',
    title: 'Onething Design Studio',
    description: 'Redesigned the onboarding process, increasing the percentage of users successfully completing account setup, leading to a smoother user journey.',
    tags: ['#Mutual Funds', '#Fintech', '#User Journey'],
    spotlightColor: 'rgba(233, 16, 16, 0.2)',
  },
  {
    id: 'project2',
    subtitle: 'FINANCIAL PLATFORM',
    title: 'MyMoneyMantra',
    description: 'Developed a responsive UI that helped users find personalized loan offers faster, improving engagement by 30%.',
    tags: ['#Loans', '#Responsive Design', '#React'],
    spotlightColor: 'rgba(137, 193, 66, 0.2)',
  },
  {
    id: 'project3',
    subtitle: 'BANKING PORTAL',
    title: 'Enhanced credit card application for Kotak Bank',
    description: 'Reimagined the credit card apply page, resulting in higher lead conversion and reduced drop-offs.',
    tags: ['#Banking', '#Accessibility', '#Lead Gen'],
    spotlightColor: 'rgba(242, 97, 24, 0.2)',
  },
  {
    id: 'project4',
    subtitle: 'DIGITAL TRANSFORMATION',
    title: 'UX revamp for RBL Bank digital channels',
    description: 'Led the redesign of RBL’s mobile and web platforms, delivering a clean, unified brand experience.',
    tags: ['#UX Design', '#Mobile First', '#Strategy'],
    spotlightColor: 'rgba(24, 144, 255, 0.2)',
  },
];

const Projects = () => {
  return (
    <div className="investment-project">
      <div className="container">
        <div className="title__">
          <div className="label-arrow">
            <img src="/assets/images/icons/execution.svg" alt="Arrow" />
          </div>
          <SplittingText className="brownist-text" text="From Idea to Execution" />
          <h2 className="main-title">Projects</h2>
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

              <div className="content-section">
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

                <div className="view-project">
                  <span>View Project</span>
                  <div className="arrow">→</div>
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
