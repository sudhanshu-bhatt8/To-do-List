let inputValue = document.querySelector('.input'); // input box 
let buttonAdd = document.querySelector('.button');
let inputElement = document.querySelector('.inputTodolist');
let taskdisplay = document.querySelector('.unOrderList');
let listContainer = document.querySelector('.inputTodolist');
let index = 0;
let handleRemoveAll = document.querySelector('#removeAll');
let removeAllList = document.querySelector('.unOrderList');
let isEdit = false;

// Array created to store the value for the to-do list 
let arrayValue = [];

// Adding an event listener to the button for adding the text 
buttonAdd.addEventListener('click', function () {
    // Store the value from the user into a variable Task  
    let Task = inputValue.value;

    // Condition will check if the user provided input or not  
    if (Task == "" || Task.trim() == "") {
        alert("Enter a value inside the to-do list.");
        document.removeEventListener('click', addEventListener());
    }

    // Using an array to store the task in the array 
    arrayValue[index] = Task;

    // Clearing the value inside the input box 
    inputValue.value = "";

    // Creating a new element li and all the attributes and location 
    let newElement = document.createElement('li');
    newElement.setAttribute('class', 'list');
    newElement.setAttribute('id', `list${index}`);

    // Creating a span inside the li item, and inside this, we will display the values 
    let spanElement = document.createElement('span');
    spanElement.setAttribute('class', 'span');
    newElement.appendChild(spanElement); // Make content editable 
    taskdisplay.appendChild(newElement);
    spanElement.textContent = `${arrayValue[index]}`;

    index++; // Array value increment each time 

    // Creating two buttons inside the list item; the button will mark if the task is done or the task should be removed 

    // Task done button created for each button
    let taskDoneButton = document.createElement('input');
    taskDoneButton.setAttribute('type', 'checkBox');
    taskDoneButton.setAttribute('class', 'checkbox');
    taskDoneButton.setAttribute('id', `checkbox${index}`);
    taskDoneButton.textContent = 'Done';
    newElement.appendChild(taskDoneButton);

    // Remove button 
    let removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'taskButtons');
    removeButton.setAttribute('id', `deletebutton${index}`);
    removeButton.textContent = 'Delete';
    newElement.appendChild(removeButton);

    // Edit button 
    let editButton = document.createElement('button');
    editButton.setAttribute('class', 'editButtons');
    editButton.setAttribute('id', `editbutton${index}`);
    editButton.textContent = 'Edit';
    newElement.appendChild(editButton);

    console.log(spanElement);
});

// Listener has been created for the input container 
listContainer.addEventListener('click', function (event) {
    const targetId = event.target.id;
    const elementContent = event.target.className;

    // Handling the edit button 
    if (elementContent == "editButtons") {
        // Select the parent element 
        let targetElement = document.getElementById(targetId);
        let parent = targetElement.parentElement;
        console.log(parent);
        // const spanElement = listItem.querySelector('.span'); using this selecting the span element 
        console.log(targetElement);
        const spanElement = parent.querySelector('.span');
        console.log(spanElement);
        if (!isEdit) {
            spanElement.contentEditable = true;
            isEdit = true;
            targetElement.textContent = "Modify";
        } else {
            spanElement.contentEditable = false;
            isEdit = false;
            targetElement.textContent = "Edit";
        }
    }

    console.log(index);

    // Handling remove button function 
    if (elementContent === 'taskButtons') {
        const removeElement = document.getElementById(targetId);
        removeElement.parentElement.remove();
    }

    // Creating a loop to remove the value of li items 
    if (elementContent == "button removeAll") {
        console.log('The condition is up and running.');
        console.log(removeAllList.firstChild);
        while (removeAllList.firstChild) {
            removeAllList.removeChild(removeAllList.firstChild);
        }
    }

    // Handling checkbox 
    if (elementContent === 'checkbox' && event.target.checked) {
        let addStyleElement = document.getElementById(targetId);
        let parentElement = addStyleElement.parentElement;
        parentElement.style.textDecoration = 'line-through';
        console.log(addStyleElement.parentElement);
    } else {
        let addStyleElement = document.getElementById(targetId);
        addStyleElement.parentElement.style.textDecoration = 'none';
    }
});
