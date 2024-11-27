
const Button = document.querySelector("button");
const Input = document.querySelector("input");
const link = document.querySelector("ul")
Button.addEventListener("click",() =>{
 if(Input.value.trim() === "" ){
    alert("you must write something")
 }
   else 
    {
const newTask = document.createElement("li")
newTask.textContent = Input.value
const span = document.createElement("span");
newTask.appendChild(span);
link.appendChild(newTask);
newTask.onclick = () => {
    newTask.classList.toggle("checked");
  };

  span.onclick = () => {
    newTask.remove();
  };
}
Input.value = ""    
saveInfo();
})
 function saveInfo(){
    localStorage.setItem("data", ul.innerHTML)
 }
 function saveInfo(){
   ul.innerHTML = localStorage.getItem("data");
   showTask();
 }