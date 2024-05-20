import classes from './Counter.module.css';
import { useSelector ,useDispatch} from 'react-redux';
import {counterActions } from '../store/index';
const Counter = () => {
  
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();
 
  const incrementHandler = () => { 
    dispatch(counterActions.increment())
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5))
  }
  const decrementHandler = () => { 
    dispatch(counterActions.decrement())
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
}
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>increaseBy5</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
