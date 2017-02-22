import $ from 'jquery';

//import { token } from './token';

//var info = []

//${token}

function getData (search) {
   return $.ajax({
      url: `http://api.flickr.com/services/rest/?`,
      dataType: 'json',
    //  data: {
    //    q: search
    //  }
  });
}



export { getData};
/*

import $ from "jquery";
import {writeCard} from "./template"

function getUser () {
  return $.ajax({
    url: `https://api.github.com/users/farstrider777`,
    dataType: "json",
  });
}

var infoObject = {name: 0, login: 0, email: 0,
  company: 0, blog: 0, bio: 0, pic: 0, hurl: 0};

function info(data, success, xmlobject){
  infoObject.name = data.name;
  infoObject.login = data.login;
  infoObject.email = data.email;
  infoObject.company = data.company;
  infoObject.blog = data.blog;
  infoObject.bio = data.bio;
  infoObject.pic = data.avatar_url;
  infoObject.hurl = data.html_url;
  writeCard(infoObject);
}

export { info, getUser }
*/
