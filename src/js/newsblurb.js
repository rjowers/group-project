import $ from 'jquery';

function getNews() {
    $.ajax({
        url: `https://json-data.herokuapp.com/restaurant/news/1`,
        dataType: "json",
        // data: {
        //     q: data
        // },
        success: makenewsblurb
    })
};

getNews()

function makenewsblurb (data) {
  console.log (data)
  $(".info-box1").prepend(
    `
    <div class ="newsblurbsbox">
      <h1>Latest News </h1>
      <h2 class="title">${data.title}</h2>
      <h2 class="date">${data.date_published}</h1>
      <p class="post">${data.post}</p>
      <div class="read">... Read More</div>


    </div>

    `)
}

// $(".newsblurbsbox").addClass("close");
//
// var open
// function expand() {
//   $(".newsblurbsbox").removeClass('close').addClass('open');
// }
//
// $(".newsblurbsbox").on('click',expand);


export {getNews}
export {makenewsblurb}
