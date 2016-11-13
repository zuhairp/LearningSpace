import React from 'react';
import { Entity } from 'aframe-react';

export default props => {
  const cursorProps = {
    fuse: true,
    fuseTimeout:500,
  };
  const cursorGeometry = {
    primitive: 'ring',
    radiusOuter: 0.300,
    radiusInner: 0.200,
  };

  const raycasterProps = {
    objects: '.cardOption',
  }

  const materialProps = {
    color: 'black',
    shader: 'flat',
  }

  const colorAnimation = {
    startEvents: ["click"],
    property: "scale",
    to: [3.2,3.2,3.2],
  }

  return (
    <Entity camera look-controls wasd-controls position={[0,1,0]}>
      <Entity id="cursor" animation={colorAnimation} raycaster={raycasterProps} cursor={cursorProps} position={[0,0,-1]} geometry={cursorGeometry} material={materialProps} />
    </Entity>
  );
}
