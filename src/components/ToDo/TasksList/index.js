import React from "react";
import { connect } from "react-redux";
import { deleteTask, updateTask } from "../../../actions/taskCreators";

const TasksList = (props) => {
  const { tasks, updateTaskDispatch, deleteTaskDispatch } = props;
  return (
    <section>
      <h2>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <div style={{ border: "2px solid teal", width: "50%" }}>
                <p>
                  id:{task.id}
                  <input
                    type="checkbox"
                    checked={task.isDone}
                    onChange={({ target: { checked } }) =>
                      updateTaskDispatch(task.id, { isDone: checked })
                    }
                  />
                  <button onClick={() => deleteTaskDispatch(task.id)}>
                    Delete
                  </button>
                </p>
                <h3>{task.body}</h3>
              </div>
            </li>
          ))}
        </ul>
      </h2>
    </section>
  );
};

const mapStateToProps = ({ toDo }) => toDo;
const mapDispatchToProps = (dispatch) => ({
  updateTaskDispatch: (id, values) => dispatch(updateTask(id, values)),
  deleteTaskDispatch: (id) => dispatch(deleteTask(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
