var popup = document.querySelector(".modalHotelSearch");
var link = document.querySelector(".buttonToShowSearchHotel");
var wrapPopup = document.querySelector(".wrapModalHotelSearch");

link.addEventListener("click", function(evt){
	evt.preventDefault();
	// popup.classList.toggle("modalExit");
	if (popup.classList.contains("modalExit")){
		popup.classList.add("modalShow");
		popup.classList.remove("modalExit");
		wrapPopup.classList.remove("wrapModalShow");
	} else{			
		popup.classList.add("modalExit");
		popup.classList.remove("modalShow");
		wrapPopup.classList.add("wrapModalShow");
	}
});