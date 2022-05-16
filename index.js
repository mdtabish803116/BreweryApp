

async function getData(){
    try{ 
    let response = await fetch("https://api.openbrewerydb.org/breweries");
    let data = await response.json();
    console.log(data);
    displayBreweryData(data);
    //  let temp = [...data];or 
    let temp = JSON.parse(JSON.stringify(data));

     document.getElementById("brewerySelect").addEventListener("change" , function(){ 

     let selectValue = document.getElementById("brewerySelect").value;

     let filteredData = temp.filter(function(ele){
         return selectValue === ele.brewery_type   
         
     })
     displayBreweryData(filteredData);
    });



    }catch(error){
        console.log(error);
    }
}

getData();

function displayBreweryData(data){
    document.getElementById("tbody").innerHTML = "";
    data.forEach((brewery) => {
        let rowEle = document.createElement("tr");
        let td1 = document.createElement("td");
          td1.textContent = brewery.name;
        let td2 = document.createElement("td");
          td2.textContent = brewery.brewery_type;
        let td3  = document.createElement("td");
          td3.textContent = brewery.city;
        let td4 = document.createElement("td");
          td4.textContent = brewery.state;
        let td5 = document.createElement("td");
          td5.textContent = "More Details";

          td5.addEventListener("click" , function(){
              localStorage.setItem("breweryId" , JSON.stringify(brewery.id));
              window.location.href = "./brewery.html";
          })

          rowEle.append(td1 , td2 , td3 , td4 , td5);

          document.getElementById("tbody").append(rowEle);

    })
}