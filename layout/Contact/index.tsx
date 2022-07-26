import React from 'react';
import style from './Contact.module.css';
import Button from '../../components/Button';

const Contact: React.FC = () => {
  return (
    <div className={style.wrap}>
      <h2 className={style.title}>Get in touch</h2>
      <p className={style.description}>
        If you have any questions, talk about new opportunities or just want to
        say hi, feel free to contact me
      </p>
      <a
        href='mailto:rdsaavedra15@gmail.com?subject=Hi!'
        className={style.emailMeButton}
        target='_blank'
        rel='noreferrer'
      >
        Say Hi!
      </a>
    </div>
  );
};
export default Contact;
