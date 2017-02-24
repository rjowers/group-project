import {maketopbar} from "./topbar.js"
import {getNews} from "./newsblurb.js"
import {makenewsblurb} from "./newsblurb.js"
import {getFood} from "./todayblurb.js"
import {putFood} from "./todayblurb.js"
import {makemapsblurb} from "./mapblurb.js"
import {foodPhotos} from "./food-photos.js"

import {writeMenuInfo} from "./menu-info"



maketopbar();
foodPhotos();
writeMenuInfo();
