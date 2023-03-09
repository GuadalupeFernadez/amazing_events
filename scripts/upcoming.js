filtrarPorFecha(data)

crearCard(arrayUpcoming, "#cards")

let buttons = document.querySelectorAll(".form-check-input")

buttons.forEach(button => button.addEventListener('change', verificarSelect))
console.log(buttons)

function verificarSelect() {
    let seleccionado = Array.from(buttons).filter(button => button.checked)
    console.log(seleccionado)
    filtrarCategory(arrayUpcoming, seleccionado)
}

let search = document.querySelector('.d-flex')

search.addEventListener('submit', (e) => {
    e.preventDefault() //lo pongo para que no se me recarge la pagina
    
    console.log(search[0].value)
    searchArray(arrayUpcoming, search[0])
    console.log(arraySearch)
})