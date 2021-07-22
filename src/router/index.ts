import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import AboutView from '../views/AboutView.vue'
import ProjectView from "@/views/ProjectView.vue"
import PortfolioOverview from "@/views/PortfolioOverview.vue"
import PhotographyOverview from "@/views/PhotographyOverview.vue"
import ContactView from "@/views/ContactView.vue"
import NotFoundView from "@/views/NotFoundView.vue";
import {nameFromSlug, projectExists} from "@/model/portfolioModel";

function getPageTitle(targetPage: string) : string {
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
        component: AboutView,
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
            if (!projectExists(to.params.projectSlug)) {
                router.replace({name: "not-found"}).then(() => next());
                return;
            }

            document.title = getPageTitle(nameFromSlug(to.params.projectSlug))
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
    },
    {
        path: "/404",
        name: "not-found",
        component: NotFoundView,
        meta: {
            pageTitle: "404"
        }
    },
    {
        path: "*",
        redirect: "404"
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    document.title = getPageTitle(to.meta.pageTitle);
    next();
})

export default router
