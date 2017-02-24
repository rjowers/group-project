import { flickrToken } from "./token.js";

import $ from "jquery";

function getData (search) {
   return $.ajax({
      url: `https://api.flickr.com/services/rest/`,
      dataType: 'json',
    data: {
      method: "flickr.photos.getSizes",
      api_key: "5e869a2e897ce380cedd57cf87d3f036",
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

  $(".landing").append(`<img class="landing-pic" src="${url}">`)
}

export {getData, printData}
