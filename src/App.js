import React from "react";
import Counter from "./components/Counter/index";
import TaskForm from "./components/ToDo/TaskForm";
import TasksList from "./components/ToDo/TasksList";

const App = (props) => {
  return (
    <>
      <Counter />
      <hr />
      <hr />
      <hr />
      <TaskForm />
      <TasksList />
    </>
  );
};

export default App;

/*
store - общее хранилище js object
reducer - чистая функция (state,action)=> newState
dispatch - функция-передавальщик action 
action - object {type:''}
connect - HOC, которая подмешивает store
mapStateToProps - функция которая откусывает нужное состояние
Provider - компонент, который делится сторой
*/
