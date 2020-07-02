var event = script.createEvent("SmileStartedEvent");
event.faceIndex = 0;
var event2 = script.createEvent("SmileFinishedEvent");
event2.faceIndex = 0;

var img = script.getSceneObject();
event.bind(function (eventData) {
  print("Smile started on face 0");
  img.getTransform().setLocalPosition(new vec3(0, 10, 11));
});

event2.bind(function (eventData) {
  print("smile finish");
  img.getTransform().setLocalPosition(new vec3(0, 1000, -20));
});


/*

*/