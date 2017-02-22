import $ from "jquery";

function writeMenuInfo(){
  $(".menuinfo").append(`
    <div class="our-story">Our Story</div>
    <div class="menu">Menu</div>
    <div class="reservations">Reservations<div>
  `);
  $(".our-story").click(writeOurStory);
  $(".menu").click(writeMenu);
  $("reservations").click(writeReservations);
}

function writeOurStory(event){
  
}

function writeMenu(event){

}

function writeReservations(event){

}


export { writeMenuInfo };
