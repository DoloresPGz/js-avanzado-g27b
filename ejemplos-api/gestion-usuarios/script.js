const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const userList = document.getElementById("user-list")
const crudForm = document.getElementById("crud-form")
const apiKey = "" //AQUÍ VA TU API KEY
const apiURL = `https://crudcrud.com/api/${apiKey}/users`

function loadUsers() {
    fetch(apiURL)
    .then(response => response.json())
    .then(data =>{ //data -> arreglo de objetos literales con la información de los usuarios
        userList.innerHTML = ''
        data.forEach(user => {
            const li = document.createElement('li')
            li.innerHTML = `
                <strong> ${user.name} </strong> (${user.email})
                <button data-id="${user._id}" class="btn btn-edit">Editar</button>
                <button data-id="${user._id}" class="btn btn-delete">Eliminar</button>
            `
            userList.appendChild(li)
        });
    })
}


document.addEventListener("DOMContentLoaded", function(){
    loadUsers()
})