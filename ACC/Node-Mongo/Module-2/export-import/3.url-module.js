const http = require("http");
const url = require('url');
const PORT = 5000;
const server = http.createServer((req,res)=>{

    const address_url = 'http://localhost:5000/contact?name=uttam&country=bangladesh';
    const parsedUrl = url.parse(address_url,true);
    const objectQuery = parsedUrl.query;
    console.log(objectQuery);
   // console.log(parsedUrl);
   // res.end("Hello node js ");
})
server.listen(PORT);
console.log("Server is running on port",PORT);
