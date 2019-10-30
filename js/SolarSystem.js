let a = document.getElementById("body");
let b =  document.getElementById("label");
let mercury = document.getElementById("mercury");
let venus = document.getElementById("venus");
let planet = document.getElementById("planet");
let moon = document.getElementById("moon");
let mars = document.getElementById("mars");
let jupiter = document.getElementById("jupiter");
let saturn = document.getElementById("saturn");
let uranus = document.getElementById("uranus");
let neptune = document.getElementById("neptune");
let g = false;
let year = 0;

a.onload= function() {
    let start = Date.now();
    var i = 0;
    let a = 1;
    let x;
    let y;
    let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        planet.style.left = Math.cos(timePassed * 0.0044 * a) * (-7) + 1.45 + 'em';
        planet.style.top = Math.sin(timePassed * 0.0044 * a) * (7) + 'em';
        y = parseInt(planet.style.top.substr(0,3), 10);
        if(y > 0 && g) //"1.0002em"
        {
            i++;
            b.innerHTML = i;
            g = false;
        }
        if(y < 0) //"1.0002em"
        {
            g = true;
        }
        if(i===100)
            clearInterval(timer);
       // if(g){
        //   year = timePassed;
         //   g = false;
      //  }

        moon.style.left = Math.cos(timePassed * 0.01 * a) * (-12) + 'px';
        moon.style.top = Math.sin(timePassed * 0.01 * a) * (12) + 'px';
        mercury.style.left = Math.cos(timePassed * 0.018 * a) * (-2) + 2.65 + 'em';
        mercury.style.top = Math.sin(timePassed * 0.018 * a) * (2) + 'em';
        venus.style.left = Math.cos(timePassed * 0.0065 * a) * (-4) + 2.16 + 'em';
        venus.style.top = Math.sin(timePassed * 0.0065 * a) * (4) + 'em';
        mars.style.left = Math.cos(timePassed * 0.0025 * a) * (-10) + 1.055 + 'em';
        mars.style.top = Math.sin(timePassed * 0.0025 * a) * (10) + 'em';
        jupiter.style.left = Math.cos(timePassed * 0.0003635 * a) * (-13) -0.16 + 'em';
        jupiter.style.top = Math.sin(timePassed * 0.0003635 * a) * (13) + 'em';
        saturn.style.left = Math.cos(timePassed * 0.0001514 * a) * (-16) -1 + 'em';
        saturn.style.top = Math.sin(timePassed * 0.0001514 * a) * (16) + 'em';
        uranus.style.left = Math.cos(timePassed * 0.0000523 * a) * (-18) -1.8 + 'em';
        uranus.style.top = Math.sin(timePassed * 0.0000523 * a) * (18) + 'em';
        neptune.style.left = Math.cos(timePassed * 0.0000341 * a) * (-20) -2.46 + 'em';
        neptune.style.top = Math.sin(timePassed * 0.0000341 * a) * (20) + 'em';
    }, 24);
}

/*let a = document.getElementById("body");
let b =  document.getElementById("label");
let mercury = document.getElementById("mercury");
let venus = document.getElementById("venus");
let planet = document.getElementById("planet");
let moon = document.getElementById("moon");
let mars = document.getElementById("mars");
let jupiter = document.getElementById("jupiter");
let saturn = document.getElementById("saturn");
let uranus = document.getElementById("uranus");
let neptune = document.getElementById("neptune");
let g = true;
let year = 0;
// let i

a.onload= function() {
    let start = Date.now();
    var i = 0;
    let a = 10;
    let timePassed = 0;
    let y;

    let timer = setInterval(function() {

            // let timePassed = Date.now() - start;
            planet.style.left = Math.cos(timePassed * 0.00248 * a) * (-7) + 1.45 + 'em';
            planet.style.top = Math.sin(timePassed * 0.00248 * a) * (7) + 'em';
            if (planet.style.left === Math.cos(1 * 0.00248 * a) * (-7) + 1.45 + "em" && planet.style.top === Math.sin(1 * 0.00248 * a) * (7) + "em" ) //"1.0002em"
            {
                i++;
                b.innerHTML = '' + i;
            }
            if (i === 179)
                clearInterval(timer);
            if (g) {
                year = timePassed;
                g = false;
            }

            moon.style.left = Math.cos(timePassed * 0.01 * a) * (-12) + 'px';
            moon.style.top = Math.sin(timePassed * 0.01 * a) * (12) + 'px';
            mercury.style.left = Math.cos(timePassed * 0.004 * a) * (-2) + 2.65 + 'em';
            mercury.style.top = Math.sin(timePassed * 0.004 * a) * (2) + 'em';
            venus.style.left = Math.cos(timePassed * 0.00292 * a) * (-4) + 2.16 + 'em';
            venus.style.top = Math.sin(timePassed * 0.00292 * a) * (4) + 'em';
            mars.style.left = Math.cos(timePassed * 0.00201 * a) * (-10) + 1.055 + 'em';
            mars.style.top = Math.sin(timePassed * 0.00201 * a) * (10) + 'em';
            jupiter.style.left = Math.cos(timePassed * 0.00109 * a) * (-13) - 0.16 + 'em';
            jupiter.style.top = Math.sin(timePassed * 0.00109 * a) * (13) + 'em';
            saturn.style.left = Math.cos(timePassed * 0.0008 * a) * (-16) - 1 + 'em';
            saturn.style.top = Math.sin(timePassed * 0.0008 * a) * (16) + 'em';
            uranus.style.left = Math.cos(timePassed * 0.00057 * a) * (-18) - 1.8 + 'em';
            uranus.style.top = Math.sin(timePassed * 0.00057 * a) * (18) + 'em';
            neptune.style.left = Math.cos(timePassed * 0.00045 * a) * (-20) - 2.46 + 'em';
            neptune.style.top = Math.sin(timePassed * 0.00045 * a) * (20) + 'em';
        timePassed++;
    }, 30);
*/
