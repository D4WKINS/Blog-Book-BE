import express from 'express'
import fs from'fs'
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const server = express()

//This is an alternative for http.
//Instead using the express library to take care of the http, request & response objects behind the scenes,
//whist creating an express application for you in the process.


// const http = require('http')// similar to import,takes name of a package as a string argument an returns the package
                            //A http package allows us to perform actions on the server

// const fs = require('fs') // Import file System package to interact with files on our server

//fs readFilesync reads the content of a file and returns it to us 
const homePage = fs.readFileSync('./src/index.html')// the content of index.html is store in homepage, therfore homePage is now equal to <h1>Home Page</h1>
const aboutPage = fs.readFileSync('./src/about.html')
const contactPage = fs.readFileSync('./src/contact.html')
const notFoundPage = fs.readFileSync('./src/notfound.html')


server.listen(3000,() =>{ // Port object is defined in the first parameter
    console.log("Server is listening on Port 3000") //executed as soon as the server starts listening for request
})

server.get('/',(req,res) =>{
    console.log(__dirname,'index.html')
    res.sendFile(path.resolve(__dirname,'index.html'))
})

server.get("/about",(req, res)=>{
    res.json({ 
        name:'Greg Lim'
    })
})

//When a request comes in e.g (http://localhost:3000/about) 
//We handle the request using the req object in the function below
// and within the codeblock decide how to respond to a given request
// const server = http.createServer((req,res) =>{
//     // Creates a server from the http package which takes a callback function as a parameter
//     // that is called only when the createServer function has completed.
//     // When it is called two objects are provided, the request from the browser, and the response to the browser 
//     //

//     // console.log(req.url) //This shows a forward slash "/" because no request has been made
//     // res.end('Hello Node.js')//res.end() will end the response process with 'Hello node.js in function body. 
// if(req.url === '/about')
//     res.end(aboutPage) // the text from about.html is logged to function body 

//     else if(req.url === '/contact')

//         res.send(contactPage)

//         else if(req.url === '/')
      
//         res.end(homePage)
        
//         else{
//             res.writeHead(404) //writeHead, writes the status of the request
//             res.end(notFoundPage)
//         }
// })

// server.listen(3000)//The server.listen() method creates a listener on the specified port or path.
                   //Allows server to take requests on port 3000


//res.end allows us to end a response without sending any data

//--------------------------------------------------------------------

//res.send on the other hand allows us to send multiple types of data

// res.send() will send the HTTP response. Its syntax is,
// res.send([body])

//The body parameter can be a Buffer object, a String, an object, or an Array.

//e.g
// res.send(new Buffer('whoop'));
// res.send({ some: 'json' });
// res.send('<p>some html</p>');
// res.status(404).send('Sorry, we cannot find that!');
// res.status(500).send({ error: 'something blew up' });