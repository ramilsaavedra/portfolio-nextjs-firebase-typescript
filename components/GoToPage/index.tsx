import React from 'react';
import Link from 'next/link';
import style from './GoToPage.module.css';

interface GoToPageProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const GoToPage: React.FC<GoToPageProps> = ({ children, href, className }) => {
  return (
    <Link href={href}>
      <div className={`${className} ${style.wrap}`}>
        <p className={style.text}>{children}</p>
        <svg
          width='15'
          height='7'
          viewBox='0 0 15 7'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M14 3.59223L14.3269 3.97056L14.7647 3.59223L14.3269 3.2139L14 3.59223ZM10.6731 1.37833L13.6731 3.97056L14.3269 3.2139L11.3269 0.621671L10.6731 1.37833ZM13.6731 3.2139L10.6731 5.80614L11.3269 6.5628L14.3269 3.97056L13.6731 3.2139ZM14 3.09223H0V4.09223H14V3.09223Z'
            fill='var(--primary)'
          />
        </svg>
      </div>
    </Link>
  );
};
export default GoToPage;
