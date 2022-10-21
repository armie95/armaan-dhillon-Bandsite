// Creating the array of the comments objects:
const commentsArray = [
    {
        id: 1,
        username: "Armaan",
        commentText: "adfhp aihdspf oahsfo pahdjs fposah f",
        date: () => (new Date().getTime.toLocaleDateString())
    },
    {
        id: 2,
        username: "Max",
        commentText: "adfhp aihdspf oahsfo pahdjs fposah f",
        date: () => (new Date().getTime.toLocaleDateString())
    },
    {
        id: 3,
        username: "Anas",
        commentText: "adfhp aihdspf oahsfo pahdjs fposah f",
        date: () => (new Date().getTime.toLocaleDateString())
    },
    {
        id: 4,
        username: "Alhariri",
        commentText: "adfhp aihdspf oahsfo pahdjs fposah f",
        date: () => (new Date().getTime.toLocaleDateString())
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
        name: name,
        commentText: commentText
    }

    // to added it to the commentsArray:
    commentsArray.push(newComment)
    console.log(commentsArray)


    // we have to create the html element for the comments:
    const commentDiv = document.createElement("div");
    const nameP = document.createElement("p")
    const commentP = document.createElement("p")

    // Passing the infromation to the html elements that we have created for a comment:
    commentDiv.classList.add("comment-box")

    nameP.classList.add("username")
    commentP.classList.add("comment")

    nameP.textContent = newComment.name
    commentP.innerText = newComment.commentText

    // Add those 2 paragraphs to the comment div that we have created:
    commentDiv.append(nameP, commentP)

    console.log(commentDiv)

    // Display the new comment:
    displayComment(newComment)

    formElement.reset()
})


console.log(commentsArray)

// after collectiong the inputs data, we have to create a new comment object then add it to the comments array:

// then, we have to create a function that will include the steps to create html element for each comment.

// after those comments are ready as html elements, we should display them on the page in the comments sections.



function addComment(name, comment) {
    // Create the html elements for those info


    // add those html that has been created to the comments sections.
}

function displayComment(comment) {
    // we have to create the html element for the comments:
    const commentDiv = document.createElement("div");
    const nameP = document.createElement("p")
    const commentP = document.createElement("p")
    const nameAndDateDiv = document.createElement("div")
    nameAndDateDiv.classList.add("comments__name-and-date")

    // Passing the infromation to the html elements that we have created for a comment:
    commentDiv.classList.add("comments__comment-box")

    nameP.classList.add("comments__username")
    commentP.classList.add("comments__comment")

    nameP.textContent = comment.name
    commentP.innerText = comment.commentText

    // Add those 2 paragraphs to the comment div that we have created:
    nameAndDateDiv.append(nameP, new Date().toLocaleDateString())
    commentDiv.append(nameAndDateDiv, commentP)

    // Add the new comment div and its content (paragraphs ) to the comments sections:

    commentsSection.appendChild(commentDiv)
}