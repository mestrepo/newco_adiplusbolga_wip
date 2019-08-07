<template>
    <footer
            class="footer"
            :class="{ [`footer-${type}`]: type }"
            :data-background-color="backgroundColor"
    >
        <div class="container">
            <nav>
                <ul>
                    <li>
                        <a href="">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Blog
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                                class="nav-link"
                                rel="tooltip"
                                title="Follow us on Twitter"
                                data-placement="bottom"
                                href="https://twitter.com/"
                                target="_blank"
                        >
                            <i class="fab fa-twitter"></i>
                            <p class="d-lg-none d-xl-none">Twitter</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                                class="nav-link"
                                rel="tooltip"
                                title="Like us on Facebook"
                                data-placement="bottom"
                                href="https://www.facebook.com/"
                                target="_blank"
                        >
                            <i class="fab fa-facebook-square"></i>
                            <p class="d-lg-none d-xl-none">Facebook</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                                class="nav-link"
                                rel="tooltip"
                                title="Follow us on Instagram"
                                data-placement="bottom"
                                href="https://www.instagram.com/"
                                target="_blank"
                        >
                            <i class="fab fa-instagram"></i>
                            <p class="d-lg-none d-xl-none">Instagram</p>
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="copyright">
                &copy; {{ year }}, Adi + Bolga
            </div>
        </div>
    </footer>
</template>
<script>
    export default {
        props: {
            backgroundColor: String,
            type: String
        },
        data() {
            return {
                year: new Date().getFullYear()
            };
        }
    };
</script>
<style></style>
