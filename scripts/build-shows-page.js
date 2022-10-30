// Create the section element :
const showsSection = document.querySelector("#shows");

// create the shows title and adding the wrapper class to it:
const showsTitle = document.createElement("h2");
showsTitle.classList.add("shows__title", "wrapper");
// showsTitle.innerText = "Shows"
showsTitle.textContent = "Shows";

showsSection.append(showsTitle);

const BASE_URL = "https://project-1-api.herokuapp.com/";
const API_KEY = "?api_key=9100b3a8-05e5-4ee3-9514-3198df6acb60";

const buildURL = (endPoint) => {
  return `${BASE_URL}${endPoint}/$ {API_Key}`;
};

const ticketElementsArray = [];
/*Gets the show dates for the bands and console log into the browser url  getting the response*/
/* we used the fetch method and created 2 varables holding our base url for the backend endpoint and and api key hlding the credentials*/
/* we will working on displayng onto page. */
axios
  .get(`${BASE_URL}showdates/${API_KEY}`)
  .then((data) => {
    const showTickets = data.data;
    showTickets.forEach((ticket) => {
      displayTicket(ticket);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

function displayTicket(ticket) {
  // Create a show div:
  const showDiv = document.createElement("div");
  showDiv.classList.add("shows__show");

  //create the wrapper div:
  const wrapperDiv = document.createElement("div");
  wrapperDiv.classList.add("wrapper");

  // create a row for the current ticket's date:
  const dateRow = document.createElement("div");
  dateRow.classList.add("shows__row");

  // create a row for the current ticket's title:
  const titleRow = document.createElement("div");
  titleRow.classList.add("shows__row");

  // create a row for the current ticket's location:
  const locationRow = document.createElement("div");
  locationRow.classList.add("shows__row");

  // create label for the date:
  const dateLabel = document.createElement("label");
  dateLabel.classList.add("shows__label");
  dateLabel.textContent = "Date";

  // create h3 for the date text:
  const dateText = document.createElement("h3");
  dateText.classList.add("shows__text");
  const dateToDateString = new Date(ticket.date).toLocaleDateString();
  dateText.textContent = dateToDateString;

  // create label for the title (place):
  const titleLabel = document.createElement("label");
  titleLabel.classList.add("shows__label");
  titleLabel.textContent = "Venue";

  // create h3 for the title (place) text:
  const titleText = document.createElement("h3");
  titleText.classList.add("shows_text");
  titleText.textContent = ticket.place;

  // create label for the location:
  const locationLabel = document.createElement("label");
  locationLabel.classList.add("shows__label");
  locationLabel.textContent = "Location";

  // create h3 for the location text:
  const locationText = document.createElement("h3");
  locationText.classList.add("shows_text");
  locationText.textContent = ticket.location;

  // create the buy ticket btn:
  const buyBtn = document.createElement("button");
  buyBtn.classList.add("shows__buy-tickets");
  buyBtn.innerText = "Buy Tickets";

  //! Append the childern to their parenet containers or divs or sections:
  dateRow.append(dateLabel, dateText);

  titleRow.append(titleLabel, titleText);

  locationRow.append(locationLabel, locationText);

  wrapperDiv.append(dateRow, titleRow, locationRow, buyBtn);

  showDiv.append(wrapperDiv);
  showsSection.append(showDiv);

  //! Select Show ticket functionality:
  showDiv.addEventListener("click", (e) => {
    ticketElementsArray.forEach((ele) => {
      ele.classList.remove("shows__show__selected");
    });

    e.currentTarget.classList.add("shows__show__selected");
  });

  ticketElementsArray.push(showDiv);
}
