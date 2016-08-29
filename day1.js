var http = require('http')
var options = {
  hostname: 'd8688bca.ngrok.io',
  port: 80,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};


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
  	res.setEncoding('utf8');
  	res.on('data', function(chunk){
 
  	});
  	res.on('end', function(){
   	 console.log('No more data in response.');
 	 });
	});
	req.on('error',function(e){
	});
	console.log(JSON.stringify(data));
    req.write(JSON.stringify(data));
	req.end();
  });
});



