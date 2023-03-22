const userInput = (<HTMLInputElement>document.getElementById('#taskInput'))

userInput?.addEventListener('keyup', (e) => {
    let keyboardEvent = <KeyboardEvent> e;
    if(keyboardEvent.key === 'ArrowDown'){
        console.log('Enter has been pressed')
        console.log(userInput.value)

    } else {
        console.warn('Other button has been pressed')
    }
})