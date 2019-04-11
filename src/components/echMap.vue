<template>
  <div class="">
      <div class="test" id="test"></div>
  </div>
</template>

<script>
var echarts = require("echarts/lib/echarts");
    require("echarts/lib/chart/bar");
    require("echarts/lib/chart/radar");
    require("echarts/lib/component/tooltip");
    require("echarts/lib/component/title");
    require("echarts/src/config.js");
export default {
  data() { 
    return {

    }
  },

mounted(){
	var langfang = "../../static/map/langfang.json";
	
	$.getJSON(langfang, function(geoJson) {
		echarts.registerMap('langfang', geoJson);
		var geoCoordMap = {
			'安次区':[116.694986,39.501712],
			'广阳区':[116.711465,39.522107],
			'固安县':[116.292955,39.437839],
			'永清县':[116.497575,39.320012],
			'霸州市':[116.389085,39.12692],
			'文安县':[116.473543,38.864362],
			'大城县':[116.665803,38.698428],
			'香河县':[117.012559,39.758991],
			'大厂回族自治县':[116.982347,39.885032],
			'三河市':[117.085344,39.978228]
		};
		var data = [
			{name:'安次区', value: 199},
			{name:'广阳区', value: 39},
			{name:'固安县', value: 152},
			{name:'永清县', value: 299},
			{name:'霸州市', value: 89},
			{name:'文安县', value: 52},
			{name:'大城县', value: 9},
			{name:'香河县', value: 352},
			{name:'大厂回族自治县', value: 99},
			{name:'三河市', value: 39}
		];
		var max = 480; 
		var min = 9; // todo 
		var maxSize4Pin = 100;
		var minSize4Pin = 20;
		var convertData = function (data) {
		// 数据生成
		var res = [];
			for (var i = 0; i < data.length; i++) {
				var geoCoord = geoCoordMap[data[i].name];
				if (geoCoord) {
					res.push({
						name: data[i].name,
						value: geoCoord.concat(data[i].value)
					});
				}
			}
			return res;
		};
		var option={
			title: {
				text: '“大数据” - 廊坊市',
				subtext: '',
				x: 'center',
				textStyle: {
					color: '#ccc'
				}
			},
			tooltip: {
				trigger: 'item',
				formatter: function (params) {
					if(typeof(params.value)[2] == "undefined"){
						return params.name + ' : ' + params.value;
					}else{
						return params.name + ' : ' + params.value[2];
					}
				}
			},
			legend: {
				orient: 'vertical',
				y: 'bottom',
				x: 'right',
				data: ['credit_pm2.5'],
				textStyle: {
					color: '#fff'
				}
			},
			visualMap: {
				show: false,
				min: 0,
				max: 500,
				left: 'left',
				top: 'bottom',
				text: ['高', '低'], // 文本，默认为数值文本
				calculable: true,
				seriesIndex: [1],
				inRange: {
					color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
				}
			},
			geo: {
				show: true,
				map: 'langfang',
				label: {
					normal: {
						show: false
					},
					emphasis: {
						show: false,
					}
				},
				roam: true,
				itemStyle: {
					normal: {
						areaColor: '#031525',
						borderColor: '#3B5077',
					},
					emphasis: {
						areaColor: '#2B91B7',
					}
				}
			},
			series:[
				{
					name: 'credit_pm2.5',
					type: 'scatter',
					coordinateSystem: 'geo',
					data: convertData(data),
					symbolSize: function (val) {
						return val[2] / 10;
					},
					label: {
						normal: {
							formatter: '{b}',
							position: 'right',
							show: true
						},
						emphasis: {
							show: true
						}
					},
					itemStyle: {
						normal: {
							color: '#05C3F9'
						}
					}
				},
				{
					type: 'map',
					map: 'langfang',
					geoIndex: 0,
					aspectScale: 0.75, //长宽比
					showLegendSymbol: false, // 存在legend时显示
					label: {
						normal: {
							show: false
						},
						emphasis: {
							show: false,
							textStyle: {
								color: '#fff'
							}
						}
					},
					roam: true,
					itemStyle: {
						normal: {
							areaColor: '#031525',
							borderColor: '#3B5077',
						},
						emphasis: {
							areaColor: '#2B91B7'
						}
					},
					animation: false,
					data: data
				},
				{
					name: '点',
					type: 'scatter',
					coordinateSystem: 'geo',
					symbol: 'pin',
					symbolSize: function (val) {
						var a = (maxSize4Pin - minSize4Pin) / (max - min);
						var b = minSize4Pin - a*min;
						b = maxSize4Pin - a*max;
						return a*val[2]+b;
					},
					label: {
						normal: {
							show: true,
							textStyle: {
								color: '#fff',
								fontSize: 9,
							}
						}
					},
					itemStyle: {
						normal: {
							color: '#F62157', //标志颜色
						}
					},
					zlevel: 6,
					data: convertData(data),
				},
				{
					name: 'Top 5',
					type: 'effectScatter',
					coordinateSystem: 'geo',
					data: convertData(data.sort(function (a, b) {
						return b.value - a.value;
					}).slice(0, 5)),
					symbolSize: function (val) {
						return val[2] / 10;
					},
					showEffectOn: 'render',
					rippleEffect: {
						brushType: 'stroke'
					},
					hoverAnimation: true,
					label: {
						normal: {
							formatter: '{b}',
							position: 'right',
							show: true
						}
					},
					itemStyle: {
						normal: {
							color: '#05C3F9',
							shadowBlur: 10,
							shadowColor: '#05C3F9'
						}
					},
					zlevel: 1
				}
			]
		};

		var option1 = echarts.init(document.getElementById("test"));
		option1.setOption(option);
	});



},

methods:{},
 }
</script>

<style scoped>
.test{
	width: 100%;
	height: 900px;
}
</style>