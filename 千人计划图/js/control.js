var linedata1=[{from:'美国',to:'北京',count:'12'},{from:'美国',to:'黑龙江',count:'1'},{from:'美国',to:'上海',count:'1'},
    {from:'德国',to:'北京',count:'1'},{from:'德国',to:'安徽',count:'1'},{from:'英国',to:'南京',count:'1'}
]

//提示框
var tooltip = d3.select("body")
    .append("div")
    .attr("class","tooltip")
    .style("opacity",0.0);

var   flowdata=[[{source:[-102.108675, 40.537010],target:[121.503447, 31.297676],name:'张远波',province:'上海',from:'美国',field:'数理科学'}],[{source:[ -102.108675, 40.537010],target:[116.305965, 39.987176],name:'林熙',province:'北京',from:'美国',field:'数理科学'}]
    ,[{source:[-102.108675, 40.537010],target:[116.331118, 39.985382],name:'田一超',province:'北京',from:'美国',field:'数理科学'}],[{source:[ -102.108675, 40.537010],target:[116.305965, 39.987176],name:'许晨阳',province:'北京',from:'美国',field:'数理科学'}],[{source:[ -102.108675, 40.537010],target:[116.326528, 39.999708],name:'鲁巍',province:'北京',from:'美国',field:'数理科学'}]
    ,[{source:[10.456997,51.221007],target:[117.280776, 31.822473],name:'陈宇翱',province:'安徽',from:'德国',field:'数理科学'}],[{source:[ -102.108675, 40.537010],target:[126.633425, 45.746879],name:'于淼',province:'黑龙江',from:'美国',field:'数理科学'}],[{source:[ -102.108675, 40.537010],target:[116.305965, 39.987176],name:'王健',province:'北京',from:'美国',field:'数理科学'}]
    ,[{source:[-0.149347,51.475127],target:[118.829587, 32.065849],name:'刘四明',province:'江苏',from:'英国',field:'数理科学'}],
    [{source:[-102.108675, 40.537010],target:[116.331118, 39.985382],name:'王兵',province:'北京',from:'美国',field:'数理科学'}],
    [{source:[-102.108675, 40.537010],target:[116.331118, 39.985382],name:'贾爽',province:'北京',from:'美国',field:'数理科学'}],
    [{source:[-102.108675, 40.537010],target:[116.331118, 39.985382],name:'曹庆宏',province:'北京',from:'美国',field:'数理科学'}],
    [{source:[10.456997,51.221007],target:[116.331118, 39.985382],name:'Gregory J H',province:'北京',from:'德国',field:'数理科学'}],
    [{source:[-102.108675, 40.537010],target:[116.331118, 39.985382],name:'孙栋',province:'北京',from:'美国',field:'数理科学'}],
    [{source:[-102.108675, 40.537010],target:[116.331118, 39.985382],name:'喻进',province:'北京',from:'美国',field:'数理科学'}],
    [{source:[-102.108675, 40.537010],target:[116.331118, 39.985382],name:'张金星',province:'北京',from:'美国',field:'数理科学'}],
    [{source:[-102.108675, 40.537010],target:[116.331118, 39.985382],name:'王文旭',province:'北京',from:'美国',field:'数理科学'}]
];


var linedata2011=[{from:'美国',to:'北京',count:'12'},{from:'美国',to:'黑龙江',count:'1'},{from:'美国',to:'上海',count:'1'},
    {from:'德国',to:'北京',count:'1'},{from:'德国',to:'安徽',count:'1'},{from:'英国',to:'南京',count:'1'}
]



var   flowdata2011=[[{source:[-102.108675, 40.537010],target:[121.503447, 31.297676],name:'张远波',province:'上海',from:'美国',field:'数理科学'}],[{source:[ -102.108675, 40.537010],target:[116.305965, 39.987176],name:'林熙',province:'北京',from:'美国',field:'数理科学'}]
    ,[{source:[-102.108675, 40.537010],target:[116.331118, 39.985382],name:'田一超',province:'北京',from:'美国',field:'数理科学'}],[{source:[ -102.108675, 40.537010],target:[116.305965, 39.987176],name:'许晨阳',province:'北京',from:'美国',field:'数理科学'}],[{source:[ -102.108675, 40.537010],target:[116.326528, 39.999708],name:'鲁巍',province:'北京',from:'美国',field:'数理科学'}]
    ,[{source:[10.456997,51.221007],target:[117.280776, 31.822473],name:'陈宇翱',province:'安徽',from:'德国',field:'数理科学'}],[{source:[ -102.108675, 40.537010],target:[126.633425, 45.746879],name:'于淼',province:'黑龙江',from:'美国',field:'数理科学'}],[{source:[ -102.108675, 40.537010],target:[116.305965, 39.987176],name:'王健',province:'北京',from:'美国',field:'数理科学'}]
    ,[{source:[-0.149347,51.475127],target:[118.829587, 32.065849],name:'刘四明',province:'江苏',from:'英国',field:'数理科学'}],
    [{source:[-102.108675, 40.537010],target:[116.331118, 39.985382],name:'王兵',province:'北京',from:'美国',field:'数理科学'}],
    [{source:[-102.108675, 40.537010],target:[116.331118, 39.985382],name:'贾爽',province:'北京',from:'美国',field:'数理科学'}],
    [{source:[-102.108675, 40.537010],target:[116.331118, 39.985382],name:'曹庆宏',province:'北京',from:'美国',field:'数理科学'}],
    [{source:[10.456997,51.221007],target:[116.331118, 39.985382],name:'Gregory J H',province:'北京',from:'德国',field:'数理科学'}],
    [{source:[-102.108675, 40.537010],target:[116.331118, 39.985382],name:'孙栋',province:'北京',from:'美国',field:'数理科学'}],
    [{source:[-102.108675, 40.537010],target:[116.331118, 39.985382],name:'喻进',province:'北京',from:'美国',field:'数理科学'}],
    [{source:[-102.108675, 40.537010],target:[116.331118, 39.985382],name:'张金星',province:'北京',from:'美国',field:'数理科学'}],
    [{source:[-102.108675, 40.537010],target:[116.331118, 39.985382],name:'王文旭',province:'北京',from:'美国',field:'数理科学'}]
];


var linedata2012=[{from:'美国',to:'北京',count:'3'},{from:'加拿大',to:'上海',count:'1'},{from:'美国',to:'上海',count:'1'},{from:'德国',to:'上海',count:'1'},
    {from:'德国',to:'辽宁',count:'1'},{from:'德国',to:'重庆',count:'1'},{from:'澳大利亚',to:'上海',count:'1'},{from:'日本',to:'北京',count:'1'},{from:'日本',to:'上海',count:'1'}
    ,{from:'美国',to:'重庆',count:'1'},{from:'美国',to:'四川',count:'1'},{from:'美国',to:'江苏',count:'1'},{from:'美国',to:'上海',count:'2'},{from:'瑞士',to:'辽宁',count:'1'},{from:'香港',to:'北京',count:'1'}
]


var   flowdata2012=[[{source:[114.156089,22.335855],target:[116.331118, 39.985382],name:'常春起',province:'北京',from:'香港',field:'信息科学'}],
    [{source:[139.610949,35.719746],target:[116.305965, 39.987176],name:'周天丰',province:'北京',from:'日本',field:'工程与材料科学'}]
    ,[{source:[-102.108675, 40.537010],target:[116.331118, 39.985382],name:'刘阳',province:'北京',from:'美国',field:'环境与地球科学'}],
    [{source:[ -102.108675, 40.537010],target:[116.305965, 39.987176],name:'黄海鸥',province:'北京',from:'美国',field:'工程与材料科学'}],
    [{source:[ -102.108675, 40.537010],target:[116.326528, 39.999708],name:'王占新',province:'北京',from:'美国',field:'生命科学'}]
    ,[{source:[7.447422,46.972016],target:[121.529029, 38.880346],name:'前田修孝',province:'辽宁',from:'瑞士',field:'环境与地球科学'}],
    [{source:[10.456997,51.221007],target:[126.633425, 45.746879],name:'刘涛',province:'辽宁',from:'德国',field:'信息科学'}],
    [{source:[ 10.456997,51.221007],target:[106.448133, 29.535449],name:'谌小维',province:'重庆',from:'德国',field:'生命科学'}]
    ,[{source:[-102.108675, 40.537010],target:[106.448133, 29.535449],name:'叶丽林',province:'重庆',from:'美国',field:'生命科学'}],
    [{source:[-102.108675, 40.537010],target:[104.100362, 30.675047],name:'毕磊',province:'四川',from:'美国',field:'工程与材料科学'}],
    [{source:[-102.108675, 40.537010],target:[118.794238, 32.055938],name:'叶智锐',province:'江苏',from:'美国',field:'工程与材料科学'}],
    [{source:[121.503447, 31.297676],target:[121.503447, 31.297676],name:'吴颖灏',province:'上海',from:'美国',field:'数理科学'}],
    [{source:[121.503447, 31.297676],target:[121.503447, 31.297676],name:'Cosimo Bambi',province:'上海',from:'德国',field:'数理科学'}],
    [{source:[132.922966,-24.824230],target:[121.503447, 31.297676],name:'王亚军',province:'上海',from:'澳大利亚',field:'化学'}],
    [{source:[-102.108675, 40.537010],target:[121.503447, 31.297676],name:'徐丰',province:'上海',from:'美国',field:'信息科学'}],
    [{source:[139.610949,35.719746],target:[121.503447, 31.297676],name:'支春义',province:'上海',from:'日本',field:'工程与材料科学'}],
    [{source:[ -106.133197,59.567219],target:[121.503447, 31.297676],name:'王毅',province:'上海',from:'加拿大',field:'生命科学'}]
];


var linedata2013=[{from:'美国',to:'北京',count:'8'},{from:'美国',to:'长春',count:'1'},{from:'美国',to:'天津',count:'1'},{from:'美国',to:'四川',count:'4'},
    {from:'美国',to:'辽宁',count:'4'},{from:'美国',to:'上海',count:'1'},{from:'澳大利亚',to:'辽宁',count:'1'},{from:'比利时',to:'北京',count:'1'},{from:'德国',to:'辽宁',count:'1'}
    ,{from:'法国',to:'北京',count:'1'},{from:'加拿大',to:'北京',count:'1'},{from:'日本',to:'北京',count:'1'},{from:'新加坡',to:'天津',count:'1'},{from:'新加坡',to:'贵州',count:'1'},{from:'新加坡',to:'四川',count:'1'},
    {from:'澳门',to:'四川',count:'1'},{from:'香港',to:'四川',count:'1'}
]


var   flowdata2013=[[{source:[-106.133197,59.567219],target:[116.331118, 39.985382],name:'蔡宴朋',province:'北京',from:'加拿大',field:'信息科学'}],
    [{source:[-102.108675, 40.537010],target:[116.305965, 39.987176],name:'吴新开',province:'北京',from:'美国',field:'工程与材料科学'}]
    ,[{source:[139.610949,35.719746],target:[116.331118, 39.985382],name:'沈成平',province:'北京',from:'日本',field:'环境与地球科学'}],
    [{source:[ 2.345843,48.811500],target:[116.305965, 39.987176],name:'赵巍胜',province:'北京',from:'法国',field:'工程与材料科学'}],
    [{source:[ -102.108675, 40.537010],target:[116.326528, 39.999708],name:'王金亮',province:'北京',from:'美国',field:'生命科学'}]
    ,[{source:[4.399409,50.835366],target:[116.326528, 39.999708],name:'张 静',province:'北京',from:'比利时',field:'数理科学'}],
    [{source:[-102.108675, 40.537010],target:[116.326528, 39.999708],name:'林中伟',province:'北京',from:'美国',field:'信息科学'}],
    [{source:[-102.108675, 40.537010],target:[116.326528, 39.999708],name:'项生昌',province:'北京',from:'美国',field:'生命科学'}]
    ,[{source:[-102.108675, 40.537010],target:[125.348679, 43.873610],name:'张越涛',province:'长春',from:'美国',field:'数理科学'}],
    [{source:[-102.108675, 40.537010],target:[117.174227, 39.103900],name:'贾 大',province:'天津',from:'美国',field:'工程与材料科学'}],
    [{source:[103.849017,1.337997],target:[117.174227, 39.103900],name:'宋 浩',province:'天津',from:'新加坡',field:'工程与材料科学'}],
    [{source:[103.849017,1.337997],target:[106.674357, 26.443264],name:'池永贵',province:'贵州',from:'新加坡',field:'数理科学'}],
    [{source:[103.849017,1.337997],target:[104.064195, 30.641445],name:'唐华锦',province:'四川',from:'新加坡',field:'数理科学'}],
    [{source:[-102.108675, 40.537010],target:[104.064195, 30.641445],name:'邹清泽',province:'四川',from:'美国',field:'化学'}],
    [{source:[-102.108675, 40.537010],target:[116.305965, 39.987176],name:'赵传峰',province:'北京',from:'美国',field:'环境与地球科学'}],
    [{source:[-102.108675, 40.537010],target:[116.305965, 39.987176],name:'邢大军',province:'北京',from:'美国',field:'生命科学'}],
    [{source:[-102.108675, 40.537010],target:[116.305965, 39.987176],name:'王友军',province:'北京',from:'美国',field:'生命科学'}],
    [{source:[-102.108675, 40.537010],target:[116.305965, 39.987176],name:'秦绍正',province:'北京',from:'美国',field:'生命科学'}],
    [{source:[132.922966,-24.824230],target:[121.529029, 38.880346],name:'张桂勇',province:'辽宁',from:'澳大利亚',field:'工程与材料科学'}],
    [{source:[10.456997,51.221007],target:[121.529029, 38.880346],name:'王治宇',province:'辽宁',from:'德国',field:'化学'}],
    [{source:[-102.108675, 40.537010],target:[116.305965, 39.987176],name:'汪洋',province:'辽宁',from:'美国',field:'生命科学'}],
    [{source:[-102.108675, 40.537010],target:[104.064195, 30.641445],name:'牛晓滨',province:'四川',from:'美国',field:'工程与材料科学'}],
    [{source:[-102.108675, 40.537010],target:[104.064195, 30.641445],name:'王红刚',province:'四川',from:'美国',field:'信息科学'}],
    [{source:[113.545898,22.129021],target:[104.064195, 30.641445],name:'周建涛',province:'四川',from:'澳门',field:'信息科学'}],
    [{source:[114.156089,22.335855],target:[104.064195, 30.641445],name:'孙胜',province:'四川',from:'香港',field:'信息科学'}],
    [{source:[-102.108675, 40.537010],target:[104.064195, 30.641445],name:'王娟',province:'四川',from:'美国',field:'工程与材料科学'}],
    [{source:[-102.108675, 40.537010],target:[116.305965, 39.987176],name:'王聪',province:'辽宁',from:'美国',field:'工程与材料科学'}],
    [{source:[-102.108675, 40.537010],target:[116.305965, 39.987176],name:'丁辰',province:'辽宁',from:'美国',field:'生命科学'}],
    [{source:[-102.108675, 40.537010],target:[116.305965, 39.987176],name:'吴宏毅',province:'辽宁',from:'美国',field:'信息科学'}],
    [{source:[-102.108675, 40.537010],target:[121.503447, 31.297676],name:'王聪',province:'上海',from:'美国',field:'化学'}]
];


var linedata2014=[{from:'美国',to:'北京',count:'11'},{from:'美国',to:'上海',count:'1'},{from:'瑞士',to:'北京',count:'1'},{from:'加拿大',to:'北京',count:'1'},
    {from:'爱尔兰',to:'北京',count:'1'},{from:'美国',to:'上海',count:'3'},{from:'荷兰',to:'上海',count:'1'},{from:'德国',to:'上海',count:'1'}
]


var   flowdata2014=[[{source:[ -102.108675, 40.537010],target:[116.326528, 39.999708],name:'李博',province:'北京',from:'美国',field:'工程与材料科学'}],
    [{source:[-102.108675, 40.537010],target:[116.305965, 39.987176],name:'李苏辉',province:'北京',from:'美国',field:'工程与材料科学'}]
    ,[{source:[-102.108675, 40.537010],target:[116.305965, 39.987176],name:'张一慧',province:'北京',from:'日本',field:'工程与材料科学'}],
    [{source:[7.447422,46.972016],target:[116.305965, 39.987176],name:'郑昕',province:'北京',from:'瑞士',field:'工程与材料科学'}],
    [{source:[-106.133197,59.567219],target:[116.326528, 39.999708],name:'陈浩',province:'北京',from:'加拿大',field:'工程与材料科学'}]
    ,[{source:[-102.108675, 40.537010],target:[116.326528, 39.999708],name:'侯德义',province:'北京',from:'美国',field:'工程与材料科学'}],
    [{source:[-102.108675, 40.537010],target:[116.326528, 39.999708],name:'许瑛',province:'北京',from:'美国',field:'工程与材料科学'}],
    [{source:[-0.149347,51.475127],target:[116.326528, 39.999708],name:'赵明',province:'北京',from:'英国',field:'工程与材料科学'}]
    ,[{source:[-102.108675, 40.537010],target:[116.326528, 39.999708],name:'李楠',province:'北京',from:'美国',field:'工程与材料科学'}],
    [{source:[-102.108675, 40.537010],target:[116.326528, 39.999708],name:'龙笛',province:'北京',from:'美国',field:'工程与材料科学'}],
    [{source:[-102.108675, 40.537010],target:[116.326528, 39.999708],name:'张品佳',province:'北京',from:'美国',field:'工程与材料科学'}],
    [{source:[-102.108675, 40.537010],target:[116.326528, 39.999708],name:'易洪涛',province:'北京',from:'美国',field:'工程与材料科学'}],
    [{source:[-102.108675, 40.537010],target:[116.326528, 39.999708],name:'胡琨',province:'北京',from:'美国',field:'数理科学'}],
    [{source:[-102.108675, 40.537010],target:[116.326528, 39.999708],name:'何智',province:'北京',from:'美国',field:'化学'}],
    [{source:[ -6.220616, 53.305565],target:[116.305965, 39.987176],name:'龙闰',province:'北京',from:'爱尔兰',field:'化学'}],
    [{source:[-102.108675, 40.537010],target:[121.503447, 31.297676],name:'包文中',province:'上海',from:'美国',field:'信息科学'}],
    [{source:[4.902121,52.344701],target:[121.503447, 31.297676],name:'陈炜',province:'上海',from:'荷兰',field:'信息科学'}],
    [{source:[10.456997,51.221007],target:[121.503447, 31.297676],name:'华波波',province:'上海',from:'德国',field:'数理科学'}],
    [{source:[10.456997,51.221007],target:[121.503447, 31.297676],name:'王善文',province:'上海',from:'德国',field:'数理科学'}],
    [{source:[-102.108675, 40.537010],target:[121.503447, 31.297676],name:'王熠华',province:'上海',from:'美国',field:'数理科学'}],
    [{source:[-102.108675, 40.537010],target:[121.503447, 31.297676],name:'韩柯',province:'上海',from:'美国',field:'数理科学'}]
];

var linedata2015=[{from:'美国',to:'北京',count:'8'},{from:'美国',to:'长春',count:'1'},{from:'美国',to:'天津',count:'1'},{from:'美国',to:'四川',count:'4'},
    {from:'美国',to:'辽宁',count:'4'},{from:'美国',to:'上海',count:'1'},{from:'澳大利亚',to:'辽宁',count:'1'},{from:'比利时',to:'北京',count:'1'},{from:'德国',to:'辽宁',count:'1'}
    ,{from:'法国',to:'北京',count:'1'},{from:'加拿大',to:'北京',count:'1'},{from:'日本',to:'北京',count:'1'},{from:'新加坡',to:'天津',count:'1'},{from:'新加坡',to:'贵州',count:'1'},{from:'新加坡',to:'四川',count:'1'},
    {from:'澳门',to:'四川',count:'1'},{from:'香港',to:'四川',count:'1'}
]


var   flowdata2015=[[{source:[-106.133197,59.567219],target:[116.331118, 39.985382],name:'蔡宴朋',province:'北京',from:'加拿大',field:'信息科学'}],
    [{source:[-102.108675, 40.537010],target:[116.305965, 39.987176],name:'吴新开',province:'北京',from:'美国',field:'工程与材料科学'}]
    ,[{source:[139.610949,35.719746],target:[116.331118, 39.985382],name:'沈成平',province:'北京',from:'日本',field:'环境与地球科学'}],
    [{source:[ 2.345843,48.811500],target:[116.305965, 39.987176],name:'赵巍胜',province:'北京',from:'法国',field:'工程与材料科学'}],
    [{source:[ -102.108675, 40.537010],target:[116.326528, 39.999708],name:'王金亮',province:'北京',from:'美国',field:'生命科学'}]
    ,[{source:[4.399409,50.835366],target:[116.326528, 39.999708],name:'张 静',province:'北京',from:'比利时',field:'数理科学'}],
    [{source:[-102.108675, 40.537010],target:[116.326528, 39.999708],name:'林中伟',province:'北京',from:'美国',field:'信息科学'}],
    [{source:[-102.108675, 40.537010],target:[116.326528, 39.999708],name:'项生昌',province:'北京',from:'美国',field:'生命科学'}]
    ,[{source:[-102.108675, 40.537010],target:[125.348679, 43.873610],name:'张越涛',province:'长春',from:'美国',field:'数理科学'}],
    [{source:[-102.108675, 40.537010],target:[117.174227, 39.103900],name:'贾 大',province:'天津',from:'美国',field:'工程与材料科学'}],
    [{source:[103.849017,1.337997],target:[117.174227, 39.103900],name:'宋 浩',province:'天津',from:'新加坡',field:'工程与材料科学'}],
    [{source:[103.849017,1.337997],target:[106.674357, 26.443264],name:'池永贵',province:'贵州',from:'新加坡',field:'数理科学'}],
    [{source:[103.849017,1.337997],target:[104.064195, 30.641445],name:'唐华锦',province:'四川',from:'新加坡',field:'数理科学'}],
    [{source:[-102.108675, 40.537010],target:[104.064195, 30.641445],name:'邹清泽',province:'四川',from:'美国',field:'化学'}],
    [{source:[-102.108675, 40.537010],target:[116.305965, 39.987176],name:'赵传峰',province:'北京',from:'美国',field:'环境与地球科学'}],
    [{source:[-102.108675, 40.537010],target:[116.305965, 39.987176],name:'邢大军',province:'北京',from:'美国',field:'生命科学'}],
    [{source:[-102.108675, 40.537010],target:[116.305965, 39.987176],name:'王友军',province:'北京',from:'美国',field:'生命科学'}],
    [{source:[-102.108675, 40.537010],target:[116.305965, 39.987176],name:'秦绍正',province:'北京',from:'美国',field:'生命科学'}],
    [{source:[132.922966,-24.824230],target:[121.529029, 38.880346],name:'张桂勇',province:'辽宁',from:'澳大利亚',field:'工程与材料科学'}],
    [{source:[10.456997,51.221007],target:[121.529029, 38.880346],name:'王治宇',province:'辽宁',from:'德国',field:'化学'}],
    [{source:[-102.108675, 40.537010],target:[116.305965, 39.987176],name:'汪洋',province:'辽宁',from:'美国',field:'生命科学'}],
    [{source:[-102.108675, 40.537010],target:[104.064195, 30.641445],name:'牛晓滨',province:'四川',from:'美国',field:'工程与材料科学'}],
    [{source:[-102.108675, 40.537010],target:[104.064195, 30.641445],name:'王红刚',province:'四川',from:'美国',field:'信息科学'}],
    [{source:[113.545898,22.129021],target:[104.064195, 30.641445],name:'周建涛',province:'四川',from:'澳门',field:'信息科学'}],
    [{source:[114.156089,22.335855],target:[104.064195, 30.641445],name:'孙胜',province:'四川',from:'香港',field:'信息科学'}],
    [{source:[-102.108675, 40.537010],target:[104.064195, 30.641445],name:'王娟',province:'四川',from:'美国',field:'工程与材料科学'}],
    [{source:[-102.108675, 40.537010],target:[116.305965, 39.987176],name:'王聪',province:'辽宁',from:'美国',field:'工程与材料科学'}],
    [{source:[-102.108675, 40.537010],target:[116.305965, 39.987176],name:'丁辰',province:'辽宁',from:'美国',field:'生命科学'}],
    [{source:[-102.108675, 40.537010],target:[116.305965, 39.987176],name:'吴宏毅',province:'辽宁',from:'美国',field:'信息科学'}],
    [{source:[-102.108675, 40.537010],target:[121.503447, 31.297676],name:'王聪',province:'上海',from:'美国',field:'化学'}]
];


