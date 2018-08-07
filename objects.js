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
