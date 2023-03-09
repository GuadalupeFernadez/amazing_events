function crearCard(arr, contenedor){
    let card = document.querySelector(contenedor);
    card.innerHTML = " "
    arr.forEach((elemento) => {
        card.innerHTML += `
            <div class="card">
                <img src="${elemento.image}" class="card-img-top" alt="$(elemento.name)">
                <div class="card-body">
                    <h5 class="card-title">${elemento.name}</h5>
                    <div class="price">
                        <p>$${elemento.price}</p>
                        <a href="./details.html?id=${elemento._id}" class="btn btn-primary">See more...</a>
                    </div>
                </div>
            </div>`;
    });
}

let arrayUpcoming = []
let arrayPast = []

function filtrarPorFecha(arr){
    arrayUpcoming = []
    arrayPast = []

    for (item of arr.events) {
        if(item.date >= arr.currentDate){
            arrayUpcoming.push(item)
        }else{
            arrayPast.push(item)
        }
    }
}


let eventsFiltrado = []

function filtrarCategory(arr, seleccionado) {
    eventsFiltrado = []
    arr.forEach(evento => {
        seleccionado.forEach(elemento => {
            if(evento.category == elemento.value) {
                eventsFiltrado.push(evento)
            }
        })
    })
    if (eventsFiltrado.length > 0) {
        crearCard(eventsFiltrado, "#cards")
    } else{
        crearCard(arr, "#cards")
    }
}

let arraySearch = []
function searchArray(arr, input) {
    arraySearch = []
    arr.forEach(item => {
        if(item.name.toLowerCase().includes(input.value.toLowerCase())){
            arraySearch.push(item)
        }
    })
    if(arraySearch.length> 0){
        crearCard(arraySearch, '#cards')
    }else{
        let card = document.querySelector('#cards')
        card.innerHTML = 'No events found, please try a new search'
    }
}
