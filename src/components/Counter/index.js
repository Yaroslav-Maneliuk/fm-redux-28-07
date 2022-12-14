import React from "react";
import { connect } from "react-redux";
import * as CounterCreators from "../../actions/counterCreators";

const Counter = (props) => {
  const { count, step, increment, decrement, setStep } = props;
  const handlerChange = ({ target: { value } }) => {
    setStep(Number(value));
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

const mapStateToProps = ({ counter }) => counter;

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(CounterCreators.increment()),
  decrement: () => dispatch(CounterCreators.decrement()),
  setStep: (newStep) => dispatch(CounterCreators.setStep(newStep)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
