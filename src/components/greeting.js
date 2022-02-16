import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreetings } from '../Redux/configureStore';

const Greeting = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGreetings());
  }, []);
  return (
    <div>
      <h1>
        hello there
        {state.greeting}
      </h1>
    </div>
  );
};

export default Greeting;
