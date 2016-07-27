'use strict';
var twilioAccountSID = '';
var twilioAuthToken = '';
// find twilio account sid and twilio auth token from website control panel
var client = require('twilio')(twilioAccountSID, twilioAuthToken);

module.exports = function(app){

    app.post('/send',function(req, res){
        // Check API for details on JSON
        console.log(req.body);
        client.sendSMS({
            to: 'Number from POST',
            from: 'Twilio Number',
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

}