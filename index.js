const gpstracker = require("gpstracker");
const mongodb = require('./config/mongodb');
const Last_location = require('./_molecules/last-location-model');

const port = 8044;

const server = gpstracker.create()
    .listen(port, () => {
        console.log('listening your gps trackers on port', port);
    });

server.trackers.on("connected", (tracker) => {

    console.log("tracker connected with imei:", tracker.imei);

    tracker.on("help me", () => {
        console.log(tracker.imei + " pressed the help button!!");
    });

    tracker.on("position", (position) => {
        const query = { imei: tracker.imei };
        const mod = {
            $set: {
                lat: position.lat,
                lng: position.lng,
                speed: position.speed
            }
        }
        console.log(position)
        Last_location.update(query, mod)
            .then((last) => console.log(last))
            .catch((err) => console.log(err))

        tracker.trackEvery(10).seconds();
    });
})