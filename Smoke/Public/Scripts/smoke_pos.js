// -----JS CODE-----
var img = script.getSceneObject();
var x = Math.random() * 3 + 10;
var y = Math.random() * 5;
img.getTransform().setWorldPosition(new vec3(x, y, 0));
