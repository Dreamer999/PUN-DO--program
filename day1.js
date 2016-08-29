var http = require('http')
var options = {
  hostname: 'd8688bca.ngrok.io',
  port: 3000,
  path: '/',
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-from-urlencoded'
  }
};

console.log('start');
// http.get("http://64cae4dc.ngrok.io",function()
// {
//         console.log("check");
// });
var SerialPort = require("serialport").SerialPort
var serialPort = new SerialPort("/dev/ttyS0", {
  baudrate: 57600
});



serialPort.on("open", function () {
  serialPort.on('data', function(data) {
    // Receive data from Arduino chip (32U4)
    var req = http.request(options, function(res){
  	
	});
	req.on('error',function(e){
	});
	console.log(JSON.stringify(data));
    req.write("JSON");
	req.end();
  });
});



