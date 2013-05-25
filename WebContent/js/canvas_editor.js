var canvas;
var ctx;
var bgcolor = "#ffffff";
var img;
var heart;

$(document).ready(function() {
	
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	img = document.createElement("img");
	heart = document.createElement("img");
	heart.src='images/heart.png';
	
	$("#canvas_image").change(function(e) {
	    for (var i = 0; i < e.originalEvent.srcElement.files.length; i++) {
	        var file = e.originalEvent.srcElement.files[i];
	        var reader = new FileReader();
	        reader.onloadend = function() {
	            img.src = reader.result;
	            repaint();
	        }
	        reader.readAsDataURL(file);
	    }
	});
	
	$("#canvas_color").spectrum({
	    color: bgcolor,
    	change: function(color) {
    		bgcolor = color.toHexString();
    		repaint();
    	}
	});
});

function repaint() {
	ctx.fillStyle = bgcolor;
	ctx.fillRect(0, 0, 800, 800);
    ctx.drawImage(img,0,0);
    ctx.drawImage(heart,0,0);
}
