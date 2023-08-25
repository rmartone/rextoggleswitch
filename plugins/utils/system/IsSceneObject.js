var IsSceneObject = function (object) {
    // return (object instanceof SceneClass);
    // compatible with vite production builds
    return obj && typeof obj === "object" && obj.hasOwnProperty("scene") && obj.scene !== undefined;
}
export default IsSceneObject;
