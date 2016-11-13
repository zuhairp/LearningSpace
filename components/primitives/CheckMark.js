import React from 'react';
import { Entity } from 'aframe-react';

import 'aframe-meshline-component';
import 'aframe-animation-component';

export default props => {
  const { width, height, color, material, position, ...everythingElse } = props;

  const geometryProps = { primitive: 'plane', height, width };
  const materialProps = material || { side: 'double', color };

  const z = 0.2;
  const checkMarkParams = {
    lineWidth: 25,
    path:`-0.5 0 ${z}, -0.25 -0.5 ${z}, 0 0.5 ${z}`,
    color: '#121212',
  }

  const colorAnimation = {
    property: "color",
    to: color,
  }

  return (
    <Entity position={position} {...everythingElse}>
      <Entity onClick={e => console.log(e)} meshline={checkMarkParams} animation={colorAnimation} updateRaycaster="#cursor" className="cardOption" />
    </Entity>
  );
}
