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
function toggleHeader (){ 
  const toggleButton = document.querySelector(".navbar-toggler")
  const header =document.querySelector("#navbarHeader")
  
  toggleButton.addEventListener("click",()=>{
  header.classList.toggle("collapse")
  })
  
}
toggleHeader()

// Exercises 3 write function to change html5 card's text colors when click on edit button

function colorChanger() {
  const edit = document.querySelector(".album").querySelector(".row").querySelector(".btn-group").children[1];
  const card = document.querySelector(".album").querySelector(".row").querySelector(".card-text");
edit.addEventListener("click", () => {
    if (card.style.color === "black") {
      card.style.color = "orange";
    } else {
      card.style.color = "black";
    }
  });
}
colorChanger();

// Exercises 4 write function to change html3 card's text colors when click on edit button

function colorChanger2() {
  const edit = document.querySelector(".album").querySelector(".row").children[1].querySelector(".btn-group").children[1];
  const card = document.querySelector(".album").querySelector(".row").children[1].querySelector(".card-text");
edit.addEventListener("click", () => {
    if (card.style.color === "black") {
      card.style.color = "blue";
    } else {
      card.style.color = "black";
    }
  });
}
colorChanger2();
// Exercises 5 write function to change js card's text colors when click on edit button
function colorChanger3() {
  const edit = document.querySelector(".album").querySelector(".row").children[2].querySelector(".btn-group").children[1];
  const card = document.querySelector(".album").querySelector(".row").children[2].querySelector(".card-text");
edit.addEventListener("click", () => {
    if (card.style.color === "black") {
      card.style.color = "yellow";
    } else {
      card.style.color = "black";
    }
  });
}
colorChanger3();

// Exercises 6 write function to change WiderCard card's text colors when click on edit button
function colorChanger4() {
  const edit = document.querySelector(".album").querySelector(".row").children[3].querySelector(".btn-group").children[1];
  const card = document.querySelector(".album").querySelector(".row").children[3].querySelector(".card-text");
edit.addEventListener("click", () => {
    if (card.style.color === "black") {
      card.style.color = "red";
    } else {
      card.style.color = "black";
    }
  });
}
colorChanger4();

// Exercises 7  write function to change Bootstrap card's text colors when click on edit button
function colorChanger5() {
  const edit = document.querySelector(".album").querySelector(".row").children[4].querySelector(".btn-group").children[1];
  const card = document.querySelector(".album").querySelector(".row").children[4].querySelector(".card-text");
edit.addEventListener("click", () => {
    if (card.style.color === "black") {
      card.style.color = "purple";
    } else {
      card.style.color = "black";
    }
  });
}
colorChanger5();

// Exercises 8 write function to change Github card's text colors when click on edit button
function colorChanger6() {
  const edit = document.querySelector(".album").querySelector(".row").children[5].querySelector(".btn-group").children[1];
  const card = document.querySelector(".album").querySelector(".row").children[5].querySelector(".card-text");
edit.addEventListener("click", () => {
    if (card.style.color === "black") {
      card.style.color = "cyan";
    } else {
      card.style.color = "black";
    }
  });
}
colorChanger6();

// Exercises 9 write a function to add href links to to facebook and twitter and email in header
function clickonTwitter (){
  const twitter = document.querySelector("#twitter")
  twitter.addEventListener("click",()=>{
    twitter.querySelector("a").setAttribute("href", "https://www.twitter.com/")
    })
}
clickonTwitter ()

function clickonFacebook (){
  const twitter = document.querySelector("#facebook")
  twitter.addEventListener("click",()=>{
    twitter.querySelector("a").setAttribute("href", "https://www.facebook.com/")
    })
}
clickonFacebook ()

function clickonEmail (){
  const twitter = document.querySelector("#email")
  twitter.addEventListener("click",()=>{
    twitter.querySelector("a").setAttribute("href", "https://www.gmail.com/")
    })
}
clickonEmail ()

// Exercises 10  write a function to change the order of the cards: <== button will put the first card at the end
//==> will do the reverse

function changer (){
  
}
