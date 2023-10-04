const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const userList = document.getElementById("user-list")
const crudForm = document.getElementById("crud-form")
const apiKey = "5b1b451539c04b4cbf1f3a334491c7dc" //AQUÍ VA TU API KEY
const apiURL = `https://crudcrud.com/api/${apiKey}/users`

function loadUsers() {
    fetch(apiURL)
    .then(response => response.json())
    .then(data =>{ //data -> arreglo de objetos literales con la información de los usuarios
        userList.innerHTML = ''
        data.forEach(user => {
            const li = document.createElement('li')
            li.innerHTML = `
                <strong> ${user.name} </strong>  <p>${user.email}</p>
                <button data-id="${user._id}" class="btn btn-edit">Editar</button>
                <button data-id="${user._id}" class="btn btn-delete">Eliminar</button>
            `
            userList.appendChild(li)
        });
    })
}

//Alta de usuarios
crudForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const newUser = {
        name: nameInput.value,
        email: emailInput.value
    }
    
    
    fetch(apiURL,{
        method:'POST',
        body:JSON.stringify(//Convierto mi información en formato JSON para enviarlo al servidor
         newUser
        ),
        headers:{
            'Content-Type' :'application/json'
        }
    }).then(() => {
        nameInput.value = ''
        emailInput.value = ''
        loadUsers()
    })
})

userList.addEventListener('click', function (event) {
    //Edición de un usuario
    if(event.target.classList.contains('btn-edit')){
        const userId = event.target.getAttribute('data-id') //id del usuario que se va a editar
        const editedUser = prompt('Editar nombre:')
        if(editedUser !== null){
            console.log()
            fetch(`${apiURL}/${userId}`, {
                method:'PUT',
                body:JSON.stringify({name: editedUser, email: event.target.parentElement.querySelector('p').textContent  }),
                headers:{
                    'Content-Type' :'application/json'
                }
            })
            .then(() => {
                loadUsers()
            })
        }
    }
})


document.addEventListener("DOMContentLoaded", function(){
    loadUsers()
})