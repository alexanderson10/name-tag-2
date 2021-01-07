const input = document.getElementById('user-input')
const myButton = document.getElementById('submit')
const welcome = document.getElementById('welcome')

myButton.addEventListener('click', () => {
    //post-clcik logic goes here!
    welcome.textContent = input.value;

    
})

