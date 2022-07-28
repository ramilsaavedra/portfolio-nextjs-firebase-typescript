import Image from 'next/image';
import React from 'react';
import CustomLink from '../CustomLink';
import style from './ProjectItem.module.css';

interface ProjectItemProps {
  title: string;
  techs?: string[];
  description: string;
  homeUrl?: string | null;
  homeText?: string | null;
  codeUrl?: string | null;
  codeText?: string | null;
  imageSrc?: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  techs,
  description,
  homeUrl,
  homeText,
  codeUrl,
  codeText,
  imageSrc,
}) => {
  return (
    <div className={style.wrap}>
      <h4 className={style.title}>{title}</h4>
      {techs && (
        <div className={style.techWrap}>
          <p>Tech:</p>
          <div className={style.techItemWrap}>
            {techs.map((tech, index) => {
              return (
                <div className={style.techItem} key={index}>
                  {tech}
                </div>
              );
            })}
          </div>
        </div>
      )}
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
