import $ from 'jquery';
import { flickrToken } from "./token.js";

// import {foodPhotos} from "./food-photos.js"

function getFood(data, callback) {
    $.ajax({
        url: `https://json-data.herokuapp.com/restaurant/menu/3`,
        dataType: "json",
        data: {
            q: data
        },
        success: putFood
    })
};

getFood()


function putFood (data) {
  console.log (data)
  $(".info-box2").append(
    `
    <div class ="specials-box">
    <div class="borders">
    <h1 class="Today">Today's Special</h1>
    <h1 class="price">$${data.entrees[2].price}</h1>
    </div>
    <img src ="https://farm5.staticflickr.com/4146/5064475808_6ae43bd6e8_b.jpg">
    <h2 class="items">${data.entrees[2].item}</h2>
    <p>${data.entrees[2].description}<p>
    </div>

    `)


}



// <h2>${data.entrees[3].item}</h2>
// <p>${data.entrees[3].description}</p>


export {getFood}
export {putFood}
