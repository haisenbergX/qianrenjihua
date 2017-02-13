/**
 * Created by user on 17-1-12.
 */
function initC() {
    var china=['北京','天津','上海','重庆','河北','山西','辽宁','吉林','黑龙江','江苏','浙江','安徽','福建'
    ,'江西','山东','河南','湖北','湖南','广东','海南','四川','贵州','云南','陕西','甘肃','青海','台湾','内蒙古','广西'
    ,'西藏','宁夏','新疆']
    var width = parseInt($('.C').css('width')),
        height = parseInt($('.C').css('height'));
    var  svg = d3.select('.C').append('svg').attr('width', width).attr('height', height);
    var  headrect=svg.append('g');
    var  headtext =svg.append('g');
    var  svg_head = headrect.selectAll(".head")
        .data(china);
    var  svg_text = headtext.selectAll(".headtext")
        .data(china);
      //矩形图标
    svg_head.enter().append('rect').attr('class','province').attr('id',function (d, i) {
         return 'province'+d;
    }).attr('x',function (d, i) {
             if(i>=16){
                var c=i;
                return 20+(c-16)*80
             }

        return 20+i*80;
    }).attr('y',function (d, i) {
        return 10+Math.floor(i/16)*30;
    }).attr('width',20).attr('height',20).attr('fill','#000');
    //文字说明
    svg_text.enter().append('text').attr('transform',function (d, i) {
        var dx,dy;
        dy=25+Math.floor(i/16)*30;
        if(i>=16){
            var c=i;
            dx= 45+(c-16)*80;
        }else{
            dx= 45+i*80;
        }

        return 'translate(' + dx + ',' + dy + ')'
    }).text(function (d, i) {
        return d
    }).attr('fill','white');

    d3.selectAll('.province').on('click',function (d,i) {
        var filterCursor=d3.selectAll('.cursor').filter(function (l, i) {
            if(d==l[0].province){
                return true;
            }
        });

        filterCursor.attr('y',-10).style('opacity',0);
        var filterArc= d3.selectAll('.arc').filter(function (l, i) {
            if(d==l[0].province){
                return true;
            }
        });
        filterArc.style('opacity',0).classed('flow',false);
        if(typeof i=='string'){

        }

        if(i>19){
            i=i-19;
            var color=  d3.schemeCategory20b[i];
        }else {
            var color=  d3.schemeCategory20[i];
        }
        if(typeof i=='string'){
            var color=i
        }
        d3.select('#province'+d).attr('fill',color);
        d3.select('#'+d).style('fill',color);
        d3.timeout(function () {
            filterArc.style('opacity',1).classed('flow',true);

        },1);
        d3.timeout(function () {
            filterCursor.attr('y',-10).style('opacity',0.9)
        },3000);

        window.options.initAObject.changeByRegion(filterArc.nodes(),d);
        window.options.initBObject.changeByRegion(filterArc.nodes(),d);

    }).on('dblclick',function (d,i) {
        d3.select(this).attr('fill','#000');
        d3.select('#'+d).style('fill','#000');
        var filterArc= d3.selectAll('.arc').filter(function (l, i) {
            if(d==l[0].province){
                return true;
            }
        });
        var filterCursor=d3.selectAll('.cursor').filter(function (l, i) {
            if(d==l[0].province){
                return true;
            }
        });
        d3.timeout(function () {
            filterArc.style('opacity',0).classed('flow',false);
        },2);
        d3.timeout(function () {
            filterCursor.attr('y',-10).style('opacity',0)
        },3100);

        window.options.initAObject.dataDelete(filterArc.nodes(),d);
        window.options.initBObject.dataDelete(filterArc.nodes(),d);
    });

function show() {
    
}
    
}