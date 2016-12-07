var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_PARSEL = new ol.format.GeoJSON();
var features_PARSEL = format_PARSEL.readFeatures(geojson_PARSEL, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PARSEL = new ol.source.Vector();
jsonSource_PARSEL.addFeatures(features_PARSEL);var lyr_PARSEL = new ol.layer.Vector({
                source:jsonSource_PARSEL, 
                style: style_PARSEL,
                title: "PARSEL"
            });var format_PARSEL_NUMARASI = new ol.format.GeoJSON();
var features_PARSEL_NUMARASI = format_PARSEL_NUMARASI.readFeatures(geojson_PARSEL_NUMARASI, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PARSEL_NUMARASI = new ol.source.Vector();
jsonSource_PARSEL_NUMARASI.addFeatures(features_PARSEL_NUMARASI);var lyr_PARSEL_NUMARASI = new ol.layer.Vector({
                source:jsonSource_PARSEL_NUMARASI, 
                style: style_PARSEL_NUMARASI,
                title: "PARSEL_NUMARASI"
            });

lyr_PARSEL.setVisible(true);lyr_PARSEL_NUMARASI.setVisible(true);
var layersList = [baseLayer,lyr_PARSEL,lyr_PARSEL_NUMARASI];
lyr_PARSEL.set('fieldAliases', {'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEn': 'ExtendedEn', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_PARSEL_NUMARASI.set('fieldAliases', {'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEn': 'ExtendedEn', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_PARSEL.set('fieldImages', {'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEn': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_PARSEL_NUMARASI.set('fieldImages', {'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEn': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_PARSEL.set('fieldLabels', {'Layer': 'no label', 'SubClasses': 'no label', 'ExtendedEn': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_PARSEL_NUMARASI.set('fieldLabels', {'Layer': 'no label', 'SubClasses': 'no label', 'ExtendedEn': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
