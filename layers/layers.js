var wms_layers = [];

var lyr_Ortho50cm_0 = new ol.layer.Tile({
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
              wms_layers.push([lyr_Ortho50cm_0, 0]);
var format_arrondissements_1 = new ol.format.GeoJSON();
var features_arrondissements_1 = format_arrondissements_1.readFeatures(json_arrondissements_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_arrondissements_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_arrondissements_1.addFeatures(features_arrondissements_1);
var lyr_arrondissements_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_arrondissements_1, 
                style: style_arrondissements_1,
                interactive: true,
                title: '<img src="styles/legend/arrondissements_1.png" /> arrondissements'
            });
var format_PArcellaire8e8e10e_2 = new ol.format.GeoJSON();
var features_PArcellaire8e8e10e_2 = format_PArcellaire8e8e10e_2.readFeatures(json_PArcellaire8e8e10e_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PArcellaire8e8e10e_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PArcellaire8e8e10e_2.addFeatures(features_PArcellaire8e8e10e_2);
var lyr_PArcellaire8e8e10e_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PArcellaire8e8e10e_2, 
                style: style_PArcellaire8e8e10e_2,
                interactive: true,
                title: '<img src="styles/legend/PArcellaire8e8e10e_2.png" /> PArcellaire 8e 8e 10e'
            });
var format_ReserveBUSauPLUi_3 = new ol.format.GeoJSON();
var features_ReserveBUSauPLUi_3 = format_ReserveBUSauPLUi_3.readFeatures(json_ReserveBUSauPLUi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReserveBUSauPLUi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReserveBUSauPLUi_3.addFeatures(features_ReserveBUSauPLUi_3);
var lyr_ReserveBUSauPLUi_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ReserveBUSauPLUi_3, 
                style: style_ReserveBUSauPLUi_3,
                interactive: true,
                title: '<img src="styles/legend/ReserveBUSauPLUi_3.png" /> Reserve BUS au PLUi'
            });

lyr_Ortho50cm_0.setVisible(true);lyr_arrondissements_1.setVisible(true);lyr_PArcellaire8e8e10e_2.setVisible(true);lyr_ReserveBUSauPLUi_3.setVisible(true);
var layersList = [lyr_Ortho50cm_0,lyr_arrondissements_1,lyr_PArcellaire8e8e10e_2,lyr_ReserveBUSauPLUi_3];
lyr_arrondissements_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nom': 'nom', 'nom_m': 'nom_m', 'INSEE_COM': 'INSEE_COM', 'population': 'population', 'ARR': 'ARR', });
lyr_PArcellaire8e8e10e_2.set('fieldAliases', {'numero': 'numero', 'feuille': 'feuille', 'section': 'section', 'code_dep': 'code_dep', 'nom_com': 'nom_com', 'code_com': 'code_com', 'com_abs': 'com_abs', 'code_arr': 'code_arr', 'fid': 'fid', 'id': 'id', 'nom': 'nom', 'nom_m': 'nom_m', 'INSEE_COM': 'INSEE_COM', 'population': 'population', 'ARR': 'ARR', });
lyr_ReserveBUSauPLUi_3.set('fieldAliases', {'fid': 'fid', 'LIB_IDPSC': 'LIB_IDPSC', 'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', 'LIB_ATTR1': 'LIB_ATTR1', 'LIB_VAL1': 'LIB_VAL1', 'LIB_ATTR2': 'LIB_ATTR2', 'LIB_VAL2': 'LIB_VAL2', 'LIB_ATTR3': 'LIB_ATTR3', 'LIB_VAL3': 'LIB_VAL3', 'LIB_ATTR4': 'LIB_ATTR4', 'LIB_VAL4': 'LIB_VAL4', 'LIB_ATTR5': 'LIB_ATTR5', 'LIB_VAL5': 'LIB_VAL5', 'LIB_ATTR6': 'LIB_ATTR6', 'LIB_VAL6': 'LIB_VAL6', });
lyr_arrondissements_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'nom': 'TextEdit', 'nom_m': 'TextEdit', 'INSEE_COM': 'TextEdit', 'population': 'Range', 'ARR': 'TextEdit', });
lyr_PArcellaire8e8e10e_2.set('fieldImages', {'numero': 'TextEdit', 'feuille': 'Range', 'section': 'TextEdit', 'code_dep': 'TextEdit', 'nom_com': 'TextEdit', 'code_com': 'TextEdit', 'com_abs': 'TextEdit', 'code_arr': 'TextEdit', 'fid': 'Range', 'id': 'TextEdit', 'nom': 'TextEdit', 'nom_m': 'TextEdit', 'INSEE_COM': 'TextEdit', 'population': 'Range', 'ARR': 'TextEdit', });
lyr_ReserveBUSauPLUi_3.set('fieldImages', {'fid': 'TextEdit', 'LIB_IDPSC': 'TextEdit', 'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', 'LIB_ATTR1': 'TextEdit', 'LIB_VAL1': 'TextEdit', 'LIB_ATTR2': 'TextEdit', 'LIB_VAL2': 'TextEdit', 'LIB_ATTR3': 'TextEdit', 'LIB_VAL3': 'TextEdit', 'LIB_ATTR4': 'TextEdit', 'LIB_VAL4': 'TextEdit', 'LIB_ATTR5': 'TextEdit', 'LIB_VAL5': 'TextEdit', 'LIB_ATTR6': 'TextEdit', 'LIB_VAL6': 'TextEdit', });
lyr_arrondissements_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'nom': 'no label', 'nom_m': 'no label', 'INSEE_COM': 'no label', 'population': 'no label', 'ARR': 'no label', });
lyr_PArcellaire8e8e10e_2.set('fieldLabels', {'numero': 'no label', 'feuille': 'no label', 'section': 'no label', 'code_dep': 'no label', 'nom_com': 'no label', 'code_com': 'no label', 'com_abs': 'no label', 'code_arr': 'no label', 'fid': 'no label', 'id': 'no label', 'nom': 'no label', 'nom_m': 'no label', 'INSEE_COM': 'no label', 'population': 'no label', 'ARR': 'no label', });
lyr_ReserveBUSauPLUi_3.set('fieldLabels', {'fid': 'no label', 'LIB_IDPSC': 'no label', 'LIBELLE': 'no label', 'TXT': 'no label', 'TYPEPSC': 'no label', 'STYPEPSC': 'no label', 'NOMFIC': 'no label', 'URLFIC': 'no label', 'IDURBA': 'no label', 'DATVALID': 'no label', 'LIB_ATTR1': 'no label', 'LIB_VAL1': 'no label', 'LIB_ATTR2': 'no label', 'LIB_VAL2': 'no label', 'LIB_ATTR3': 'no label', 'LIB_VAL3': 'no label', 'LIB_ATTR4': 'no label', 'LIB_VAL4': 'no label', 'LIB_ATTR5': 'no label', 'LIB_VAL5': 'no label', 'LIB_ATTR6': 'no label', 'LIB_VAL6': 'no label', });
lyr_ReserveBUSauPLUi_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});