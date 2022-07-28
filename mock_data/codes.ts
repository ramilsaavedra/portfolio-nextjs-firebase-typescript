export interface CodesProps {
  id: number;
  title: string;
  slug: string;
  description: string;
  tech: TechProps;
  code: string;
  body: string;
}

export type TechProps = 'html' | 'css' | 'react' | 'js' | 'ts';

const codes: CodesProps[] = [
  {
    id: 1,
    title: 'Dynamic Square with CSS',
    slug: 'dynamic-square-with-css',
    description: 'Create a responsive square shape with pure css.',
    tech: 'css',
    code: '.square { width: 100%; height: 0; padding-bottom: 100% } ',
    body: '',
  },

  {
    id: 2,
    title: 'createContext with Typescript',
    slug: 'create-context-with-typescript',
    description: 'React createContext() with TS boilerplate.',
    tech: 'react',
    code: '.square { width: 100%; height: 0; padding-bottom: 100% } ',
    body: '',
  },

  {
    id: 3,
    title: 'Button component with Typescript',
    slug: 'button-component-with-typescript',
    description: 'Button component with TS boilerplate.',
    tech: 'react',
    code: '.square { width: 100%; height: 0; padding-bottom: 100% } ',
    body: '',
  },

  {
    id: 4,
    title: 'Common CSS breakpoints',
    slug: 'css-breakpoints-for-responsive-design',
    description: 'Css breakpoints for common devices.',
    tech: 'css',
    code: '.square { width: 100%; height: 0; padding-bottom: 100% } ',
    body: '',
  },
];

export default codes;
