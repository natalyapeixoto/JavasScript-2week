const tweetInput = document.querySelector("#tweetComposerInput");
const caract= document.querySelector("#tweetComposerCounter");
const deleteTweet = document.querySelectorAll(".tweets-timeline__footer");
const timeLine = document.querySelector(".tweets-timeline");
const tweetBox = document.querySelector(".tweet-composer");
const imgBtn = document.querySelector(".tweet__img");
const btnSendTweet = document.querySelector(".tweet-composer__button");
const tbox = document.querySelector(".tweets-timeline__box");
const inner = document.querySelector(".tweets-timeline__tweet");
const src = document.querySelector("#src");

src.addEventListener("change", function(e){
	e.preventDefault();
	console.log(src.value);

	const replace = "";
	const newSrc = src.value.replace("C:\\fakepath\\", replace);

	  const div = document.createElement("div");
    const date = new Date()
    const month = date.toLocaleString("pt-br", {month:"short"});
    const day = date.getDate();
  
    div.innerHTML += 
  							`
  							<div class="tweets-timeline__box">
	                <div class="tweets-timeline__header">
	                    <span class="tweets-timeline__name">natalynha</span>
	                    <span class="tweets-timeline__username">@natalynha</span>
	                    <span class="tweets-timeline__date">${day} de ${month}</span>
	                </div>
	                <img src="img/${newSrc}">
	                <div href="#"class="tweets-timeline__footer">
	                   <button>x</button>
	                </div>
                </div> 
             `; 
 	
            timeLine.insertBefore(div, timeLine.childNodes[0]);
            const deleteBtn = document.querySelector(".tweets-timeline__footer");
		deleteBtn.addEventListener("click", function(e){
			e.preventDefault();
			div.remove();
		})
		tweetInput.value = "";
		
})


tweetInput.addEventListener("keyup", function (e) {
  let charAllowed = 140;
  let typedChar = tweetInput.value.length;
  let remainingChar = charAllowed - typedChar;
  caract.innerHTML = remainingChar;
  
 if(remainingChar <= 0) {
 		btnSendTweet.disabled = true;
  	caract.style.color = "red";
  	tweetInput.style.outlineColor = 'red';
  	tweetBox.style.opacity = ".5"
  	btnSendTweet.style.cursor = "not-allowed";
  }
  else {
  	caract.style.color = "#fff";
  	btnSendTweet.disabled = false;
  	tweetBox.style.opacity = "1"
  }
})


btnSendTweet.addEventListener("click", function(e){
		if(tweetInput.value === undefined || tweetInput.value === null || tweetInput.value === "" || tweetInput.value === " "){
        return false
    }
   
	e.preventDefault()

    const div = document.createElement("div");
    const date = new Date()
    const month = date.toLocaleString("pt-br", {month:"short"});
    const day = date.getDate();

  	div.innerHTML += 
  							`
  							<div class="tweets-timeline__box">
	                <div class="tweets-timeline__header">
	                    <span class="tweets-timeline__name">natalynha</span>
	                    <span class="tweets-timeline__username">@natalynha</span>
	                    <span class="tweets-timeline__date">${day} de ${month}</span>
	                </div>
	                <p class="tweets-timeline__tweet">
	                    ${tweetInput.value}
	                </p>
	                <div href="#"class="tweets-timeline__footer">
	                   <button>x</button>
	                </div>
                </div> 
             `; 
 	
            timeLine.insertBefore(div, timeLine.childNodes[0]);
  
   const deleteBtn = document.querySelector(".tweets-timeline__footer");
		deleteBtn.addEventListener("click", function(e){
			e.preventDefault();
			div.remove();
		})
		tweetInput.value = "";
		caract.innerHTML = 280;
 })


















