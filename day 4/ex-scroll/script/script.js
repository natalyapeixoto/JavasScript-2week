 const btn = document.getElementById("arrowTop");
 btn.addEventListener("click", function (){
  window.scrollTo(pageYOffset, 0);

 })


window.addEventListener("scroll", function(){
  console.log(pageYOffset)
  console.log(btn.hidden);
  if (pageYOffset > 450){
    btn.hidden = false;
  }
  else {
    btn.hidden = true;
  }
})