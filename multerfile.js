const express = require('express');

const app = express();

const multer = require('multer');

const path = require('path');


const folder="./uploads/";
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,folder);
    },
    filename:(req,file,cb)=>{
        const fileExt=path.extname(file.originalname);
        const fileName=file.originalname.replace(fileExt,"").toLowerCase();
        console.log(fileExt);
        console.log(fileName)
        cb(null,fileName+fileExt);
    },
});


let upload=multer({
    storage:storage,
  
})

app.post('/',upload.single('mukit'),(req,res)=>{
    res.send('File upload succeed');
})

app.listen(port,(err)=>{
    console.log('Listening on port 3000');
})