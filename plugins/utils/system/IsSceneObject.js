var IsSceneObject = function (obj) {
  // return (object instanceof SceneClass);
  // compatible with vite production builds
  return (
    obj &&
    typeof obj === "object" &&
    obj.hasOwnProperty("scene") &&
    obj.scene !== undefined &&
    obj.hasOwnProperty("sys") &&
    obj.sys !== undefined
  );
};
export default IsSceneObject;
