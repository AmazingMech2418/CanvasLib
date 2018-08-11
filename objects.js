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
  if(src.search("*")==1) {
(new Canvas(canvas_query)).canvasJS.image(objectData.src,objectData.x,objectData.y,objectData.w,objectData.h);
  } else {
  Function(src.replace(/this/g,"(new Canvas("+canvas_query+"))"))();
  }
}
