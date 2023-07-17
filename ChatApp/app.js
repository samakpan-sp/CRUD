
let form = document.getElementById("form");
let input = document.getElementById("input");
errorMsg = document.getElementById("msg");
let posts = document.getElementById("posts");



form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    formValidation()
    
});

let formValidation = () => {
    if (input.value === ""){
        console.log('Failure!')
        errorMsg.innerHTML = "You Can't Submit Blank!";
    } else {
        console.log('success!')
        errorMsg.innerHTML = "";
        acceptData();

    }
}; 

let data = {};

let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createPost();
}

let createPost = () => {
    posts.innerHTML += `
    <div>
    <p>${data.text}</p>
    <span class="option">
    <i onClick="editPost(this)" class="fa fa-edit"></i>
    <i onClick="deletePost(this)" class="fa fa-trash-o" ></i>
    </span>
    
</div>    
    `;
    input.value = "";
    console.log("Post updated");

}

let deletePost = (e) => {
    e.parentElement.parentElement.remove()

}

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}


