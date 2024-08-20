const notesContainer = document.querySelector(".notes-container");
const CreateBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");
CreateBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
 inputBox.className = "input-box";
inputBox.setAttribute("contenteditable", "true");
img.src = "./Baby.jpeg";
notesContainer.appendChild(inputBox).appendChild(img);
// `img.addEventListener("click",()=>{
//     inputBox.textContent = "";   


// })`

})
notesContainer.addEventListener("click", (e) =>{
if
    (e.target.tagName === "IMG"){
        e.target.parentNode.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        
    }
}

)
function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}