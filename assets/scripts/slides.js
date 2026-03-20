var index = 0;
var locations;
var thumbnails;
var canvas;



function start() {
    canvas = document.getElementsByClassName('slide-image')[0];
    if (typeof images !== 'undefined') {
        if (images.length > 1) {
            addMap();
        } else {
            document.getElementsByClassName('next')[0].style.display = 'none';
            document.getElementsByClassName('previous')[0].style.display = 'none';
        }
        show();
    }
}

function show() {
    canvas.src = images[index];
    if (typeof locations == 'object') {
        for (var key = 0; key < locations.length; key++) {
            locations[key].classList.remove('active');
        }
        locations[index].classList.add('active');
    }
    
    // Thumbnails
    /*for (var key = 0; key < thumbnails.length; key++) {
        thumbnails[key].classList.remove('active');
    }
    thumbnails[index].classList.add('active');*/
}

function next() {
    if (index < images.length - 1) {
        index++;
    } else {
        index = 0;
    }
    show();
}

function previous() {
    if (index > 0) {
        index--;
    } else {
        index = images.length - 1;
    }
    show();
}

/*function thumbnailClick(newIndex) {
    index = newIndex;
    show();
}*/

function addMap() {
    var map = document.createElement('div');
    map.classList.add('slides-map');
    locations = [];
    for (var key = 0; key < images.length; key++) {
        var location = document.createElement('div');
        location.classList.add('slides-location');
        location.name = key;
        location.addEventListener('click', function() {
            index = this.name;
            show();
        });
        locations.push(location);
        map.appendChild(location);
    }
    var slideshow = document.getElementsByClassName('slides')[0];
    slideshow.appendChild(map);
    /*thumbnails = document.getElementsByClassName('slide-thumbnail');*/
}

window.onload = start();

setTimeout(autonextslide, 5000);

function autonextslide() {
  next();
  setTimeout(autonextslide,5000);
}