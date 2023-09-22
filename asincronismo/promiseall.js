function prepararPizza(especialidad,tiempo){
    return new Promise((res, rej) =>{
        setTimeout(() => {
            if(tiempo < 3000)
                res(`Pizza preparada:${especialidad}`)
            else
                rej('La pizza quedó fría')
        }, tiempo);
    })
}

const ordenPizzas = [
    prepararPizza('Hawaiana', 3001),
    prepararPizza('3 Quesos', 3001),
    prepararPizza('Pastor', 2500),
    prepararPizza('Mexicana', 1500),
]


Promise.all(ordenPizzas)
.then(
    pizzas => {
        pizzas.forEach( pizza => console.log(pizza))
    }
)
.catch(
    err => console.log(err)
)

    