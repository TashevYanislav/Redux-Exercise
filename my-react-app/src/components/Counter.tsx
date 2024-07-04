import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
  incrementAsync,
  decrementAsync
} from "../state/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <p>{count}</p>
      <button onClick={() => dispatch(decrementAsync(100))}>1sec {'>'} - 100</button>
      <button onClick={() => dispatch(decrementByAmount(10))}>-10</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>+10</button>
      <button onClick={() => dispatch(incrementAsync(100))}>1sec {'>'} + 100</button>
    </>
  );
};
export default Counter;
