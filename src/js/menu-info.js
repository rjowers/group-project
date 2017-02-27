import $ from "jquery";
import { printMenu } from "./menu-template";
import { flickrToken } from "./token.js";



function writeMenuInfo(){
  $(".menu-info").append(`
    <div class="our-story">Our Story</div>
    <div class="menu">Menu</div>
    <div class="reservations">Reservations</div>
    <div class="menu-info-container"></div>
  `);
  $(".our-story").click(writeOurStory);
  $(".menu").click(writeMenu);
  $(".reservations").click(writeReservations);
  writeOurStory();
}

function writeOurStory(event){
  $(".menu-info-container").html(`
   <div id="our-story">
   It all began on February 24, 2017, when Ryan Jowers and Josh Bradford opened the first Iron Bear Pub inside of the historic Mitre Inn located in Atlanta, GA.
   Inspired by their lives hunting bears for a living in the Alaskan wilderness, Ryan and Josh sought to bring that life style of rugged individualism to the heart of Atlanta.
   Their goal was to not just own another ordinary pub and not just a restaurant with great food, but a place where everyone, of all walks of life, could come and have a great meal and great fun for a great price.
   <p>
   We like to brag about our Hand-Cut Cowboy Cut Rib Eye, exotic Ostrich Filet Mignon, all natural Atlantic Sea Scallops, and most renown local craft beers hand-selected by the founders. Everything we do goes into making our hearty meals stand out. We handcraft almost everything we serve. We provide larger portions so you get more food for your dollar. And if you want an Ice Cold Beer to wash it all down with — well, we have those, too.
   Our food’s not the only thing that’s Legendary at the Iron Bear— our fun is too! From our trivia nights, to our live music, to our bare-nuckle boxing competitions, you’ll enjoy every second you spend in at the Iron Bear Pub.
   Our team has an incredible sense of pride in everything we do. Our passion ensures you have a Legendary Experience every time.
   </p>
   </div>
   <div class="hunting-pic"><div>
  `);
  getOurStoryPic().then(postOurStoryPic);
}

function writeMenu(event){
  getMenu().then(printMenu);
}

function writeReservations(event){
  $(".menu-info-container").html(`

    <label class="label">Full Name</label>
    <p class="control">
      <input class="input med-size" type="text" placeholder="Please be able to match your ID.">
    </p>
    <label class="label">Number of Guests</label>
    <p class="control">
      <input class="input small-size" type="number" placeholder="6 guests per table.">
    </p>
    <label class="label">Date</label>
    <p class="control">
      <input class="input  med-small-size" type="date" placeholder="At least three days in advance.">
    </p>
    <label class="label">Special Notes</label>
    <p class="control">
      <textarea class="textarea med-size" placeholder="We strive to do our best to accomadate our customers needs."></textarea>
    </p>
    <label class="label">Seating Preference</label>
    <p class="control">
      <span class="select">
        <select>
          <option>Indoor</option>
          <option>Outdoor</option>
        </select>
      </span>
    </p>
    <div class="control is-grouped">
      <p class="control">
        <button id="is-black" class="button is-primary">Submit</button>
      </p>
    </div>
  `);
}

function getMenu () {
  return $.ajax({
    url: "https://json-data.herokuapp.com/restaurant/menu/3",
    dataType: "json",
  });
}


function getOurStoryPic () {
   return $.ajax({
      url: `https://api.flickr.com/services/rest/`,
      dataType: 'json',
    data: {
      method: "flickr.photos.getSizes",
      api_key: flickrToken,
      photo_id: "32427866386",
      format: "json",
      nojsoncallback: "1"
     }
  });
}

function postOurStoryPic(data) {
  console.log("hey")
  console.log(data.sizes.size[7])
  $(".hunting-pic").html(`<img class="landing-pic" src="${data.sizes.size[7].source}">`)
}




export { writeMenuInfo, getOurStoryPic, postOurStoryPic};
