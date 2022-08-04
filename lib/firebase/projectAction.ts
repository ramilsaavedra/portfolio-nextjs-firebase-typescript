import {
  collection,
  query,
  getDocs,
  QuerySnapshot,
  orderBy,
} from 'firebase/firestore/lite';
import { db } from './firebase.config';

export interface ProjectsProps {
  id: string;
  title: string;
  techs: string[];
  description: string;
  imageSrc: string;
  homeUrl: string;
  codeUrl: string;
}

export const fetchProjects = async () => {
  try {
    const projectsRef = collection(db, 'Projects');

    const _query = query(projectsRef, orderBy('timeStamp', 'desc'));

    const querySnapshot: QuerySnapshot = await getDocs(_query);

    const projects: ProjectsProps[] = [];

    querySnapshot.forEach((doc) => {
      const { title, techs, description, imageSrc, homeUrl, codeUrl } =
        doc.data();
      projects.push({
        id: doc.id,
        title,
        techs,
        description,
        imageSrc,
        homeUrl,
        codeUrl,
      });
    });

    return projects;
  } catch (error) {
    console.log(error, 'error');
    return null;
  }
};
