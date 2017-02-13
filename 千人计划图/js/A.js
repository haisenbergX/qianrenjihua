/**
 * Created by user on 17-1-12.
 */
function initA(data) {
  var myChart=  this.myChart= echarts.init((document.getElementsByClassName('A')[0]));
  var option= this.option = {
        backgroundColor: '#45494A',

        title: {
            text: '来源国家比例',
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
                name: '来源国家',
                type: 'pie',
                radius: '55%',
                data:[

                ],
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
                itemStyle: {
                    normal: {
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    myChart.setOption(option);
}
var mapOb=new Map();
var setPro=new Set();
initA.prototype.changeByRegion=function changeByRegion(data,province) {
    var datavalue=[];

    if(setPro.has(province)){
       return;
    }else{
        setPro.add(province)
    }
      var newdata=[];
      var option=this.option;
      for(let i=0;i<data.length;i++){
          var name=data[i].__data__[0].from;
          if(mapOb.has(name)){
             var count=  mapOb.get(name);
              mapOb.set(name,count+1);
          }else{
              mapOb.set(name,1);
          }
      }
    mapOb.forEach(function (d, i) {
        var object={};
        object.name=i;
        object.value=d;
        datavalue.push(object)
    })


    option.series[0].data=datavalue;

     this.myChart.setOption(option);

}

initA.prototype.dataDelete=function dataDelete(data,province) {
       var datavalue=[];
    if(setPro.has(province)){
        setPro.delete(province);
    }else{
        return ;
    }
    var newdata=[];
    var option=this.option;
    for(let i=0;i<data.length;i++){
        var name=data[i].__data__[0].from;
        if(mapOb.has(name)){
            var count=  mapOb.get(name);
            mapOb.set(name,count-1);
            if(count==1){
                mapOb.delete(name)
            }
        }
    }

    mapOb.forEach(function (d, i) {
        var object={};
        object.name=i;
        object.value=d;
        datavalue.push(object)
    })

    option.series[0].data=datavalue;

    this.myChart.setOption(option);



}

