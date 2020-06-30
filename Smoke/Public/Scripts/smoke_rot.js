// Bounce.js
// Event: Frame Updated
//scriptの横をframe updatedにする
// Properties:
//@input float speed = 1.0 {"widget": "slider", "min": 0, "max": 10.0, "step": 0.01}


var degrees = script.speed * getTime();
var radians = degrees * (Math.PI / 180);
var axis = new vec3(0, 0, 1);
var rotationToApply = quat.angleAxis(radians, axis);
var img = script.getSceneObject();
img.getTransform().setLocalRotation(rotationToApply);
var x = Math.random() * 3;
var y = Math.random() * 5;
//img.getTransform().setLocalPosition(new vec3(-3, 4, 0));
//img.getTransform().setLocalPosition(new vec3(x, y, 0));
//print(img.getTransform().getWorldPosition());