var canvas;
var ctx;
var bg_color = "#555555";
var font_color = "#ffffff";
var img;
var heart;
var canvas_width = 800;

$(document).ready(function() {
	
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	img = document.createElement("img");
	heart = document.createElement("img");
	heart.src='images/heart.png';
	repaint();
	
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
	    color: bg_color,
    	change: function(color) {
    		bg_color = color.toHexString();
    		repaint();
    	}
	});

	$("#canvas_font").change(function(e) {
		repaint();
	});
	
	$("#canvas_font_size").change(function(e) {
		repaint();
	});
	
	$("#canvas_font_color").spectrum({
		color: font_color,
		change: function(color) {
			font_color = color.toHexString();
			repaint();
		}
	});
	
	$("#canvas_text").change(function(e) {
		repaint();
	});
	
});

function repaint() {
	ctx.fillStyle = bg_color;
	ctx.fillRect(0, 0, canvas_width, canvas_width);
    ctx.drawImage(img,0,0);
    ctx.drawImage(heart,0,0);
    ctx.fillStyle = font_color;
    ctx.font=$("#canvas_font_size").val()+"px "+$("#canvas_font").val();
    var text= $("#canvas_text").val();
    var text_width = ctx.measureText(text).width;
    ctx.fillText(text,canvas_width/2-text_width/2,canvas_width/2);
}
