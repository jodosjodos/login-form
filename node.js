
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