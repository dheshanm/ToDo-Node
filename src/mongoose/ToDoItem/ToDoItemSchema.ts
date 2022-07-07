
/**
 * @file Implements mongoose schema for ToDoItem
 */
 import mongoose from "mongoose";

 /**
  * The ToDoItemSchema represents how a {@link ToDoItem} is represented in the database.
  * @typedef {ToDoItemSchema} ToDoItemSchema
  */
 export const ToDoItemSchema = new mongoose.Schema({
    title: {type: String, required: true, trim: true},
    completed: {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now},
    deadline: {type: Date, default: getDefaultDeadline},
 }, {collection: "ToDoItems"})

 function addDays(date: number | Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

 function getDefaultDeadline(): Date {
    return addDays(Date.now(), 7);
}