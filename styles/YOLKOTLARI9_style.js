var size = 0;

var styleCache_YOLKOTLARI9={}
var style_YOLKOTLARI9 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var size = feature.get('features').length;
    var style = [ new ol.style.Style({
        
    })];
    if (feature.get("Kot") !== null) {
        var labelText = String(feature.get("Kot"));
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_YOLKOTLARI9[key]){
        var text = new ol.style.Text({
              font: '9.1px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 255)'
              }),
            });
        styleCache_YOLKOTLARI9[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_YOLKOTLARI9[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};