import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Projects.module.css';
import ProjectItem from '../components/ProjectItem';
import GoToPage from '../components/GoToPage';
import Contact from '../layout/Contact';
import { projects } from '../mock_data/projects';

const Projects: NextPage = () => {
  return (
    <>
      <div className={`container ${styles.container}`}>
        <Head>
          <title>Projects | Ramil Saavedra</title>
        </Head>
        <h1>Projects</h1>
        <p className={styles.subheading}>
          Some of my personal and corporate projects since 2019.
        </p>
        <div className={styles.projectsDiv}>
          {projects &&
            projects.map((project, index) => {
              return (
                <ProjectItem
                  key={index}
                  title={project.title}
                  techs={project.techs}
                  description={project.description}
                  imageSrc={project.imageSrc}
                  homeUrl={project.homeUrl}
                  homeText={project.homeText}
                  codeUrl={project.codeUrl}
                  codeText={project.codeText}
                />
              );
            })}
        </div>
        <GoToPage className={styles.goToAboutButton} href='/snippets'>
          Go to code snippets
        </GoToPage>
      </div>
      <Contact />
    </>
  );
};
export default Projects;
