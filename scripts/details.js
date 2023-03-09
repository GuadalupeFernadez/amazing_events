const queryString = location.search

const params = new URLSearchParams(queryString)

const id = params.get('id')

const eventoid = data.events.find(evento => evento._id == id)

const detailsCard = document.querySelector("#detailsCards")
detailsCard.innerHTML = `
    <div class="detailsCard">
        <img src="${eventoid.image}" class="card-img-top" alt="${eventoid.name}">
        <div class="card-body">
            <h5 class="details-title">${eventoid.name}</h5>
            <p>Category: ${eventoid.category}</p>
            <p>${eventoid.description}</p>
            <div class="Place">
                <p>Place: ${eventoid.place}</p>
                <p>Capacity: ${eventoid.capacity}</p>
                <p>Asistance: ${eventoid.assistance || eventoid.estimate}</p>
            </div>
            <div class="details-price">
                <p>Date: ${eventoid.date}</p>
                <p id="price">Price: $${eventoid.price}</p>
            </div>
        </div>
    </div>`