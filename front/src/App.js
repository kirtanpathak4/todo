import React from "react";
import TodoClass from "./todoComponent";
import { TextField } from "@material-ui/core";
import { Checkbox, Button } from "@material-ui/core";
import "./App.css";
import {FaPlus} from "react-icons/fa";
import {FaTrashAlt} from "react-icons/fa";
import {FaTasks} from "react-icons/fa";
class App extends TodoClass {
  state = { todolist: [], presentTodo: "" };
  render() {
    const { todolist } = this.state;
    return (

      <center>
        <div className="todo">
          <div className="container">
            <center className="heading"><h2><FaTasks size={55}/> TO DO !</h2></center>
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
                placeholder="  Add New TO-DO"
              />
              <Button
                class="btn"
                variant="outlined"
                type="submit"
              >
                 <FaPlus/>
              </Button>
            </form>
            <div>
              {todolist.map((todo) => (
                <div
                  key={todo._id}
                  className="flex task_container"
                  style={{ width: "83%" }}

                >
                  <Checkbox
                    checked={todo.completed}
                    onClick={() => this.update(todo._id)}
                    color="primary"
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
                    <FaTrashAlt/>
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