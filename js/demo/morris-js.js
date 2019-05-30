// Morris-JS.js
// ====================================================================
// This file should not be included in your project.
// This is just a sample how to initialize plugins or components.
//
// - ThemeOn.net -



$(document).on('nifty.ready', function () {

    // MORRIS AREA CHART
    // =================================================================
    // Require MorrisJS Chart
    // -----------------------------------------------------------------
    // http://morrisjs.github.io/morris.js/
    // =================================================================

    /*var chart = Morris.Area({
        element: 'demo-morris-area',
        data: [{
            period: 'January 16',
            dl: 77,
            up: 25
            }, {
            period: 'February 16',
            dl: 127,
            up: 58
            }, {
            period: 'March 16',
            dl: 115,
            up: 46
            }, {
            period: 'April 16',
            dl: 239,
            up: 57
            }, {
            period: 'May 16',
            dl: 46,
            up: 75
            }, {
            period: 'June 16',
            dl: 97,
            up: 57
            }, {
            period: 'July 16',
            dl: 105,
            up: 70
            }, {
            period: 'August 16',
            dl: 115,
            up: 106
            }, {
            period: 'September 16',
            dl: 239,
            up: 187
            }, {
            period: 'October 16',
            dl: 97,
            up: 57
            }, {
            period: 'November 16',
            dl: 189,
            up: 70
            }, {
            period: 'December 16',
            dl: 65,
            up: 30
            }, {
            period: 'January 17',
            dl: 35,
            up: 90
            }, {
            period: 'February 17',
            dl: 127,
            up: 58
            }, {
            period: 'March 17',
            dl: 115,
            up: 46
            }, {
            period: 'April 17',
            dl: 239,
            up: 57
            }, {
            period: 'May 17',
            dl: 46,
            up: 75
            }, {
            period: 'June 17',
            dl: 97,
            up: 57
            }, {
            period: 'July 17',
            dl: 105,
            up: 70
            }, {
            period: 'August 17',
            dl: 115,
            up: 106
            }, {
            period: 'September 17',
            dl: 239,
            up: 187
            }, {
            period: 'October 17',
            dl: 97,
            up: 57
            }, {
            period: 'November 17',
            dl: 189,
            up: 70
            }, {
            period: 'December 17',
            dl: 65,
            up: 30
            }, {
            period: 'January 18',
            dl: 35,
            up: 90
            }, {
            period: 'February 18',
            dl: 127,
            up: 58
            }, {
            period: 'March 18',
            dl: 115,
            up: 46
            }, {
            period: 'April 18',
            dl: 239,
            up: 57
            }, {
            period: 'May 18',
            dl: 46,
            up: 75
            }, {
            period: 'June 18',
            dl: 97,
            up: 57
            }, {
            period: 'July 18',
            dl: 105,
            up: 70
            }, {
            period: 'August 18',
            dl: 115,
            up: 106
            }, {
            period: 'September 18',
            dl: 239,
            up: 187
            }, {
            period: 'October 18',
            dl: 97,
            up: 57
            }, {
            period: 'November 18',
            dl: 189,
            up: 70
            }, {
            period: 'December 18',
            dl: 65,
            up: 30
            }, {
            period: 'January 19',
            dl: 35,
            up: 90
            }],
        gridEnabled: true,
        gridLineColor: 'rgba(0,0,0,.1)',
        gridTextColor: '#8f9ea6',
        gridTextSize: '11px',
        behaveLikeLine: true,
        smooth: true,
        xkey: 'period',
        ykeys: ['dl', 'up'],
        labels: ['Visitor', 'Pageview'],
        lineColors: ['#b5bfc5', '#78c855'],
        pointSize: 0,
        pointStrokeColors : ['#045d97'],
        lineWidth: 0,
        resize:true,
        hideHover: 'auto',
        fillOpacity: 0.9,
        parseTime:false
    });

    chart.options.labels.forEach(function(label, i){
        var legendItem = $('<div class=\'morris-legend-items\'></div>').text(label);
        $('<span></span>').css('background-color', chart.options.lineColors[i]).prependTo(legendItem);
        $('#demo-morris-area-legend').append(legendItem)
    })*/



    // MORRIS LINE CHART
    // =================================================================
    // Require MorrisJS Chart
    // -----------------------------------------------------------------
    // http://morrisjs.github.io/morris.js/
    // =================================================================
    var day_data = [
        {'elapsed': '2015', 'value': 100},
        {'elapsed': '2016', 'value': 80},
        {'elapsed': '2017', 'value': 50},
        {'elapsed': '2018', 'value': 70},
        {'elapsed': '2019', 'value': 75},
        {'elapsed': '2020', 'value': 80}
    ];
    Morris.Line({
        element: 'demo-morris-line',
        data: day_data,
        xkey: 'elapsed',
        ykeys: ['value'],
        labels: ['value'],
        gridEnabled: true,
        gridLineColor: 'rgba(0,0,0,.1)',
        gridTextColor: '#8f9ea6',
        gridTextSize: '11px',
        lineColors: ['#177bbb'],
        lineWidth: 2,
        parseTime: false,
        resize:true,
        hideHover: 'auto'
    });




    // MORRIS AREA CHART
    // =================================================================
    // Require MorrisJS Chart
    // -----------------------------------------------------------------
    // http://morrisjs.github.io/morris.js/
    // =================================================================

    /*var chart = Morris.Area({
        element: 'demo-morris-area-full',
        data: [{
            period: 'January 16',
            dl: 77,
            up: 25
            }, {
            period: 'February 16',
            dl: 127,
            up: 58
            }, {
            period: 'March 16',
            dl: 115,
            up: 46
            }, {
            period: 'April 16',
            dl: 239,
            up: 57
            }, {
            period: 'May 16',
            dl: 46,
            up: 75
            }, {
            period: 'June 16',
            dl: 97,
            up: 57
            }, {
            period: 'July 16',
            dl: 105,
            up: 70
            }, {
            period: 'August 16',
            dl: 115,
            up: 106
            }, {
            period: 'September 16',
            dl: 239,
            up: 187
            }, {
            period: 'October 16',
            dl: 97,
            up: 57
            }, {
            period: 'November 16',
            dl: 189,
            up: 70
            }, {
            period: 'December 16',
            dl: 65,
            up: 30
            }, {
            period: 'January 17',
            dl: 35,
            up: 90
            }, {
            period: 'February 17',
            dl: 127,
            up: 58
            }, {
            period: 'March 17',
            dl: 115,
            up: 46
            }, {
            period: 'April 17',
            dl: 239,
            up: 57
            }, {
            period: 'May 17',
            dl: 46,
            up: 75
            }, {
            period: 'June 17',
            dl: 97,
            up: 57
            }, {
            period: 'July 17',
            dl: 105,
            up: 70
            }, {
            period: 'August 17',
            dl: 115,
            up: 106
            }, {
            period: 'September 17',
            dl: 239,
            up: 187
            }, {
            period: 'October 17',
            dl: 97,
            up: 57
            }, {
            period: 'November 17',
            dl: 189,
            up: 70
            }, {
            period: 'December 17',
            dl: 65,
            up: 30
            }, {
            period: 'January 18',
            dl: 35,
            up: 90
            }, {
            period: 'February 18',
            dl: 127,
            up: 58
            }, {
            period: 'March 18',
            dl: 115,
            up: 46
            }, {
            period: 'April 18',
            dl: 239,
            up: 57
            }, {
            period: 'May 18',
            dl: 46,
            up: 75
            }, {
            period: 'June 18',
            dl: 97,
            up: 57
            }, {
            period: 'July 18',
            dl: 105,
            up: 70
            }, {
            period: 'August 18',
            dl: 115,
            up: 106
            }, {
            period: 'September 18',
            dl: 239,
            up: 187
            }, {
            period: 'October 18',
            dl: 97,
            up: 57
            }, {
            period: 'November 18',
            dl: 189,
            up: 70
            }, {
            period: 'December 18',
            dl: 65,
            up: 30
            }, {
            period: 'January 19',
            dl: 35,
            up: 90
            }],
        gridEnabled: true,
        gridLineColor: 'rgba(0,0,0,.1)',
        behaveLikeLine: true,
        smooth: false,
        axes:false,
        xkey: 'period',
        ykeys: ['dl', 'up'],
        labels: ['Visitor', 'Pageview'],
        lineColors: ['#b5bfc5', '#9B59B6'],
        pointSize: 0,
        pointStrokeColors : ['#045d97'],
        lineWidth: 0,
        resize:true,
        hideHover: 'auto',
        fillOpacity: 0.9,
        parseTime:false
    });

    chart.options.labels.forEach(function(label, i){
        var legendItem = $('<div class=\'morris-legend-items\'></div>').text(label);
        $('<span></span>').css('background-color', chart.options.lineColors[i]).prependTo(legendItem);
        $('#demo-morris-area-legend-full').append(legendItem)
    })*/




    // MORRIS BAR CHART
    // =================================================================
    // Require MorrisJS Chart
    // -----------------------------------------------------------------
    // http://morrisjs.github.io/morris.js/
    // =================================================================
    Morris.Bar({
        element: 'demo-morris-bar',
        data: [
            { y: 'Tax', a: 75 },
            { y: 'CPF', a: 20 },
            { y: 'Credits', a: 100 },
            { y: 'Offence', a: 0 }
        ],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['Series A'],
        gridEnabled: true,
        gridLineColor: 'rgba(0,0,0,.1)',
        gridTextColor: '#8f9ea6',
        gridTextSize: '11px',
        barColors: ['#163377'],
        resize:true,
        hideHover: 'auto'
    });


    // MORRIS DONUT CHART
    // =================================================================
    // Require MorrisJS Chart
    // -----------------------------------------------------------------
    // http://morrisjs.github.io/morris.js/
    // =================================================================
    /*Morris.Donut({
        element: 'demo-morris-donut',
        data: [
            {label: 'Download Sales', value: 12},
            {label: 'In-Store Sales', value: 30},
            {label: 'Mail-Order Sales', value: 20}
        ],
        colors: [
            '#ec407a',
            '#03a9f4',
            '#d8dfe2'
        ],
        resize:true
    });*/
});
