var userInput = document.getElementById('#taskInput');
userInput === null || userInput === void 0 ? void 0 : userInput.addEventListener('keyup', function (e) {
    var keyboardEvent = e;
    if (keyboardEvent.key === 'ArrowDown') {
        console.log('Enter has been pressed');
        console.log(userInput.value);
    }
    else {
        console.warn('Other button has been pressed');
    }
});
