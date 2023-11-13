const http = require("http");
const PORT = 5000;
const server = http.createServer((req,res)=>{

    if(req.url == "/"){ //user jodi url home dei
        res.writeHead(200,{"content-type": "text/html"}); //status code, & file type
        res.write("<div><h1>Home</h1><p>This is our home page.</p></div>"); // our html that will be returned.
        res.end(); // sob response end korte hoi. 
    }
    else if(req.url == "/contact"){ //user jodi url home dei
        res.writeHead(200,{"content-type": "text/html"}); //status code, & file type
        res.write("<div><h1>Contact</h1><p>This is our contact page.</p></div>"); // our html that will be returned.
        res.end(); // sob response end korte hoi. 
    }
    else if(req.url == "/about"){ //user jodi url home dei
        res.writeHead(200,{"content-type": "application/json"}); //status code, & file type
        res.write(JSON.stringify({name: "Uttam Kumar Saha"})); // our html that will be returned.
        res.end(); // sob response end korte hoi. 
    }
   // res.end("Hello node js ");
})
server.listen(PORT);
console.log("Server is running on port",PORT);
