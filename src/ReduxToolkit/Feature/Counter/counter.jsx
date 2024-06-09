import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./CounterSlice";

export function Counter() {
  const { value } = useSelector((state) => state.counter);
  console.log(value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{value}</h1>
      <div>
        <button onClick={() => dispatch(increment())}> + </button>
      </div>
      <div>
        <button
          style={{ margin: "20px" }}
          onClick={() => dispatch(decrement())}
        >
          {" "}
          -{" "}
        </button>
      </div>
    </div>
  );
}
