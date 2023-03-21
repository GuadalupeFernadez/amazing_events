let urlAPI = "https://mindhub-xj03.onrender.com/api/amazing"

fetch(urlAPI)
    .then(response => (response.json()
        .then(data => {
            filtrarPorFecha(data)
            crearFiltros(arrayPast, "#filter")
            crearCard(arrayPast, "#cards")

            let buttons = document.querySelectorAll(".form-check-input")

            buttons.forEach(button => button.addEventListener('change', verificarSelect))
            console.log(buttons)

            function verificarSelect() {
                let seleccionado = Array.from(buttons).filter(button => button.checked)
                console.log(seleccionado)
                filtrarCategory(arrayPast, seleccionado)
                let search = document.querySelector('.d-flex')
                //console.log(eventsFiltrado)
                //console.log(data.events)
                console.log(search) 
                search.addEventListener('input', (e) => {
                    e.preventDefault() //lo pongo para que no se me recarge la pagina
                        //console.log(search[0].value)
                        searchArray(eventsFiltrado, search[0])
                        //console.log(arraySearch)
                })
                search.addEventListener('submit', (e) => {
                    e.preventDefault() //lo pongo para que no se me recarge la pagina
                        //console.log(search[0].value)
                        searchArray(eventsFiltrado, search[0])
                        //console.log(arraySearch)
                })
            }

            let search = document.querySelector('.d-flex')
            search.addEventListener('submit', (e) => {
                e.preventDefault() //lo pongo para que no se me recarge la pagina
                    //console.log(search[0].value)
                    searchArray(arrayUpcoming, search[0])
                    //console.log(arraySearch)
                
            })
            search.addEventListener('input', (e) => {
                e.preventDefault() //lo pongo para que no se me recarge la pagina
                    //console.log(search[0].value)
                    searchArray(arrayUpcoming, search[0])
                    //console.log(arraySearch)
                
            })
        })))
.catch(error=>console.log(error.message))





/*filtrarPorFecha(data)

crearCard(arrayPast, "#cards")

let buttons = document.querySelectorAll(".form-check-input")

buttons.forEach(button => button.addEventListener('change', verificarSelect))
console.log(buttons)

function verificarSelect() {
    let seleccionado = Array.from(buttons).filter(button => button.checked)
    console.log(seleccionado)
    filtrarCategory(arrayPast, seleccionado)
}

let search = document.querySelector('.d-flex')

search.addEventListener('submit', (e) => {
    e.preventDefault() //lo pongo para que no se me recarge la pagina
    
    console.log(search[0].value)
    searchArray(arrayPast, search[0])
    console.log(arraySearch)
})*/