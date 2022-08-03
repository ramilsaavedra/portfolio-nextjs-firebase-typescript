import type { NextPage, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styles from '../styles/Projects.module.css';
import ProjectItem from '../components/ProjectItem';
import GoToPage from '../components/GoToPage';
import Contact from '../layout/Contact';
import { fetchProjects } from '../lib/firebase/projectAction';

const Projects: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  projects,
}) => {
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
                  homeText='Visit website'
                  codeUrl={project.codeUrl}
                  codeText='View source code'
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

export const getStaticProps = async () => {
  const projects = await fetchProjects();

  return { props: { projects } };
};

export default Projects;
