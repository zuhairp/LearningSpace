import React from 'react';
import { Entity } from 'aframe-react';

import Text from './primitives/Text';
import Plane from './primitives/Plane';

export default props => {
  const { text, position, scale, color } = props;
  return (
    <Entity position={position}>
      <Plane height={1.5} width={3} rotation={[-15, 0, 0]} color={color}/>
      <Text text={text} color="purple" position={[-1, 0, 0.4]} rotation={[-15,0,0]} scale={[scale, scale, scale]} />
    </Entity>
  )
};
