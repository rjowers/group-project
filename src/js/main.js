import {maketopbar} from "./topbar.js"
import {getNews} from "./newsblurb.js"
import {makenewsblurb} from "./newsblurb.js"
import {getFood} from "./todayblurb.js"
import {putFood} from "./todayblurb.js"
import {makemapsblurb} from "./mapblurb.js"

import {writeMenuInfo} from "./menu-info"


import {getData, printData} from "./landing.js"

maketopbar();

writeMenuInfo();



getData().then(printData);
