const BASE_URL = "https://project-1-api.herokuapp.com/";
const API_KEY = "?api_key=9100b3a8-05e5-4ee3-9514-3198df6acb60";

//const commentsArray = fetch(`${BASE_URL}comments/${API_KEY}`, {
axios
  .get(`${BASE_URL}comments/${API_KEY}`, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  })
  .then((data) => {
    const commentsList = data.data;
    commentsList.forEach((comment) => {
      displayComment(comment);
    });
  })
  .catch((err) => {
    console.log({ err });
  });

// we want to use the document object model to have a reference to the form from the HTML inde.html page:
const formElement = document.querySelector("#comments-form");
const commentsSection = document.querySelector("#comments-container");

// we have to listen to an event to happen on our element (formElement), then collect the input data:
formElement.addEventListener("submit", (e) => {
  // Preventing the page from reloading on form submission.
  e.preventDefault();

  //   const commentID = commentsArray.length + 1;
  const name = e.target.username.value;
  const commentText = e.target.comment.value;

  // Takes data from form and post to backend api.//
  const postData = {
    name: name,
    comment: commentText,
  };

  /*Post request pushing new data into th database */
  axios
    .post(`${BASE_URL}comments/${API_KEY}`, postData)
    .then((data) => {
      const comment = data.data;
      displayComment(comment);

      console.log(data);
    })
    .catch((err) => {
      console.log(err.message);
    });

  formElement.reset();
});

function displayComment(comment) {
  // we have to create the html element for the comments:
  const newCommentDiv = document.createElement("div");

  const imgCol = document.createElement("div");
  const commentCol = document.createElement("div");

  const nameAndDateRow = document.createElement("div");

  const imageElement = document.createElement("img");
  const nameP = document.createElement("h4");
  const commentP = document.createElement("p");
  const dateSpan = document.createElement("p");

  //! give class names to the containers:
  newCommentDiv.classList.add("comments__comment");
  imgCol.classList.add("comments__comment-image-col");
  commentCol.classList.add("comments__comment-col");
  nameAndDateRow.classList.add("comments__comment-username-and-date");

  //! give class names to the elements:
  imageElement.classList.add("comments__comment-user-image");
  nameP.classList.add("comments__comment-username");
  commentP.classList.add("comments__comment-text");
  dateSpan.classList.add("comments__comment-date");

  //! add the content to the elements:
  const timestampToDateString = new Date(
    comment.timestamp
  ).toLocaleDateString();
  nameP.textContent = comment.name;
  commentP.innerText = comment.comment;
  dateSpan.innerText = timestampToDateString;
  const imageUrl = `https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${getRandomNumber(
    500
  )}.jpg`;
  imageElement.src = imageUrl;

  //! append the elements to the containers:
  nameAndDateRow.append(nameP, dateSpan);
  commentCol.append(nameAndDateRow, commentP);
  imgCol.append(imageElement);
  newCommentDiv.append(imgCol, commentCol);

  //! append the containers to the comments section:
  commentsSection.insertAdjacentElement("afterbegin", newCommentDiv);
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}
