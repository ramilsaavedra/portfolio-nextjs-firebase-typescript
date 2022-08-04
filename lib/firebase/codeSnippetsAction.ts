import {
  collection,
  query,
  getDocs,
  QuerySnapshot,
  where,
} from 'firebase/firestore/lite';
import { db } from './firebase.config';

export interface CodesProps {
  id: string;
  title: string;
  slug: string;
  description: string;
  tech: TechProps;
  code: string;
}

export type TechProps = 'html' | 'css' | 'tsx' | 'jsx' | 'ts' | 'js';

export const fetchCodeSnippets = async () => {
  try {
    const codeSnippetsRef = collection(db, 'CodeSnippets');

    const _query = query(codeSnippetsRef);

    const querySnapshot: QuerySnapshot = await getDocs(_query);

    const codeSnippets: CodesProps[] = [];

    querySnapshot.forEach((doc) => {
      const { title, slug, description, tech, code } = doc.data();
      codeSnippets.push({
        id: doc.id,
        title,
        slug,
        description,
        tech,
        code,
      });
    });

    return codeSnippets;
  } catch (error) {
    console.log(error, 'error');
    return null;
  }
};

export const fetchCodeSnippet: (
  params: string
) => Promise<CodesProps | null> = async (params) => {
  try {
    const codeSnippetsRef = collection(db, 'CodeSnippets');

    const _query = query(codeSnippetsRef, where('slug', '==', params));

    const querySnapshot: QuerySnapshot = await getDocs(_query);

    const codeSnippets: CodesProps[] = [];

    querySnapshot.forEach((doc) => {
      const { title, slug, description, tech, code } = doc.data();
      codeSnippets.push({
        id: doc.id,
        title,
        slug,
        description,
        tech,
        code,
      });
    });

    return codeSnippets[0];
  } catch (error) {
    console.log(error, 'error');
    return null;
  }
};
