import { useEffect, useReducer, useRef } from "react";

const StopWatch = () => {
  const intialState = {
    timer: 0,
    isRunnig: false
  };
  const [state, dispatch] = useReducer(watchReducer, intialState);
  const idref = useRef(0);

  useEffect(() => {
    if (!state.isRunnig) {
      return;
    }

    idref.current = setInterval(() => dispatch({ type: "tick" }), 1000);
    return () => {
      clearInterval(idref.current);
      idref.current = 0;
    };
  }, [state.isRunnig]);

  return (
    <div className="stopWatch">
      {state.timer}s
      <div>
        <button onClick={() => dispatch({ type: "start" })}> start</button>
        <button onClick={() => dispatch({ type: "stop" })}>stop </button>
        <button onClick={() => dispatch({ type: "reset" })}> Reset</button>
      </div>
    </div>
  );
};

function watchReducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, isRunnig: true };
    case "stop":
      return { ...state, isRunnig: false };
    case "reset":
      return { timer: 0, isRunnig: false };
    case "tick":
      return { ...state, timer: state.timer + 1 };

    default:
      throw new Error();
  }
}

export default StopWatch;
