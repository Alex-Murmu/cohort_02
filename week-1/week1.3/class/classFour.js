/*
Task: Create a TodoList Class
Concepts Covered: Arrays inside a class, adding and removing items.

🔹 Task:

Create a TodoList class with an array tasks to store tasks.
Method addTask(task): Adds a task.
Method removeTask(task): Removes a task if it exists.
Method showTasks(): Logs all tasks.
*/



class Todo{
    constructor(){
        this.todo = [];
    }

    add(task){
        this.todo.push(task);
        return this;
    }
    remove(task){
        this.todo.splice(task,1);
        return this;
    }
    get(){
        this.todo.forEach((i)=>{
            console.log("task",i)
        })
    }
    
};

const ap = new Todo;
ap.add("man").add("momkey").get();