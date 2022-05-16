

async function getData(){
    try{  
    let id = JSON.parse(localStorage.getItem("breweryId"));
    let response = await fetch(`https://api.openbrewerydb.org/breweries/${id}`);
    let data = await response.json();
    console.log(data);
    displayData(data);

    }catch(error){
        console.log(error);
    }
}

getData();

function displayData(data){
    let card = document.createElement("div");
    let p1 = document.createElement("p");
    p1.textContent = `Brewery Name : ${data.name}`;
    let p2 = document.createElement("p");
    p2.textContent = `Brewery Type : ${data.brewery_type}`;
    let p3 = document.createElement("p");
    p3.textContent = `Brewery City : ${data.city}`;
    let p4 = document.createElement("p");
    p4.textContent = `Brewery State : ${data.state}`;
    let p5 = document.createElement("p");
    p5.textContent = `Brewery Country : ${data.country}`;

    card.append(p1 , p2 , p3 , p4 , p5);

    document.getElementById("singleBox").append(card);
}