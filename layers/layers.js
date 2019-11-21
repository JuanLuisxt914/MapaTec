var wms_layers = [];

var lyr_Sistemas_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Sistemas",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Sistemas_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-11955599.911818, 2849706.083140, -11955448.914644, 2849899.769492]
                            })
                        });
var format_Edificios_1 = new ol.format.GeoJSON();
var features_Edificios_1 = format_Edificios_1.readFeatures(json_Edificios_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Edificios_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Edificios_1.addFeatures(features_Edificios_1);
var lyr_Edificios_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Edificios_1, 
                style: style_Edificios_1,
                interactive: true,
                title: '<img src="styles/legend/Edificios_1.png" /> Edificios'
            });
var format_Salones_2 = new ol.format.GeoJSON();
var features_Salones_2 = format_Salones_2.readFeatures(json_Salones_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Salones_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Salones_2.addFeatures(features_Salones_2);
var lyr_Salones_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Salones_2, 
                style: style_Salones_2,
                interactive: true,
                title: '<img src="styles/legend/Salones_2.png" /> Salones'
            });

lyr_Sistemas_0.setVisible(true);lyr_Edificios_1.setVisible(true);lyr_Salones_2.setVisible(true);
var layersList = [lyr_Sistemas_0,lyr_Edificios_1,lyr_Salones_2];
lyr_Edificios_1.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', });
lyr_Salones_2.set('fieldAliases', {'id': 'id', 'Clave': 'Clave', });
lyr_Edificios_1.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Salones_2.set('fieldImages', {'id': 'TextEdit', 'Clave': 'TextEdit', });
lyr_Edificios_1.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', });
lyr_Salones_2.set('fieldLabels', {'id': 'no label', 'Clave': 'no label', });
lyr_Salones_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});