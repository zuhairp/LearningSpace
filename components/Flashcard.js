import React from 'react';
import { Entity } from 'aframe-react';

import Text from './primitives/Text';
import Plane from './primitives/Plane';
import CheckMark from './primitives/CheckMark';
import Incorrect from './primitives/Incorrect';

export default props => {
  const { text, position, scale, color } = props;
      // <CheckMark color="green" position={[2,0,0]} />
  return (
    <Entity position={position} rotation={[-15,0,0]}>
      <Plane height={1.5} width={5} rotation={[-15, 0, 0]} color={color}/>
      <Text text={text} color="purple" position={[-1, 0, 0.4]} scale={[scale, scale, scale]} />

      <CheckMark color="green" position={[2,0,0]} />
      <Incorrect color="red" position={[-2,0,0]} />
    </Entity>
  )
};
