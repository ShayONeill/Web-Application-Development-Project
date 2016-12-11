/**
 *
 * FUNCTIONS for our web app
 * LIBRARY http://api.jquery.com/
 **/


/*
 * To use the function to retrieve data, please type data.objectname[0].attribute
 */
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



$.getJSON('/modules/Prices.json', function(data) {
     $.each(data, function (index, value) {
     for (i = 0; i < value.length; i++) { 
     $("#box2").append(
      '<div class="col-md-6"><div class="card">' +
  '<img class="card-img-top thumbnail" style="width:200px; height:150px;" src="'+JSON.stringify(value[i].image).replace('"', '').replace('"', '')+'" alt="Image">' +
  '<div class="card-block">' +
    '<h4 class="card-title">'+JSON.stringify(value[i].productname).replace('"', '').replace('"', '')+'</h4>' +
    "<p class='card-text'>"+JSON.stringify(value[i].summary).replace('"', '').replace('"', '')+"</p>" +
    '<a href="/editproduct/'+JSON.parse(value[i].id)+'" class="btn btn-primary">Edit Product </a>' +
 ' </div>' + 
'</div> </div> '
       );
     }
    });
});

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



var url = window.location.href;

if (url.search("/success") >= 0) {
alert("Product purchased");
window.location.replace("/");
} 
