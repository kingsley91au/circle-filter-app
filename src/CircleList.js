import React from 'react';
import Circle from './Circle';

//Show all colours in the list
const CircleList = ({ circles, onCircleClick }) => {
  return (
    <div>
      {circles.map(circle => (
        <Circle key={circle.id} color={circle.color} onClick={() => onCircleClick(circle.color)} />
      ))}
    </div>
  );
};

export default CircleList;
