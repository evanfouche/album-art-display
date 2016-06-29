
// for (var key in DATA_dominant){
// 	console.log(key);

// }

// var width = 5 px;

function addImage(){
	// alert("heyo");
	for (var key in data_dom_2){
		(function(key){
			var img = document.createElement("IMG");
			img.src = key;
			img.width = 5;
			img.height = 184;
			var ass_img = document.createElement("IMG");
			ass_img.src = data_dom_2[key][2];
			ass_img.width = 150;
			ass_img.height = 150;
			ass_img.style.display = "none";
			document.getElementById('DomImage2').appendChild(img);
			document.getElementById('cover_display2').appendChild(ass_img);
			img.onmouseover = function(){
				// var ass_img2 = ass_img;
				// ass_img2
				ass_img.style.display = "block";
				// return img.onmouseover;
			};
			img.onmouseout = function(){
				// ass_img.className = ""
				// var ass_img2 = ass_img;
				ass_img.style.display = "none";
				// return img.onmouseout;
			};
		})(key);
		// document.getElementById('DomImage46').appendChild(img);
		// document.getElementById('cover_display').appendChild(ass_img);
	}
	// for (var key in data_dom_5){
	// 	(function(key){
	// 		var img = document.createElement("IMG");
	// 		img.src = key;
	// 		img.width = 5;
	// 		img.height = 184;
	// 		var ass_img = document.createElement("IMG");
	// 		ass_img.src = data_dom_5[key][2];
	// 		ass_img.width = 150;
	// 		ass_img.height = 150;
	// 		ass_img.style.display = "none";
	// 		document.getElementById('DomImage5').appendChild(img);
	// 		document.getElementById('cover_display5').appendChild(ass_img);
	// 		img.onmouseover = function(){
	// 			// var ass_img2 = ass_img;
	// 			// ass_img2
	// 			ass_img.style.display = "block";
	// 			// return img.onmouseover;
	// 		};
	// 		img.onmouseout = function(){
	// 			// ass_img.className = ""
	// 			// var ass_img2 = ass_img;
	// 			ass_img.style.display = "none";
	// 			// return img.onmouseout;
	// 		};
	// 	})(key);
	// 	// document.getElementById('DomImage46').appendChild(img);
	// 	// document.getElementById('cover_display').appendChild(ass_img);
	// }
	// for (var key in data_dom_10){
	// 	(function(key){
	// 		var img = document.createElement("IMG");
	// 		img.src = key;
	// 		img.width = 5;
	// 		img.height = 184;
	// 		var ass_img = document.createElement("IMG");
	// 		ass_img.src = data_dom_10[key][2];
	// 		ass_img.width = 150;
	// 		ass_img.height = 150;
	// 		ass_img.style.display = "none";
	// 		document.getElementById('DomImage10').appendChild(img);
	// 		document.getElementById('cover_display10').appendChild(ass_img);
	// 		img.onmouseover = function(){
	// 			// var ass_img2 = ass_img;
	// 			// ass_img2
	// 			ass_img.style.display = "block";
	// 			// return img.onmouseover;
	// 		};
	// 		img.onmouseout = function(){
	// 			// ass_img.className = ""
	// 			// var ass_img2 = ass_img;
	// 			ass_img.style.display = "none";
	// 			// return img.onmouseout;
	// 		};
	// 	})(key);
	// }
	// for (var key in data_dom_20){
	// 	(function(key){
	// 		var img = document.createElement("IMG");
	// 		img.src = key;
	// 		img.width = 5;
	// 		img.height = 184;
	// 		var ass_img = document.createElement("IMG");
	// 		ass_img.src = data_dom_20[key][2];
	// 		ass_img.width = 150;
	// 		ass_img.height = 150;
	// 		ass_img.style.display = "none";
	// 		document.getElementById('DomImage20').appendChild(img);
	// 		document.getElementById('cover_display20').appendChild(ass_img);
	// 		img.onmouseover = function(){
	// 			// var ass_img2 = ass_img;
	// 			// ass_img2
	// 			ass_img.style.display = "block";
	// 			// return img.onmouseover;
	// 		};
	// 		img.onmouseout = function(){
	// 			// ass_img.className = ""
	// 			// var ass_img2 = ass_img;
	// 			ass_img.style.display = "none";
	// 			// return img.onmouseout;
	// 		};
	// 	})(key);
	// }
	// for (var key in data_dom_30){
	// 	(function(key){
	// 		var img = document.createElement("IMG");
	// 		img.src = key;
	// 		img.width = 5;
	// 		img.height = 184;
	// 		var ass_img = document.createElement("IMG");
	// 		ass_img.src = data_dom_30[key][2];
	// 		ass_img.width = 150;
	// 		ass_img.height = 150;
	// 		ass_img.style.display = "none";
	// 		document.getElementById('DomImage30').appendChild(img);
	// 		document.getElementById('cover_display30').appendChild(ass_img);
	// 		img.onmouseover = function(){
	// 			// var ass_img2 = ass_img;
	// 			// ass_img2
	// 			ass_img.style.display = "block";
	// 			// return img.onmouseover;
	// 		};
	// 		img.onmouseout = function(){
	// 			// ass_img.className = ""
	// 			// var ass_img2 = ass_img;
	// 			ass_img.style.display = "none";
	// 			// return img.onmouseout;
	// 		};
	// 	})(key);
	// }
	// for (var key in data_squished){
	// 	(function(key){
	// 		var img = document.createElement("IMG");
	// 		img.src = key;
	// 		img.width = 5;
	// 		img.height = 184;
	// 		var ass_img = document.createElement("IMG");
	// 		ass_img.src = data_squished[key][2];
	// 		ass_img.width = 150;
	// 		ass_img.height = 150;
	// 		ass_img.style.display = "none";
	// 		document.getElementById('SquishImage').appendChild(img);
	// 		document.getElementById('cover_display_squish').appendChild(ass_img);
	// 		img.onmouseover = function(){
	// 			// var ass_img2 = ass_img;
	// 			// ass_img2
	// 			ass_img.style.display = "block";
	// 			// return img.onmouseover;
	// 		};
	// 		img.onmouseout = function(){
	// 			// ass_img.className = ""
	// 			// var ass_img2 = ass_img;
	// 			ass_img.style.display = "none";
	// 			// return img.onmouseout;
	// 		};
	// 	})(key);
	// }
}

// function addCovers(){

// }