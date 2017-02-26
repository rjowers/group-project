import $ from "jquery";

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
      <div class="menu-item">${data.Beer[count].item}</div>
      <img class="small-bear3" src="./images/bear4.png"/>
      <div class="menu-item-price">${data.Beer[count].price}</div>
    </div>
    <div class="menu-item-style">${data.Beer[count].style}</div>
    <div class="menu-description-allergies-favorite-container">
      <div class="menu-item-description float-left">${data.Beer[count].description}</div>-
      <div class="draught${count} float-right"></div>
      <div class="bottle${count} float-right"></div>
      <div class="favorite${count} float-right"></div>
      <div class="allergies${count} float-right"></div>
    </div>
    `);

    if(data.Beer[count].draught === 1){
      $(`.draught${count}`).html(`
      <img class="small-info-graphic" src="./images/draught.png"/>`);
    }else{
      $(`.draught${count}`).html("");
    }

    if(data.Beer[count].bottle === 1){
      $(`.bottle${count}`).html(`
      <img class="small-info-graphic" src="./images/bottle.jpg">`);
    }else{
      $(`.bottle${count}`).html("");
    }

    if(data.Beer[count].allergies === 1){
      $(`.allergies${count}`).html(`
      <div class="allergy1">
      <i class="float-right fa fa-exclamation-triangle allergy1" aria-hidden="true"></i>
      <div>
      `);
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
      <div class="menu-item">${data.entrees[i].item}</div>
      <img class="small-bear2" src="./images/bear2.jpg"/>
      <div class="menu-item-price">${data.entrees[i].price}</div>
    </div>

    <div class="menu-description-allergies-favorite-container">
      <div class="menu-item-description float-left">${data.entrees[i].description}</div>-
      <div class="spicy${i} float-right"></div>
      <div class="vegan${i} float-right"></div>
      <div class="favorite1${i} float-right"></div>
      <div class="allergies1${i} float-right"></div>
    </div>
  `);

  if(data.entrees[i].spicy === 1){
    $(`.spicy${i}`).html(`
  <img class"small-info-graphic float-right" src="./images/spicy.png">`);
  }else{
    $(`.spicy1${i}`).html("");
  }


  if(data.entrees[i].vegan === 1){
    $(`.vegan${i}`).html(`
  <img class"small-info-graphic float-right" src="./images/vegan.png">`);
  }else{
    $(`.vegan${i}`).html("");
  }

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
    <div class="menu-item">${data.games[x].item}</div>.
    <img class="small-bear1" src="./images/bear4.jpg"/>
    <div class="menu-item-price">${data.games[x].price}</div>
  </div>

  <div class="menu-description-allergies-favorite-container">
    <div class="menu-item-description float-left">${data.games[x].description}</div>-
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
}

export { printMenu };
