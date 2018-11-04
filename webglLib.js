// Get context for WebGL

function WebGLCanvas(query) {
  if(document.querySelectorAll(query).length==0) {
  document.body.innerHTML += "<canvas>hi</canvas>";
    var iidd = query.split("#");
    if (iidd.length > 1) {
  document.querySelectorAll("canvas")[document.querySelectorAll("canvas").length-1].id = iidd[1];
    }
    var cllass = query.split(".");
    if (cllass.length > 1) {
  document.querySelectorAll("canvas")[document.querySelectorAll("canvas").length-1].class = cllass[1];
    }
  }
this.canvas = document.querySelectorAll(query)[0];
  this.ctx = this.canvas.getContext("webgl");

}

/* Usage:
var glcanvas = new WebGLCanvas("#canvasID"); // Use any query selector to get a canvas or create a new one!
var webGLcontext = glcanvas.ctx; // This gets the WebGL context.
// Use webGLcontext to control the canvas with WebGL.
*/
