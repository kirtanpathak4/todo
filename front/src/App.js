import React from "react";
import TodoClass from "./todoComponent";
import { TextField } from "@material-ui/core";
import { Checkbox, Button } from "@material-ui/core";
import "./App.css";

class App extends TodoClass {
  state = { todolist: [], presentTodo: "" };
  render() {
    const { todolist } = this.state;
    return (

      <center>
        <div className="todo">
          <div className="container">
            <center className="heading"><h1> TO DO </h1></center>
            <form
              onSubmit={this.submit}
              className="flex"
              style={{ margin: "15px 0" }}
            >
              <TextField
                className="todoitem"
                variant="outlined"
                style={{ width: "75%" }}
                value={this.state.presentTodo}
                required={true}
                onChange={this.change}
                placeholder="Add New TO-DO"
              />
              <Button
                class="btn"
                // variant="outlined"
                type="submit"
              >
                Add task
              </Button>
            </form>
            <div>
              {todolist.map((todo) => (
                <div
                  key={todo._id}
                  className="flex task_container"
                  style={{ width: "90%" }}

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
                    DELETE
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