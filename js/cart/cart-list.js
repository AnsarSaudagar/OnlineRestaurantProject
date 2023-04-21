const cartItems = document.querySelectorAll(".cart-item");

const cartArr = [
  {
    Belgiumwaffles: 1,
  },
  {
    Belgiumwaffleswithstrawberries: 1,
  },
  {
    Belgiumwaffleswithchoclate: 1,
  },
];

// localStorage.setItem("cart-items", JSON.stringify(cartArr));
cartItems.forEach((item, index) => {
  const mainArr = JSON.parse(localStorage.getItem("cart-items"));
  const productName = item.children[1].children[0].innerHTML.replace(/\s/g, "");
  const unitPrice = item.children[2].children[0];
  let unitPriceCount = parseInt(unitPrice.innerHTML.slice(1));
  const total = item.children[4].children[0];
  const action = item.children[5].children[0];
  let totalCount = parseInt(total.innerHTML.slice(1));
  const plus = item.children[3].children[0].children[0];
  const minus = item.children[3].children[2].children[0];
  const count = item.children[3].children[1];

  let countNum = mainArr[index][productName];
  count.innerHTML = countNum;
  total.innerHTML = "$" + mainArr[index][productName] * 150;

  plus.addEventListener("click", (e) => {
    const eachItem = JSON.parse(localStorage.getItem("cart-items"));
    countNum++;
    eachItem[index][productName] = countNum;
    count.innerHTML = eachItem[index][productName];
    total.innerHTML = "$" + totalCount * eachItem[index][productName];
    localStorage.setItem("cart-items", JSON.stringify(eachItem));
  });

  minus.addEventListener("click", () => {
    const eachItem = JSON.parse(localStorage.getItem("cart-items"));
    if (eachItem[index][productName] > 1) {
      countNum--;
      eachItem[index][productName] = countNum;
      count.innerHTML = eachItem[index][productName];
      total.innerHTML = "$" + totalCount * eachItem[index][productName];
      localStorage.setItem("cart-items", JSON.stringify(eachItem));
    }
  });
  action.addEventListener("click", () => {
    const eachItem = JSON.parse(localStorage.getItem("cart-items"));
  });
});
