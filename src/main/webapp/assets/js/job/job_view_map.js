function initializeMap() {
    var mapContainer = document.getElementById('map');
    var mapOption = {
        center: new kakao.maps.LatLng(37.56601, 126.97888),
        level: 4,
        mapTypeId: kakao.maps.MapTypeId.ROADMAP
    };
    var map = new kakao.maps.Map(mapContainer, mapOption);
}
