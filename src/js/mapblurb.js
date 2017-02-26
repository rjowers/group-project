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

     <p class="location-info">555-555-5555 • 555-555-5555 • <a href=https://www.google.com/maps/dir//115+M.L.K.+Jr+Dr+SW+%23400,+Atlanta,+GA+30303/@33.8852421,-84.4916196,11z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88f50383f2c6abcb:0x67b3f25b819b2d3f!2m2!1d-84.392145!2d33.752069!3e0>Map</a> •  <a href=https://www.google.com/maps/dir//115+M.L.K.+Jr+Dr+SW+%23400,+Atlanta,+GA+30303/@33.8852421,-84.4916196,11z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88f50383f2c6abcb:0x67b3f25b819b2d3f!2m2!1d-84.392145!2d33.752069!3e0>Directions</a></p>
    </div>

    `)
}

makeMapsBlurb()
export {makeMapsBlurb}
