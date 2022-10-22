// Creating the array of the comments objects:
const commentsArray = [
    {
        id: 1,
        username: "Marie",
        commentText: "Praesentium deleniti qui. Iusto sunt sapiente. Id recusandae quaerat quo. Atque omnis molestiae.",
        date: new Date(),
        imgUrl: 'http://placeimg.com/640/480'
    },
    {
        id: 2,
        username: "Abigail",
        commentText: "Voluptatem voluptatum ipsum facere eaque consequuntur reprehenderit. Voluptate ullam quia fuga numquam eligendi voluptas iste. Voluptas soluta aut nemo consequatur numquam error rerum non.",
        date: new Date(),
        imgUrl: 'http://placeimg.com/640/480'
    },
    {
        id: 3,
        username: "Abbie",
        commentText: "Natus quidem facilis debitis delectus. Natus sed et laboriosam. Eos qui nesciunt voluptates maiores vitae. Est et rerum officiis maxime delectus aut voluptas unde. Laboriosam quo iste totam repellendus ut aliquam officia enim. Officia est impedit atque et veritatis illo aut consequatur voluptates.",
        date: new Date(),
        imgUrl: 'http://placeimg.com/640/480'
    },
    {
        id: 4,
        username: "Clementina",
        commentText: "Labore quia libero natus nobis eum est aut quas. Est eaque sit magnam modi amet illo. Illo sed omnis molestiae soluta quam voluptatem quod sit. Iure voluptate ullam illum neque autem repudiandae commodi. Assumenda ut nulla commodi occaecati quo non sit exercitationem. Esse iste repudiandae quia quis.",
        date: new Date(),
        imgUrl: 'http://placeimg.com/640/480'
    },
]


// we want to use the document object model to have a reference to the form from the HTML inde.html page:
const formElement = document.querySelector('#comments-form')
const commentsSection = document.querySelector("#comments-container")

// we have to listen to an event to happen on our element (formElement), then collect the input data:
formElement.addEventListener('submit', (e) => {
    // Preventing the page from reloading on form submission.
    e.preventDefault()

    // get the information from the input fields and store them into variables:
    const commentID = commentsArray.length + 1
    const name = e.target.username.value
    const commentText = e.target.comment.value

    // Constructing a new object from the information we got from the form:
    const newComment = {
        id: commentID,
        username: name,
        commentText: commentText,
        date: new Date(),
        imgUrl: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/257.jpg'
    }

    displayComment(newComment)

    formElement.reset()
})



function displayComment(comment) {
    // we have to create the html element for the comments:
    const newCommentDiv = document.createElement("div");

    const imgCol = document.createElement("div");
    const commentCol = document.createElement("div");

    const nameAndDateRow = document.createElement("div");

    const imageElement = document.createElement("img");
    const nameP = document.createElement("h4")
    const commentP = document.createElement("p")
    const dateSpan = document.createElement("p")


    //! give class names to the containers:
    newCommentDiv.classList.add("comments__comment")
    imgCol.classList.add("comments__comment-image-col")
    commentCol.classList.add("comments__comment-col")
    nameAndDateRow.classList.add("comments__comment-username-and-date")

    //! give class names to the elements:
    imageElement.classList.add("comments__comment-user-image")
    nameP.classList.add("comments__comment-username")
    commentP.classList.add("comments__comment-text")
    dateSpan.classList.add("comments__comment-date")

    //! add the content to the elements:
    nameP.textContent = comment.username
    commentP.innerText = comment.commentText
    dateSpan.innerText = comment.date.toLocaleDateString()
    imageElement.src = comment.imgUrl

    //! append the elements to the containers:
    nameAndDateRow.append(nameP, dateSpan)
    commentCol.append(nameAndDateRow, commentP)
    imgCol.append(imageElement)
    newCommentDiv.append(imgCol, commentCol)

    //! append the containers to the comments section:
    commentsSection.insertAdjacentElement("afterbegin", newCommentDiv)
}


function displayAllComments() {
    for (let i = 0; i < commentsArray.length; i++) {
        const comment = commentsArray[i]
        displayComment(comment)
    }
}





displayAllComments(commentsArray)
