let properties = JSON.parse(localStorage.getItem("properties"))?JSON.parse(localStorage.getItem("properties")): [
    {
    id:1,
    img: "https://i.postimg.cc/VNgWjg9X/house1.jpg",
	price: 5000000,
    title:" 2 bedroom Apartment for sale in ",
    location: "Cape Town",
    category: "Town house",
},
{
    id:2,
    img: "https://i.postimg.cc/nr2j709N/house2.jpg",
	price: 1200000,
    title:" 4 bedroom House for sale in ",
    location: "Cape Town",
    category: "Town house",
},
{
    id:3,
    img: "https://i.postimg.cc/nrXbYLXZ/house3.jpg",
	price: 2595000,
    title:"2 bedroom House for sale in ",
    location: "Sandton Central",
    category: "Townhouse",

},
{
    id:4,
	price: 2000000,
    img: "https://i.postimg.cc/PxZFt8vC/house4.jpg",
    title:" 2 bedroom House for sale in ",
    location: "Habour Arch",
    category: "Township",

},
{
    id:5,
    img: "https://i.postimg.cc/sDZ13jwt/house5.jpg",
	price: 900000,
    title:"bedroom House for sale in ",
    location: "Durbanville",
    category: "Townhouse",

},
{
    id:6,
    img: "https://i.postimg.cc/6QS5kFC9/house6.jpg",
	price: 12000000,
    title:"6 bedroom House for sale in",
    location: " Constantia Upper",
    category: "Surbab",

},
{
    id:7,
    img: "https://i.postimg.cc/jdgV3PHT/house7.jpg",
	price: 7000000,
    title:"4 bedroom House for sale in ",
    location: "HoutBay",
    category: "Surbab",

},
{
    id:8,
    img: "https://i.postimg.cc/V6D4sBLL/house8.jpg",
	price: 9000000,
    title:"3 bedroom House for sale in ",
    location: "Sandton Central",
    category: "Townhouse",

}]

function showItems(properties){
    document.querySelector("#product-list").innerHTML=" ";
    properties.forEach(property => {
    document.querySelector("#product-list").innerHTML+=`
    <tr >
    <td class="d-flex flex-row">
    <p>${property.id}</p>
    </td>
    <td>
    <img src="${property.img}"/>
    </td>
    <td>
    <p>R${property.price}</p>
    </td>
    <td>
    <p>${property.title}</p>
    </td>
    <td>
    <p>${property.location}</p>
    </td>
    <td>
    <p>${property.category}</p>
    </td>
    <td>
        <a href="#" type="reset" value="Reset" class=" btn btn-danger bt-sm delete danger" onclick="DelProperty(${property.id})">Delete</a>
        <a href="#" type="add" value="add" class=" btn btn-primary bt-sm add" onclick="addRow()"(${property.id})  >Add</a></td>

    </tr>
    `
    });
}
showItems(properties);


// Delete
// function Geeks() {
//     document.querySelector("tr").remove();
// }

function DelProperty(id){
    console.log(id)
properties = properties.filter(property =>{
    console.log(property)
    return properties.property_id !== id
})
    localStorage.setItem("properties",JSON.stringify(properties));
    showItems(
        
    )
  }


//Clear all fields
function clearField(){
    document.getElementById("#items").value = "";
}

//add items
document.querySelector("form").addEventListener("submit", (e) =>{
    e.preventDefault();
    // get items
    const id = document.querySelector("#id").value;
    const image = document.querySelector("#image").value;
    const price = document.querySelector("#price").value;
    const title = document.querySelector("#title").value;
    const location = document.querySelector("#Location").value;
    const category = document.querySelector("#catergory").value;
        const row = document.createComment("td");
        row.innerHTML = `<tr>
        <td>${property.id}</td>
        <td>${property.img}</td>
        <td>${property.price}</td>
        <td>${property.title}</td>
        <td>${property.location}</td>
        <td>${property.category}</td>
        <td>
        < type="reset" value="Reset" class=" btn btn-danger bt-sm delete danger" onclick="Geeks()">Delete</a>
        <  type="add" value="add"  id="btn" class=" btn btn-primary bt-sm add" onclick="addRow()>Add</a>
        </td>
        </tr>
        `
    }
    
    
); localStorage.setItem("properties",JSON.stringify(properties));
showItems

//Update items
function updateItem(id){
    const listing= properties.find(linsting =>
        {return listing.id == id})
}
// add items
  function addRow() {
    const property = {
      id: properties.length + 1,
      img: document.getElementById("#image").value,
      title: document.getElementById("#id").value,
      price: document.getElementById("#price").value,
      title: document.getElementById("#title").value,
      Location: document.getElementById("#Location").value,
      category: document.getElementById("#catergory").value,
    };
  
    properties.push(property);
    localStorage.setItem("properties", JSON.stringify(properties));
    showAdminProperties(properties);
  }
  
  document
    .getElementById("#btn")
    .addEventListener("click", property);