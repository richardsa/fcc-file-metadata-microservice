'use strict';

require('dotenv').load();
var path = process.cwd();
var multer = require('multer');
var clickProjection = {
  '_id': false
};
var size; 

var solution = {};

function SizeHandler() {
  var Size = require('../models/size.js');
  var upload = multer({
    dest: 'uploads/'
  });

  this.getSize = function(req, res) {

    Size.collection.findOne({}, clickProjection, function(err, result) {
      if (err) {
        throw err;
      }

      if (result) {
        console.log(result);
        res.json(result);


      } else {
        size = 0;
        Size.collection.insert({
          'FILE_SIZE': 0
        }, function(err) {
          if (err) {
            throw err;
          }
          Size.findOne({}, clickProjection, function(err, doc) {
            if (err) {
              throw err;
            }

            res.json(doc);
          });

        });
      }
    });
  };

  this.updateSize = function(req, res) {
    Size.collection.findOne({}, clickProjection, function(err, result) {
      if (err) {
        throw err;
      }
        Size.collection.findAndModify({}, {
          '_id': 1
        }, {

          'FILE_SIZE': req

        }, function(err, updatedResult) {
          if (err) {
            throw err;
          }
          console.log("file size " + updatedResult.value.FILE_SIZE);
          var size = updatedResult.value.FILE_SIZE;
          
          solution.FILE_SIZE = updatedResult.value.FILE_SIZE;
          console.log(solution);
          return solution;
          
        });



      });
};

}

module.exports = SizeHandler;