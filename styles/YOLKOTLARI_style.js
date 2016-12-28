var size = 0;

var styleCache_YOLKOTLARI={}
var style_YOLKOTLARI = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        
    })];
    if (feature.get("Kot") !== null) {
        var labelText = String(feature.get("Kot"));
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_YOLKOTLARI[key]){
        var text = new ol.style.Text({
              font: '9.1px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_YOLKOTLARI[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_YOLKOTLARI[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};