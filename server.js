var express = require('express')
  , request = require('request')
  , util = require('util')
  , packagejson = require('./package.json')
  ;

var app = express();

app.get('/:token/:room', function(req, res, next){

  if (req.params.token && req.params.room) {

    var payload = {
      auth_token: req.params.token,
      room_id: req.params.room,
      from: 'UptimeRobot',
      message: util.format('"%s" (%s) is %s! (%s)', req.query.monitorFriendlyName, req.query.monitorURL, (parseInt(req.query.alertType) === 1 ? 'down' : 'up'), req.query.alertDetails),
      message_format: 'text',
      notify: parseInt(req.query.alertType) === 1,
      color: (parseInt(req.query.alertType) === 1) ? 'red' : 'green'
    };

    request.post({ url:"https://api.hipchat.com/v1/rooms/message", qs:payload, json:true });

  }

  res.json({ name:packagejson.name, version:packagejson.version });

});

app.get('/*', function(req, res, next){
  res.redirect('https://github.com/flesch/uptimerobot-to-hipchat');
});

var server = app.listen(process.env.PORT || 3000, function(){
  console.log('> %s (v%s) listening on port %d', packagejson.name, packagejson.version, server.address().port);
});
