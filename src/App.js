import React from "react";
import { connect } from "react-redux";
import * as CounterCreators from "./actions/counterCreators";

const App = (props) => {
  const { count, dispatch, step } = props;
  const increment = () => {
    dispatch(CounterCreators.increment());
  };
  const decrement = () => {
    dispatch(CounterCreators.decrement());
  };
  const handlerChange = ({ target: { value } }) => {
    dispatch(CounterCreators.setStep(Number(value)));
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

const mapStateToProps = ({ count, step }) => ({ count, step });

export default connect(mapStateToProps)(App);

/*
store - общее хранилище js object
reducer - чистая функция (state,action)=> newState
dispatch - функция-передавальщик action 
action - object {type:''}
connect - HOC, которая подмешивает store
mapStateToProps - функция которая откусывает нужное состояние
Provider - компонент, который делится сторой
*/
