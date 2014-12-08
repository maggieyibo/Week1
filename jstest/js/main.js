
window.onload = function() {
	var string = document.getElementById('main_heading');
	console.log(string.innerHTML);

	var paragraph = document.getElementById('color_change');
	paragraph.addEventListener("click", function() {
		if ( paragraph.style.backgroundColor == "rgb(46, 204, 113)") {
			paragraph.style.backgroundColor = "white";
			paragraph.style.color = "black";
	} else {
		paragraph.style.backgroundColor = "rgb(46, 204, 113)";
		paragraph.style.color = "white";
		}
	});

	var blart = document.getElementById("blart");
	blart.src = blart.src = "http://ia.media-imdb.com/images/M/MV5BMTM2NzA1MzE1NF5BMl5BanBnXkFtZTcwOTYyNDIzMg@@._V1_SX214_AL_.jpg";
	blart.addEventListener("mouseover", function () {
		blart.src = "http://img2.wikia.nocookie.net/__cb20130719161814/cardfight/images/5/5c/No.jpg";
	});
	blart.addEventListener("mouseout", function () {
		blart.src = "http://ia.media-imdb.com/images/M/MV5BMTM2NzA1MzE1NF5BMl5BanBnXkFtZTcwOTYyNDIzMg@@._V1_SX214_AL_.jpg";
	});
};