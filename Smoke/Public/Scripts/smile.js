//var event = script.createEvent("SmileStartedEvent");
var event = script.createEvent("MouthOpenedEvent");
event.faceIndex = 0;
var event2 = script.createEvent("MouthClosedEvent");
event2.faceIndex = 0;

var img = script.getSceneObject();
event.bind(function (eventData) {
  //  print("Smile started on face 0");
  print(img.getTransform().getWorldPosition());
  img.getTransform().setLocalPosition(new vec3(0, 10, 11));
});

event2.bind(function (eventData) {
  //  print("smile finish");
  img.getTransform().setLocalPosition(new vec3(0, 1000, -20));
});


/*

*/