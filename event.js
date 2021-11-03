// Exercises 1 ==> Every Time you click on Back to top button it will add 1 to count and console log the count.

let count = 0;
function footerClick(){
    const jeje = document.querySelector("footer");
    jeje.addEventListener("click", () => {
        count +=1
        console.log(count)
    })
}
footerClick()

// Exercises 2 add event function to toggle header contact to show header links



// Exercises 3 write function to change html5 card's text colors when click on edit button

function changeTextColor (){
    const row = document.querySelector(".album").querySelector(".row");
    const edit = row.querySelector(".btn-group").children[1];
    const text = row.querySelector(".card-body").children[0];
    edit.addEventListener("click", function(){
        if (text.style.color === "black") {
            text.style.color = "red";
        }else{
            text.style.color = "black"
        }
    })
};

changeTextColor()
// console.log(document.querySelector(".album"))
// Exercises 4 write function to change html3 card's text colors when click on edit button

// Exercises 5 write function to change js card's text colors when click on edit button

// Exercises 6 write function to change WiderCard card's text colors when click on edit button

// Exercises 7  write function to change WiderCard card's text colors when click on edit button

// Exercises 8 write function to change Github card's text colors when click on edit button

// Exercises 9 write a function to add href links to to facebook and twitter and email in header

// Exercises 10  write a function to change the order of the cards: <== button will put the first card at the end
//==> will do the reverse
