var OnParseFlashCameraTag = function (tagPlayer, parser, config) {
    var tagName = 'camera.flash';
    parser
        .on(`+${tagName}`, function (duration, red, green, blue) {
            tagPlayer.cameraTarget.flash(duration, red, green, blue);

            parser.skipEvent();
        })
}

export default OnParseFlashCameraTag;