filtrarPorFecha(data)

crearCard(arrayPast, "#cards")

let buttons = document.querySelectorAll(".form-check-input")

buttons.forEach(button => button.addEventListener('change', verificarSelect))
console.log(buttons)

function verificarSelect() {
    let seleccionado = Array.from(buttons).filter(button => button.checked)
    console.log(seleccionado)
    filtrarCategory(arrayPast, seleccionado)
}