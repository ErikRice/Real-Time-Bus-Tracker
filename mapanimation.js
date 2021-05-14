
mapboxgl.accessToken = 'pk.eyJ1IjoiZXJpa21yIiwiYSI6ImNrb2dqenAzdzBubGEycG85ZXZzbWo2Z2sifQ.OYxF1JuUvwMibB4ZIFFcKQ'

const map = new mapboxgl.Map({
    container: "map",
    style: 'mapbox://styles/erikmr/ckojfbey845m417o8heec8r5m',
    center: [-71.09355834, 42.358865839],
    zoom: 12
});

const busElement = document.createElement('div');
    busElement.className = 'marker';

const bus = new mapboxgl.Marker(busElement)
    .setLngLat([-71.09355834, 42.358865839])
    .addTo(map);


async function run(){
    const location = await getBusLocations();
    console.log(Date());
    console.log(location);
    bus.setLngLat(location);
    setTimeout(run, 12000);
};

async function getBusLocations(){
    const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
    const response = await fetch(url);
    const json = await response.json();
    const busStop = json.data;
        for (let i = 0; i < busStop.length; i++){
            const longitude = busStop[i].attributes.longitude;
            const latitude = busStop[i].attributes.latitude;
            const currentLocation = [longitude, latitude];
            return currentLocation;
        };
};


