let inputValue = document.querySelector('.input');// input box 
let buttonAdd = document.querySelector('.button')
let inputElement = document.querySelector('.inputTodolist');
let taskdisplay = document.querySelector('.unOrderList')
let listContainer = document.querySelector('.inputTodolist')
let index = 0
let handleRemoveAll = document.querySelector('#removeAll')
let removeAllList = document.querySelector('.unOrderList')
let isEdit = false

//  array created to store the value for the to do list 
let arrayValue = []


// adding a eventlister to the button for adding the text 
buttonAdd.addEventListener('click', function () {


    // store the value from the user to into a variable Task  
    let Task = inputValue.value


    //condition will check if the user provided a input or not  
    if (Task == "" || Task.trim() == "") {
        alert("enter value inside the to do list ")
        document.removeEventListener('click', addEventListener())
    }

    //using array to store the task in the array 
    arrayValue[index] = Task


    // clearing value inside the input box 
    inputValue.value = " "

    // creating a new element li and all the attribute and location 
    let newElement = document.createElement('li')
    newElement.setAttribute('class', 'list')
    newElement.setAttribute('id', `list${index}`)


    // creating a span inside the li item and inside this we will display the values 
    let spanElement = document.createElement('span')
    spanElement.setAttribute('class', 'span')
    newElement.appendChild(spanElement)//make content editable 
    taskdisplay.appendChild(newElement)
    spanElement.textContent = `${arrayValue[index]}`

    index++ // array value increament each time 

    //creating two buttons inside the list item the button will mark if the task is done or the task should be removed 


    //task done button created for each button
    let taskDoneButton = document.createElement('input')
    taskDoneButton.setAttribute('type', 'checkBox')
    taskDoneButton.setAttribute('class', `checkbox`)
    taskDoneButton.setAttribute('id', `checkbox${index}`)
    taskDoneButton.textContent = 'Done'
    newElement.appendChild(taskDoneButton)

    //remove button 
    let removeButton = document.createElement('button')
    removeButton.setAttribute('class', 'taskButtons')
    removeButton.setAttribute('id', `Delectbutton${index}`)
    removeButton.textContent = 'Delect'
    newElement.appendChild(removeButton)

    // edit button 
    let editButton = document.createElement('button')
    editButton.setAttribute('class', 'editButtons')
    editButton.setAttribute('id', `editbutton${index}`)
    editButton.textContent = 'Edit'
    newElement.appendChild(editButton)

console.log(spanElement)
});



// console.log(listContainer)

//the delete list element listner has been created 
listContainer.addEventListener('click', function (event) {
    const targetId = event.target.id
    
    const elementContent = event.target.className


    //handling the edit button 
    if (elementContent == "editButtons") {
        // select the parent element 
        let  targetElement = document.getElementById(targetId)
        let parent = targetElement.parentElement
        console.log(parent)
            // const spanElement = listItem.querySelector('.span'); using this selecting the span element 
            console.log(targetElement)
            const spanElement = parent.querySelector('.span');
            console.log(spanElement)
            if (!isEdit){
                spanElement.contentEditable = true
                isEdit = true 
                targetElement.textContent = "Modify"
                
            } else {
                spanElement.contentEditable = false 
                isEdit = false
                targetElement.textContent = "Edit"
            }
    }

    console.log(index)

    //  handling remove button function 
    if (elementContent === 'taskButtons') {
        const removeElement = document.getElementById(targetId)
        removeElement.parentElement.remove()

    }
   

    // creating a loop to remove the value of li items 
    if (elementContent == "button removeAll") {
        console.log('the condition is up and running ')
        console.log(removeAllList.firstChild)
        while (removeAllList.firstChild) {
            removeAllList.removeChild(removeAllList.firstChild);
        }
    }
    

    //handling checkbox 
    if (elementContent === 'checkbox' && event.target.checked) {
        let addStyleElement = document.getElementById(targetId)
        let parentElement = addStyleElement.parentElement
        parentElement.style.textDecoration = 'line-through'
        console.log(addStyleElement.parentElement)



    } else {
        let addStyleElement = document.getElementById(targetId)
        addStyleElement.parentElement.style.textDecoration = 'none'

    }




});



