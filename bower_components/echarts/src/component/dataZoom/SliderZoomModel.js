/**
 * @file Data zoom model
 */
define(function(require) {

    var DataZoomModel = require('./DataZoomModel');
    var layout = require('../../util/layout');

    var SliderZoomModel = DataZoomModel.extend({

        type: 'dataZoom.slider',

        /**
         * @readOnly
         */
        inputPositionParams: null,

        /**
         * @protected
         */
        defaultOption: {
            show: true,

            left: null,   // Default align to grid rect.
            right: null,  // Default align to grid rect.
            top: null,    // Default align to grid rect.
            bottom: null, // Default align to grid rect.
            width: null,  // Default align to grid rect.
            height: null, // Default align to grid rect.

            backgroundColor: 'rgba(47,69,84,0)',    // Background of slider zoom component.
            dataBackgroundColor: '#ddd',            // Background of data shadow.
            fillerColor: 'rgba(47,69,84,0.25)',     // Color of selected area.
            handleColor: 'rgba(47,69,84,0.65)',     // Color of handle.
            handleSize: 10,

            labelPrecision: null,
            labelFormatter: null,
            showDetail: true,
            showDataShadow: 'auto',                 // Default auto decision.
            realtime: true,
            zoomLock: false,                        // Whether disable zoom.
            textStyle: {
                color: '#333'
            }
        },

        /**
         * @override
         */
        init: function (option) {
            this.inputPositionParams = layout.getLayoutParams(option);
            SliderZoomModel.superApply(this, 'init', arguments);
        },

        /**
         * @override
         */
        mergeOption: function (option) {
            this.inputPositionParams = layout.getLayoutParams(option);
            SliderZoomModel.superApply(this, 'mergeOption', arguments);
        }

    });

    return SliderZoomModel;

});