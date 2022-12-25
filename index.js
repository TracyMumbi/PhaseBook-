function getData(){
    fetch("http://localhost:3000/messages")
    .then(response=> response.json())
    .then(data=> displayData(data))
}

function displayData(data){
    //console.log(data)
    // data.forEach((item) => {

    // let dataContainer = document.getElementById("data_container")
    // let idData = document.createElement("p")
    // let nameData = document.createElement("p")
    // let imageData = document.createElement("img")
    // let messageData = document.createElement("p")


    // idData.innerText = item.id
    // nameData.innerText = item.name
    // imageData.src = item.image
    // messageData.innerText = item.message


    // dataContainer.appendChild(idData)
    // dataContainer.appendChild(nameData)
    // dataContainer.appendChild(imageData)
    // dataContainer.appendChild(messageData)

    // })
    for(item of data){
        const card = document.createElement("div")
        const cardDetails = `
            <img src= "${item.image}" alt - "student image">
            <p>${item.message}</p>
            <h4>${item.name}</h4>
        `
        card.innerHTML = cardDetails
        card.className = "card"
        const container = document.getElementById("data_container")
        container.appendChild(card)
    }

}
getData();