var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/lender', function(req, res, next) {
  res.render('lender', { title: 'Express' });
});

router.get('/borrower', function(req, res, next) {
  res.render('borrower', { title: 'Express' });
});

router.post('/borrower_post', function(req, res, next) {
	//var firstn = req.body.firstname;
	//console.log(firstn);
	//res.send(firstn);
    var db = req.db;
    var collection = db.get('borrowers');

	collection.insert(req.body, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send(err);
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            //res.location("index");
            // And forward to success page
            //res.redirect("index");
            console.log("success");
              res.send("Yo! "+req.body.firstname+".");
        }

  });

  //res.render('index', { title: 'Express' });
    });    

router.post('/lender_post', function(req, res, next) {
  //var firstn = req.body.firstname;
  //console.log(firstn);
  //res.send(firstn);
    var db = req.db;
    var collection = db.get('lenders');

  collection.insert(req.body, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send(err);
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            //res.location("index");
            // And forward to success page
            //res.redirect("index");
            console.log("success");
              res.send("Yo! "+req.body.firstname+".");

        }
  });
  //res.render('index', { title: 'Express' });
    });    

module.exports = router;
