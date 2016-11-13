import { Entity } from 'aframe-react';
import React from 'react';

import 'aframe-text-component';

export default props => {
  const { text, color, ...everythingElse } = props;
  return <Entity text={{text: text}} material={{color: props.color}} {...everythingElse} />
};
