/*
 * This is a custom handler to check if someone has control clicked the map and print the location
 */
L.CtrlClickHandler = L.Handler.extend({
    addHooks: function() {
      L.DomEvent.on(document, 'click', this._captureClick, this);
    },
  
    removeHooks: function() {
      L.DomEvent.off(document, 'click', this._captureClick, this);
    },
  
    _captureClick: function(event) {
      if (event.ctrlKey) {
        // translate mouse event to lat/lng (note: this function calls
        // Leaflet's `mouseEventToContainerPoint()` followed by 
        // `containerPointToLayerPoint()` and finally `layerPointToLatLng()`)
        var latlng = map.mouseEventToLatLng(event);
        console.log('Handler detected CTRL + click at ' + latlng);
      }
    }
  });
  
  // add this to all maps
  L.Map.addInitHook('addHandler', 'ctrlClick', L.CtrlClickHandler);
  
  var map = L.map('mapid', {
    ctrlClick: true
  }).setView([51.505, -0.09], 13);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  // capture CTRL + click directly (without a handler)
  map.on('click', function(e) {
    if (e.originalEvent.ctrlKey) {
      console.log('CTRL + click at ' + e.latlng);
    }
  });
  