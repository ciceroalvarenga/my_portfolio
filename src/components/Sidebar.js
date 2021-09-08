import React from 'react';

export const Sidebar = () => {
  return (
    <div>
      <img src="" alt="avatar" className="sidebar_avatar" />
      <div className="sidebar_name">
        Sumit <span>Dey</span>
      </div>
      <div className="sidebar_item sidebar_title">Web Developer</div>
      <a href="">
        <div className="sidebar_item">
          <img src="" alt="resume" className="sidebar_icon" />
          Download Resume
        </div>
      </a>
      <figure className="sidebar_social-icons">
        <a href="">
          <img src="" alt="facebook" className="sidebar_icon" />
        </a>
        <a href="">
          <img src="" alt="instagram" className="sidebar_icon" />
        </a>
      </figure>
      <div className="contact">
        <div className="sidebar_item">
          <a href="">
            <img src="" alt="github" className="sidebar_icon" />
            github
          </a>
        </div>
      </div>
    </div>
  );
};
