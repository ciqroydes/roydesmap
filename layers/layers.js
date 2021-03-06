var wms_layers = [];

var lyr_Annes5060conceptionBUS_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wxs.ign.fr/orthohisto/geoportail/r/wms?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "ORTHOIMAGERY.ORTHOPHOTOS.1950-1965",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Annes 50-60 (conception BUS)",
							'type': 'base',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Annes5060conceptionBUS_0, 0]);
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
							'type': 'base',
                            
                            
                          });
              wms_layers.push([lyr_Ortho50cm_1, 0]);
var lyr_OrthophotosIGN20cm_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wxs.ign.fr/inspire/inspire/r/wms?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "OI.OrthoimageCoverage.HR",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Orthophotos IGN ?? 20cm",
                            opacity: 1.000000,
							'type': 'base',
                            
                            
                          });
              wms_layers.push([lyr_OrthophotosIGN20cm_2, 0]);

    var projection_PlanIGNv2_3 = ol.proj.get('EPSG:3857');
    var projectionExtent_PlanIGNv2_3 = projection_PlanIGNv2_3.getExtent();
    var size_PlanIGNv2_3 = ol.extent.getWidth(projectionExtent_PlanIGNv2_3) / 256;
    var resolutions_PlanIGNv2_3 = new Array(14);
    var matrixIds_PlanIGNv2_3 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_PlanIGNv2_3[z] = size_PlanIGNv2_3 / Math.pow(2, z);
        matrixIds_PlanIGNv2_3[z] = z;
    }
    var lyr_PlanIGNv2_3 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "https://wxs.ign.fr/cartes/geoportail/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetCapabilities",
    attributions: ' ',
                                "layer": "GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_PlanIGNv2_3,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_PlanIGNv2_3),
                resolutions: resolutions_PlanIGNv2_3,
                matrixIds: matrixIds_PlanIGNv2_3
              }),
              style: 'normal',
			  'type': 'base',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "Plan IGN v2",
                            opacity: 1.0,
                            
                            
                          });

        var lyr_OSMStandard_4 = new ol.layer.Tile({
            'title': 'OSM Standard',
			'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">?? OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_ParcellesCadastrales_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wxs.ign.fr/inspire/inspire/r/wms?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "CP.CadastralParcel",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Parcelles Cadastrales",
							'type': 'base',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ParcellesCadastrales_5, 0]);

        var lyr_GoogleSatelliteHybrid_6 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

    var projection_PlanIGNj1_7 = ol.proj.get('EPSG:3857');
    var projectionExtent_PlanIGNj1_7 = projection_PlanIGNj1_7.getExtent();
    var size_PlanIGNj1_7 = ol.extent.getWidth(projectionExtent_PlanIGNj1_7) / 256;
    var resolutions_PlanIGNj1_7 = new Array(14);
    var matrixIds_PlanIGNj1_7 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_PlanIGNj1_7[z] = size_PlanIGNj1_7 / Math.pow(2, z);
        matrixIds_PlanIGNj1_7[z] = z;
    }
    var lyr_PlanIGNj1_7 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "https://wxs.ign.fr/cartes/geoportail/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetCapabilities",
    attributions: ' ',
                                "layer": "GEOGRAPHICALGRIDSYSTEMS.MAPS.BDUNI.J1",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
			 'type': 'base',
             format: 'image/png',
              projection: projection_PlanIGNj1_7,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_PlanIGNj1_7),
                resolutions: resolutions_PlanIGNj1_7,
                matrixIds: matrixIds_PlanIGNj1_7
              }),
              style: 'normal',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "Plan IGN j+1",
                            opacity: 1.0,
                            
                            
                          });
var format_CIQRoydEspagne_8 = new ol.format.GeoJSON();
var features_CIQRoydEspagne_8 = format_CIQRoydEspagne_8.readFeatures(json_CIQRoydEspagne_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CIQRoydEspagne_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CIQRoydEspagne_8.addFeatures(features_CIQRoydEspagne_8);
var lyr_CIQRoydEspagne_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CIQRoydEspagne_8, 
                style: style_CIQRoydEspagne_8,
                interactive: true,
                title: '<img src="styles/legend/CIQRoydEspagne_8.png" /> CIQ Roy d\'Espagne'
            });

        var lyr_BUS_9 = new ol.layer.Tile({
            'title': 'BUS',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://ciqroydes.github.io/roydesmap/BUS/{z}/{x}/{y}.png'
            })
        });

lyr_Annes5060conceptionBUS_0.setVisible(true);lyr_Ortho50cm_1.setVisible(true);lyr_OrthophotosIGN20cm_2.setVisible(false);lyr_PlanIGNv2_3.setVisible(false);lyr_OSMStandard_4.setVisible(false);lyr_ParcellesCadastrales_5.setVisible(false);lyr_GoogleSatelliteHybrid_6.setVisible(true);lyr_PlanIGNj1_7.setVisible(false);lyr_CIQRoydEspagne_8.setVisible(true);lyr_BUS_9.setVisible(true);
var layersList = [lyr_Annes5060conceptionBUS_0,lyr_Ortho50cm_1,lyr_OrthophotosIGN20cm_2,lyr_PlanIGNv2_3,lyr_OSMStandard_4,lyr_ParcellesCadastrales_5,lyr_GoogleSatelliteHybrid_6,lyr_PlanIGNj1_7,lyr_CIQRoydEspagne_8,lyr_BUS_9];
lyr_CIQRoydEspagne_8.set('fieldAliases', {'id': 'id', });
lyr_CIQRoydEspagne_8.set('fieldImages', {'id': 'TextEdit', });
lyr_CIQRoydEspagne_8.set('fieldLabels', {'id': 'no label', });
lyr_CIQRoydEspagne_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});