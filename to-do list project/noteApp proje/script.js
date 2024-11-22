const Edit = document.querySelector(".row2");
Edit.addEventListener("click", displaytextBox);

function displaytextBox() {
  // Select the .row3 element
  const originalTextArea = document.querySelector(".row3");

  
  const newTextArea = originalTextArea.cloneNode(true);
  newTextArea.style.display = "block"; 

  const clonedTrash = newTextArea.querySelector("#trash");
  if (clonedTrash) {
    clonedTrash.onclick = () => {
      newTextArea.remove(); // Remove the entire cloned node
    };
  }
  document.body.appendChild(newTextArea);
}

