const profilePicture = document.querySelector(".profile-picture");
const commentBox = document.querySelector(".comment");
const addCommentButton = document.querySelector(".add-comment");
const commentsList = document.querySelector(".comments");

const url = "https://pokeapi.co/api/v2/pokemon/pikachu"

const commentsUrl = "http://localhost:3000/comments"

fetch(url)
    .then(response => response.json())
    .then(renderImage);

fetch(commentsUrl)
    .then(response => response.json())
    .then(renderComments)

function renderImage(pokemon) {
    const imageUrl = pokemon.sprites.front_default
    profilePicture.src = imageUrl
}

function renderComments(comments){
    comments.forEach(comment => {
        const li = document.createElement("li")
        li.textContent = comment.text
        commentsList.appendChild(li)
    })
}

addCommentButton.addEventListener("click", event => {
    event.preventDefault()
    fetch(commentsUrl, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            comment: {
                text: commentBox.value
            }
        })
    }).then(() => {
        const li = document.createElement("li")
        li.textContent = commentBox.value
        commentsList.appendChild(li)
    })
})
