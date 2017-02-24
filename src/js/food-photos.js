import $ from 'jquery';

function foodPhotos () {
  console.log ()
  $(".food-photos").append(
    `
    <h1 class="food">Our Food!</h1>
    <div class="food-boxes">
    <img src ="https://s-media-cache-ak0.pinimg.com/564x/f9/db/0e/f9db0ed618459b5702cb30d35246ecab.jpg">
    </div>
    <div class="food-boxes">
    <img src ="https://s-media-cache-ak0.pinimg.com/564x/f9/db/0e/f9db0ed618459b5702cb30d35246ecab.jpg">
    </div>
    <div class="food-boxes">
    <img src ="https://s-media-cache-ak0.pinimg.com/564x/f9/db/0e/f9db0ed618459b5702cb30d35246ecab.jpg">
    </div>
    <div class="food-boxes">
    <img src ="https://s-media-cache-ak0.pinimg.com/564x/f9/db/0e/f9db0ed618459b5702cb30d35246ecab.jpg">
    </div>
    <div class="food-boxes">
    <img src ="https://s-media-cache-ak0.pinimg.com/564x/f9/db/0e/f9db0ed618459b5702cb30d35246ecab.jpg">
    </div>
    



    `)
}




export {foodPhotos}
