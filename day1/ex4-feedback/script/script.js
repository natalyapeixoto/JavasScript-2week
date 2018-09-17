const feedback = document.querySelector(".feedback__input");
const testimonials = document.querySelector(".testimonials");



const button =  document.querySelector(".feedback__button");


button.addEventListener("click", function(e){
	e.preventDefault();

  const newTest =  document.createElement("li");
  
  newTest.innerHTML = feedback.value;

	testimonials.appendChild(newTest);

});

