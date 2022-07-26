import Image from 'next/image';
import React from 'react';
import CustomLink from '../CustomLink';
import style from './ProjectItem.module.css';

interface ProjectItemProps {
  title: string;
  description: string;
  homeUrl?: string;
  homeText?: string;
  codeUrl?: string;
  codeText?: string;
  imageSrc?: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  homeUrl,
  homeText,
  codeUrl,
  codeText,
  imageSrc,
}) => {
  return (
    <div className={style.wrap}>
      <h3 className={style.title}>{title}</h3>
      <p className={style.description}>{description}</p>
      <div className={style.linkDiv}>
        {homeUrl && homeText && (
          <CustomLink type='home' href={homeUrl}>
            {homeText}
          </CustomLink>
        )}
        {codeUrl && codeText && (
          <CustomLink type='code' href={codeUrl}>
            {codeText}
          </CustomLink>
        )}
      </div>
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={title}
          width={760}
          height={350}
          quality={100}
        />
      )}
    </div>
  );
};
export default ProjectItem;
