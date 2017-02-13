/**
 * Created by user on 17-1-12.
 */
/**
 * Created by user on 17-1-12.
 */
function initB() {
    var myChart=  this.myChart= echarts.init((document.getElementsByClassName('B')[0]));
    var option= this.option = {
        backgroundColor: '#45494A',

        title: {
            text: '不同领域比例',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#ccc'
            }
        },

        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series : [
            {
                name: '领域比例',
                type: 'pie',
                radius: '55%',
                data:[
                ],
                itemStyle: {
                    normal: {
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                label: {
                    normal: {
                        textStyle: {
                            color: 'white'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'white'
                        }
                    }
                },
            }
        ]
    };
    myChart.setOption(option);
}


var mapObB=new Map();
var setProB=new Set();
initB.prototype.changeByRegion=function (data,province) {
    var datavalue=[];
    if(setProB.has(province)){
        return;
    }else{
        setProB.add(province)
    }
    var newdata=[];
    var option=this.option;
    for(let i=0;i<data.length;i++){
        var name=data[i].__data__[0].field;
        if(mapObB.has(name)){
            var count=  mapObB.get(name);
            mapObB.set(name,count+1);
        }else{
            mapObB.set(name,1);
        }
    }
    mapObB.forEach(function (d, i) {
        var object={};
        object.name=i;
        object.value=d;
        datavalue.push(object)
    })


    option.series[0].data=datavalue;

    this.myChart.setOption(option);







}

initB.prototype.dataDelete=function (data,province) {
    var datavalue=[];
    if(setProB.has(province)){
        setProB.delete(province);
    }else{
        return ;
    }
    var newdata=[];
    var option=this.option;
    for(let i=0;i<data.length;i++){
        var name=data[i].__data__[0].field;
        if(mapObB.has(name)){
            var count=  mapObB.get(name);
            mapObB.set(name,count-1);
            if(count==1){
                mapObB.delete(name)
            }
        }
    }
    mapObB.forEach(function (d, i) {
        var object={};
        object.name=i;
        object.value=d;
        datavalue.push(object)
    })


    option.series[0].data=datavalue;

    this.myChart.setOption(option);





}






