import $ from 'jquery';
import {googleToken} from "./token.js"

function makeMapsBlurb () {
  $(".info-box3").prepend(
    `
    <div class ="mapsblurbsbox">
    <iframe>
    width="300"
    height="238"
    frameborder="0" style="border:0"
    src="https://www.google.com/maps/embed/v1/place?key=${googleToken}
    &q=Space+Needle,Seattle+WA" allowfullscreen>
    </iframe>
    </div>



    `)
}

makeMapsBlurb()
export {makeMapsBlurb}
