 const userInput = document.querySelector('#taskInput')
 const originalList = document.querySelector('.tasks')

 userInput.addEventListener('keydown', (e) => {
    if(e.keyCode === 13){
        const listItem = document.createElement('li')
        listItem.innerText = userInput.value
        if(userInput.value.length === 0){
            console.warn('cannot add empty task')
        } else {
            originalList.appendChild(listItem);
        }
        console.log(userInput.value)

    } else {
        console.log('another key pressed')
    }
 })