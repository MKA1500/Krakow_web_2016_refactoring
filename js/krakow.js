/*
(function () {
  var myCenter=new google.maps.LatLng(50.061742,19.940650);

  function initialize()
  {
  var mapProp = {
    center:myCenter,
    zoom:12,
    mapTypeId:google.maps.MapTypeId.ROADMAP
    };

  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

  var marker=new google.maps.Marker({
    position:myCenter,
    });

  marker.setMap(map);

  var infowindow = new google.maps.InfoWindow({
    content:"Hello World!"
    });

  infowindow.open(map,marker);
  }

  google.maps.event.addDomListener(window, 'load', initialize);
})();
*/
