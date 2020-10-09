const http = require('http');

var url = require('url');


//creo server
const server = http.createServer(function(req, res){

//prendo url 

var parsedUrl = url.parse(req.url,true);
 
//prendo la parte che mi interessa e la pulisco

var path = parsedUrl.pathname;
var trimmedPath = path.replace(/^\/+|\/+$/g,'');

//prendo stringhe di coda quelle con '?' come oggetto

var quesryString = parsedUrl.query;

//restituisco il metodo

var method = req.method.toLowerCase();

//headers

var headers = req.headers; 

//restituisco una risposta

res.end('rispostaaaaaa\n'); 

//stampo richiesta sul path

console.log('richiesta nel path: '+trimmedPath+' con questo metodo: '+method+'con questi parametri in coda: '+quesryString+'con questi headers'+headers);

});

server.listen(3000, function(){
    console.log('sono un server in ascolto')
});

