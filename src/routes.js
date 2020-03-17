import Home from './components/Home.vue'
import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'
import PageNotFound from './components/PageNotFound.vue'

export const routes = [
    { path: '', component: Home },
    { path: '/page1', component: Page1 },
    { path: '/page2', component: Page2 },
    { path: '*', component: PageNotFound }
]