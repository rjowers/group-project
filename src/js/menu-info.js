import $ from "jquery";



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
    This gonna be a form
  `);
}

function getMenu () {
  return $.ajax({
    url: "https://json-data.herokuapp.com/restaurant/menu/3",
    dataType: "json",
  });
}

function printMenu(data){
  $(".menu-info-container").html(`
    <div>Beers, Food, and Games</div>
    <div class="divide-line"></div>
    <div class="menu-section-title">Beer</div>
    <div class="divide-line"></div>
    <div class="menu-item+menu-price-container">
      <div class="menu-item">${data.Beer[0].item}</div>
      <div class="menu-item-price">${data.Beer[0].price}</div>
    </div>
    <div class="menu-item-description">${data.Beer[0].style}</div>
    <div class="menu-item-description">${data.Beer[0].description}</div>
    <div class="menu-item-description">${data.Beer[0].allergies}</div>
    <div class="menu-item-description">${data.Beer[0].favorite}</div>




  `);
  console.log(data);
}

export { writeMenuInfo };
