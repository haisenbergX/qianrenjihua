/**
 * Created by user on 17-1-12.
 */
function initE() {
    var width = parseInt($('.E').css('width')),
        height = parseInt($('.E').css('height'));


    var svg = d3.select(".E").append('svg').attr('width', (width)).attr('height', height);


    var locale = d3.timeFormatLocale({
        "dateTime": "%A, %e %B %Y г. %X",
        "date": "%d.%m.%Y",
        "time": "%H:%M:%S",
        "periods": ["AM", "PM"],
        "days": ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
        "shortDays": ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
        "months": ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
        "shortMonths": ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"]
    });

    var formatMillisecond = locale.format(".%L"),
        formatSecond = locale.format(":%S"),
        formatMinute = locale.format("%I:%M"),
        formatHour = locale.format("%I %p"),
        formatDay = locale.format("%a %d"),
        formatWeek = locale.format("%b %d"),
        formatMonth = locale.format("%B"),
        formatYear = locale.format("%Y");

    var x = d3.scaleTime()
        .domain([new Date(2011, 0, 1), new Date(2015, 0, 1)])
        .range([0, width - 200])


    svg.append("g")
        .attr("transform", "translate(" + 30 + "," + height/3 + ")")
        .call(d3.axisBottom(x)
            .tickFormat(multiFormat).ticks(5));
    //修改时间文字颜色
    d3.selectAll('.tick').selectAll('text').attr('fill', 'white');


    function multiFormat(date) {
        return (d3.timeSecond(date) < date ? formatMillisecond
            : d3.timeMinute(date) < date ? formatSecond
            : d3.timeHour(date) < date ? formatMinute
            : d3.timeDay(date) < date ? formatHour
            : d3.timeMonth(date) < date ? (d3.timeWeek(date) < date ? formatDay : formatWeek)
            : d3.timeYear(date) < date ? formatMonth
            : formatYear)(date);


    }

    /*<polygon points="100,100 175,50 250,100 175,150"
     style="fill:#cccccc;
     stroke:#000000;stroke-width:1"/>*/

    d3.selectAll('.tick').append('polygon').attr('points', '30,10 50,20 50,40 30,50 10,40 10,20').attr('fill', '#000').style('stroke', 'blue')
        .attr('transform', 'translate(-30,-50)').on('click', function (d, i) {
        if (d.getFullYear() == '2012') {
            linedata1 = linedata2012;
            flowdata = flowdata2012;
        }else if(d.getFullYear()=='2011'){
            linedata1 = linedata2011;
            flowdata = flowdata2011;
        }else if(d.getFullYear()=='2013'){
            linedata1 = linedata2013;
            flowdata = flowdata2013;
        }else if(d.getFullYear()=='2014'){
            linedata1 = linedata2014;
            flowdata = flowdata2014;
        }else if(d.getFullYear()=='2015'){
            linedata1 = linedata2015;
            flowdata = flowdata2015;
        }

        d3.select('#flowline').remove();
        d3.selectAll('.tick').selectAll('polygon').attr('fill', '#000');
        d3.select(this).attr('fill', '#FFE616');
        var g = d3.select('#map')
        flow(g, projection);
        mapOb = new Map();
        setPro = new Set();
        mapObB = new Map();
        setProB = new Set();
        d3.select('.C').selectAll('.province').attr('b', function (d, i) {
            if (d3.select(this).attr('fill') != '#000') {
                d3.select(this).on('click')(d, d3.select(this).attr('fill'));
            }
        })

        d3.selectAll('.tick').selectAll('polygon').attr('fill', '#000');
        d3.select(this).attr('fill', '#FFE616');


    });
    d3.select('.tick').select('polygon').attr('fill', '#FFE616')


}