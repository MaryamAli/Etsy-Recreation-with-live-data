'use strict';

(function () {

  console.log('It Works!');
})();

  // let etsyURL = 'https://api.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop';

  // let url = 'http://jsonp.afeld.me/' + '?url=' + etsyURL;

  // $.getJSON(url)
  //   .then( function (etsy) {
  //     console.log(etsy);
  //   });

  






  // let etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop';

  // $.ajax({
  //   url: etsyURl,
  //   dataType: 'jsonp'
  //   method: 'get'
  // }).then (function (response) {
  //   console.log(response);
  // });

// let etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=scarf&includes=Images,Shop';

// $.ajax({
//   url: etsyURL,
//   dataType: 'jsonp',
//   method: 'get'
// }).then (function (etsy) {
//   console.log(etsy);
// });

(function (){

let templateString = $('#itemTemplate').text();

let templateFunction = _.template(templateString);
let etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=scarf&includes=Images,Shop';

$.ajax({
  url: etsyURL,
  dataType: 'jsonp',
  method: 'get'
}).then (function (response) {
  // console.log(response);
  var itemHTML = templateFunction(item);
  $('.mainContentItems').append(itemHTML);
});

});


