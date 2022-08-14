import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCalendarDays, faCommentDots, faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faChartColumn, faPencil, faMagnifyingGlassLocation, faCoins, faAddressBook, faLocationDot, faStore, faCirclePlus } from '@fortawesome/free-solid-svg-icons'

library.add(faCalendarDays, faChartColumn, faPencil, faMagnifyingGlassLocation, faCoins, faAddressBook, faLocationDot, faStore, faCommentDots, faThumbsUp, faCirclePlus)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')



