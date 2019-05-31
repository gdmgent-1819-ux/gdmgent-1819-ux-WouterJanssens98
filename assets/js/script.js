function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(51.053687, 3.724507),
      zoom:17,
    };
    var resto = {lat: 51.053687, lng: 3.724507};
    var map = new google.maps.Map(document.getElementById("googleLocatie"),mapProp);
    var marker = new google.maps.Marker({position: resto, map: map});
    }


    var year = new Date().getFullYear();
    document.getElementById('date').setAttribute("min", year + "-01-01");
    document.getElementById('date').setAttribute("max", year + "-12-31");

    function reservatie () {
        alert("Je reservatie is goed ontvangen!")
    }
    function bestelling () {
      alert("Je bestelling is goed ontvangen!")
  }


