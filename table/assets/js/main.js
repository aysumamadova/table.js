// var entry=document.getElementById("entry");
// entry.addEventListener("click",displayDetails);
// var row=1;
// function displayDetails(){
//     var name =document.getElementById("name").value;
//     var surname =document.getElementById("surname").value;
//     var age =document.getElementById("age").value;
// }
// var display=document.getElementById("display")
// var newRow=display.insertRow(row);

// var cell1=newRow.indertCell(0);
// var cell2=newRow.indertCell(1);
// var cell3=newRow.indertCell(2);

// cell1.innerHTML=name;
// cell2.innerHTML=surname;
// cell3.innerHTML=age;
const display=document.querySelector("table")
const entry=document.querySelector("button")
const input=document.querySelector("input")

entry.addEventListener("click",function(e){
    e.preventDefault();
    let name=document.createElement("td")
    name.innerText=input.value;
    name.classList.add("display")
    entry.append(name);
})
entry.addEventListener("click",function(e){
    e.preventDefault();
    let surname=document.createElement("td")
    surname.innerText=input.value;
    surname.classList.add("display")
    entry.append(surname);
})
entry.addEventListener("click",function(e){
    e.preventDefault();
    let age=document.createElement("td")
    age.innerText=input.value;
    age.classList.add("display")
    entry.append(age);
})