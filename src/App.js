import React from "react";
import { connect } from "react-redux";

const App = (props) => {
  const { count, dispatch, step } = props;
  const increment = () => {
    const action = { type: "INCREMENT" };
    dispatch(action);
  };
  const decrement = () => {
    const action = { type: "DECREMENT" };
    dispatch(action);
  };

  const handlerChange = ({ target: { value } }) => {
    const action = { type: "SET_STEP", newStep: Number(value) };
    dispatch(action);
  };

  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <input type="number" value={step} onChange={handlerChange}></input>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App);

/*
store - общее хранилище js object
reducer - чистая функция (state.action)=>newState
dspatch - функция передвалальщик action
action - object {type:""}
connect - HOC, которая откусывает нужное состояние
 */
