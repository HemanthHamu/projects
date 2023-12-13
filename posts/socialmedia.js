let form = document.getElementById("form");
let userInput = document.getElementById("userinput");
let msg = document.getElementById("msg");
let post = document.getElementById("posts")

form.addEventListener("submit",(e)=> {
    e.preventDefault();
    console.log("button clicked");
    checkForm()
})

let checkForm = () => {
    if(userInput.value === ""){
      msg.innerHTML = "Write something and post it";
      console.log("Failed")
    }
    else{
      msg.innerHTML = "";
      console.log("Success");
      acceptData()
    }
}

let data = {};
acceptData = () => {
  data["text"] = userInput.value;
  console.log(data);
  createData();
}

createData = () =>{
  post.innerHTML += 
  `
  <div class="post-container">
      <p>${data.text}</p>
      <span id="images" class="images">
          <i class="fa-solid fa-pen-to-square edit" onclick = "editPost(this)"></i>
          <i class="fa-sharp fa-solid fa-trash trash" onclick = "deletePost(this)"></i>
      </span>
  </div>        
  `
}
//function for editing the post 
editPost = (element) => {
  const postDiv = element.closest('div');
  const postText = postDiv.querySelector('p');
  // Create an input field and set its value to the current post text
  const editInput = document.createElement('input');
  editInput.style.height = '40px'
  editInput.style.background = 'transparent'
  editInput.style.color = 'white'
  editInput.type = 'text';
  editInput.value = postText.textContent;
  // Replace the paragraph with the input field
  postDiv.replaceChild(editInput, postText);
  // Add an event listener to handle saving changes
  editInput.addEventListener('blur', () => {
      saveEditedPost(postDiv, editInput);
  });
  // Set focus on the input field
  editInput.focus();
};

saveEditedPost = (postDiv, editInput) => {
  // Create a new paragraph with the edited text
  const newParagraph = document.createElement('p');
  newParagraph.textContent = editInput.value;

  // Replace the input field with the new paragraph
  postDiv.replaceChild(newParagraph, editInput);
};

// function for deleting the post when user clicked on delete icon
deletePost = (element) => {
  const postDiv = element.closest('div');

  // Remove the postDiv from the posts container
  postDiv.remove();
};


