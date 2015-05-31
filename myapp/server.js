var express = require('express');
var app = express();
var fs = require('fs');

var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}));


app.get('/index.html', function (req, res) {
   res.sendFile("/Users/apple/myapp/index.html");
})

app.post('/process_post', function (req, res) {

   

   var file = "/Users/apple/myapp/public/images/"+req.files.file.name;
   var ID = "/Users/apple/myapp/public/ID/"+req.files.ID.name;

   fs.readFile(req.files.file.path, function (err,data) {
      fs.writeFile(file, data, function (err) {
        if (err){
          console.log(err);
        } else{
          response = {
              message: 'File uploaded successfully',
              filename:req.files.file.name

          };
        }

        console.log(response);
        res.end(JSON.stringify(response));

      });
    });

   fs.readFile(req.files.ID.path, function (err,data) {
      fs.writeFile(ID, data, function (err) {
        if (err){
          console.log(err);
        } else{
          response = {
              message: 'File uploaded successfully',
              filename:req.files.ID.name

          };
        }

        console.log(response);
        res.end(JSON.stringify(response));

      });
   });

   // Prepare output in JSON format
   
   
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})