import {
  collection,
  query,
  getDocs,
  QuerySnapshot,
  orderBy,
} from 'firebase/firestore/lite';
import { db } from './firebase.config';

export interface CertificatesProps {
  id: string;
  title: string;
  instructor: string;
  imageSrc: string;
  link: string;
}

export const fetchCertificates = async () => {
  try {
    const certificatesRef = collection(db, 'Certificates');

    const _query = query(certificatesRef, orderBy('timeStamp', 'desc'));

    const querySnapshot: QuerySnapshot = await getDocs(_query);

    const certificates: CertificatesProps[] = [];

    querySnapshot.forEach((doc) => {
      const { title, instructor, imageSrc, link } = doc.data();
      certificates.push({
        id: doc.id,
        title,
        instructor,
        link,
        imageSrc,
      });
    });

    return certificates;
  } catch (error) {
    console.log(error, 'error');
    return null;
  }
};
