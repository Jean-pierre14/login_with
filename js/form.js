
var button = document.getElementById('button')

button.addEventListener('click', function(e){
    var username = document.getElementById('username').value.trim()
    var password = document.getElementById('password').value.trim()
    var error = document.getElementById('error')

    e.preventDefault()

    if(!username || !password){
        error.style.visibility = 'visible'
        error.innerHTML = "Your fields are empty"}
    else{
        if(username == 'Grace'){
            error.style.visibility = 'visible'
            error.innerHTML = "Welcome " + username
            console.log('Welcome')
        }
    }
})