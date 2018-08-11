// CanvasLib Alpha

function Canvas(query,functions) {
  var f = functions | "1";
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
  if(f=="1") {
this.canvasJS = {
  ctx: (new Canvas(query,"3")).ctx,
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

}};
}

function obj(src,x,y,w,h) {
this.src = src;
this.x = x;
this.y = y;
this.w = w;
this.h = h;
this.setX = function(x) {this.x = x;}
this.setY = function(y) {this.y = y;}
this.changeX = function(x) {this.x += x;}
this.changeY = function(y) {this.y += y;}
}
var objects = {};
function createObject(src,x,y,w,h,name) {objects[name]=(new obj(src,x,y,w,h));}
function render(objectData,canvas_query) {
  window["objd"] = objectData;
  if(objectData.src.search("#")==1) {
(new Canvas(canvas_query)).canvasJS.image(objectData.src,objectData.x,objectData.y,objectData.w,objectData.h);
  } else {
    var f = objectData.src.replace(/this/g,"(new Canvas("+canvas_query+"))");
    f = f.replace(/objectData/g,objd);
  Function(f)();
  }
}
