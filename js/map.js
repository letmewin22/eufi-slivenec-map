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
      lat: 50.024434295065134,
      lng: 14.356075934809883,
    },
    {
      lat: 50.02464813311099,
      lng: 14.355855993670662,
    },
    {
      lat: 50.025433908917115,
      lng: 14.357821136492932,
    },
    {
      lat: 50.02521662799686,
      lng: 14.357965975779736,
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
