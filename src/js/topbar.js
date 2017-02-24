import $ from 'jquery';



function maketopbar () { $(".top-bar").append(
    `
  <div class="top-barbox">
    <div class="logo-box">
      <img class="logo" src="images/ironbear.png">
    </div>
    <div class="bear">
      <img class="bear-pic" src="images/bear.png">
      <img class="bear-pic2" src="images/bear.png">
    </div>
    <div class="icon-box">
      <span class="Connect">Connect With Us!</span>
      <ul class="icons">
      <li class="zocial-twitter"></li>
      <li class="zocial-instagram"></li>
      <li class="zocial-facebook"></li>
      </ul>
    </div>
    </div>

    `)
}




export {maketopbar}
