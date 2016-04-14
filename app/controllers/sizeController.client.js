'use strict';

(function() {
  var addButton = document.querySelector('.btn-add');
  var deleteButton = document.querySelector('.btn-delete');
  var clickNbr = document.querySelector('#click-nbr');
  var apiUrl = 'https://file-metadata-microservice-richardsa.c9users.io/api/fileanalyse';

  function ready(fn) {
    if (typeof fn !== 'function') {
      return;
    }

    if (document.readyState === 'complete') {
      console.log('ready');
      return fn();
    }

    document.addEventListener('DOMContentLoaded', fn, false);
  }

  function ajaxRequest(method, url, callback) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        callback(xmlhttp.response);
      }
    };

    xmlhttp.open(method, url, true);
    xmlhttp.send();
  }

  function updateClickCount(data) {
    
    var clicksObject = JSON.parse(data);
    console.log(clicksObject);
    clickNbr.innerHTML = clicksObject.FILE_SIZE
  }

   
 // ajax function from https://codeforgeek.com/2014/11/ajax-file-upload-node-js/
  $(document).ready(function() {

     $('#uploadForm').submit(function() {
        $("#status").empty().text("File is uploading...");
        $(this).ajaxSubmit({

            error: function(xhr) {
        status('Error: ' + xhr.status);
            },

            success: function(response) {
        $("#status").empty().text(response);
        ready(ajaxRequest('GET', apiUrl, updateClickCount));
                console.log("empty" + response);
            }
    });
        //Very important line, it disable the page refresh.
    return false;
    })    
});

})();