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
var format_ZAR = new ol.format.GeoJSON();
var features_ZAR = format_ZAR.readFeatures(geojson_ZAR, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZAR = new ol.source.Vector();
jsonSource_ZAR.addFeatures(features_ZAR);var lyr_ZAR = new ol.layer.Vector({
                source:jsonSource_ZAR, 
                style: style_ZAR,
                title: "ÖZ-AR"
            });var format_AHIS = new ol.format.GeoJSON();
var features_AHIS = format_AHIS.readFeatures(geojson_AHIS, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AHIS = new ol.source.Vector();
jsonSource_AHIS.addFeatures(features_AHIS);var lyr_AHIS = new ol.layer.Vector({
                source:jsonSource_AHIS, 
                style: style_AHIS,
                title: "ŞAHIS"
            });var format_BAHEEHR = new ol.format.GeoJSON();
var features_BAHEEHR = format_BAHEEHR.readFeatures(geojson_BAHEEHR, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BAHEEHR = new ol.source.Vector();
jsonSource_BAHEEHR.addFeatures(features_BAHEEHR);var lyr_BAHEEHR = new ol.layer.Vector({
                source:jsonSource_BAHEEHR, 
                style: style_BAHEEHR,
                title: "BAHÇEŞEHİR"
            });var format_TESKOOP = new ol.format.GeoJSON();
var features_TESKOOP = format_TESKOOP.readFeatures(geojson_TESKOOP, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TESKOOP = new ol.source.Vector();
jsonSource_TESKOOP.addFeatures(features_TESKOOP);var lyr_TESKOOP = new ol.layer.Vector({
                source:jsonSource_TESKOOP, 
                style: style_TESKOOP,
                title: "TESKOOP"
            });var format_YELALAN = new ol.format.GeoJSON();
var features_YELALAN = format_YELALAN.readFeatures(geojson_YELALAN, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YELALAN = new ol.source.Vector();
jsonSource_YELALAN.addFeatures(features_YELALAN);var lyr_YELALAN = new ol.layer.Vector({
                source:jsonSource_YELALAN, 
                style: style_YELALAN,
                title: "YEŞİL ALAN"
            });var format_SOSYALALANLAR = new ol.format.GeoJSON();
var features_SOSYALALANLAR = format_SOSYALALANLAR.readFeatures(geojson_SOSYALALANLAR, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOSYALALANLAR = new ol.source.Vector();
jsonSource_SOSYALALANLAR.addFeatures(features_SOSYALALANLAR);var lyr_SOSYALALANLAR = new ol.layer.Vector({
                source:jsonSource_SOSYALALANLAR, 
                style: style_SOSYALALANLAR,
                title: "SOSYAL ALANLAR"
            });var format_DOGALGAZ = new ol.format.GeoJSON();
var features_DOGALGAZ = format_DOGALGAZ.readFeatures(geojson_DOGALGAZ, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DOGALGAZ = new ol.source.Vector();
jsonSource_DOGALGAZ.addFeatures(features_DOGALGAZ);var lyr_DOGALGAZ = new ol.layer.Vector({
                source:jsonSource_DOGALGAZ, 
                style: style_DOGALGAZ,
                title: "DOGALGAZ"
            });var format_ATIKSUYAGMURSUYU = new ol.format.GeoJSON();
var features_ATIKSUYAGMURSUYU = format_ATIKSUYAGMURSUYU.readFeatures(geojson_ATIKSUYAGMURSUYU, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ATIKSUYAGMURSUYU = new ol.source.Vector();
jsonSource_ATIKSUYAGMURSUYU.addFeatures(features_ATIKSUYAGMURSUYU);var lyr_ATIKSUYAGMURSUYU = new ol.layer.Vector({
                source:jsonSource_ATIKSUYAGMURSUYU, 
                style: style_ATIKSUYAGMURSUYU,
                title: "ATIKSU YAGMURSUYU"
            });var format_MESUYU = new ol.format.GeoJSON();
var features_MESUYU = format_MESUYU.readFeatures(geojson_MESUYU, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MESUYU = new ol.source.Vector();
jsonSource_MESUYU.addFeatures(features_MESUYU);var lyr_MESUYU = new ol.layer.Vector({
                source:jsonSource_MESUYU, 
                style: style_MESUYU,
                title: "İÇMESUYU"
            });var format_YOLKOTLARI = new ol.format.GeoJSON();
var features_YOLKOTLARI = format_YOLKOTLARI.readFeatures(geojson_YOLKOTLARI, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YOLKOTLARI = new ol.source.Vector();
jsonSource_YOLKOTLARI.addFeatures(features_YOLKOTLARI);var lyr_YOLKOTLARI = new ol.layer.Vector({
                source:jsonSource_YOLKOTLARI, 
                style: style_YOLKOTLARI,
                title: "YOL KOTLARI"
            });

lyr_ZAR.setVisible(true);lyr_AHIS.setVisible(true);lyr_BAHEEHR.setVisible(true);lyr_TESKOOP.setVisible(true);lyr_YELALAN.setVisible(true);lyr_SOSYALALANLAR.setVisible(true);lyr_DOGALGAZ.setVisible(true);lyr_ATIKSUYAGMURSUYU.setVisible(true);lyr_MESUYU.setVisible(true);lyr_YOLKOTLARI.setVisible(false);
var layersList = [baseLayer,lyr_ZAR,lyr_AHIS,lyr_BAHEEHR,lyr_TESKOOP,lyr_YELALAN,lyr_SOSYALALANLAR,lyr_DOGALGAZ,lyr_ATIKSUYAGMURSUYU,lyr_MESUYU,lyr_YOLKOTLARI];
lyr_ZAR.set('fieldAliases', {});
lyr_AHIS.set('fieldAliases', {});
lyr_BAHEEHR.set('fieldAliases', {});
lyr_TESKOOP.set('fieldAliases', {'ADA': 'ADA', 'PARSEL': 'PARSEL', 'MÜLKİYET': 'MÜLKİYET', 'FONKSİYON': 'FONKSİYON', 'ALANI': 'ALANI', });
lyr_YELALAN.set('fieldAliases', {'FONKSİYON': 'FONKSİYON', 'ALANI': 'ALANI', });
lyr_SOSYALALANLAR.set('fieldAliases', {'ADA': 'ADA', 'PARSEL': 'PARSEL', 'MÜLKİYET': 'MÜLKİYET', 'FONKSİYON': 'FONKSİYON', 'ALAN': 'ALAN', });
lyr_DOGALGAZ.set('fieldAliases', {'İmalat adı': 'İmalat adı', 'Uzunluk_m': 'Uzunluk_m', });
lyr_ATIKSUYAGMURSUYU.set('fieldAliases', {'İmalat_adı': 'İmalat_adı', 'Uzunluk_m': 'Uzunluk_m', });
lyr_MESUYU.set('fieldAliases', {'İmalat_adı': 'İmalat_adı', 'Uzunluk': 'Uzunluk', });
lyr_YOLKOTLARI.set('fieldAliases', {'yol_adı': 'yol_adı', 'Kot': 'Kot', });
lyr_ZAR.set('fieldImages', {});
lyr_AHIS.set('fieldImages', {});
lyr_BAHEEHR.set('fieldImages', {});
lyr_TESKOOP.set('fieldImages', {'ADA': 'TextEdit', 'PARSEL': 'TextEdit', 'MÜLKİYET': 'TextEdit', 'FONKSİYON': 'TextEdit', 'ALANI': 'TextEdit', });
lyr_YELALAN.set('fieldImages', {'FONKSİYON': 'TextEdit', 'ALANI': 'TextEdit', });
lyr_SOSYALALANLAR.set('fieldImages', {'ADA': 'TextEdit', 'PARSEL': 'TextEdit', 'MÜLKİYET': 'TextEdit', 'FONKSİYON': 'TextEdit', 'ALAN': 'TextEdit', });
lyr_DOGALGAZ.set('fieldImages', {'İmalat adı': 'TextEdit', 'Uzunluk_m': 'TextEdit', });
lyr_ATIKSUYAGMURSUYU.set('fieldImages', {'İmalat_adı': 'TextEdit', 'Uzunluk_m': 'TextEdit', });
lyr_MESUYU.set('fieldImages', {'İmalat_adı': 'TextEdit', 'Uzunluk': 'TextEdit', });
lyr_YOLKOTLARI.set('fieldImages', {'yol_adı': 'TextEdit', 'Kot': 'TextEdit', });
lyr_ZAR.set('fieldLabels', {});
lyr_AHIS.set('fieldLabels', {});
lyr_BAHEEHR.set('fieldLabels', {});
lyr_TESKOOP.set('fieldLabels', {'ADA': 'inline label', 'PARSEL': 'inline label', 'MÜLKİYET': 'inline label', 'FONKSİYON': 'inline label', 'ALANI': 'inline label', });
lyr_YELALAN.set('fieldLabels', {'FONKSİYON': 'inline label', 'ALANI': 'inline label', });
lyr_SOSYALALANLAR.set('fieldLabels', {'ADA': 'inline label', 'PARSEL': 'inline label', 'MÜLKİYET': 'inline label', 'FONKSİYON': 'inline label', 'ALAN': 'inline label', });
lyr_DOGALGAZ.set('fieldLabels', {'İmalat adı': 'inline label', 'Uzunluk_m': 'inline label', });
lyr_ATIKSUYAGMURSUYU.set('fieldLabels', {'İmalat_adı': 'inline label', 'Uzunluk_m': 'inline label', });
lyr_MESUYU.set('fieldLabels', {'İmalat_adı': 'inline label', 'Uzunluk': 'inline label', });
lyr_YOLKOTLARI.set('fieldLabels', {'yol_adı': 'no label', 'Kot': 'no label', });
