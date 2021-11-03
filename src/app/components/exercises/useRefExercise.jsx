import React, { useState, useEffect, useRef } from 'react';
import CollapseWrapper from '../common/collapse';
const UseRefExercise = () => {
  const blockRef = useRef();
  const [state, setState] = useState();

  const handleBlockChange = ({ target }) => {
    // const target = blockRef.current;
    // target.textContent = 'text';
    // target.style.height = '150px';
    // target.style.width = '80px';
    blockRef.current.style.height = '150px';
    blockRef.current.style.width = '80px';
    blockRef.current.textContent = 'text';
    console.log(blockRef.current);
    setState(1);
  };

  return (
    <CollapseWrapper title="Упражнение">
      <p className="mt-3">
        У вас есть блок, у которого заданы ширина и высота. Добавьте кнопку, при
        нажатии которой изменятся следующие свойства:
      </p>
      <ul>
        <li>Изменится содежимое блока на &quot;text&quot;</li>
        <li>высота и ширина станут равны 150 и 80 соответственно</li>
      </ul>
      <div
        ref={blockRef}
        className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
        style={{
          height: 40,
          width: 60,
          color: 'white',
        }}
      >
        <small>Блок</small>
      </div>

      <button className="btn btn-primary" onClick={handleBlockChange}>
        Change Block
      </button>
    </CollapseWrapper>
  );
};

export default UseRefExercise;
