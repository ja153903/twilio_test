'use strict';
// from jaime@gooroo.com twilio test account ids
// for gooroo implementation, create new account with beokay email.
var twilioAccountSID = 'AC9aba4039adecc0d709ecf602c02978ef';
var twilioAuthToken = 'bee04ad04fe17552d91a83c846d9b5fe'; 

// find twilio account sid and twilio auth token from website control panel
// require twilio module and REST client
var client = require('twilio')(twilioAccountSID, twilioAuthToken);


module.exports = function(app){
    /*
    app.post('/send',function(req, res){
        // Check API for details on JSON
        console.log(req.body);
        client.messages.create({
            to: 'Number from POST',
            from: '+12013545945',
            body: 'link to both app store and google play store'
        }, function(err, message){
            if(!err){
                console.log('SID is ' + message.sid);
                console.log('Message sent on ' + message.dateCreated);
            }
            else{
                console.log('There is an error somewhere. Try again.');
            }
        })
    });
    */
    client.sms.messages.create({
        to: '+19174365682',
        // to use actual twilio from number, we have to pay for that service.
        from: '+15005550006',
        body: 'Download Gooroo from the App Store: itunes.apple.com/us/app/gooroo-tutor/id1053933438?mt=8'
    }, function(err, message){
        if (err){
            console.log(err);
        }
        else{
            console.log(message.sid);
        }
    });
}