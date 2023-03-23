 const userInput = document.querySelector('#taskInput')
 const originalList = document.querySelector('.tasks')
 const moonicon = document.querySelector('#moonIcon')
 const toDelete = document.querySelector('#delete')
 let items = new Array;
 let tempItems = new Array;

 userInput.addEventListener('keydown', (e) => {
    if(e.keyCode === 13){
        // const listItem = document.createElement('li')
        // listItem.innerText = userInput.value
        if(userInput.value.length === 0){
            console.warn('cannot add empty task')
        } else {
            // originalList.appendChild(listItem);
            // Add localstorage functionality to retrieve items and persist for user    
            // items.push(userInput.value)
            pushToLocalStorage(userInput.value)
            createCard(userInput.value);
            // add item to localstorage array 
        }
        
        if("tasks" in localStorage){
            const localStorageVar = JSON.stringify(localStorage.getItem('tasks'));
            console.log(localStorageVar)
        } else {
            localStorage.setItem('tasks', JSON.stringify(items))
        }
    } else {
        console.log('another key pressed')
    }
    
    
 })

 moonicon.addEventListener('click', () => {
    document.body.style.background = 'black'
    document.body.style.color = 'white'
 })

 function createCard(message){
    const card = document.createElement('div')
    card.classList.add('card');
    card.classList.add('text-bg-secondary')
    card.style.width = '20rem'
    card.style.marginTop = '10px'
    card.classList.add = 'delete'
    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')
    cardBody.innerText += message
    const removeIcon = document.createElement('i')
    removeIcon.classList.add('fa-solid')
    removeIcon.classList.add('fa-trash')
    removeIcon.style.marginLeft = '50px'
    removeIcon.setAttribute('id', 'delete')
    cardBody.appendChild(removeIcon)
    const completeIcon = document.createElement('i')
    completeIcon.classList.add('fa-solid')
    completeIcon.classList.add('fa-check')
    completeIcon.style.marginLeft = '25px'
    completeIcon.setAttribute('id', 'completed')
    cardBody.appendChild(completeIcon)
    card.appendChild(cardBody) 
    originalList.appendChild(card)
    userInput.value = ''
 }
 
//Function to remove a task on clicking the corresponding delete button 
originalList.addEventListener('click', function(event){
    if(event.target.id == 'delete'){
        event.target.parentElement.parentElement.remove()
        let itemToBeRemoved = JSON.stringify(event.target.parentElement.innerText);
        let localStorageArray = localStorage.getItem('tasks')
    }
})

// Function to mark the task as complete (change color)
originalList.addEventListener('click', function(event) {
    if(event.target.id == 'completed'){
        const newDiv = event.target.parentElement.classList.add('text-bg-success')
    }
})

// Function to check the local storage content 
function checkLocalStorage(){
    if(localStorage.getItem('tasks') != '' && localStorage.getItem('tasks') != 'null' ){
        if("tasks" in localStorage){
            let itemsRetrieved = JSON.parse(localStorage.getItem('tasks'))
            itemsRetrieved.forEach(item => {
                tempItems.push(item)
                createCard(item);
            })
            tempItems = items
        }   
    } else {
        localStorage.setItem('tasks', [])
    }
}

// Function to push user task into local storage
function pushToLocalStorage(localitem){
    // grab the current values from the local storage and convert to array 
    let currentLocal = JSON.parse(localStorage.getItem('tasks'))
    //verify that the task entry exists in local storage
    if(localStorage.getItem('tasks') != '' && localStorage.getItem('tasks') != 'null' ){
        if("tasks" in localStorage){
            // add the value that was added by user to the current array
            console.log(currentLocal)
            currentLocal.push(localitem)
            // convert the array back into string 
            tempLocal = JSON.stringify(currentLocal)
            // add the temp local array into the localStorage 
            localStorage.setItem('tasks', tempLocal)
            console.log('item has been added to local storage successfully')
        }   
    } else {
        // tasks entry does not exist in local storage 
        console.log('tasks do not exist in local storage ')
    }
   
}

// Function to remove item from local storage
function removeFromLocalStorage(localitem){
    // grab the current values from the local storage and convert to array 
    let currentLocal = JSON.parse(localStorage.getItem('tasks'))
    //verify that the task entry exists in local storage
    if(localStorage.getItem('tasks') != '' && localStorage.getItem('tasks') != 'null' ){
        if("tasks" in localStorage){
            var index = currentLocal.indexOf(JSON.stringify(localitem))
            currentLocal = currentLocal.filter(v => v !== localitem); 
            // replace the existing entries from local storage with the ones returned from filter
            localStorage.setItem('tasks',JSON.stringify(currentLocal))
        }   
    } else {
        // tasks entry does not exist in local storage 
        console.log('tasks do not exist in local storage ')
    }
}

// When page is refreshed, check if tasks in localstorage exist and if so, display them for the user
window.onload = function(e) {
   checkLocalStorage()
}


