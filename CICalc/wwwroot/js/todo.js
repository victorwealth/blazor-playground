'use strict'

// function getTodo() {
//     let newTodo = document.getElementById('new-todo');

//     DotNet.invokeMethodAsync("CICalc", "AddTodo", newTodo.value.toString())
//         .then(data => {
//             //data.push(newTodo);
//             console.log(data);
//             newTodo.value = "";
//         });
// }

function getTodoValueFromJs(wrapper){
    let newTodo = document.getElementById('new-todo');
    
    return wrapper.invokeMethodAsync("invokeFromJS", newTodo.value.toString())
        .then( _ => {
            console.log('state has changed: ' + newTodo.value);
            newTodo.value = "";
        });
}
