import React from 'react';
import style from './Contact.module.css';
import Button from '../../components/Button';
import LinkButton from '../../components/LinkButton';

const Contact: React.FC = () => {
  return (
    <div className={`container ${style.wrap}`}>
      <h2 className={style.title}>Get in touch</h2>
      <p className={style.description}>
        If you have any questions, talk about new opportunities or just want to
        say hi, feel free to contact me
      </p>
      <LinkButton href='mailto:rdsaavedra15@gmail.com?subject=Hi!'>
        Say Hi!
      </LinkButton>
    </div>
  );
};
export default Contact;
