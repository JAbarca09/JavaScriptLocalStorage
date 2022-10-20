console.log('Hello World');


let obj = {
    "name" : "Jesse",
    "height" : "5' 11"
}

//local storage can turn objects into a string

localStorage.setItem('name', obj);

const name = localStorage.getItem(obj);
console.log(name);