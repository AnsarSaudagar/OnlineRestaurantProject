import { breakFast, lunch, dinner, starter, beverages } from "../data/data.js";

//Getting data
const breakFastData = breakFast;
const lunchData = lunch;
const dinnerData = dinner;
const starterData = starter;
const beveragesData = beverages;

//Selecting required elements
const specialParent = document.querySelector(".main-dishes");
const barTopics = document.querySelectorAll(".bar-topic");

//Function for making special menu cards
const menuCard = (name, description, price) => {
  return `
                    <div class="menu-card flex">
                        <div class="menu-card-left">
                            <h4 class="font-red fs-20 fw-400">${name}</h4>
                            <p class="
                            ">${description}
                            </p>
                        </div>
                        <div class="menu-card-right flex center">
                            <p class="menu-card-price">$${price}</p>
                        </div>
                    </div>
`;
};

//Function for changing data according to click
const cardData = (dataTopic) => {
  for (let i = 0; i < 6; i++) {
    allCards[i].children[0].children[0].innerHTML = dataTopic[i].name;
    allCards[i].children[0].children[1].innerHTML = dataTopic[i].description;
    allCards[i].children[1].children[0].innerHTML = "$" + dataTopic[i].price;
  }
};

//Displaying special menu data on load
breakFast.forEach((item) => {
  specialParent.insertAdjacentHTML(
    "afterbegin",
    menuCard(item.name, item.description, item.price)
  );
});

// Getting all the cards afer load
const allCards = document.querySelectorAll(".menu-card");

// Changing the the data on click
barTopics.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.innerHTML == "LUNCH") {
      cardData(lunchData);
    } else if (e.target.innerHTML == "BREAKFAST") {
      cardData(breakFastData);
    } else if (e.target.innerHTML == "DINNER") {
      cardData(dinnerData);
    } else if (e.target.innerHTML == "STARTERS") {
      cardData(starterData);
    } else if (e.target.innerHTML == "BEVERAGES") {
      cardData(beveragesData);
    }
  });
});
