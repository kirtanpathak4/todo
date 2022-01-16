import axios from "axios";
const url = "http://localhost:5000/api/route";


export function addTodos(todo) {
    return axios.post(url, todo);
}

export function getTodos() {
    return axios.get(url);
}

export function deleteTodos(id) {
    return axios.delete(url + "/" + id);
}

export function updateTodos(id, todo) {
    return axios.put(url + "/" + id, todo);
}