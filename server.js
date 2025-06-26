import http from "http";
import url from "url";
import fs from "fs";
import path from "path";
import mimeType from "mime-types";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 

const port = 8080

const server = http.createServer((req, res) => {

    let inUrl = url.parse(req.url, true);

    let pathName = inUrl.path.replace(/^\/+|\/+$/g, "");

    if (pathName == ""){
        pathName = "index.html";
    }

    console.log ("requested path " + pathName);

    let file = path.join(__dirname + "/public/" + pathName);

    fs.readFile( file, function(err, content){
        if  (err) {
            console.log("NOT FOUND " + file);
            res.statusCode = 404;
            res.end();
        } else {
            console.log("Returning " + pathName);
            res.setHeader("X-Content-Type-Options", "nonsiff");
        const mime = mimeType.lookup(pathName);
        res.writeHead(200, {"Content-Type" : mime});

        res.end(content);
            
        }
    });
});
server.listen(port , console.log(`Server is listening on "http://localhost/${port}"`));