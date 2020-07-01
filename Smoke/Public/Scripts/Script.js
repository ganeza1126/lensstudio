// -----JS CODE-----
//input Component.Camera camera
//@input Asset.ObjectPrefab myPrefab
//input SceneObject obj
//@input Asset.Texture deviceCameraTexture
//@input Component.Text textcomponent


var deviceSize = new vec2(script.deviceCameraTexture.getWidth(), script.deviceCameraTexture.getHeight());

print(deviceSize);
//var instanceobj = script.obj.copyComponent(script.getSceneObject());
var wid = 30;
var hig = 20;
var sc = 30;
var scale = new vec3(sc, sc, sc);

for (var i = 0; i < 50; i++) {
	var instanceObject = script.myPrefab.instantiate(script.getSceneObject());
	var worldPosition = new vec3((Math.random() - 0.5) * wid, (Math.random() - 0.5) * hig, 0);
	var radians = Math.random() * Math.PI * 2;
	var axis = new vec3(0, 0, 1);
	var randrot = quat.angleAxis(radians, axis);
	instanceObject.getTransform().setWorldPosition(worldPosition);
	instanceObject.getTransform().setLocalScale(scale);
	instanceObject.getTransform().setLocalRotation(randrot);
}

/*
script.createEvent("TouchStartEvent").bind(onTouchStart);
function onTouchStart(e) {
    if (script.camera) {
        var touchPosition = e.getTouchPosition();
        //var worldPosition = script.camera.screenSpaceToWorldSpace(touchPosition, 200);
        var worldPosition = new vec3(Math.random() * 20, 0, 0);
        var mySceneObject = createObjectFromPrefab();
        print(mySceneObject.getTransform().getWorldPosition());
        mySceneObject.getTransform().setWorldPosition(worldPosition);
    }
}
function createObjectFromPrefab() {
    if (script.myPrefab) {
        //print(script.obj.name);
        var instanceObject = script.myPrefab.instantiate(script.getSceneObject());
        return instanceObject;
    }
    else {
        return undefined;
    }
}
*/