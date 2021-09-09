import React from 'react';

export const Skillcard = ({ skill }) => {
  return (
    <div className="col-lg-6">
      <div className="skill-card">
        <img src={skill.icon} alt="icon" className="skill-card_icon" />
        <div className="skill-card-body">
          <h6 className="skill-card_title">{skill.title}</h6>
          <p className="skill_card_content">{skill.about}</p>
        </div>
      </div>
    </div>
  );
};
