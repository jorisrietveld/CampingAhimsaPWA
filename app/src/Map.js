/*
   Created by: Joris Rietveld <jorisrietveld@gmail.com>
   Created on: 14-08-2020 19:06
   Licence: GPLv3 <https://www.gnu.org/licenses/gpl-3.0.en.html>
*/

export function InitMap(){
  var AhimsaMap = L.map('AhimsaMap').setView([51.505, -0.09], 13);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
  }).addTo(mymap);

  return AhimsaMap
}