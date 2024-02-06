let htp = require('http');
let fs = require('fs');

htp.createServer(function(req,res)
{
       if(req.url=='/')
       {
         res.writeHead(200,{'Content-Type':'text/html'});
         res.write('Welcome To HOME page...');
         res.end();
       }
       else if(req.url=='/about')
       {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('Welcome To About page...');
        res.end();
       }
       else if(req.url=='/contact')
       {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('Welcome To Contact page...');
        res.end();
       }
       else if(req.url=='/file-write')
       {
          fs.writeFile('demo.txt','Hello OstadWorld',function(err)
          {
             if(err)
             {
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write('Failed to write and create Demo.txt..');
                res.end();
             }
             else
             {
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write('Succeed to write and create Demo.txt..');
                res.end();
             }
          })
        
       }
}).listen(5500,()=>{
    console.log("Successfully run the server 5500");
});

