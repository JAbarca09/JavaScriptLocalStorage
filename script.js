//Notes for Task Tracker to save tasks
//save each task as a day


let tasks =
    [
        {
            "taskName": "Study Local Storage",
            "date": "10/20/22",
            "priority": "important"
        },
        {
            "taskName": "Study 2",
            "date": "10/1/22",
            "priority": "important"
        }
    ]

const Tasks = JSON.stringify(tasks);
console.log(Tasks);

//local storage can turn objects into a string

localStorage.setItem('tasks', Tasks);

const allTasks = localStorage.getItem('tasks');
console.log(JSON.parse(allTasks));
