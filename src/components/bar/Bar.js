import React, { useEffect, useState } from 'react';
import './bar.css';

export const Bar = ({ value: { icon, name, level } }) => {
  const [style, setStyle] = useState({});
  const [translucit, setTranslucit] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${level}%`,
    };
    setStyle(newStyle);
  });

  return (
    <>
      <div className="bar">
        <div className="bar_wrapper" style={style}>
          <span className="bar_name">
            <img src={icon} alt="icon" className="bar_icon mr-2" />
            {name}
          </span>
        </div>
        <div className="spnier" />
      </div>
    </>
  );
};
