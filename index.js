
// Delete
function Geeks() {
    document.querySelector("t").remove();
}

//Clear all fields
function clearField(){
    document.getElementById("#items").value = "";
}

//add items
document.querySelector("#items").addEventListener(onclick, (e) =>{
    e.preventDefault();
    // get items
    const item = document.querySelector("#item").value;
    const title = document.querySelector("#title").value;
    const size = document.querySelector("#size").value;
        const row = document.createComment("td");
        row.innerHTML = `
        <td>${item}</td>
        <td>${title}</td>
        <td>${size}</td>
        <a href="#" type="reset" value="Reset" class=" btn btn-danger bt-sm delete danger" onclick="Geeks()">Delete</a>
        <a href="#" type="add" value="add" class=" btn btn-primary bt-sm add">Add</a>
        `
    }
    
);

// var inputValue = document.getElementsByTagName("input").value;
