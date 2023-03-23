 const userInput = document.querySelector('#taskInput')
 const originalList = document.querySelector('.tasks')
 const moonicon = document.querySelector('#moonIcon')
 const toDelete = document.querySelector('#delete')

 userInput.addEventListener('keydown', (e) => {
    if(e.keyCode === 13){
        // const listItem = document.createElement('li')
        // listItem.innerText = userInput.value
        if(userInput.value.length === 0){
            console.warn('cannot add empty task')
        } else {
            // originalList.appendChild(listItem);
            createCard(userInput.value);
        }
        console.log(userInput.value)

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
    }
})

// Function to mark the task as complete (change color)
originalList.addEventListener('click', function(event) {
    if(event.target.id == 'completed'){
        const newDiv = event.target.parentElement.classList.add('text-bg-success')
    }
})

