import React from 'react';
import scss from './Footer.module.scss';
const Footer = () => {
  return (
    <footer className={scss.footer}>
      <div className="container">
        <div className={scss.content}>
          <h1>Footer</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
