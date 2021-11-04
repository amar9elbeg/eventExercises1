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

function jeje () {
    const togler = document.querySelector(".navbar-toggler")
    const nawbar = document.querySelector("#navbarHeader")
    togler.addEventListener("click", function(){
        nawbar.classList.toggle("collapse");
    })
}

jeje()

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

function changeTextColor2 (){
    const row = document.querySelector(".album").querySelector(".row").children[1];
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

changeTextColor2()


// Exercises 5 write function to change js card's text colors when click on edit button

function changeTextColor3 (){
    const row = document.querySelector(".album").querySelector(".row").children[2];
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

changeTextColor3()

// Exercises 6 write function to change WiderCard card's text colors when click on edit button

function changeTextColor4 (){
    const row = document.querySelector(".album").querySelector(".row").children[3];
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

changeTextColor4()

// Exercises 7  write function to change bootstrap card's text colors when click on edit button

function changeTextColor5 (){
    const row = document.querySelector(".album").querySelector(".row").children[4];
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

changeTextColor5()

// Exercises 8 write function to change Github card's text colors when click on edit button

function changeTextColor6 (){
    const row = document.querySelector(".album").querySelector(".row").children[5];
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

changeTextColor6()

// Exercises 9 write a function to add href links to to facebook and twitter and email in header
function uugnaKindaSus (){
    const nicolasSus = document.querySelector("#twitter").querySelector("a").href="https://twitter.com/?lang=en"
    const duureeSus = document.querySelector("#facebook").querySelector("a").href="https://www.facebook.com/"
    const elbegSus = document.querySelector("#email").querySelector("a").href="https://www.google.com/gmail/"
}
uugnaKindaSus()


// Exercises 10  write a function to change the order of the cards: <== button will put the first card at the end
//==> will do the reverse

function Sugna (){
    const first = document.querySelector("main")
    const leftArrow = first.children[0].querySelector("p").children[0]
    const rigthArrow = first.children[0].querySelector("p").children[1]
    const row = first.querySelector(".album").querySelector(".row")
    const html5 = row.children[0]
    leftArrow.addEventListener("click", function(){
        row.append(html5)
    })
    rigthArrow.addEventListener("click", function(){
        row.prepend(html5)
    })
}
Sugna()
