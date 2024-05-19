import classes from './Counter.module.css';
import { useSelector ,useDispatch} from 'react-redux';

const Counter = () => {
  const toggleCounterHandler = () => { };
  
  const counter = useSelector(state => state.counter);
  const disatch = useDispatch();

  const incrementHandler = () => { 
    disatch({type:'increment'})
  };
  const decrementHandler = () => { 
    disatch({type:'decrement'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>incrementBy5</button>
        <button onClick={decrementHandler}>decrementBy5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
