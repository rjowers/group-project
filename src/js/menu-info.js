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
  `)
}

function writeMenu(event){
  $(".menu-info-container").html(`
    This gonna be a menu
  `)
}

function writeReservations(event){
  $(".menu-info-container").html(`
    This gonna be a form
  `)
}


export { writeMenuInfo };
