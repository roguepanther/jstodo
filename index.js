 const userInput = document.querySelector('#taskInput')

 userInput.addEventListener('keydown', (e) => {
    if(e.keyCode === 13){
        console.log(userInput.value)
    } else {
        console.log('another key pressed')
    }
 })