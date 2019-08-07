import Vue from "vue";
import Router from "vue-router";

import Landing from "./pages/Landing.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import Upload from "./components/Upload.vue";
import Shopping from "./components/Shopping";

Vue.use(Router);

export default new Router({
    mode: "history",
    linkExactActiveClass: "active",
    routes: [
        {
            path: "/details/:id",
            name: "details",
            props: true,
            component: () =>
                import(/* webpackChunkName: "details" */ "./components/Details.vue")
        },
        {
            path: "/post",
            name: "post",
            props: true,
            component: () =>
                import(/* webpackChunkName: "post" */ "./components/Post.vue")
        },
        {
            path: "/camera",
            name: "camera",
            component: () =>
                import(/* webpackChunkName: "camera" */ "./components/Camera.vue")
        },
        {
            path: "/skinconsultationform",
            name: "skinconsultationform",
            component: () =>
                import(
                    /* webpackChunkName: "camera" */ "./components/SkinConsultationForm.vue"
                    )
        },
        {
            path: "/cart",
            name: "cart",
            component: () =>
                import(
                    /* webpackChunkName: "camera" */ "./components/shopping/Cart.vue"
                    )
        },
        {
            path: "/product",
            name: "product",
            component: () =>
                import(
                    /* webpackChunkName: "camera" */ "./components/shopping/Product.vue"
                    )
        },
        {
            path: "/shopping",
            name: "shopping",
            components: {default: Shopping, header: MainNavbar, footer: MainFooter},
            props: {
                header: {colorOnScroll: 400},
                footer: {backgroundColor: "black"}
            }
        },
        {
            path: "/upload",
            name: "upload",
            components: {default: Upload, header: MainNavbar, footer: MainFooter},
            props: {
                header: {colorOnScroll: 400},
                footer: {backgroundColor: "black"}
            }
        },

        {
            path: "/",
            name: "landing",
            components: {default: Landing, header: MainNavbar, footer: MainFooter},
            props: {
                header: {colorOnScroll: 400},
                footer: {backgroundColor: "black"}
            }
        },
    ],
    scrollBehavior: to => {
        if (to.hash) {
            return {selector: to.hash};
        } else {
            return {x: 0, y: 0};
        }
    }
});
