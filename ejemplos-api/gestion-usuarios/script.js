const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const userList = document.getElementById("user-list")
const crudForm = document.getElementById("crud-form")
const apiKey = "" //AQUÍ VA TU API KEY
const apiURL = `https://crudcrud.com/api/${apiKey}/users`

function loadUsers() {
    fetch(apiURL)
    .then(response => response.json())
    .then(data =>{
        console.log(data)
    })
}


document.addEventListener("DOMContentLoaded", function(){
    loadUsers()
})