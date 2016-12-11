/**
 *
 * FUNCTIONS for our web app
 * LIBRARY http://api.jquery.com/
 **/


/*
 * To use the function to retrieve data, please type data.objectname[0].attribute
 */
function DisplayPrices() {
$.getJSON('/modules/Prices.json', function(data) {
     $.each(data, function (index, value) {
     for (i = 0; i < value.length; i++) { 
     $("#box1").append(
      '<div class="col-md-6"><div class="card">' +
  '<img class="card-img-top thumbnail" style="width:200px; height:150px;" src="'+JSON.stringify(value[i].image).replace('"', '').replace('"', '')+'" alt="Image">' +
  '<div class="card-block">' +
    '<h4 class="card-title">'+JSON.stringify(value[i].productname).replace('"', '').replace('"', '')+'</h4>' +
    "<p class='card-text'>"+JSON.stringify(value[i].summary).replace('"', '').replace('"', '')+"</p>" +
    '<a href="/buyproduct/'+JSON.parse(value[i].id)+'" class="btn btn-primary">Buy product for '+ JSON.stringify(value[i].price).replace('"', '').replace('"', '') +'</a>' +
 ' </div>' + 
'</div> </div> '
       );
     }
    });
});
}

function EditProductsList() {
$.getJSON('/modules/Prices.json', function(data) {
     $.each(data, function (index, value) {
     for (i = 0; i < value.length; i++) { 
     $("#box2").append(
      '<div class="col-md-6"><div class="card">' +
  '<img class="card-img-top thumbnail" style="width:200px; height:150px;" src="'+JSON.stringify(value[i].image).replace('"', '').replace('"', '')+'" alt="Image">' +
  '<div class="card-block">' +
    '<h4 class="card-title">'+JSON.stringify(value[i].productname).replace('"', '').replace('"', '')+'</h4>' +
    "<p class='card-text'>"+JSON.stringify(value[i].summary).replace('"', '').replace('"', '')+"</p>" +
    '<a href="/viewedit?id='+JSON.parse(value[i].id)+'" class="btn btn-primary">Edit Product </a>' +
 ' </div>' + 
'</div> </div> '
       );
     }
    });
});
}

function Deleteproducts() {
$.getJSON('/modules/Prices.json', function(data) {
     $.each(data, function (index, value) {
     for (i = 0; i < value.length; i++) { 
     $("#box3").append(
      '<div class="col-md-6"><div class="card">' +
  '<img class="card-img-top thumbnail" style="width:200px; height:150px;" src="'+JSON.stringify(value[i].image).replace('"', '').replace('"', '')+'" alt="Image">' +
  '<div class="card-block">' +
    '<h4 class="card-title">'+JSON.stringify(value[i].productname).replace('"', '').replace('"', '')+'</h4>' +
    "<p class='card-text'>"+JSON.stringify(value[i].summary).replace('"', '').replace('"', '')+"</p>" +
    '<a href="/deleteproduct/'+JSON.parse(value[i].id)+'" class="btn btn-primary">Delete Product </a>' +
 ' </div>' + 
'</div> </div> '
       );
     }
    });
});
}
function ViewTransactions() {
$.getJSON('/modules/Transactions.json', function(data) {
     $.each(data, function (index, value) {
     for (i = 0; i < value.length; i++) { 
     $("#box4").append(
      '<div class="col-md-6"><div class="card">' +
  '<img class="card-img-top thumbnail" style="width:200px; height:150px;" src="'+JSON.stringify(value[i].image).replace('"', '').replace('"', '')+'" alt="Image">' +
  '<div class="card-block">' +
    '<h4 class="card-title">'+JSON.stringify(value[i].productname).replace('"', '').replace('"', '')+'</h4>' +
    "<p class='card-text'>"+JSON.stringify(value[i].summary).replace('"', '').replace('"', '')+"</p>" +
 ' </div>' + 
'</div> </div> '
       );
     }
    });
});
}
function displayValues() {
$.getJSON('/modules/Prices.json', function(data) {
     $.each(data, function (index, value) {
        var i = getAllUrlParams().id;
       console.log(i);
     $("#box5").append(
      '<form id="addForm" action="/viewedit/submit" method="post">' +
    '</br>' +
   ' <div class="Add-form">' +
    '<label for="vendor">Vendor</label>' +
   ' <input class="form-control" type="text" value="'+ value[i].vendor +'" id="vendor" name="vendor">' +
  '</div>' +
  '</br>' +
    '<div class="Add-form">' +
    '<label for="productname">Product Name</label>' +
    '<input class="form-control" type="text" value="'+ value[i].productname +'" id="productname" name="productname">' +
  '</div>' +
 ' </br>' +
    '<div class="Add-form">' +
    '<label for="price">Product Price</label>' +
    '<input class="form-control" type="text" value="'+ value[i].price +'" id="price" name="price">' +
  '</div>' +
'</br>' +
  ' <div class="Add-form">' +
    '<label for="summary">Produt Details</label>' +
    '<input class="form-control" id="summary" value="'+ value[i].summary +'" rows="3" name="summary"></input>' +
  '</div>' +
'</br>' +
   '<div class="Add-form">' + 
    '<label for="summary">Produt Image</label>' +
    '<input class="form-control" id="image" value="'+ value[i].image +'" rows="3" name="image"></input>' +
  '</div>' +
'</br>' +
 '<input type="hidden" id="id" name="id" value="'+ i +'">'+      
 ' <div class="Add-form">' +
 '   <label class="form-check-label">' +
  '    <input type="checkbox" class="form-check-input">' +
   '   Check when ready to submit!, please check the content before.' +
   ' </label>' +
 ' </div>' +
'</br>' +
 ' <button type="submit" class="btn btn-primary" name="submit">Submit</button>' +
'</form>'
       );
    });
});
}




function getAllUrlParams(url) {

  // get query string from url (optional) or window
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

  // we'll store the parameters here
  var obj = {};

  // if query string exists
  if (queryString) {

    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split('#')[0];

    // split our query string into its component parts
    var arr = queryString.split('&');

    for (var i=0; i<arr.length; i++) {
      // separate the keys and the values
      var a = arr[i].split('=');

      // in case params look like: list[]=thing1&list[]=thing2
      var paramNum = undefined;
      var paramName = a[0].replace(/\[\d*\]/, function(v) {
        paramNum = v.slice(1,-1);
        return '';
      });

      // set parameter value (use 'true' if empty)
      var paramValue = typeof(a[1])==='undefined' ? true : a[1];

      // (optional) keep case consistent
      paramName = paramName.toLowerCase();
      paramValue = paramValue.toLowerCase();

      // if parameter name already exists
      if (obj[paramName]) {
        // convert value to array (if still string)
        if (typeof obj[paramName] === 'string') {
          obj[paramName] = [obj[paramName]];
        }
        // if no array index number specified...
        if (typeof paramNum === 'undefined') {
          // put the value on the end of the array
          obj[paramName].push(paramValue);
        }
        // if array index number specified...
        else {
          // put the value at that index number
          obj[paramName][paramNum] = paramValue;
        }
      }
      // if param name doesn't exist yet, set it
      else {
        obj[paramName] = paramValue;
      }
    }
  }

  return obj;
}

var url = window.location.href;

if (url.search("/success") >= 0) {
alert("Product purchased");
window.location.replace("/");
} 
