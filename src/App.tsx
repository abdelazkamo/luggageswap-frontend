import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store/actions';

function App() {
  const counter = useSelector((state: any) => state.app.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
