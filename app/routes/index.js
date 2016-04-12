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
    app.post('/api/fileanalyse', upload.single('document'), function (req, res, next) {
      console.log("success");
      var testing = req.file.size;
      console.log(req.file.size);
      //console.log(req);
      console.log("FILE SIZE: " +  testing);
      var solution = {};
      solution.FILE_SIZE = testing;
       
      res.json(solution);

});

};