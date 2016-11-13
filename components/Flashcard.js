import React from 'react';
import { Entity } from 'aframe-react';

import Text from './primitives/Text';
import Plane from './primitives/Plane';
import CheckMark from './primitives/CheckMark';

export default props => {
  const { text, position, scale, color } = props;
  return (
    <Entity position={position}>
      <Plane height={1.5} width={5} rotation={[-15, 0, 0]} color={color}/>
      <Text text={text} color="purple" position={[-1, 0, 0.4]} rotation={[-15,0,0]} scale={[scale, scale, scale]} />
      <CheckMark color="green" position={[2,0,0]} />
    </Entity>
  )
};
