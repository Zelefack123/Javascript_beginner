const input = document.querySelector("input");
const button = document.querySelectorAll("button");
button.forEach(button => {
    button.addEventListener("click", displayValue);  
});

function displayValue(event){

    const button = event.target;
    if (button.innerHTML === "AC"){ 
        input.value = ""
    }
    else if (button.innerHTML === "DEL"){
        input.value = input.value.slice(0, -1);
    }
    else if (button.innerHTML === "="){
        input.value = eval(input.value);
    }
    else{
        input.value += button.innerHTML;
    }
        
  

}