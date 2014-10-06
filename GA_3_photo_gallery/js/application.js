// Missing a semicolon
var images = ["img/IMG_0218 copy.jpg", "img/IMG_0221 copy.jpg", "img/IMG_0273 copy.jpg", "img/IMG_0314 copy.jpg", "img/IMG_0311 copy.jpg"];
var currentImage = 0;


function changePicture(whichNum) {
	var img = document.getElementById('mainImage');
	img.setAttribute('src', images[whichNum]);
	currentImage = whichNum;

}

function nextImage() {
	currentImage++;
	if (currentImage===images.length){
		currentImage=0;
	}
	var img = document.getElementById('mainImage');
	img.setAttribute('src', images[currentImage]);
}

function prevImage() {
	currentImage = currentImage - 1;
	if (currentImage=== -1){
		currentImage=0;
	}
	var img = document.getElementById('mainImage');
	img.setAttribute('src', images[currentImage]);
}

