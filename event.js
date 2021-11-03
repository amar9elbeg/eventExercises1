// Exercises 1 ==> Every Time you click on Back to top button it will add 1 to count and console log the count.

let count = 0;
// function number() {
//     count += 1
//     console.log(count)
// }
function footerClick() {
  const footer = document.querySelector("footer");
  footer.addEventListener("click", () => {
    count += 1;
    console.log(count);
  });
}
footerClick();
// Exercises 2 add event function to toggle header contact to show header links

// Exercises 3 write function to change html5 card's text colors when click on edit button

function colorChanger() {
  const edit = document.querySelector(".album").querySelector(".row").querySelector(".btn-group").children[1];
  const card = document.querySelector(".album").querySelector(".row").querySelector(".card-text");
  
edit.addEventListener("click", () => {
    if (card.style.color === "black") {
      card.style.color = "red";
    } else {
      card.style.color = "black";
    }
  });
}
colorChanger();

// Exercises 4 write function to change html3 card's text colors when click on edit button

// Exercises 5 write function to change js card's text colors when click on edit button

// Exercises 6 write function to change WiderCard card's text colors when click on edit button

// Exercises 7  write function to change WiderCard card's text colors when click on edit button

// Exercises 8 write function to change Github card's text colors when click on edit button

// Exercises 9 write a function to add href links to to facebook and twitter and email in header

// Exercises 10  write a function to change the order of the cards: <== button will put the first card at the end
//==> will do the reverse
