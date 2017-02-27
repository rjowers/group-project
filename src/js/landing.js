import { flickrToken } from "./token.js";

import $ from "jquery";

function getData (search) {
   return $.ajax({
      url: `https://api.flickr.com/services/rest/`,
      dataType: 'json',
    data: {
      method: "flickr.photos.getSizes",
      api_key: flickrToken,
      photo_id: "298845578",
      format: "json",
      nojsoncallback: "1"
     }
  });
}



function printData(data){
  console.log(data)
  var url = data.sizes.size[5].source;
  console.log(data.sizes.size[5].source);
  console.log(url);

  $(".landing").append(`
    <img class="scroll-right" src="./images/scroll2.jpeg">
    <img class="landing-pic" src="${url}">
    <img class="scroll-left" src="./images/scroll2.jpeg">
    `)
}

export {getData, printData}
