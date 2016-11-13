import React from 'react';
import { Entity } from 'aframe-react';

import 'aframe-meshline-component';

export default props => {
  const { width, height, color, material, position, ...everythingElse } = props;

  const z = 0.2;
  
  const decreasingLine = {
    lineWidth: 25,
    path:`-0.25 0.5 ${z}, 0.25 -0.5 ${z}`,
    color: color,
  }
  const increasingLine = {
    lineWidth: 25,
    path:`-0.25 -0.5 ${z}, 0.25 0.5 ${z}`,
    color: color,
  }

  return (
    <Entity position = {position}  className="cardOption" {...everythingElse}>
      <Entity meshline={decreasingLine} />
      <Entity meshline={increasingLine} />
    </Entity>
  );
}
