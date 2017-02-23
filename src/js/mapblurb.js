import $ from 'jquery';
import {googleToken} from "./token.js"

function makeMapsBlurb () {
  $(".info-box3").prepend(
    `
    <div class ="mapsblurbsbox">
    <h1 class ="our-location">
    Our Location
    </h1>
    <div class="google-maps">
    <iframe
  width="264"
  height="98"
  frameborder="0" style="border:0"
  src="https://www.google.com/maps/embed/v1/place?key=${googleToken}
    &q=Iron+Yard,Atlanta+GA" allowfullscreen>
    </iframe>
    </div>
     <p class="address">115 M.L.K. Jr Dr SW #400, Atlanta, GA 30303</p>

     <p class="location-info">555-555-5555 • 555-555-5555 • <a href=#>Map</a> •  <a href=#>Directions</a></p>
    </div>

    `)
}

makeMapsBlurb()
export {makeMapsBlurb}
