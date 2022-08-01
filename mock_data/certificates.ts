export interface CertificatesProps {
  id: number;
  title: string;
  instructor: string;
  src: string;
  link: string;
}

export const certificates: CertificatesProps[] = [
  {
    id: 2,
    title: 'React Front To Back (2022)',
    instructor: 'Brad Traversy',
    src: '/static/images/certificates/react-front-to-back-2022.jpg',
    link: 'https://www.udemy.com/certificate/UC-ff6e4a69-6333-408c-92a8-c42cf023fed7/',
  },
  {
    id: 3,
    title: "Typescript: The Complete Developer's Guide",
    instructor: 'Stephen Grider',
    src: '/static/images/certificates/typescript-the-complete-developers-guide.jpg',
    link: 'https://www.udemy.com/certificate/UC-1976355d-9839-4c6e-b4ab-6512420b128e/',
  },
  {
    id: 1,
    title: 'Complete React Developer in 2021 (w/ Redux, Hooks, GraphQL)',
    instructor: 'Zero To Mastery',
    src: '/static/images/certificates/complete-react-developer-in-2021.jpg',
    link: 'https://www.udemy.com/certificate/UC-aa114ad1-63d4-4cf8-8d7d-1ea70c30ea3e/',
  },
  {
    id: 4,
    title: 'React Front To Back (2020)',
    instructor: 'Brad Traversy',
    src: '/static/images/certificates/react-front-to-back.jpg',
    link: 'https://www.udemy.com/certificate/UC-9fc7aaec-53b4-4cdb-8f7b-555bcb1c671d/',
  },
];
