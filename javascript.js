let inputValue = document.querySelector('.input');
let buttonAdd = document.querySelector('.button')
let inputElement = document.querySelector('.inputTodolist');
let taskdisplay = document.querySelector('.inputTodolist')
let listContainer = document.querySelector('.inputTodolist')
let index = 0 
let handleRemoveAll = document.querySelector('#reloadpage')

//  array created to store the value for the to do list 
let arrayValue = []


// adding a eventlister to the button for adding the text 
buttonAdd.addEventListener('click', function () {


    // store the value from the user to into a variable 
    let Task = inputValue.value


    //condition to check if their is any input value entered by the user 
    if (Task == "" || Task.trim() == "") {
        alert("enter value inside the to do list ")
        document.removeEventListener('click', addEventListener())
    }

    //using array to store the user to do list strings 
    arrayValue[index] = Task


    // when the button is click we have to remove the value inside the input text
    inputValue.value = " "

    // creating a new element li and all the attribute and location 
    let newElement = document.createElement('li')
    newElement.setAttribute('class', 'list')
    newElement.setAttribute('id', `list${index}`)

    // creating a span inside the li item and inside this we will display the values 
    let spanElement = document.createElement('span')
    spanElement.setAttribute('contenteditable' , 'true')
    spanElement.setAttribute('class' , 'span')
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


    // remove buttons created  
    let removeButton = document.createElement('button')
    removeButton.setAttribute('class', 'taskButtons')
    removeButton.setAttribute('id', `Delectbutton${index}`)
    removeButton.textContent = 'Delect'
    newElement.appendChild(removeButton)

});


// now the button delect will be handle here 
// console.log(listContainer)

//the delect list element listner has been created 
listContainer.addEventListener('click', function (event) {
    const removeId = event.target.id
    const elementContent = event.target.className

    // console.log(elementContent)
    // console.log(removeId)
let liValue = document.querySelector('.list')

console.log(liValue.tagName)

    //  handling remove button function 
    if (elementContent === 'taskButtons'&& liValue.tagName !== " ") {
        const removeElement = document.getElementById(removeId)
        removeElement.parentElement.remove()

    }
    
    //handling checkbox 
    if (elementContent === 'checkbox' && event.target.checked){
        let addStyleElement = document.getElementById(removeId)
        let parentElement = addStyleElement.parentElement
        parentElement.style.textDecoration = 'line-through'
        console.log(addStyleElement.parentElement)
        

    }else{
        let addStyleElement = document.getElementById(removeId)
        addStyleElement.parentElement.style.textDecoration = 'none'

    }

    


});


//handling remove all button 
handleRemoveAll.addEventListener('click',  function(){

location.reload()
})
