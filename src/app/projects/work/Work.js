'use client';

import React from 'react';
import { SplittingText } from '@/components/animate-ui/text/splitting';
import SpotlightCard from '@/app/widgets/SpotlightCard/SpotlightCard';
import Button from '../../widgets/buttons/Button';

import './work.scss';

// Step 2: Project Data Array
const projectData = [
  {
    id: 'project1',
    weblink: "https://onething.design/",
    subtitle: 'Leading Global UI UX Design Agency',
    title: 'Onething Design Studio',
    description: 'Global UI UX design agency building innovative user experiences to scale up growth for businesses.',
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
    id: 'project10',
    weblink: "https://indiaai.gov.in/",
    subtitle: 'Artificial intelligence',
    title: 'India AI',
    description: 'The Ministry of Electronics and Information Technology for leveraging transformative technologies to foster inclusion, adoption for social impact.',
    tags: ['#AI', '#IndiaAI', '#MinistryofElectronics&IT'],
    spotlightColor: 'rgba(228, 90, 38, 0.2)',
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
  {
    id: 'project12',
    weblink: "https://designsbyprateek.netlify.app/",
    subtitle: 'Leading Global UI UX Design Agency',
    title: 'Designs by Prateek',
    description: 'Build high-end designs and scalable products right from the day one. In order to ensure the best product for the end-users.',
    tags: ['#UXDesigner', '#DesignStudio', '#DesignerPortfolio'],
    spotlightColor: 'rgba(0, 120, 253, 0.2)',
  },
  {
    id: 'project4',
    weblink: "https://rbl-track-you-card.netlify.app/",
    subtitle: 'Track your card',
    title: 'RBL Bank',
    description: 'RBL provides services including savings and current accounts, credit and debit cards, fixed deposits, investment services, mobile and internet banking, loans.',
    tags: ['#BankService', '#Banking', '#TrackYourCard'],
    spotlightColor: 'rgba(242, 97, 24, 0.2)',
  },
  {
    id: 'project5',
    weblink: "https://genes-campaign.netlify.app/",
    subtitle: 'Indo-French ready-to-wear brand',
    title: 'Genes Lecoanet Hemant',
    description: 'The Lecoanet Hemant brand has received numerous awards and has pieces in prestigious museum collections, such as the Victoria and Albert Museum in London. ',
    tags: ['#Fashion', '#Designer', '#geneslecoanethemant'],
    spotlightColor: 'rgba(151, 153, 148, 0.2)',
  },
  {
    id: 'project6',
    weblink: "https://gensol-dashboard.netlify.app/",
    subtitle: 'AI tools for video game studios',
    title: 'Gensol Engineering',
    description: 'Gensol offers technical due diligence, detailed engineering, quality control, construction supervision, and other consulting services for solar projects. ',
    tags: ['#EVManufacturing', '#EVLeasing', '#SolarPVSystems'],
    spotlightColor: 'rgba(95, 223, 251, 0.2)',
  },
  {
    id: 'project7',
    weblink: "https://prescinto.netlify.app/",
    subtitle: 'Clean Energy Plan',
    title: 'Prescinto',
    description: 'Prescinto is an AI-powered platform to manage and optimize the end-to-end operations of any clean energy plant. ',
    tags: ['#CleanEnergy', '#EnergyPlant', '#IBM'],
    spotlightColor: 'rgba(106, 174, 237, 0.2)',
  },
  {
    id: 'project8',
    weblink: "https://pholio-web.netlify.app/",
    subtitle: 'Photo Prints',
    title: 'Pholio App',
    description: 'Choose your favorite photos, customize your frames, and let Pholio do the rest. Print, frame, and share meaningful moments — beautifully.',
    tags: ['#Frames', '#PhotoTiles', '#Memories'],
    spotlightColor: 'rgba(102, 102, 102, 0.2)',
  },
  {
    id: 'project9',
    weblink: "https://onething-2020.netlify.app/",
    subtitle: 'Leading Global UI UX Design Agency',
    title: 'Onething 2020',
    description: 'Global UI UX design agency building innovative user experiences to scale up growth for businesses.',
    tags: ['#UIUXAgency', '#DesignStudio', '#CompanyPortfolio'],
    spotlightColor: 'rgba(233, 16, 16, 0.2)',
  },
  {
    id: 'project11',
    weblink: "https://prateeksainidesign.netlify.app/",
    subtitle: 'Leading Global UI UX Design Agency',
    title: 'Designs by Prateek',
    description: 'Build high-end designs and scalable products right from the day one. In order to ensure the best product for the end-users.',
    tags: ['#UXDesigner', '#DesignStudio', '#DesignerPortfolio'],
    spotlightColor: 'rgba(16, 47, 201, 0.2)',
  }
];

const Work = () => {
  return (
    <section className="project-listing">
      <div className="main-projects main-wrapper-projects-page">
        <div className="container">
          <div className="title__">
            <h2 className="main-title">
              <small><SplittingText className="brownist-text" text="From Idea to Execution" /></small>
              Bridging Design & Development with Precision
            </h2>
          </div>
          <p className="p-desc">Each project you see here is a result of close collaboration, clean architecture, and a deep respect for both design aesthetics and frontend engineering. Scroll through to explore the interfaces I’ve crafted — where every pixel and interaction is intentional</p>
        </div>

        <div className="project-container container parent">
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
    </section>
    );
};

export default Work;
