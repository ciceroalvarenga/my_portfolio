import React from 'react';

export const Resume = () => {
  return (
    <div className="container resume">
      <div className="row">
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card_heading">Education</h4>
          <div className="resume-card_body">
            <h5 className="resume-card_title">Computer Science Enginner</h5>

            <p className="resume-card_name">Academy of Technology</p>

            <p className="resume-card_details">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              alias, perspiciatis impedit id eum nesciunt ullam quia quibusdam
              corporis assumenda amet hic soluta optio! Quod delectus illo quae
              nobis voluptates!
            </p>
          </div>
        </div>
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card_heading">Experience</h4>
          <div className="resume-card_body">
            <h5 className="resume-card_title">Lorem ipsum dolor sit</h5>

            <p className="resume-card_name">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </p>

            <p className="resume-card_details">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              alias, perspiciatis impedit id eum nesciunt ullam quia quibusdam
              corporis assumenda amet hic soluta optio! Quod delectus illo quae
              nobis voluptates!
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language_heading">Language and Frameword</h5>
          <div className="resume-language_body">{}</div>
        </div>
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language_heading">Tools and Sofwares</h5>
          <div className="resume-language_body">{}</div>
        </div>
      </div>
    </div>
  );
};
