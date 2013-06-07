function fadeOut(element) {
    var op = 1;
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.opacity = 0;
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 30);
}

function fadeIn(element) {
    var op = 0.1;
    var timer = setInterval(function () {
        if (op > 1.0){
            clearInterval(timer);
            element.style.opacity = 1;
            element.style.display = 'inline';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 30);
}

function flyToJapan() {
    var duration = 5000;

    var destination = new Cesium.Cartesian3(-4639788.0, 5054797.0, 4620093.0);
    var flight = Cesium.CameraFlightPath.createAnimation(scene.getFrameState(), {
        destination: destination,
        duration: duration,
        // up: new Cesium.Cartesian3(-0.2632477867932483, -0.26766920008773665, 0.9268515533359122),
        // direction: new Cesium.Cartesian3(0.30329908445430137, 0.889061022217497, 0.34289964150275537)
    });
    scene.getAnimations().add(flight);
}

if (typeof window.WebGLRenderingContext === 'undefined') {
    document.getElementById('info_bkgd').className = "noWebGL";
    document.getElementById('info').className = "hide";
    document.getElementById('noWebGLWarning').className = "show";
} else {
    var widget = new Cesium.CesiumWidget('cesiumContainer',{
            terrainProvider: new Cesium.CesiumTerrainProvider({
            url: 'http://cesium.agi.com/smallterrain'
        })
    });
    // console.log(widget);

    var centralBody = widget.centralBody;
    var ellipsoid = centralBody.getEllipsoid();
    var fullscreenButton = new Cesium.FullscreenButton('fullscreenContainer', document.body);
    var scene = widget.scene;
    var transitioner = new Cesium.SceneTransitioner(scene);
    var sceneModePickerWidget = new Cesium.SceneModePicker('sceneModePickerContainer', transitioner);

    var layers = widget.centralBody.getImageryLayers();
    layers.removeAll();
    layers.addImageryProvider(new Cesium.OpenStreetMapImageryProvider({
        url: 'http://tile.openstreetmap.org/',
        credit: ''
    }));

    widget.render();
    
    flyToJapan(scene);

}