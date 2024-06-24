import React from 'react';

const Circle = ({ color, onClick }) => {
  const style = {
    backgroundColor: color,
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'inline-block',
    margin: '5px',
    cursor: 'pointer'
  };

  return <div style={style} onClick={onClick}></div>;
};

export default Circle;
