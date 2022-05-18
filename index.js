//getting input from the user
let userInput = prompt('What would you like to do?')
const toDoList = [];
//ensuring that the games quits only when the word quit is keyed in
while(userInput !== 'quit' && userInput !== 'q') {
    ///the todo list 
if(userInput === 'new') {
    userInput = prompt('Add a ToDo');
    toDoList.push(userInput)
} else if (userInput === 'list') {
    //list the todos
    toDoList.forEach( (item, index) => {
        console.log(`${index} : ${item}`)
    })
} else if(userInput === 'delete') {
    //handling invalid inputs 
    const index = Number(prompt('Enter the index of the todo to delete'));
    //using splice method to remove the element at the keyed in index
    toDoList.splice(index, 1)
}
    userInput = prompt('What would you like to do?')
}
console.log('Okay, You quit the app!')
