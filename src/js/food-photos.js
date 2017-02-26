import { flickrToken } from "./token.js";
import $ from 'jquery';
// import {getData} from "./landing.js"



function getData1 (data, callback) {
    $.ajax({
      url: `https://api.flickr.com/services/rest/`,
      dataType: 'json',
    data: {
      method: "flickr.photos.getSizes",
      api_key: "5e869a2e897ce380cedd57cf87d3f036",

       photo_id: "5064475808",
      //  photo_id: "15066440013",
      format: "json",
      nojsoncallback: "1",
    },
     success: foodPhotos
  })
};





getData1()

function foodPhotos (data) {
  console.log (data)
  var url = data.sizes.size[7].source;
  console.log(data.sizes.size[7].source);
  console.log(url);
  $(".food-boxes").append(
    `

    <img src ="${url}">


    `)
}


function getData2 (data2, callback) {
    $.ajax({
      url: `https://api.flickr.com/services/rest/`,
      dataType: 'json',
    data: {
      method: "flickr.photos.getSizes",
      api_key: "5e869a2e897ce380cedd57cf87d3f036",


       photo_id: "15066440013",
      format: "json",
      nojsoncallback: "1",
    },
     success: foodPhotos2
  })
};

getData2()

function foodPhotos2 (data2) {
  console.log (data2)
  var url2 = data2.sizes.size[7].source;
  console.log(data2.sizes.size[7].source);
  console.log(url2);
  $(".food-boxes").append(
    `

    <img src ="${url2}">


    `)
}


function getData3 (data3, callback) {
    $.ajax({
      url: `https://api.flickr.com/services/rest/`,
      dataType: 'json',
    data: {
      method: "flickr.photos.getSizes",
      api_key: "5e869a2e897ce380cedd57cf87d3f036",


       photo_id: "32313986240",
      format: "json",
      nojsoncallback: "1",
    },
     success: foodPhotos3
  })
};

getData3()

function foodPhotos3 (data3) {
  console.log (data3)
  var url3 = data3.sizes.size[7].source;
  console.log(data3.sizes.size[7].source);
  console.log(url3);
  $(".food-boxes").append(
    `

    <img src ="${url3}">


    `)
}


function getData4 (data4, callback) {
    $.ajax({
      url: `https://api.flickr.com/services/rest/`,
      dataType: 'json',
    data: {
      method: "flickr.photos.getSizes",
      api_key: "5e869a2e897ce380cedd57cf87d3f036",


       photo_id: "19944385076",
      format: "json",
      nojsoncallback: "1",
    },
     success: foodPhotos4
  })
};

getData4()

function foodPhotos4 (data4) {
  console.log (data4)
  var url4 = data4.sizes.size[5].source;
  console.log(data4.sizes.size[5].source);
  console.log(url4);
  $(".food-boxes").append(
    `

    <img src ="${url4}">


    `)
}

function getData5 (data5, callback) {
    $.ajax({
      url: `https://api.flickr.com/services/rest/`,
      dataType: 'json',
    data: {
      method: "flickr.photos.getSizes",
      api_key: "5e869a2e897ce380cedd57cf87d3f036",


       photo_id: "9440235453",
      format: "json",
      nojsoncallback: "1",
    },
     success: foodPhotos5
  })
};

getData5()

function foodPhotos5 (data5) {
  console.log (data5)
  var url5 = data5.sizes.size[5].source;
  console.log(data5.sizes.size[5].source);
  console.log(url5);
  $(".food-boxes").append(
    `

    <img src ="${url5}">
    

    `)
}

export {foodPhotos}

// <div class="food-boxes">
// <img src ="https://s-media-cache-ak0.pinimg.com/564x/f9/db/0e/f9db0ed618459b5702cb0d35246ecab.jpg">
// </div>
// <div class="food-boxes">
// <img src ="https://s-media-cache-ak0.pinimg.com/564x/f9/db/0e/f9db0ed618459b5702cb30d35246ecab.jpg">
// </div>
// <div class="food-boxes">
// <img src ="https://s-media-cache-ak0.pinimg.com/564x/f9/db/0e/f9db0ed618459b5702cb30d35246ecab.jpg">
// </div>
// <div class="food-boxes">
// <img src ="https://s-media-cache-ak0.pinimg.com/564x/f9/db/0e/f9db0ed618459b5702cb30d35246ecab.jpg">
// </div>


// export {getData, foodPhotos}
