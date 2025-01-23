/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// Initialize and add the map

let map;

function getLocation (countryName){
    var request = new XMLHttpRequest();
    request.open("GET",`https://nominatim.openstreetmap.org/search?format=json&q=${countryName}`);
    request.send();
    request.onload = function() {
        var data = JSON.parse(this.response);
        map.setCenter({lat: Number(data[0].lat), lng: Number(data[0].lon)});
        map.setZoom(5);
    }
    
    }
    
    var egypt = document.getElementById("egypt");
    var germany = document.getElementById("germany");
    var iraq = document.getElementById("iraq");
    
    egypt.addEventListener('click', function(){
        getLocation("Egypt");
    })
    
    germany.addEventListener('click', function(){
        getLocation("Germany");
    })
    
    iraq.addEventListener('click', function(){
        getLocation("Iraq");
    })

async function initMap() {
  // The location of Uluru
  const position = { lat: -25.344, lng: 131.031 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}


initMap();