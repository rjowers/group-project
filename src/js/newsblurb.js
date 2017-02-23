import $ from 'jquery';

function getNews(data, callback) {
    $.ajax({
        url: `https://json-data.herokuapp.com/restaurant/news/1`,
        dataType: "json",
        data: {
            q: data
        },
        success: makenewsblurb
    })
};

getNews()

function makenewsblurb (data) {
  console.log (data)
  $(".blurbs").append(
    `
    <div class ="blurbsbox">
      <h1>Latest News </h1>
      <h2 class="title">${data.title}</h2>
      <h2 class="date">${data.date_published}</h1>
      <p class="post">${data.post}</p>
      <div class="read">... Read More</div>


    </div>

    `)
}

$(".blurbsbox").addClass("close");

var open
function expand() {
  $(".blurbsbox").removeClass('close').addClass('open');
}

$(".blurbsbox").on('click',expand);


export {getNews}
export {makenewsblurb}
