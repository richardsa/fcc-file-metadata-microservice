'use strict';

var path = process.cwd();
var multer  = require('multer');
//var SearchHandler = require(path + '/app/controllers/searchHandler.js');


module.exports = function(app, passport) {
	var upload = multer({ dest: 'uploads/' });
//  var searchHandler = new SearchHandler();

  app.route('/')
    .get(function(req, res) {
      res.sendFile(path + '/public/index.html');
    });
    
    //app.route('/api/fileanalyse')
    app.post('/', upload.single('document'), function (req, res, next) {
      console.log("success");
      var testing = req.file.size;
      console.log(req.file.size);
      //console.log(req);
      console.log(testing);
      res.json({success: true});
  // req.file is the `avatar` file 
  // req.body will hold the text fields, if there were any 
});
/*  app.route('/api/latest/imagesearch/')
    .get(searchHandler.getHistory);


  app.route('/api/search/:searchTerm')
    .get(searchHandler.getClean);*/

};