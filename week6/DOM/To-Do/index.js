// const addBtn = document.addEventListener('add-btn');
// const todoInput = document.addEventListener('todo-input');
// const todoItemsContainer = document.addEventListener('todo-items-container');

// addBtn.addEventListener('click', ()=>{
//     const value = todoInput.value;

//     const li = document.createElement('li'); // creates <li></li> tag
//     li.innerText = value; // <li>{value}</li>
//     //ye toh abhi html tak gaya hi nahi
    
//     todoItemsContainer.appendChild(li);
// });

const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoItemsContainer = document.getElementById('todo-items-container');

addBtn.addEventListener('click', () => {
    const value = todoInput.value.trim(); // Trim to remove extra spaces

    if (value === "") {
        alert("Please enter a task!"); // Prevent empty tasks
        return;
    }

    const li = document.createElement('li'); // creates <li></li> tag
    li.innerText = value; // <li>{value}</li>

    const delButton = document.createElement('button');
    delButton.innerText = 'X';

    delButton.addEventListener('click', function () {
        li.remove();
    });

    li.appendChild(delButton);

    todoItemsContainer.appendChild(li); // Add <li> to the list
    todoInput.value = ""; // Clear input field after adding
});