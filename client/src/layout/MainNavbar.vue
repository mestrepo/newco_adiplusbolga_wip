<template>
    <navbar
            position="fixed"
            type="primary"
            :transparent="transparent"
            :color-on-scroll="colorOnScroll"
            menu-classes="ml-auto"
    >
        <template slot-scope="{ toggle, isToggled }">
            <router-link v-popover:popover1 class="navbar-brand" to="/">
                ADI + BOLGA
            </router-link>
            <el-popover
                    ref="popover1"
                    popper-class="popover"
                    placement="bottom"
                    width="200"
                    trigger="hover"
            >
                <div class="popover-body">
                    Personalized Skincare products
                </div>
            </el-popover>
        </template>
        <template slot="navbar-menu">
            <li class="nav-item">
                <a
                        class="nav-link"
                        href=""
                >
                    <i class="now-ui-icons fa-blogger-b"></i>
                    <p>Blog</p>
                </a>
            </li>
            <li class="nav-item">
                <a
                        class="nav-link"
                        href=""
                >
                    <i class="now-ui-icons "></i>
                    <p>Login</p>
                </a>
            </li>

            <li class="nav-item">
                <a
                        class="nav-link"
                        href="#upload"
                        @click="$router.push({name:'upload'})"
                >
                    <i class="now-ui-icons fa-hospital"></i>
                    <p>Skin Consultation</p>
                </a>
            </li>

        </template>
    </navbar>
</template>

<script>
    import {DropDown, Navbar, NavbarToggleButton, NavLink} from '@/components';
    import {Popover} from 'element-ui';

    export default {
        name: 'main-navbar',
        props: {
            transparent: Boolean,
            colorOnScroll: Number
        },
        components: {
            DropDown,
            Navbar,
            NavbarToggleButton,
            NavLink,
            [Popover.name]: Popover
        }
    };
</script>

<style scoped></style>
