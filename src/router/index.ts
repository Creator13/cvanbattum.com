import Vue from 'vue'
import VueRouter, {Route, RouteConfig} from 'vue-router'
import Home from '../views/Home.vue'
import ProjectView from "@/views/ProjectView.vue"
import PortfolioOverview from "@/views/PortfolioOverview.vue"
import PhotographyOverview from "@/views/PhotographyOverview.vue"
import ContactView from "@/views/ContactView.vue"

function GetPageTitle(targetPage: string) : string {
    if (!targetPage) {
        return "Casper van Battum"
    }

    return `Casper van Battum - ${targetPage}`
}

Vue.use(VueRouter)

// noinspection JSUnusedGlobalSymbols
const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            pageTitle: ""
        }
    },
    {
        path: '/projects',
        name: 'project-overview',
        component: PortfolioOverview,
        meta: {
            pageTitle: "Projects"
        }
    },
    {
        path: '/projects/:projectSlug',
        name: 'project-view',
        component: ProjectView,
        props: true,
        beforeEnter(to, from, next) {
            document.title = GetPageTitle(to.params.projectName)
            next()
        }
    },
    {
        path: '/photos',
        name: 'photos',
        component: PhotographyOverview,
        meta: {
            pageTitle: "Photography"
        }
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactView,
        meta: {
            pageTitle: "Contact"
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    document.title = GetPageTitle(to.meta.pageTitle);
    next();
})

export default router
