function Canvas(query) {
  if(document.querySelectorAll(query).length==0) {
  document.body.innerHTML += "<canvas>hi</canvas>";
    var iidd = query.split("#");
    if (iidd.length > 1) {
  document.querySelectorAll("canvas")[document.querySelectorAll("canvas").length-1].id = iidd[1];
    }
    var cllass = query.split("#");
    if (cllass.length > 1) {
  document.querySelectorAll("canvas")[document.querySelectorAll("canvas").length-1].class = cllass[1];
    }
  }
this.canvas = document.querySelectorAll(query)[0];
  this.ctx = this.canvas.getContext("2d");
this.canvasJS = {
rectangle: function(x,y,h,w){this.ctx.fillRect(x,y,h,w);},
text: {
stroke:function(font,text,x,y){this.ctx.font = font;
this.ctx.strokeText(text,x,y);},
fill: function(font,text,x,y){this.ctx.font = font;
this.ctx.fillText(text,x,y);}
},
gradientLinear: function(gx,gy,gx2,gy2,clr1,clr2,x,y,w,h){
var grd = this.ctx.createLinearGradient(gx,gy,gx2,gy2);
grd.addColorStop(0,clr1);
grd.addColorStop(1,clr2);
// Fill with gradient
this.ctx.fillStyle = grd;
this.ctx.fillRect(x,y,w,h);
},
gradientRadial: function(x1,y1,r1,x2,y2,r2,clr1,clr2,x,y,w,h){
var grd = this.ctx.createRadialGradient(x1,y1,r1,x2,y2,r2);
grd.addColorStop(0,clr1);
grd.addColorStop(1,clr2);
// Fill with gradient
this.ctx.fillStyle = grd;
this.ctx.fillRect(x,y,w,h);
},
image: function(source,x,y,w,h){
imaged=new Image();
imaged.src=source;
this.ctx.drawImage(imaged,x,y,w,h);
}

};
}
