function initializeMap() {
    var mapContainer = document.getElementById("map");
    var mapOption = {
        center: new kakao.maps.LatLng(37.498786, 127.031673),
        level: 4,
        mapTypeId: kakao.maps.MapTypeId.ROADMAP
    };
    var map = new kakao.maps.Map(mapContainer, mapOption);
    
    var markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667);  // 마커가 표시될 위치 
	var marker = new kakao.maps.Marker({  // 마커를 생성한다
	    position: markerPosition
	});

	marker.setMap(map); // 마커가 지도 위에 표시되도록 설정한다

	});
}
