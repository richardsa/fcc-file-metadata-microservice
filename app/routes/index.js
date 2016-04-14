'use strict';

var path = process.cwd();
var multer = require('multer');
var SizeHandler = require(process.cwd() + '/app/controllers/sizeHandler.server.js');

module.exports = function(app, passport) {
  
  var upload = multer({
    dest: 'uploads/'
  });
  
  var sizeHandler = new SizeHandler();
  app.route('/')
    .get(function(req, res) {
      res.sendFile(path + '/public/index.html');
    });

  app.route('/api/fileanalyse')
    .get(sizeHandler.getSize);
  
  app.post('/api/fileanalyse', upload.single('document'), function(req, res, next) {
    var size = req.file.size;
    sizeHandler.updateSize(size);
    res.end("Your file size is " + size + " bytes.");
  });

};