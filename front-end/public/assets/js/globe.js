window.onload = () => {
    var canvas = document.getElementById('globe');
    var planet = planetaryjs.planet();
    // You can remove this statement if `world-110m.json`
    // is in the same path as the HTML page:
    var autorotate = function(degreesPerTick) {
        return function(planet) {
            planet.onDraw(function() {
                var rotation = planet.projection.rotate();
                rotation[0] += degreesPerTick;
                if (rotation[0] >= 180) rotation[0] -= 360;
                planet.projection.rotate(rotation);
            });
        };
    };



    planet.loadPlugin(planetaryjs.plugins.earth({
        topojson: { file:   '/assets/js/world-110m.json' },
        oceans:   { fill:   '#091946' },
        land:     { fill:   '#0C225E' },
        borders:  { stroke: '#0C225E' }
    }));
    // Make the planet fit well in its canvas
    planet.loadPlugin(planetaryjs.plugins.pings());
    // The `zoom` and `drag` plugins enable
    // manipulating the globe with the mouse.

    planet.projection.scale(canvas.width / 2).translate([canvas.width / 2, canvas.height / 2]);    
    
    var colors = ['red', 'yellow', 'white', 'orange', 'green', 'cyan', 'pink'];
    setInterval(function() {
    var lat = Math.random() * 170 - 85;
    var lng = Math.random() * 360 - 180;
    var color = colors[Math.floor(Math.random() * colors.length)];
    planet.plugins.pings.add(lng, lat, { color: color, ttl: 2000, angle: Math.random() * 10 });
    }, 150);

    planet.loadPlugin(planetaryjs.plugins.drag({
    // Dragging the globe should pause the
    // automatic rotation until we release the mouse.
    // onDragStart: function() {
    // this.plugins.autorotate.pause();
    // },
    // onDragEnd: function() {
    // this.plugins.autorotate.resume();
    // }
    }));
    planet.loadPlugin(autorotate(.07));

    planet.draw(canvas); 
}
