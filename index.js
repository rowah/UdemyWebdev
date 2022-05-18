//getting input from the user
let userInput = prompt('What would you like to do?')
const toDoList = ['Kill a rat', 'Watch soccer', 'Code Yweri'];
//ensuring that the games quits only when the word quit is keyed in
while(userInput !== 'quit' && userInput !== 'q') {
    ///the todo list 
if(userInput === 'new') {
    userInput = prompt('Add a ToDo');
    toDoList.push(userInput)
} else if (userInput === 'list') {
    //list the todos
    toDoList.forEach( (item, index) => {
        console.log(`index: item`)
    })
} else if(userInput === 'delete') {
    userInput = prompt('Enter the index of the todo to delete')
    toDoList.splice(userInput, 1)
}
    userInput = prompt('What would you like to do?')
}
console.log('Okay, You quit the app!')
