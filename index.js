

//   let properties =JSON.parse(localStorage.getItem("properties"))?JSON.parse(localStorage.getItem("properties")): [
//     {
//     id:1,
//     img: "https://i.postimg.cc/VNgWjg9X/house1.jpg",
// 	price: 5000000,
//     title:" 2 bedroom Apartment for sale in ",
//     location: "Cape Town",
//     category: "Town house",
// },
// {
//     id:2,
//     img: "https://i.postimg.cc/nr2j709N/house2.jpg",
// 	price: 1200000,
//     title:" 4 bedroom House for sale in ",
//     location: "Cape Town",
//     category: "Town house",
// },
// {
//     id:3,
//     img: "https://i.postimg.cc/nrXbYLXZ/house3.jpg",
// 	price: 2595000,
//     title:" ",
//     location: "Sandton Central",
//     category: "Townhouse",

// },
// {
//     id:4,
// 	price: 2000000,
//     img: "https://i.postimg.cc/PxZFt8vC/house4.jpg",
//     title:" 2 bedroom House for sale in ",
//     location: "Habour Arch",
//     category: "Township",

// },
// {
//     id:5,
//     img: "https://i.postimg.cc/sDZ13jwt/house5.jpg",
// 	price: 900000,
//     title:"bedroom House for sale in ",
//     location: "Durbanville",
//     category: "Townhouse",

// },
// {
//     id:6,
//     img: "https://i.postimg.cc/6QS5kFC9/house6.jpg",
// 	price: 12000000,
//     title:"6 bedroom House for sale in",
//     location: " Constantia Upper",
//     category: "Surbab",

// },
// {
//     id:7,
//     img: "https://i.postimg.cc/jdgV3PHT/house7.jpg",
// 	price: 7000000,
//     title:"4 bedroom House for sale in ",
//     location: "HoutBay",
//     category: "Surbab",

// },
// {
//     id:7,
//     img: "https://i.postimg.cc/V6D4sBLL/house8.jpg",
// 	price: 9000000,
//     title:"3 bedroom House for sale in ",
//     location: "Sandton Central",
//     category: "Townhouse",

// }]
// function showItems(properties) {
//     document.querySelector("#container").innerHTML = " ";
//     properties.forEach(property => { 
//     document.querySelector("#container").innerHTML += `
//     <div class="card " style=" width: fit-content">
//     <img src="${property.img}" style="width:300px"/>
//     <h3>"${property.id}"<h3/>
//     <div>R${property.price}</div>
//     <h3>"${property.location}"<h3/>
//     <div> ${property.category}</div></div>`;
//   });
// };
// showItems(properties);

// function addRecord(e) {
//     e.preventDefault();
//     properties.push(
//         document.getElementById('#container').value
//     );
//     // Save data to our localstorage
//     localStorage.setItem('properties', JSON.stringify(properties));
// }

// document.querySelector('#container').addEventListener('click', addRecord);
// console.log(JSON.parse(localStorage.getItem('items')));



