let urlAPI = "https://mindhub-xj03.onrender.com/api/amazing"

fetch(urlAPI)
    .then(response => (response.json()
        .then(data =>{
            console.log(data.events)
            loadStatsUno(data.events, "#uno")
            //loadStats(data.events,"#dos")
            //arrCategory (data.events)
            //console.log(contar)
        })))

function loadStatsUno(arr, contenedor){
    let container = document.querySelector(contenedor);
    let higest = getHighest (arr)
    let lowest = getlowest (arr)
    let capaci = getCapacity (arr)
    container.innerHTML += `
        <tr>
            <td>${higest.name} with ${(attendances(higest)).toFixed(2)}% </td>
            <td>${lowest.name} with ${(attendances(lowest)).toFixed(2)}% </td>
            <td>${capaci.name} with ${capaci.capacity} </td>
        </tr>`
}

function loadStats(arr,contenedor){
    let container = document.querySelector(contenedor);
    let tableBodyHTML = "";
    arr.forEach(element => {
        let filteredCategory = getEventsByCategory(element, arr)
        let sumaCapacidad = getSumaCapacity(filteredCategory)
        tableBodyHTML += `
        <tr>
            <td>${element}</td>
            <td>${sumaCapacidad}</td>
            <td>${sumaCapacidad}</td>
        </tr>`
    });
    container.innerHTML = tableBodyHTML;
}

function attendances (item) {
    let atendance = (item.assistance * 100/item.capacity)
    return atendance
}

function getHighest (arr){
    return arr.reduce((acumulador,valorActual) => {
        if(attendances(valorActual) > attendances(acumulador)) {
            return valorActual;
        } else{
            return acumulador
        }
    })
}

function getlowest (arr){
    return arr.reduce((acumulador,valorActual) => {
        if(attendances(valorActual) < attendances(acumulador)) {
            
            return valorActual;
        } else{
            return acumulador
        }
    })
}

function getCapacity (arr){
    return arr.reduce((acumulador,valorActual) => {
        if(valorActual.capacity > acumulador.capacity) {
            
            return valorActual;
        } else{
            return acumulador
        }
    })
}
// intente hacer la segunda parte de la tabla y no pude
let contar = [];
function getEventsByCategory(element, arr) {
    return arr.filter(item => item.category.includes(element));
}
function getSumaCapacity(arr) {
    let sumaCapacidad = 0;
    arr.forEach(item => sumaCapacidad += item.capacity);
    return Math.round(sumaCapacidad);
}

/*function arrCategory(arr){
    arr.forEach((item) => {
        if (!contar.includes(item.category)) {
            contar.push(item.category);
        }else null;
    })
    arr.forEach((item) => {
        if(item.category == contar.category){
            contar.category.push(+ item.capacity)
        }
    })
}*/


/*let contar = [];


function arrCategory (arr){
    arr.forEach((item) => {
        if (!contar.includes(item.category)) {
            contar.push(item.category);
        }else {
            return arr.reduce((acumulador,valorActual) => {
                if(valorActual.category == acumulador.category) {
                    return contar.push(valorActual.capacity + acumulador.capacity)
                }})
        }

})}*/
