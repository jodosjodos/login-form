// // let path=require('path');
// // let http=require('http');
// // let fs=require('fs');
// // let html=path.join(__dirname,'login.html');
// // let css=path.join(__dirname,'login.css');
// // let server=http.createServer(function(req, res){
// //     let filePath=path.join(__dirname,req.url='/'?'login.html':'login.css');
// //     let extname=path.extname(filePath);
// // let contentType= 'text/html';
// // switch(extname){
// //     case '.js':
// //         contentType= 'text/javascript';
// //         break;
// //         case'.css':
// //         contentType='text/css';
// //         break;
        
       
        
// // }
// // fs.readFile(filePath,(err,Content)=>{
// //     if(err){
// //         if(err.code=='ENOENT'){
// //             res.headersSent(404);

// //             res.write('file can\'t be found');
// //             res.end()
// //         }
// //         else{
// //             res.writeHead(500)
// //             res.write('server error');
// //             res.end();
// //         }
// //     }
// //     else{
// //         // let userinput=document.querySelector('#email');
// //         // if(userinput==='jodos2006@gmail.com'){
        
// // res.writeHead(200,{'content-type':contentType})

// // res.end(Content,'utf-8',function(){
// //     //  let email=document.querySelector('#email');
// //     // let password=document.querySelector('#password');
// //     //  let button=document.querySelector('#button');
// //     //  button.addEventListener('click',function(){
// //     //     alert('hey')
// //     //  })
// //     // fs.readFile(__dirname,'login.js',function(err,content){
// //     //     if(err){
// //     //         res.writeHead(500)}
// //     //         else{
                
// //     //         }
// //     // })
// // })
// // }
    
// // })

// // })
// let http=require('http');
// let queryString=require('querystring');
// let server=http.createServer(function(req,res){
//     if(req.method='POST' && req.url==='/submit'){
//         let body='';
//         req.on('data',chunk=>{
//             body+=chunk.toString();
//         });
//         req.on('end',()=>{
//             let data =queryString.parse(body);
//             console.log(data)
//         })
//     }
// else{
//     res.end('404 not found')
// }
// })
// let port=process.env.PORT || 2000;
// server.listen(port,console.log(`server is running at ${port}`))
//correct way
let fs=require('fs');
let express=require('express');
let path=require('path');
let app=express();
let bodyParser=require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
// reading our initial password and email in user.txt
fs.readFile('user.txt', 'utf8', function(err,fileData){
    if(err){
        console.log(err);
        return
    }
    
        let fileDataObject=JSON.parse(fileData);
// read form data put by user in html
    
    app.get('/',function(req,res){
        res.sendFile(path.join(__dirname,'login.html'));

       
    })
    app.post('/submit',(req,res)=>{
        let formData=req.body;
        //make comparison for dat form
        if(formData.email===fileDataObject.email && formData.password===fileDataObject.password){
            res.sendFile(path.join(__dirname,'success.html'))
        }
        else{
            res.sendFile(path.join(__dirname,'failure.html'))
        }
    })
})
let port=process.env.PORT || 9000;
app.listen(port,()=>{
    console.log(   `your codes are running on port ${port}`);
})