import React from "react";
import TodoClass from "./todoComponent";
import { Button } from "@material-ui/core";
import "./App.css";
import { FaPlus, FaTrashAlt, FaTasks, FaExclamation } from "react-icons/fa";
class App extends TodoClass {
  state = { todolist: [], presentTodo: "" };
  render() {
    const { todolist } = this.state;
    return (

      <center>
        <div className="todo">
          <div className="container">
            <center className="heading"><h2><FaTasks size={55} color="red" /> TO DO <FaExclamation size={55} color="red" /></h2></center>
            <form
              onSubmit={this.submit}
              className="flex"
              style={{ margin: "15px 0" }}
            >
              <input
                className="todoitem"
                value={this.state.presentTodo}
                required={true}
                onChange={this.change}
                placeholder="Add New TO-DO"
              />
              <Button
                class="btn"
                variant="outlined"
                type="submit"
              >
                <FaPlus color="red" />
              </Button>
            </form>
            <div>
              {todolist.map((todo) => (
                <div
                  key={todo._id}
                  className="flex task_container"
                  style={{ width: "83%" }}

                >
                  <input type="checkbox"
                    className="check"
                    checked={todo.completed}
                    onClick={() => this.update(todo._id)}
                  />
                  <div
                    className={
                      todo.completed ? "task line_through" : "task"
                    }
                  >
                    {todo.todo}
                  </div>
                  <Button
                    onClick={() => this.delete(todo._id)}
                    class="delete "
                  >
                    <FaTrashAlt size={20} />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </center>
    );
  }
}

export default App;