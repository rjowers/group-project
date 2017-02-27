import {maketopbar} from "./topbar.js"
import {getNews} from "./newsblurb.js"
import {makenewsblurb} from "./newsblurb.js"
import {getFood} from "./todayblurb.js"
import {putFood} from "./todayblurb.js"
import {makemapsblurb} from "./mapblurb.js"
import {writeMenuInfo, getOurStoryPic, printOurStoryPic} from "./menu-info"
import {getData, printData} from "./landing.js"
import {getData2,foodPhotos} from "./food-photos.js"







maketopbar();

writeMenuInfo();



getData().then(printData);
