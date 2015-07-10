 var Proj= require('../models/employee');
var express = require('express');
var router = express.Router();


router.route('/employees')  //change here

   .get(function(req, res) {
  Proj.find({},function(err,data)
	   {
       if(err){console.log("Error "+err);}
	   else{res.send(data);}
       })
	   
})



   .post(function(req, res ) {

var proj = new Proj(req.body);
   proj.Pname = req.body.Pname;
   proj.Department = req.body.Department,
   proj.Technology = req.body.Technology,
   proj.Image = req.body.Image

      
   proj.save(function(err,data) {
    if (err) {
      return res.send(err);
    }
 
    res.send({ message: 'Data Added'});
   

  });

  
});


  
router.route('/employees/:id')
.put(function(req,res){
Proj.findOne({ _id: req.params.id }, function(err) {
  
var proj = new Proj(req.body);
   proj.Pname = req.body.Pname;
   proj.Department = req.body.Department,
   proj.Technology = req.body.Technology,
   proj.Image = req.body.Image
   
		 proj.save(function(err) {
      if (err) {
        return res.send(err);
		
                }
        else
		{ 
              res.json({ message: 'employee updated!' });
		}   
    });
  });
  //res.end();
  
})
  



router.route('/employees/:id')
.delete(function(req, res) {
  Proj.remove({
    _id: req.params.id
  }, function(err) {
    if (err) {
      return res.send(err);
    }
 
    res.json({ message: 'Successfully deleted' });
  });
  
});



module.exports = router;
