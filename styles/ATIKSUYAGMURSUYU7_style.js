var size = 0;

var styleCache_ATIKSUYAGMURSUYU7={}
var style_ATIKSUYAGMURSUYU7 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(72,176,189,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_ATIKSUYAGMURSUYU7[key]){
        var text = new ol.style.Text({
              font: '9.75px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 255)'
              }),
            });
        styleCache_ATIKSUYAGMURSUYU7[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_ATIKSUYAGMURSUYU7[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};