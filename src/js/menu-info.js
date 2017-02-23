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
    <div class="menu-title">Beer, Food, and Games</div>
    <div class="divide-line1"></div>
    <div class="menu-section-title">Beer</div>
    <div class="divide-line2"></div>
  `);
  for(var count = data.Beer.length - 1; count >= 0; count--){
    $(".divide-line2").after(`
    <div class="menu-item-menu-price-container">
      <div class="menu-item">${data.Beer[count].item}</div>............................
      <div class="menu-item-price">${data.Beer[count].price}</div>
    </div>
    <div class="menu-item-style">${data.Beer[count].style}</div>
    <div class="menu-description-allergies-favorite-container">
      <div class="menu-item-description float-left">${data.Beer[count].description}</div>...
      <div class="favorite${count} float-right"></div>
      <div class="allergies${count} float-right"></div>
    </div>
    `);

    if(data.Beer[count].allergies === 1){
      $(`.allergies${count}`).html(`
      <i class="float-right fa fa-exclamation-triangle" aria-hidden="true"></i>`);
    }else{
      $(`.allergies${count}`).html("");
    }

    if(data.Beer[count].favorite === 1){
      $(`.favorite${count}`).html(`
      <i class="float-right fa fa-star-o" aria-hidden="true"></i>`);
    }else{
      $(`.favorite${count}`).html("");
    }
  }

  $(".menu-info-container").append(`
    <div class="menu-section-title">Entrees</div>
    <div class="divide-line3"></div>
    `);
  for(var i = data.entrees.length - 1; i>= 0; i--){
    $(".divide-line3").after(`
    <div class="menu-item-menu-price-container">
      <div class="menu-item">${data.entrees[i].item}</div>............................
      <div class="menu-item-price">${data.entrees[i].price}</div>
    </div>

    <div class="menu-description-allergies-favorite-container">
      <div class="menu-item-description float-left">${data.entrees[i].description}</div>...
      <div class="favorite1${i} float-right"></div>
      <div class="allergies1${i} float-right"></div>
    </div>
  `);

  if(data.entrees[i].allergies === 1){
    $(`.allergies1${i}`).html(`
    <i class="float-right fa fa-exclamation-triangle" aria-hidden="true"></i>`);
  }else{
    $(`.allergies1${i}`).html("");
  }

  if(data.entrees[i].favorite === 1){
    $(`.favorite1${i}`).html(`
    <i class="float-right fa fa-star-o" aria-hidden="true"></i>`);
  }else{
    $(`.favorite1${i}`).html("");
  }
}

$(".menu-info-container").append(`
  <div class="menu-section-title">Games</div>
  <div class="divide-line4"></div>
  `);
for(var x = data.games.length - 1; x >= 0; x--){
  $(".divide-line4").after(`
  <div class="menu-item-menu-price-container">
    <div class="menu-item">${data.games[x].item}</div>............................
    <div class="menu-item-price">${data.games[x].price}</div>
  </div>

  <div class="menu-description-allergies-favorite-container">
    <div class="menu-item-description float-left">${data.games[x].description}</div>...
    <div class="favorite2${x} float-right"></div>
    <div class="multi-player${x} float-right"></div>
  </div>
`);

if(data.games[x].multiplayer === 1){
  $(`.multi-player${x}`).html(`
  <i class="fa fa-users" aria-hidden="true"></i>`);
}else{
  $(`.multi-player${x}`).html("");
}

if(data.games[x].favorite === 1){
  $(`.favorite2${x}`).html(`
  <i class="float-right fa fa-star-o" aria-hidden="true"></i>`);
}else{
  $(`.favorite2${x}`).html("");
}
}


  console.log(data);
}

export { writeMenuInfo };
