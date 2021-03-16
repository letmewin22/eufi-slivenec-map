function EufiSlivenecMain_InitMap() {
  const centerR = {lat: 50.024972, lng: 14.357194}

  /*init*/
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: centerR,
    styles: mapStyles,
  })

  const polygonCoordinates = [
    {
      lat: 50.02489611428358,
      lng: 14.356864504260262,
    },
    {
      lat: 50.02525469802265,
      lng: 14.357003979129036,
    },
    {
      lat: 50.02523401979949,
      lng: 14.35787478067323,
    },
    {
      lat: 50.02486165031606,
      lng: 14.357799678820813,
    },
  ]

  const marker = new google.maps.Marker({
    position: centerR,
    icon: './img/slivinec.png', // need update
    map,
  })

  const polygon = new google.maps.Polygon({
    map: map,
    paths: polygonCoordinates,
    strokeColor: 'gray',
    fillColor: 'gray',
    fillOpacity: 0.4,
    draggable: false,
    editable: false,
  })
}
