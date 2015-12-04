var http = require('http');

function executeShellScript(string)
{
	var exec = require('child_process').exec, child;
	
	child = exec('touch myFile.txt');
	/*child = exec('cat *.js bad_file | wc -l',
	  function (error, stdout, stderr) {
	    console.log('stdout: ' + stdout);
	    console.log('stderr: ' + stderr);
	    if (error !== null) {
	      console.log('exec error: ' + error);
	    }
	});
	*/
}

var server = http.createServer(function(request, response)
	{
		executeShellScript(request.url);
		console.log('got a request');
		response.write('hi');
		response.end();
	}
);

server.listen(3000);
