'use strict';

(function() {
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
          ready(ajaxRequest('GET', apiUrl));

        }
      });
      //Very important line, it disable the page refresh.
      return false;
    })
  });

})();