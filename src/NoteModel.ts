import type ToDo from "./TodoModel";

export default interface Note {
    id: number;
    title: string;
    todoos: ToDo[]
}