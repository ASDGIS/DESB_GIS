var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_ZAR0 = new ol.format.GeoJSON();
var features_ZAR0 = format_ZAR0.readFeatures(geojson_ZAR0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:100001'});
var jsonSource_ZAR0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ZAR0.addFeatures(features_ZAR0);var lyr_ZAR0 = new ol.layer.Vector({
                source:jsonSource_ZAR0, 
                style: style_ZAR0,
                title: "ÖZ-AR"
            });var format_AHIS1 = new ol.format.GeoJSON();
var features_AHIS1 = format_AHIS1.readFeatures(geojson_AHIS1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:100001'});
var jsonSource_AHIS1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AHIS1.addFeatures(features_AHIS1);var lyr_AHIS1 = new ol.layer.Vector({
                source:jsonSource_AHIS1, 
                style: style_AHIS1,
                title: "ŞAHIS"
            });var format_BAHEEHR2 = new ol.format.GeoJSON();
var features_BAHEEHR2 = format_BAHEEHR2.readFeatures(geojson_BAHEEHR2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:100001'});
var jsonSource_BAHEEHR2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BAHEEHR2.addFeatures(features_BAHEEHR2);var lyr_BAHEEHR2 = new ol.layer.Vector({
                source:jsonSource_BAHEEHR2, 
                style: style_BAHEEHR2,
                title: "BAHÇEŞEHİR"
            });var format_TESKOOP3 = new ol.format.GeoJSON();
var features_TESKOOP3 = format_TESKOOP3.readFeatures(geojson_TESKOOP3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:100001'});
var jsonSource_TESKOOP3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TESKOOP3.addFeatures(features_TESKOOP3);var lyr_TESKOOP3 = new ol.layer.Vector({
                source:jsonSource_TESKOOP3, 
                style: style_TESKOOP3,
                title: "TESKOOP"
            });var format_YELALAN4 = new ol.format.GeoJSON();
var features_YELALAN4 = format_YELALAN4.readFeatures(geojson_YELALAN4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:100001'});
var jsonSource_YELALAN4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_YELALAN4.addFeatures(features_YELALAN4);var lyr_YELALAN4 = new ol.layer.Vector({
                source:jsonSource_YELALAN4, 
                style: style_YELALAN4,
                title: "YEŞİL ALAN"
            });var format_SOSYALALANLAR5 = new ol.format.GeoJSON();
var features_SOSYALALANLAR5 = format_SOSYALALANLAR5.readFeatures(geojson_SOSYALALANLAR5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:100001'});
var jsonSource_SOSYALALANLAR5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SOSYALALANLAR5.addFeatures(features_SOSYALALANLAR5);var lyr_SOSYALALANLAR5 = new ol.layer.Vector({
                source:jsonSource_SOSYALALANLAR5, 
                style: style_SOSYALALANLAR5,
                title: "SOSYAL ALANLAR"
            });var format_DOGALGAZ6 = new ol.format.GeoJSON();
var features_DOGALGAZ6 = format_DOGALGAZ6.readFeatures(geojson_DOGALGAZ6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:100001'});
var jsonSource_DOGALGAZ6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DOGALGAZ6.addFeatures(features_DOGALGAZ6);var lyr_DOGALGAZ6 = new ol.layer.Vector({
                source:jsonSource_DOGALGAZ6, 
                style: style_DOGALGAZ6,
                title: "DOGALGAZ"
            });var format_ATIKSUYAGMURSUYU7 = new ol.format.GeoJSON();
var features_ATIKSUYAGMURSUYU7 = format_ATIKSUYAGMURSUYU7.readFeatures(geojson_ATIKSUYAGMURSUYU7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:100001'});
var jsonSource_ATIKSUYAGMURSUYU7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ATIKSUYAGMURSUYU7.addFeatures(features_ATIKSUYAGMURSUYU7);var lyr_ATIKSUYAGMURSUYU7 = new ol.layer.Vector({
                source:jsonSource_ATIKSUYAGMURSUYU7, 
                style: style_ATIKSUYAGMURSUYU7,
                title: "ATIKSU YAGMURSUYU"
            });var format_MESUYU8 = new ol.format.GeoJSON();
var features_MESUYU8 = format_MESUYU8.readFeatures(geojson_MESUYU8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:100001'});
var jsonSource_MESUYU8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_MESUYU8.addFeatures(features_MESUYU8);var lyr_MESUYU8 = new ol.layer.Vector({
                source:jsonSource_MESUYU8, 
                style: style_MESUYU8,
                title: "İÇMESUYU"
            });var format_YOLKOTLARI9 = new ol.format.GeoJSON();
var features_YOLKOTLARI9 = format_YOLKOTLARI9.readFeatures(geojson_YOLKOTLARI9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:100001'});
var jsonSource_YOLKOTLARI9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_YOLKOTLARI9.addFeatures(features_YOLKOTLARI9);cluster_YOLKOTLARI9 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_YOLKOTLARI9
});var lyr_YOLKOTLARI9 = new ol.layer.Vector({
                source:cluster_YOLKOTLARI9, 
                style: style_YOLKOTLARI9,
                title: "YOL KOTLARI"
            });

lyr_ZAR0.setVisible(true);lyr_AHIS1.setVisible(true);lyr_BAHEEHR2.setVisible(true);lyr_TESKOOP3.setVisible(true);lyr_YELALAN4.setVisible(true);lyr_SOSYALALANLAR5.setVisible(true);lyr_DOGALGAZ6.setVisible(true);lyr_ATIKSUYAGMURSUYU7.setVisible(true);lyr_MESUYU8.setVisible(true);lyr_YOLKOTLARI9.setVisible(false);
var layersList = [baseLayer,lyr_ZAR0,lyr_AHIS1,lyr_BAHEEHR2,lyr_TESKOOP3,lyr_YELALAN4,lyr_SOSYALALANLAR5,lyr_DOGALGAZ6,lyr_ATIKSUYAGMURSUYU7,lyr_MESUYU8,lyr_YOLKOTLARI9];
lyr_ZAR0.set('fieldAliases', {});
lyr_AHIS1.set('fieldAliases', {});
lyr_BAHEEHR2.set('fieldAliases', {});
lyr_TESKOOP3.set('fieldAliases', {'ADA': 'ADA', 'PARSEL': 'PARSEL', 'MÜLKİYET': 'MÜLKİYET', 'FONKSİYON': 'FONKSİYON', 'ALANI': 'ALANI', 'ADA-PARSEL': 'ADA-PARSEL', });
lyr_YELALAN4.set('fieldAliases', {'FONKSİYON': 'FONKSİYON', 'ALANI': 'ALANI', });
lyr_SOSYALALANLAR5.set('fieldAliases', {'ADA': 'ADA', 'PARSEL': 'PARSEL', 'MÜLKİYET': 'MÜLKİYET', 'FONKSİYON': 'FONKSİYON', 'ALAN': 'ALAN', });
lyr_DOGALGAZ6.set('fieldAliases', {'İmalat adı': 'İmalat adı', 'Uzunluk_m': 'Uzunluk_m', });
lyr_ATIKSUYAGMURSUYU7.set('fieldAliases', {'İmalat_adı': 'İmalat_adı', 'Uzunluk_m': 'Uzunluk_m', });
lyr_MESUYU8.set('fieldAliases', {'İmalat_adı': 'İmalat_adı', 'Uzunluk': 'Uzunluk', });
lyr_YOLKOTLARI9.set('fieldAliases', {'yol_adı': 'yol_adı', 'Kot': 'Kot', });
lyr_ZAR0.set('fieldImages', {});
lyr_AHIS1.set('fieldImages', {});
lyr_BAHEEHR2.set('fieldImages', {});
lyr_TESKOOP3.set('fieldImages', {'ADA': 'TextEdit', 'PARSEL': 'TextEdit', 'MÜLKİYET': 'TextEdit', 'FONKSİYON': 'TextEdit', 'ALANI': 'TextEdit', 'ADA-PARSEL': 'TextEdit', });
lyr_YELALAN4.set('fieldImages', {'FONKSİYON': 'TextEdit', 'ALANI': 'TextEdit', });
lyr_SOSYALALANLAR5.set('fieldImages', {'ADA': 'TextEdit', 'PARSEL': 'TextEdit', 'MÜLKİYET': 'TextEdit', 'FONKSİYON': 'TextEdit', 'ALAN': 'TextEdit', });
lyr_DOGALGAZ6.set('fieldImages', {'İmalat adı': 'TextEdit', 'Uzunluk_m': 'TextEdit', });
lyr_ATIKSUYAGMURSUYU7.set('fieldImages', {'İmalat_adı': 'TextEdit', 'Uzunluk_m': 'TextEdit', });
lyr_MESUYU8.set('fieldImages', {'İmalat_adı': 'TextEdit', 'Uzunluk': 'TextEdit', });
lyr_YOLKOTLARI9.set('fieldImages', {'yol_adı': 'TextEdit', 'Kot': 'TextEdit', });
lyr_ZAR0.set('fieldLabels', {});
lyr_AHIS1.set('fieldLabels', {});
lyr_BAHEEHR2.set('fieldLabels', {});
lyr_TESKOOP3.set('fieldLabels', {'ADA': 'inline label', 'PARSEL': 'inline label', 'MÜLKİYET': 'inline label', 'FONKSİYON': 'inline label', 'ALANI': 'inline label', 'ADA-PARSEL': 'header label', });
lyr_YELALAN4.set('fieldLabels', {'FONKSİYON': 'inline label', 'ALANI': 'inline label', });
lyr_SOSYALALANLAR5.set('fieldLabels', {'ADA': 'inline label', 'PARSEL': 'inline label', 'MÜLKİYET': 'inline label', 'FONKSİYON': 'inline label', 'ALAN': 'inline label', });
lyr_DOGALGAZ6.set('fieldLabels', {'İmalat adı': 'inline label', 'Uzunluk_m': 'inline label', });
lyr_ATIKSUYAGMURSUYU7.set('fieldLabels', {'İmalat_adı': 'inline label', 'Uzunluk_m': 'inline label', });
lyr_MESUYU8.set('fieldLabels', {'İmalat_adı': 'inline label', 'Uzunluk': 'inline label', });
lyr_YOLKOTLARI9.set('fieldLabels', {'yol_adı': 'no label', 'Kot': 'no label', });
lyr_YOLKOTLARI9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});