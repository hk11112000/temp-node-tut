const http = require('http');

//Create server
const server = http.createServer((request,response)=>{
    if(request.url === '/'){
        response.end('Welcome to our home page');  
    }
    if(request.url === '/about'){
        response.end('Welcome to our about page');
    }
        response.write(`404`)
})
server.listen(5000)

