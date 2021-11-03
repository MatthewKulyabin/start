import React, { useEffect, useState, useRef, useCallback } from 'react';
import CardWrapper from '../../common/Card';
import SmallTitle from '../../common/typografy/smallTitle';

const UseCallBackExample = () => {
  const [data, setData] = useState({});
  const withoutCallback = useRef(0);
  const withCallback = useRef(0);

  const handleChange = ({ target }) => {
    setData((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const validateWithoutCallback = (data) => {
    console.log(data);
  };

  const validateWithCallback = useCallback((data) => {
    console.log(data);
  }, []);

  useEffect(() => {
    validateWithoutCallback(data);
    validateWithCallback(data);
  }, [data]);

  useEffect(() => {
    withoutCallback.current += 1;
  }, [validateWithoutCallback]);

  useEffect(() => {
    withCallback.current += 1;
  }, [validateWithCallback]);

  return (
    <CardWrapper>
      <SmallTitle>Example</SmallTitle>
      <p>Render withoutCallback: {withoutCallback.current}</p>
      <p>Render withCallback: {withCallback.current}</p>
      <label htmlFor="email" className="form-label">
        Email
      </label>
      <input
        name="email"
        type="email"
        className="form-control"
        id="email"
        value={data.email || ''}
        onChange={handleChange}
      />
    </CardWrapper>
  );
};

export default UseCallBackExample;
