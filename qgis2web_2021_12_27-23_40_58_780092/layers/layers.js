var wms_layers = [];

var lyr_Photographiesarienneshistoriques19501965_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wxs.ign.fr/orthohisto/geoportail/r/wms?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "ORTHOIMAGERY.ORTHOPHOTOS.1950-1965",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Photographies aériennes historiques 1950-1965",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Photographiesarienneshistoriques19501965_0, 0]);
var lyr_Ortho50cm_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wxs.ign.fr/inspire/inspire/r/wms?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "OI.OrthoimageCoverage",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortho 50 cm",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortho50cm_1, 0]);
var format_ReserveBUSauPLUi_2 = new ol.format.GeoJSON();
var features_ReserveBUSauPLUi_2 = format_ReserveBUSauPLUi_2.readFeatures(json_ReserveBUSauPLUi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReserveBUSauPLUi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReserveBUSauPLUi_2.addFeatures(features_ReserveBUSauPLUi_2);
var lyr_ReserveBUSauPLUi_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ReserveBUSauPLUi_2, 
                style: style_ReserveBUSauPLUi_2,
                interactive: true,
                title: '<img src="styles/legend/ReserveBUSauPLUi_2.png" /> Reserve BUS au PLUi'
            });
var lyr_p115_georef_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "p115_georef",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/p115_georef_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [603669.048299, 5353583.374932, 604193.341640, 5354311.646303]
                            })
                        });

lyr_Photographiesarienneshistoriques19501965_0.setVisible(true);lyr_Ortho50cm_1.setVisible(true);lyr_ReserveBUSauPLUi_2.setVisible(true);lyr_p115_georef_3.setVisible(true);
var layersList = [lyr_Photographiesarienneshistoriques19501965_0,lyr_Ortho50cm_1,lyr_ReserveBUSauPLUi_2,lyr_p115_georef_3];
lyr_ReserveBUSauPLUi_2.set('fieldAliases', {'fid': 'fid', 'LIB_IDPSC': 'LIB_IDPSC', 'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', 'LIB_ATTR1': 'LIB_ATTR1', 'LIB_VAL1': 'LIB_VAL1', 'LIB_ATTR2': 'LIB_ATTR2', 'LIB_VAL2': 'LIB_VAL2', 'LIB_ATTR3': 'LIB_ATTR3', 'LIB_VAL3': 'LIB_VAL3', 'LIB_ATTR4': 'LIB_ATTR4', 'LIB_VAL4': 'LIB_VAL4', 'LIB_ATTR5': 'LIB_ATTR5', 'LIB_VAL5': 'LIB_VAL5', 'LIB_ATTR6': 'LIB_ATTR6', 'LIB_VAL6': 'LIB_VAL6', });
lyr_ReserveBUSauPLUi_2.set('fieldImages', {'fid': 'TextEdit', 'LIB_IDPSC': 'TextEdit', 'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', 'LIB_ATTR1': 'TextEdit', 'LIB_VAL1': 'TextEdit', 'LIB_ATTR2': 'TextEdit', 'LIB_VAL2': 'TextEdit', 'LIB_ATTR3': 'TextEdit', 'LIB_VAL3': 'TextEdit', 'LIB_ATTR4': 'TextEdit', 'LIB_VAL4': 'TextEdit', 'LIB_ATTR5': 'TextEdit', 'LIB_VAL5': 'TextEdit', 'LIB_ATTR6': 'TextEdit', 'LIB_VAL6': 'TextEdit', });
lyr_ReserveBUSauPLUi_2.set('fieldLabels', {'fid': 'no label', 'LIB_IDPSC': 'no label', 'LIBELLE': 'no label', 'TXT': 'no label', 'TYPEPSC': 'no label', 'STYPEPSC': 'no label', 'NOMFIC': 'no label', 'URLFIC': 'no label', 'IDURBA': 'no label', 'DATVALID': 'no label', 'LIB_ATTR1': 'no label', 'LIB_VAL1': 'no label', 'LIB_ATTR2': 'no label', 'LIB_VAL2': 'no label', 'LIB_ATTR3': 'no label', 'LIB_VAL3': 'no label', 'LIB_ATTR4': 'no label', 'LIB_VAL4': 'no label', 'LIB_ATTR5': 'no label', 'LIB_VAL5': 'no label', 'LIB_ATTR6': 'no label', 'LIB_VAL6': 'no label', });
lyr_ReserveBUSauPLUi_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});