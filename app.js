// function sayHello(name){
//     console.log("hello " + name)
    
// } 
// sayHello('Rosine Bae');

//  function messsage(){
//     console.log('hello world');
// }
// messsage('gaju')

var url='http://mylogger.io/log'
function log(messsage){
    console.log(messsage);
}
module.exports.log=log;



var http=require("http");
    res=require('res');
    port=4009;
    http.createServer(function(req,res){
        // res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('hello my baie rosine ')

    })
    .listen(4009);