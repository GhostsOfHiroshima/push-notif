var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Push notification test'});
});

// router.get('/sw-offline', function(req, res){
//   res.render('sw-offline', {layout:null});
// });

router.get('/sw-google-offline', function (req, res) {
    res.render('sw-google-offline', {layout: null});
});

router.get('/sw-google-push', function (req, res) {
    res.render('sw-google-push', {layout: null});
});

module.exports = router;


var webPush = require('web-push');

var subscription = undefined;
var subscription_count = 0;

/* Subscribe */
router.post('/subscribe', function (req, res, next) {
    subscription = req.body;
    subscription_count = 0;
    res.send({status: 'updated'});
});

var payload = 'Here is a payload!';

webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    'BPCozxHJ_Tx_7QM_KLHpIceiQCxq5ePgRyEWzVPqSq6QdjYzO4vwfQwopag-Mr1Znvcgbr--WNoIvDXkVV-cB2U',
    'yYFub4ivvc-sthpaInnR4xBecPoiJ5Jn9aQ0nBw_9RY'
);

function push_sender() {
    if (subscription === undefined) return console.log('no subscription yet');
    if(subscription_count === 5) return;      // don't send, only 5 messages to user
    subscription_count += 1;
    webPush.sendNotification(
        subscription,
        payload
    ).then(function (data) {
        console.log('push notification sent from server', data);
    }).catch(function (err) {
        console.log('push notification from server error', err);
    })
}

/**
 * Regular sending of notification every 10 seconds (if not undefined)
 */
push_sender();
setInterval(function () {
    push_sender();
}, 5000);

