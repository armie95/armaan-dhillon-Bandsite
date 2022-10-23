// Create the section element :
const showsSection = document.querySelector("#shows")

// create the shows title and adding the wrapper class to it:
const showsTitle = document.createElement("h2")
showsTitle.classList.add("shows__title", "wrapper")
// showsTitle.innerText = "Shows"
showsTitle.textContent = "Shows"

showsSection.append(showsTitle)


// ! The tickets Array:
const ticketsList = [
    {
        date: new Date(),
        venue: "Ronald Lane",
        location: "San Frrancisco, CA"
    },
    {
        date: new Date(),
        venue: "Pier 3 East",
        location: "San Frrancisco, CA"
    },
    {
        date: new Date(),
        venue: "Ronald Lane",
        location: "San Frrancisco, CA"
    },
    {
        date: new Date(),
        venue: "Pier 3 East",
        location: "San Frrancisco, CA"
    },
]


for (let i = 0; i < ticketsList.length; i++) {
    displayTicket(ticketsList[i])
}


function displayTicket(ticket) {

    // Create a show div:
    const showDiv = document.createElement("div")
    showDiv.classList.add("shows__show")

    //create the wrapper div:
    const wrapperDiv = document.createElement("div")
    wrapperDiv.classList.add("wrapper")

    // create a row for the current ticket's date:
    const dateRow = document.createElement("div")
    dateRow.classList.add("shows__row")

    // create a row for the current ticket's title:
    const titleRow = document.createElement("div")
    titleRow.classList.add("shows__row")

    // create a row for the current ticket's location:
    const locationRow = document.createElement("div")
    locationRow.classList.add("shows__row")


    // create label for the date:
    const dateLabel = document.createElement("label")
    dateLabel.classList.add("shows__label")
    dateLabel.textContent = "Date"

    // create h3 for the date text:
    const dateText = document.createElement("h3")
    dateText.classList.add("shows_text")
    dateText.textContent = ticket.date.toLocaleDateString()


    // create label for the title (venue):
    const titleLabel = document.createElement("label")
    titleLabel.classList.add("shows__label")
    titleLabel.textContent = "Venue"

    // create h3 for the title (venue) text:
    const titleText = document.createElement("h3")
    titleText.classList.add("shows_text")
    titleText.textContent = ticket.venue


    // create label for the location:
    const locationLabel = document.createElement("label")
    locationLabel.classList.add("shows__label")
    locationLabel.textContent = "Location"

    // create h3 for the location text:
    const locationText = document.createElement("h3")
    locationText.classList.add("shows_text")
    locationText.textContent = ticket.location


    // create the buy ticket btn:
    const buyBtn = document.createElement("button")
    buyBtn.classList.add("shows__buy-tickets")
    buyBtn.innerText = "Buy Tickets"


    //! Append the childern to their parenet containers or divs or sections:
    dateRow.append(dateLabel, dateText)

    titleRow.append(titleLabel, titleText)

    locationRow.append(locationLabel, locationText)

    wrapperDiv.append(dateRow, titleRow, locationRow, buyBtn)

    showDiv.append(wrapperDiv)

    showsSection.append(showDiv)
}

