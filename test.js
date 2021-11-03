

function hello(){
   let text = document.querySelector("header");
  if(text.innerHTML === "Hi"){
      text.innerHTML = "Bye"
  }else{
      text.innerHTML = "Hi"
  }
};

hello();