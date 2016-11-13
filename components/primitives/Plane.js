import React from 'react';
import { Entity } from 'aframe-react';

export default props => {
  const { width, height, color, material, ...everythingElse } = props;

  const geometryProps = { primitive: 'plane', height, width };
  const materialProps = material || { side: 'double', color };

  return <Entity geometry={geometryProps} material={materialProps} {...everythingElse} />
}
