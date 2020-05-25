if(!Detector.webgl){
    Detector.addGetWebGLMessage();
} else {

    var container = document.getElementById('container');
    var globe = new DAT.Globe(container);
    var i, tweens = [];
    
    var settime = function(globe, t) {
        return function() {
        new TWEEN.Tween(globe).to({time: 0},0).easing(TWEEN.Easing.Cubic.EaseOut).start();
        };
    };
    
    var xhr;
    TWEEN.start();
    
    xhr = new XMLHttpRequest();
// TODO: FIND ANOTHER DATA SET WITH LOTS OF LAT/LONG, 
// todo: THIS ONE MIGHT STILL WORK IF I DIG IN TO THE STATES/CITIES MORE, higher density data
// todo: make a couple calls and cycle through the data to animate
    xhr.open('GET', 'https://covid-api.com/api/reports?date=2020-04-16', true);
    xhr.onreadystatechange = function(e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                window.data = data;
                let deaths = [];
                for(let i = 0; i < data.data.length; i++){
                    deaths.push(parseFloat(data.data[i].region.lat));
                    deaths.push(parseFloat(data.data[i].region.long));
                    deaths.push((data.data[i].deaths + 1) / 10000);
                }

                globe.addData(deaths, {format: 'magnitude', name: 'Deaths', animated: true});
                globe.createPoints();
                settime(globe,0)();
                globe.animate();
                // document.body.style.backgroundImage = 'none'; // remove loading
            }
        }
    };
    xhr.send(null);
}