var size = 0;

var styleCache_TESKOOP3={}
var style_TESKOOP3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(166,166,166,0.65)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(217,229,201,0.65)'})
    })];
    if (feature.get("PARSEL") !== null) {
        var labelText = String(feature.get("PARSEL"));
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_TESKOOP3[key]){
        var text = new ol.style.Text({
              font: '9.75px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(124, 124, 124, 255)'
              }),
            });
        styleCache_TESKOOP3[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_TESKOOP3[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};