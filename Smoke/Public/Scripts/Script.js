// -----JS CODE-----
//@input Component.Camera camera
//@input Asset.ObjectPrefab myPrefab
//@input SceneObject obj

//var instanceobj = script.obj.copyComponent(script.getSceneObject());

for (var i = 0; i < 3; i++) {
	var instanceObject = script.myPrefab.instantiate(script.getSceneObject());
	var worldPosition = new vec3(Math.random() * 20, 0, 0);
	instanceObject.getTransform().setWorldPosition(worldPosition);
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