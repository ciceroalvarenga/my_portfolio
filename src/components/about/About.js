import React from 'react';
import api from '../../assets/icons/api.svg';
import backend from '../../assets/icons/backend.svg';
import algo from '../../assets/icons/algo.svg';
import computer from '../../assets/icons/computer.svg';
import repair from '../../assets/icons/repair.svg';
import puzzle from '../../assets/icons/puzzle.svg';
import { Skillcard } from '../sillcard/Skillcard';
import './about.css';

const skills = [
  {
    icon: computer,
    title: 'Lorem ipsum dolor sit.',
    about: 'Lorem ipsum dolor, sit amet consextetur adipisicing elit.',
  },
  {
    icon: repair,
    title: 'Lorem ipsum dolor sit.',
    about: 'Lorem ipsum dolor, sit amet consextetur adipisicing elit.',
  },
  {
    icon: api,
    title: 'Lorem ipsum dolor sit.',
    about: 'Lorem ipsum dolor, sit amet consextetur adipisicing elit.',
  },
  {
    icon: algo,
    title: 'Lorem ipsum dolor sit.',
    about: 'Lorem ipsum dolor, sit amet consextetur adipisicing elit.',
  },
  {
    icon: puzzle,
    title: 'Lorem ipsum dolor sit.',
    about: 'Lorem ipsum dolor, sit amet consextetur adipisicing elit.',
  },
  {
    icon: backend,
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
