import React from 'react';
import api from '../../assets/icons/api.svg';
import { Skillcard } from '../sillcard/Skillcard';

const skills = [
  {
    icon: api,
    title: 'Lorem ipsum dolor sit.',
    about: 'Lorem ipsum dolor, sit amet consextetur adipisicing elit.',
  },
  {
    icon: api,
    title: 'Lorem ipsum dolor sit.',
    about: 'Lorem ipsum dolor, sit amet consextetur adipisicing elit.',
  },
];

export const About = () => {
  return (
    <div className="about">
      <h6 className="about_intro">
        Lorem ipsum dolor, sit amet consextetur adipisicing elit.
      </h6>
      <div className="container about_container">
        <h6 className="about_heading">What Ioffer</h6>
        <div className="row">
          {skills.map((skill) => (
            <Skillcard skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};
