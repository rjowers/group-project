import $ from "jquery";
import { printMenu } from "./menu-template";



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
    This is a story all about how my life got flip turned upside down,
    and I'd like to take a minute just sit right there, tell you how
    I became the prince of a town called Be-lair
  `);
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


export { writeMenuInfo };
