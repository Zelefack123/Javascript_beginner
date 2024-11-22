// const inputBox = document.getElementById("input-box");
// const listContainer  = document.getElementById("list-container");
// function addTask(){

// if (inputBox.value == ''){
//     alert("enter a text");

// }
// else{

//     let li = document.createElement("li")
//     li.innerHTML = inputBox.value;

//     listContainer.appendChild(li);

//     let span = document.createElement("span");
//     span.innerHTML = "\u00d7";
//     li.appendChild(span);
// }
// inputBox.value = ''
// saveData();
// }
//  listContainer.addEventListener("click", function(e){
//     if (e.target.tagName == "LI")

// {
//      e.target.classList.toggle("checked");
//      saveData();
// }
//     else if(e.target.tagName == "SPAN"){
//         e.target.parentElement.remove();
//     }
//     saveData();

//  })
//  function saveData(){
//     localStorage.setItem("data", listContainer.innerHTML);
//  }
//  function showTask(){
//     listContainer.innerHTML = localStorage.getItem("data");
//  }
//  showTask();
function sum(x){
if (x == 1){
     return 1;}
else {
    
    return  x + sum(x-1);
}


}
let result = sum(5);
console.log(result);