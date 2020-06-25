// Bounce.js
// Event: Frame Updated
// Properties:
//@input float speed = 1.0 {"widget": "slider", "min": 0, "max": 10.0, "step": 0.01}
//@input float range = 10.0 {"widget": "slider", "min": 0, "max": 30.0, "step": 0.01}
var newY = Math.sin(getTime() * script.speed) * script.range;
script.getSceneObject().getTransform().setLocalPosition(new vec3(0, newY, -50));