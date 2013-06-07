function GoogleMapImageryProvider() {
    this._tilingScheme = new Cesium.WebMercatorTilingScheme();
    this._tileWidth = 256;
    this._tileHeight = 256;
    this._maximumLevel = 22;
    this._extent = this._tilingScheme.getExtent();
    this._ready = !0;
}

GoogleMapImageryProvider.prototype.isReady = function() {
    return this._ready;
};

GoogleMapImageryProvider.prototype.getTilingScheme = function() {
    if (!this._ready) {
        throw new Cesium.DeveloperError('getTilingScheme must not be called before the imagery provider is ready.');
    }
    return this._tilingScheme;
};

GoogleMapImageryProvider.prototype.getExtent = function() {
    if (!this._ready) {
        throw new DeveloperError('getExtent must not be called before the imagery provider is ready.');
    }
    return this._extent;
};

GoogleMapImageryProvider.prototype.getTileWidth = function() {
    if (!this._ready) {
        throw new DeveloperError('getTileWidth must not be called before the imagery provider is ready.');
    }
    return this._tileWidth;
};

GoogleMapImageryProvider.prototype.getTileHeight = function() {
    if (!this._ready) {
        throw new DeveloperError('getTileHeight must not be called before the imagery provider is ready.');
    }
    return this._tileHeight;
};

GoogleMapImageryProvider.prototype.getMaximumLevel = function() {
    if (!this._ready) {
        throw new DeveloperError('getMaximumLevel must not be called before the imagery provider is ready.');
    }
    return this._maximumLevel;
};

GoogleMapImageryProvider.prototype.requestImage = function(x, y, level) {
    if (!this._ready) {
        throw new DeveloperError('requestImage must not be called before the imagery provider is ready.');
    }
    var url = "http://mt.google.com/vt/lyrs=m@176000000&hl=ja&src=api&x=" + x + "&y=" + y + "&z=" + level + "&s=Ga";
    return Cesium.ImageryProvider.loadImage(url);
};
