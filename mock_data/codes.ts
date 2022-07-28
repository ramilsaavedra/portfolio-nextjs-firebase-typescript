export interface CodesProps {
  id: number;
  title: string;
  slug: string;
  description: string;
  tech: TechProps;
  code: string;
  body: string;
}

export type TechProps = 'html' | 'css' | 'tsx' | 'jsx' | 'ts' | 'js';

const codes: CodesProps[] = [
  {
    id: 1,
    title: 'Dynamic Square with CSS',
    slug: 'dynamic-square-with-css',
    description: 'Create a responsive square shape with pure css.',
    tech: 'css',
    code: `.square { 
      width: 100%; 
      height: 0; 
      padding-bottom: 100% 
    }`,
    body: '',
  },

  {
    id: 2,
    title: 'Button Component with TS',
    slug: 'react-button-component-with-typescript',
    description: 'React button component with typescript',
    tech: 'tsx',
    code: `
    import React from 'react';
    
    type ButtonProps = {
      children?: React.ReactNode;
      variant?: 'secondary';
    };
    
    const Button: React.FC<
      ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
    > = ({ variant, children, className, ...props }) => {
      return (
        <button
          {...props}
          className={\`\${className} \${style.button} \${
            variant === 'secondary' && style['button-secondary']
          }\`}
        >
          {children}
        </button>
      );
    };
    
    export default Button;
    `,
    body: '',
  },

  {
    id: 3,
    title: 'CreateContext with Typescript',
    slug: 'createcontext-with-typescript',
    description: 'createcContext hook sample use case',
    tech: 'tsx',
    code: `
    import React, { createContext, useState } from 'react';

    interface NotificationProps {
      type: 'success' | 'error' | null;
      message: string | null;
    }
    
    interface NotificationContextInterface {
      notification: NotificationProps;
      notificationHandler: (notification: NotificationProps) => void;
    }
    
    interface NotificationProviderProps {
      children?: React.ReactNode;
    }
    
    const defaultContext: NotificationContextInterface = {
      notification: { type: null, message: null },
      notificationHandler: () => {},
    };
    
    const NotificationContext =
      createContext<NotificationContextInterface>(defaultContext);
    
    let timeout: ReturnType<typeof setTimeout>;
    
    export const NotificationProvider: React.FC<NotificationProviderProps> = ({
      children,
    }) => {
      const [notification, setNotification] = useState({
        type: null,
        message: null,
      });
    
      const notificationHandler = (notification: NotificationProps) => {
        setNotification(notification);
        clearNotification();
      };
    
      const clearNotification = () => {
        clearTimeout(timeout);
    
        timeout = setTimeout(() => {
          setNotification({ type: null, message: null });
        }, 3000);
      };
    
      return (
        <NotificationContext.Provider
          value={{
            notification: notification,
            notificationHandler: notificationHandler,
          }}
        >
          {children}
        </NotificationContext.Provider>
      );
    };
    
    export default NotificationContext;
    `,
    body: '',
  },

  {
    id: 4,
    title: 'Common CSS breakpoints',
    slug: 'css-breakpoints-for-responsive-design',
    description: 'Css breakpoints for common devices.',
    tech: 'css',
    code: `
    @media only screen and (max-width: 595px) {
      ...;
    }
    
    /* Small screen devices (600px and above) */
    @media only screen and (min-width: 600px) {
      ...;
    }
    
    /* Medium screen devices (768px and above) */
    @media only screen and (min-width: 768px) {
      ...;
    }
    
    /* Big screen devices (889px and above) */
    @media only screen and (min-width: 889px) {
      ...;
    }
    
    /* Extra big screen devices (1200px and above) */
    @media only screen and (min-width: 1200px) {
      ...;
    }
    
    `,
    body: '',
  },

  {
    id: 5,
    title: 'Theme Changer using next-themes',
    slug: 'theme-change-using-next-themes',
    description: 'Easily change theme in nextjs project',
    tech: 'tsx',
    code: `
    import React, { useState, useEffect } from 'react';
    import { useTheme } from 'next-themes';
    import style from './ThemeChanger.module.css';
    
    const ThemeChanger: React.FC = () => {
      const [mounted, setMounted] = useState(false);
      const { theme, setTheme } = useTheme();
    
      useEffect(() => setMounted(true), []);
    
      const onClick = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      };
    
      if (!mounted) return null;
      return (
        <div className={style.wrap} onClick={onClick}>
          {theme === 'light' ? (
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M20.9999 12.79C20.8426 14.4922 20.2038 16.1144 19.1581 17.4668C18.1125 18.8192 16.7034 19.8458 15.0956 20.4265C13.4878 21.0073 11.7479 21.1181 10.0794 20.7461C8.41092 20.3741 6.8829 19.5345 5.67413 18.3258C4.46536 17.117 3.62584 15.589 3.25381 13.9205C2.88178 12.252 2.99262 10.5121 3.57336 8.9043C4.15411 7.29651 5.18073 5.88737 6.53311 4.84175C7.8855 3.79614 9.5077 3.15731 11.2099 3C10.2133 4.34827 9.73375 6.00945 9.85843 7.68141C9.98312 9.35338 10.7038 10.9251 11.8893 12.1106C13.0748 13.2961 14.6465 14.0168 16.3185 14.1415C17.9905 14.2662 19.6516 13.7866 20.9999 12.79V12.79Z'
                stroke='#222222'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          ) : (
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z'
                stroke='#EEEEEE'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M12 1V3'
                stroke='#EEEEEE'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M12 21V23'
                stroke='#EEEEEE'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M4.22 4.22L5.64 5.64'
                stroke='#EEEEEE'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M18.36 18.36L19.78 19.78'
                stroke='#EEEEEE'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M1 12H3'
                stroke='#EEEEEE'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M21 12H23'
                stroke='#EEEEEE'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M4.22 19.78L5.64 18.36'
                stroke='#EEEEEE'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M18.36 5.64L19.78 4.22'
                stroke='#EEEEEE'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          )}
        </div>
      );
    };
    export default ThemeChanger;
    
    `,
    body: '',
  },
];

export default codes;
