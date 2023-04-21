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
const specialBar = document.querySelector(".special-bar");
const breakfastEl = document.querySelector("#breakfast");
breakfastEl.classList.add("bg-red");
breakfastEl.classList.add("font-cream");

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
    // console.log(item);
    if (e.target.innerHTML == "LUNCH") {
      cardData(lunchData);
      barTopics.forEach((i) => {
        i.classList.remove("bg-red");
        i.classList.remove("font-cream");
      });
      item.classList.add("bg-red");
      item.classList.add("font-cream");
    } else if (e.target.innerHTML == "BREAKFAST") {
      cardData(breakFastData);
      barTopics.forEach((i) => {
        i.classList.remove("bg-red");
        i.classList.remove("font-cream");
      });
      item.classList.add("bg-red");
      item.classList.add("font-cream");
    } else if (e.target.innerHTML == "DINNER") {
      cardData(dinnerData);
      barTopics.forEach((i) => {
        i.classList.remove("bg-red");
        i.classList.remove("font-cream");
      });
      item.classList.add("bg-red");
      item.classList.add("font-cream");
    } else if (e.target.innerHTML == "STARTERS") {
      cardData(starterData);
      barTopics.forEach((i) => {
        i.classList.remove("bg-red");
        i.classList.remove("font-cream");
      });
      item.classList.add("bg-red");
      item.classList.add("font-cream");
    } else if (e.target.innerHTML == "BEVERAGES") {
      cardData(beveragesData);
      barTopics.forEach((i) => {
        i.classList.remove("bg-red");
        i.classList.remove("font-cream");
      });
      item.classList.add("bg-red");
      item.classList.add("font-cream");
    }
  });
});

// topic bg color change on click

// barTopics.forEach((topic) => {
//   topic.addEventListener("click", () => {
//     topic.classList.add("bg-red");
//   });
// });
