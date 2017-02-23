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

    <p class="control">
      <input class="input is-small" type="text" placeholder="Small input">
    </p>
    <p class="control">
      <input class="input" type="text" placeholder="Normal input">
    </p>
    <p class="control">
      <input class="input is-medium" type="text" placeholder="Medium input">
    </p>
    <p class="control">
      <input class="input is-large" type="text" placeholder="Large input">
    </p>
    <p class="control">
      <span class="select is-small">
        <select>
          <option>Select dropdown</option>
          <option>With options</option>
        </select>
      </span>
    </p>
    <p class="control">
      <span class="select">
        <select>
          <option>Select dropdown</option>
          <option>With options</option>
        </select>
      </span>
    </p>
    <p class="control">
      <span class="select is-medium">
        <select>
          <option>Select dropdown</option>
          <option>With options</option>
        </select>
      </span>
    </p>
    <p class="control">
      <span class="select is-large">
        <select>
          <option>Select dropdown</option>
          <option>With options</option>
        </select>
      </span>
    </p>

  `);
}

function getMenu () {
  return $.ajax({
    url: "https://json-data.herokuapp.com/restaurant/menu/3",
    dataType: "json",
  });
}


export { writeMenuInfo };
