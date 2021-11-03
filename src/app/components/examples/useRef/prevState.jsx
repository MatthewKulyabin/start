import React, { useRef, useEffect, useState } from 'react';

import CardWrapper from '../../common/Card';
import SmallTitle from '../../common/typografy/smallTitle';
import Divider from '../../common/divider';

const PrevStateExample = () => {
  const prev = useRef('');
  const [otherState, setOtherState] = useState('false');

  const toggleOtherState = () => {
    setOtherState((prev) => (prev === 'false' ? 'true' : 'false '));
  };

  useEffect(() => {
    prev.current = otherState;
  }, [otherState]);

  return (
    <CardWrapper>
      <SmallTitle>Предыдущее состояние</SmallTitle>
      <Divider />
      <p>prev State : {prev.current}</p>
      <p>current State : {otherState}</p>
      <button className="btn btn-primary" onClick={toggleOtherState}>
        Toggle Other State
      </button>
    </CardWrapper>
  );
};

export default PrevStateExample;
