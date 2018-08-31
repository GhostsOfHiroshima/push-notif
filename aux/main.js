var webPush = require('web-push');

var pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/d41flkS8Dx0:APA91bFmu5U-eRdrL88SMF0L-VKMgqgUjeBLA3haCz4XBvJXhMTXgPOw3Rq3tYbDuHlVaVWfa6uL5iLd-wJz3SI3tFtP7n_nMnZVvm8aOorfcTG0JcwpKgjiylmudt4MrTscqHdGDK27","expirationTime":null,"keys":{"p256dh":"BG-yiGh_vQQFL5rOuHF2IimmswD3QeJLncUwihytqf2vkVlSojY8VRVdLpcKt5HtyaDdrOn7L52OFvH900cDSlo","auth":"ykwBHHLoZ6c6momvEucwig"}};

var payload = 'Here is a payload!';

webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    'BPCozxHJ_Tx_7QM_KLHpIceiQCxq5ePgRyEWzVPqSq6QdjYzO4vwfQwopag-Mr1Znvcgbr--WNoIvDXkVV-cB2U',
    'yYFub4ivvc-sthpaInnR4xBecPoiJ5Jn9aQ0nBw_9RY'
);

webPush.sendNotification(
    pushSubscription,
    payload
).then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
})