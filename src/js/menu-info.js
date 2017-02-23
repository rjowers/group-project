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
    <div class="divide-line1"></div>
    <div class="menu-section-title">Beer</div>
    <div class="divide-line2"></div>
  `);
  for(var count = 0; count < data.Beer.length; count++){
    $(".divide-line2").after(`
    <div class="menu-item-menu-price-container">
      <div class="menu-item">${data.Beer[count].item}</div>............................
      <div class="menu-item-price">${data.Beer[count].price}</div>
    </div>
    <div class="menu-item-style">${data.Beer[count].style}</div>
    <div class="menu-description-allergies-favorite-container">
      <div class="menu-item-description float-left">${data.Beer[0].description}</div>...
      <div class="allergies-favorite float-right"></div>
    </div>
    `);


    if(data.Beer[count].allergies === 1){
      $(".allergies-favorite").html(`
      <i class="float-right fa fa-exclamation-triangle" aria-hidden="true"></i>`);
    }

    if(data.Beer[count].favorite === 1){
      var currentHtml = $(".allergies-favorite").html()
      currentHtml += `<i class="float-right fa fa-star-o" aria-hidden="true"></i>`;
      $(".allergies-favorite").html(currentHtml);
    }

  }
  console.log(data);
}

export { writeMenuInfo };
