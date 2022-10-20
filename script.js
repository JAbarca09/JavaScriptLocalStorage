//Notes for Task Tracker to save tasks
//save each task as a day

let tasks = [
    {
        "taskName": "Study Local Storage",
        "date": "10/20/22",
        "priority": "important"
    },
    {
        "taskName": "Study 2",
        "date": "11/1/22",
        "priority": "important"
    }
]


let newTask = {
    "taskName": "Study 3",
    "date": "11/3/22",
    "priority": "important"
}

const strTasks = JSON.stringify(tasks);

//Now that you have initial tasks, add another task object to the array of tasks!
localStorage.setItem('tasks', strTasks);

const addTask = (task) => {

    //remember that the tasks are still in local storage.
    //take the tasks out and manipulate it not as a string but an array of objects
    //add my task
    //stringify the array to be able to save to local storage
    //save to local storage


    let allTasks = JSON.parse(localStorage.getItem('tasks'));
    allTasks.push(task);
    let strAllTask = JSON.stringify(allTasks);
    localStorage.setItem('tasks', strAllTask);
    console.log(localStorage.getItem('tasks'));
}


addTask(newTask);

