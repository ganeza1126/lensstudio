// -----JS CODE-----
// @input Component.Image headpos
// @input Component.Camera orthcam
// @input Component.Camera normcam
// @input float size

var handimg = script.getSceneObject().getTransform().getWorldPosition();
var headimg = script.headpos.getTransform().getWorldPosition()

var a = script.orthcam.worldSpaceToScreenSpace(handimg);
var b = script.normcam.worldSpaceToScreenSpace(headimg);
var dis = a.sub(b);
//print(script.headpos.getComponent("Image"));

if (dis.lengthSquared < script.size) {
  print("aaaaaaaaaaaaa");
}
//print("aaa" + handpos.worldSpaceToScreenSpace());
//print("bbb" + .worldSpaceToScreenSpace());
