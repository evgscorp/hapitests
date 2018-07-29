const mainControllerClass = require ('./mymodules/controllers/main/mainController.js');
const Hapi = require('hapi');
//const serverAddress = 'localhost';
const serverPort = 3100;
const server = Hapi.server({ 
    load: { sampleInterval: 3000 },
  //  address: serverAddress,
  //  host: serverAddress,
    port: serverPort,
    app: {version:'1.01', author: 'Y.T.'},
    router: { isCaseSensitive: true, stripTrailingSlash: false }
});

let mainController = new mainControllerClass('Main Page title!', server); 

server.route({
    method: 'GET',
    path: '/{sparam?}',
    handler: function (request, h) {

       if (request.params.sparam!=='favicon.ico'){
        const param = request.params.sparam ?
        encodeURIComponent(request.params.sparam) : 'empty';
        console.log('param=', param);
       }  
        return mainController.body;
    }
});

async function initServer(){
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

initServer();



//server.settings.app