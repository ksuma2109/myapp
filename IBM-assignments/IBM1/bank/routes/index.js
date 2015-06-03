var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.post('/validate_user', function(req, res, next) {
	var user=req.body.username;
	var pass=req.body.password;
	if (user=="sid" && pass=="suma"){
		res.redirect("/validate");
	}
	else{
		res.send("Wrong email and pass combination");
	}
});

/* GET validate page. */
router.get('/validate', function(req, res, next) {
  var db = req.db;
//  var borrowers = db.get('borrowers');
//  var lenders = db.get('lenders');
    var collection1 = db.get('borrowers');
    var collection2 = db.get('lenders');
    var borro;
    var lend;
    collection1.find({},{},function(e,borrowers){
        var db=req.db;
        var collection2 = db.get('lenders');
        collection2.find({},{},function(e,lenders){
            res.render('validate', {
                lender : lenders[lenders.length-1],
                borrower : borrowers[borrowers.length-1]            
            })
    });   
    });
    // collection2.find({},{},function(e,lenders){
    // 	lend=lenders;
    // });
    // res.render('validate', {
    //     lender : lend[0],
    //     borrower : borro[2]
    // });//  var lender = db.lenders.findOne();
//  console.log(lenders);
//  console.log(lender);
//  res.render('validate.ejs',{"lender":lender,"borrower":borrower});
});


module.exports = router;
