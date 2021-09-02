import HomePage from '../components/HomePage.vue'
import AccordionPage from '../components/AccordionPage.vue'
import GridPage from '../components/GridPage.vue'
import ImagePage from '../components/ImagePage.vue'

export default [
    {path: '/', component: HomePage},
    {path: '/images', component: ImagePage},
    {path: '/grid', component: GridPage},
    {path: '/accordion', component: AccordionPage}
];
