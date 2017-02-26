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
      <a href="#"><li class="zocial-twitter"></li></a>
      <a href="#"><li class="zocial-instagram"></li></a>
      <a href="#"<li class="zocial-facebook"></li></a>
      </ul>
    </div>
    </div>

    `)
}




export {maketopbar}
