import React from 'react';

import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';
import github from '../../assets/icons/github.svg';
import pin from '../../assets/icons/pin.svg';
import tie from '../../assets/icons/tie.svg';
import mightycoder from '../../assets/mightycoder.svg';
import resume from '../../assets/meucurriculo.pdf';
import './sidebar.css';

export const Sidebar = () => {
  const handleEmailMe = () => {
    window.open('mailto:contatociceroalvarenga@gmail.com');
  };

  return (
    <div className="sidebar">
      <img src={mightycoder} alt="avatar" className="sidebar_avatar" />
      <div className="sidebar_name">
        Cícero <span>Alvarenga</span>
      </div>
      <div className="sidebar_item sidebar_title">Web Developer</div>
      <a href={resume} download="meucurriculo.pdf">
        <div className="sidebar_item sidebar_resume">
          <img src={tie} alt="resume" className="sidebar_icon" />
          Download Currículo
        </div>
      </a>
      <figure className="sidebar_social-icons my-2">
        <a href="#">
          <img src={facebook} alt="facebook" className="sidebar_icon mr-3" />
        </a>
        <a href="#">
          <img src={instagram} alt="instagram" className="sidebar_icon" />
        </a>
      </figure>
      <div className="sidebar_contact">
        <div className="sidebar_item sidebar_github">
          <a href="#">
            <img src={github} alt="github" className="sidebar_icon" />
            github
          </a>
        </div>
        <div className="sidebar_location">
          <img src={pin} alt="location" className="sidebar_icon mr-3" />
          Franca(SP), Brasil
        </div>
        <div className="sidebar_item">ciceroalvarenga@gmail.com</div>
        <div className="sidebar_item">(16)99231-1698</div>
      </div>
      <div className="sidebar_item sidebar_email" onClick={handleEmailMe}>
        Email me
      </div>
    </div>
  );
};
