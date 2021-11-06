
// Exercises 2 add event function to toggle header contact to show header links

function nikle(){
    let toggler = document.querySelector(".navbar-toggler")
    console.log(toggler)
    let bar = document.querySelector("#navbarHeader")
    console.log(bar)
    toggler.addEventListener("click", () => {
        bar.classList.toggle("collapse")
    })
}
nikle()
// Exercises 3 write function to change html5 card's text colors when click on edit button

function colorChange(){
 
    let album = document.querySelector(".album").querySelector(".row").children[0]
   const edit = album.querySelector(".btn-group").children[1]
   const text = album.querySelector(".card-body").children[0]
 

   edit.addEventListener("click", function(){
       if(text.style.color === "black"){
           text.style.color = "red"
       }else{
        text.style.color = "black"
       }
   })
}

colorChange()


// Exercises 4 write function to change html3 card's text colors when click on edit button

function color(){
 
    let album = document.querySelector(".album").querySelector(".row").children[1]
   const edit =  album.querySelector(".btn-group").children[1]
   const text = album.querySelector(".card-body").children[0]
 

   edit.addEventListener("click", function(){
       if(text.style.color === "black"){
           text.style.color = "blue"
       }else{
        text.style.color = "black"
       }
   })
}

color()

// Exercises 5 write function to change js card's text colors when click on edit button

function change(){
 
    let album = document.querySelector(".album").querySelector(".row").children[2]
   const edit =  album.querySelector(".btn-group").children[1]
   const text = album.querySelector(".card-body").children[0]
 

   edit.addEventListener("click", function(){
       if(text.style.color === "black"){
           text.style.color = "yellow"
       }else{
        text.style.color = "black"
       }
   })
}

change()

// Exercises 6 write function to change WiderCard card's text colors when click on edit button

function cchange(){
 
    let album = document.querySelector(".album").querySelector(".row").children[3]
   const edit =  album.querySelector(".btn-group").children[1]
   const text = album.querySelector(".card-body").children[0]
 

   edit.addEventListener("click", function(){
       if(text.style.color === "black"){
           text.style.color = "green"
       }else{
        text.style.color = "black"
       }
   })
}

cchange()

// Exercises 7  write function to change WiderCard card's text colors when click on edit button

function ccchange(){
 
    let album = document.querySelector(".album").querySelector(".row").children[4]
   const edit =  album.querySelector(".btn-group").children[1]
   const text = album.querySelector(".card-body").children[0]
 

   edit.addEventListener("click", function(){
       if(text.style.color === "black"){
           text.style.color = "cyan"
       }else{
        text.style.color = "black"
       }
   })
}

ccchange()

// Exercises 8 write function to change Github card's text colors when click on edit button

function cccchange(){
 
    let album = document.querySelector(".album").querySelector(".row").children[5]
   const edit =  album.querySelector(".btn-group").children[1]
   const text = album.querySelector(".card-body").children[0]
 

   edit.addEventListener("click", function(){
       if(text.style.color === "black"){
           text.style.color = "blue"
       }else{
        text.style.color = "black"
       }
   })
}

cccchange()

// Exercises 9 write a function to add href links to to facebook and twitter and email in header

function links(){
    let lary = document.querySelector("#twitter")

    lary.addEventListener("click", () => {
        lary.querySelector("a").setAttribute("href", "https://www.washington.edu/accesscomputing/webd2/student/unit5/module2/lesson1.html")
    })
    
}

function face(){
    let lary = document.querySelector("#facebook")

    lary.addEventListener("click", () => {
        lary.querySelector("a").setAttribute("href", "https://www.w3schools.com/jsref/prop_style_opacity.asp")
    })
    
}



function e(){
    let lary = document.querySelector("#email")

    lary.addEventListener("click", () => {
        lary.querySelector("a").setAttribute("href", "https://meet.google.com/ygq-cjff-ccv")
    })
    
}

face()
links()
e()

// Exercises 10  write a function to change the order of the cards: <== button will put the first card at the end
//==> will do the reverse

function slide(){
    let arrow = document.querySelector(".btn-primary")

    arrow.addEventListener("click" , () => {
        let cont = document.querySelector(".row")
        cont.firstElementChild[0] = cont.firstElementChild[5]
    
    })
    let cont = document.querySelector(".row")
    console.log(cont)

}

slide()