import classes from './Counter.module.css';
import { useSelector ,useDispatch} from 'react-redux';

const Counter = () => {
  const toggleCounterHandler = () => { };
  
  const counter = useSelector(state => state.counter);
  const disatch = useDispatch();

  const incrementHandler = () => { 
    disatch({type:'increment'})
  };
  const increaseHandler = () => {
    disatch({ type: 'increase', amount: 5})
  }
  const decrementHandler = () => { 
    disatch({type:'decrement'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
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
