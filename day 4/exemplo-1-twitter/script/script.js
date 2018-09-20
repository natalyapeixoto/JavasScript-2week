const tweetInput = document.querySelector("#tweetComposerInput");
const caract= document.querySelector("#tweetComposerCounter");
const deleteTweet = document.querySelectorAll(".tweets-timeline__footer");
const timeLine = document.querySelector(".tweets-timeline");
const tweetBox = document.querySelector(".tweet-composer");

	
tweetInput.addEventListener("keydown", function (e) {
  let charAllowed = 140;
  let typedChar = tweetInput.value.length;
  let remainingChar = charAllowed - typedChar;
  caract.innerHTML = remainingChar;
  
 if(remainingChar <= 0) {
  	caract.style.color = "red";
  	btnSendTweet.disabled = true;
  	tweetInput.style.outlineColor = 'red';
  	tweetBox.style.opacity = ".5"
  }
  else {
  	caract.style.color = "#fff";
  	btnSendTweet.disabled = false;
  	tweetBox.style.opacity = "1"
  }
})


const btnSendTweet = document.querySelector(".tweet-composer__button");

const tbox = document.querySelector(".tweets-timeline__box");
const inner = document.querySelector(".tweets-timeline__tweet");

btnSendTweet.addEventListener("click", function(e){

	if(tweetInput.value === undefined || tweetInput.value === null || tweetInput.value === "" || tweetInput.value === " "){
        return false;
    }


	e.preventDefault()
    const div = document.createElement("div");

  	div.innerHTML += 
  							`
  							<div class="tweets-timeline__box">
	                <div class="tweets-timeline__header">
	                    <span class="tweets-timeline__name">natalynha</span>
	                    <span class="tweets-timeline__username">@natalynha</span>
	                    <span class="tweets-timeline__date">${new Date()}</span>
	                </div>
	                <p class="tweets-timeline__tweet">
	                    ${tweetInput.value}
	                </p>
	                <div href="#"class="tweets-timeline__footer">
	                   <button >VAI</button>
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




// btn.addEventListener("click", function(e){
// 	e.preventDefault()
// 	tbox.innerHTML = "";
// })














