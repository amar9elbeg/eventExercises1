function hello() {
  if ( document.querySelector("header").innerHTML=== "Not Clicked") {
    document.querySelector("header").innerHTML = "Clicked"
  }else{
    document.querySelector("header").innerHTML ="Not Clicked"
  }
}
