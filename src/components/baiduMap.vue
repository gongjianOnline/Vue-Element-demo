<template> 	
	<div>
		<div>百度地图</div>
		<div class="map" id="allmap">
			


		</div>

	</div>
</template> 
<script> 
export default { 
	name: '', 
	data () { 
		return { 

	    }; 
	}, 
	mounted(){
		this.test()
	},
	methods: { 
		test(){
			var map = new BMap.Map("allmap");
			var point = new BMap.Point();
			map.centerAndZoom(point,12);

			var geolocation = new BMap.Geolocation();
			geolocation.getCurrentPosition(function(r){
				if(this.getStatus() == BMAP_STATUS_SUCCESS){
					var mk = new BMap.Marker(r.point);
					map.addOverlay(mk);
					map.panTo(r.point);
					alert('您的位置：'+r.point.lng+','+r.point.lat);
				}
				else {
					alert('failed'+this.getStatus());
				}        
			},{enableHighAccuracy: true})
			setTimeout(function(){
				map.setZoom(14);   
			}, 2000);
			map.enableScrollWheelZoom(true);
		}
	} 
}; 
</script> 

<style scoped> 
.map{
	width: 100%;
	height: 500px;
}
</style> 



