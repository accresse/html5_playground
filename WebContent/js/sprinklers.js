var context;

$(document).ready(function() {
	var c=document.getElementById("canvas");
	context=c.getContext("2d");
	$("#zone1").change(repaint);
	$("#zone2").change(repaint);
	$("#zone3").change(repaint);
	$("#zone4").change(repaint);
	$("#zone5").change(repaint);
	$("#zone6").change(repaint);
	$("#zone7").change(repaint);
	$("#zone8").change(repaint);
	$("#zone9").change(repaint);
	$("#zone10").change(repaint);
	$("#zone11").change(repaint);
	$("#zone12").change(repaint);
});

var repaint = function() {
	context.clearRect (0, 0, 628, 800);
	if($("#zone1").is(':checked')) { drawZone1();}
	if($("#zone2").is(':checked')) { drawZone2(); }
	if($("#zone3").is(':checked')) { drawZone3(); }
	if($("#zone4").is(':checked')) { drawZone4(); }
	if($("#zone5").is(':checked')) { drawZone5(); }
	if($("#zone6").is(':checked')) { drawZone6(); }
	if($("#zone7").is(':checked')) { drawZone7(); }
	if($("#zone8").is(':checked')) { drawZone8(); }
	if($("#zone9").is(':checked')) { drawZone9(); }
	if($("#zone10").is(':checked')) { drawZone10(); }
	if($("#zone11").is(':checked')) { drawZone11(); }
	if($("#zone12").is(':checked')) { drawZone12(); }
}

function drawZone1() {
	var spacing = (422-35)/5;
	var rad = 60;
    fillSector(542, 35+0*spacing, rad, 0, Math.PI/2.0);
    fillSector(542, 35+1*spacing, rad, -Math.PI/2.0, Math.PI/2.0);
    fillSector(542, 35+2*spacing, rad, -Math.PI/2.0, Math.PI/2.0);
    fillSector(542, 35+3*spacing, rad, -Math.PI/2.0, Math.PI/2.0);
    fillSector(542, 35+4*spacing, rad, -Math.PI/2.0, Math.PI/2.0);
    fillSector(542, 35+5*spacing, rad, -Math.PI/2.0, 0);
}

function drawZone2() {
    fillSector(508,  35, 175, Math.PI/2.0, Math.PI);
    fillSector(508+3, 230, 175, Math.PI/2.0, -Math.PI/2.0);
    fillSector(508+5, 425, 175, Math.PI, 3.0*Math.PI/2.0);
}

function drawZone3() {
    fillSector(342,  35, 175, 0, Math.PI/2.0);
    fillSector(342+3, 230, 175, -Math.PI/2.0, Math.PI/2.0);
    fillSector(342+5, 425, 175, -Math.PI/2.0, 0);
}

function drawZone4() {
    fillSector(322, 252, 30, -5.0*Math.PI/8.0, Math.PI/3.0);
    fillSector(310, 200, 30, -7.0*Math.PI/8.0, Math.PI/2.0);
    fillSector(333, 100, 40, Math.PI/2.0, -Math.PI/2.0);
    fillSector(275, 50, 40, 0, Math.PI);
}

function drawZone5() {
    fillSector(333, 193, 125, Math.PI, 3.0*Math.PI/2.0);
    fillSector(243, 35, 160, Math.PI/2.0, Math.PI);
    fillSector(180, 192, 150, Math.PI, 0);
}

function drawZone6() {
    fillSector(37, 100, 166, -Math.PI/10.0, Math.PI/2.0);
    fillSector(37, 305, 125, -Math.PI/2, 0);
}

function drawZone7() {
	var spacing = (494-315)/3;
    fillSector(32, 315+0*spacing, 40, 0, Math.PI/2.0);
    fillSector(32, 315+1*spacing, 40, -Math.PI/2.0, Math.PI/2.0);
    fillSector(32, 315+2*spacing, 40, -Math.PI/2.0, Math.PI/2.0);
    fillSector(32, 315+3*spacing, 40, -Math.PI/2.0, Math.PI/2.0);
}

function drawZone8() {
	context.fillStyle = "rgba(0, 0, 200, 0.5)";
	context.fillRect(70,482,150,20);
}

function drawZone9() {
	var rad=160;
    fillSector(32, 500, rad, 0, Math.PI/2.0);
    fillSector(190, 528, rad, Math.PI/2.0, Math.PI);
    fillSector(346, 564, 125, 0, Math.PI);
    fillSector(514, 519, rad, Math.PI/2.0, Math.PI);
}

function drawZone10() {
	var spacing = (516-32)/3;
	var rad = 150;
    fillSector(32+0*spacing, 682, rad, -Math.PI/2.0, 0);
    fillSector(32+1*spacing, 682, rad, -Math.PI, 0);
    fillSector(32+2*spacing, 682, rad, -Math.PI, 0);    
    fillSector(32+3*spacing, 682, rad, Math.PI, 3.0*Math.PI/2.0);	
}

function drawZone11() {
	var spacing = (336-32)/5;
	var rad = 60;
    fillSector(32+0*spacing, 715, rad, 0, Math.PI/2.0);
    fillSector(32+1*spacing, 715, rad, 0, Math.PI);
    fillSector(32+2*spacing, 715-1, rad, 0, Math.PI);    
    fillSector(32+3*spacing, 715-1, rad, 0, Math.PI);	
    fillSector(32+4*spacing, 715-2, rad, 0, Math.PI);	
    fillSector(32+5*spacing, 715-2, rad, 0, Math.PI);	
}

function drawZone12() {
	var rad = 60;
    fillSector(400, 715-3, rad, 0, Math.PI);
    fillSector(460, 715-3, rad-10, 0, Math.PI);
    
	var spacing = (648-516)/3;
    fillSector(549, 516+0*spacing, rad, 0, Math.PI/2.0);
    fillSector(549, 516+1*spacing+25, rad, -Math.PI/2.0, Math.PI/2.0);
    fillSector(549, 516+2*spacing+25, rad-10, -Math.PI/2.0, Math.PI/2.0);

}

function fillSector(x, y, r, start, end) {
	context.fillStyle = "rgba(0, 0, 200, 0.5)";
    context.beginPath();
    context.moveTo(x,y);
    context.arc(x,y,r,start,end);
    context.lineTo(x,y);
    context.closePath();
    context.fill();
}