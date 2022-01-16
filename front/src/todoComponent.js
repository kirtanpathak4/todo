import { Component } from "react";
import { addTodos, getTodos, updateTodos, deleteTodos } from "./services/todoServices";

class TodoClass extends Component {
    state = { todolist: [], presentTodo: "" };

    async componentDidMount() {
        try {
            const { data } = await getTodos();
            this.setState({ todolist: data });
        } catch (error) {
            console.log(error);
        }
    }

    change = ({ currentTarget: input }) => {
        this.setState({ presentTodo: input.value });
    };

    submit = async(e) => {
        e.preventDefault();
        const originalTasks = this.state.todolist;
        try {
            const { data } = await addTodos({ todo: this.state.presentTodo });
            const todolist = originalTasks;
            todolist.push(data);
            this.setState({ todolist, presentTodo: "" });
        } catch (error) {
            console.log(error);
        }
    };

    update = async(presentTodo) => {
        const originalTasks = this.state.todolist;
        try {
            const todolist = [...originalTasks];
            const index = todolist.findIndex((todo) => todo._id === presentTodo);
            todolist[index] = {...todolist[index] };
            todolist[index].completed = !todolist[index].completed;
            this.setState({ todolist });
            await updateTodos(presentTodo, {
                completed: todolist[index].completed,
            });
        } catch (error) {
            this.setState({ todolist: originalTasks });
            console.log(error);
        }
    };

    delete = async(presentTodo) => {
        const originalTasks = this.state.todolist;
        try {
            const todolist = originalTasks.filter(
                (todo) => todo._id !== presentTodo
            );
            this.setState({ todolist });
            await deleteTodos(presentTodo);
        } catch (error) {
            this.setState({ todolist: originalTasks });
            console.log(error);
        }
    };
}

export default TodoClass;