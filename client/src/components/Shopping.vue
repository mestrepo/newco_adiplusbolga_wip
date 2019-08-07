<template>
    <div class="container">
        <div class="jumbotron jumbotron-fluid">
            <div v-if="userDefinedSkinType === 'Oily'" class="container">
                <p class="lead">
                    <b>RECOMMENDATION</b> :
                    <br/>
                    {{skinOilyRecommendations.recommendation}}
                </p>
                <br/>
                <br/>
                <br/>
                <p>
                    <b>DESCRIPTION</b> :
                    <br/>
                    {{skinOilyRecommendations.description}}
                </p>
                <br/>
                <br/>
                <br/>
                <p>
                    <b>LOCATION</b> :
                    <br/>
                    {{skinOilyRecommendations.location}}
                </p>
                <br/>
                <br/>
                <br/>
                <p>
                    <b>UV INDEX</b> :
                    <br/>
                    {{skinOilyRecommendations.uv_index}}
                </p>
                <br/>
                <br/>
                <br/>
                <p>
                    <b>LIFESTYLE</b>
                    <br/>
                    <br/>
                    <em>DIET</em> :
                    <br/>
                    {{skinOilyRecommendations.lifestyle.diet}}
                </p>
                <br/>
                <br/>
                <br/>
                <p>
                    <b>SKIN CONCERN</b>
                    <br/>
                    <br/>
                    <em>HYPER PIGMENTATION</em> :
                    <br/>
                    {{skinOilyRecommendations.skin_concern.hyperpigmentation}}
                    <br/>
                    <br/>
                    <em>PORES</em> :
                    <br/>
                    {{skinOilyRecommendations.skin_concern.pores}}
                    <br/>
                    <br/>
                    <em>DEHYDRATION</em> :
                    <br/>
                    {{skinOilyRecommendations.skin_concern.dehydration}}
                </p>
                <br/>
                <br/>
                <br/>
                <p>
                    <b>REGIMEN</b>
                    <br/>
                    <br/>
                    <em>CLEANSING</em> :
                    <br/>
                    {{skinOilyRecommendations.regimen.cleansing}}
                    <br/>
                    <br/>
                    <em>TONERS</em> :
                    <br/>
                    {{skinOilyRecommendations.regimen.toners}}
                    <br/>
                    <br/>
                    <em>SERUM MOISTURIZE</em> :
                    <br/>
                    {{skinOilyRecommendations.regimen.serums_moisturize}}
                    <br/>
                    <br/>
                    <em>MASKS TREATMENTS</em> :
                    <br/>
                    {{skinOilyRecommendations.regimen.cleansing}}
                    <br/>
                    <br/>
                    <em>SUNSCREEN</em> :
                    <br/>
                    {{skinOilyRecommendations.regimen.sunscreen}}
                </p>
            </div>

            <div v-if="userDefinedSkinType === 'Dry'" class="container">
                <p class="lead">Dry Skin</p>
                <p class="lead">
                    <b>RECOMMENDATION</b> :
                    <br/>
                    {{skinDryRecommendations.recommendation}}
                </p>
                <br/>
                <br/>
                <br/>
                <p>
                    <b>DESCRIPTION</b> :
                    <br/>
                    {{skinDryRecommendations.description}}
                </p>
                <br/>
                <br/>
                <br/>
                <p>
                    <b>LOCATION</b> :
                    <br/>
                    {{skinDryRecommendations.location}}
                </p>
                <br/>
                <br/>
                <br/>
                <p>
                    <b>UV INDEX</b> :
                    <br/>
                    {{skinDryRecommendations.uv_index}}
                </p>
                <br/>
                <br/>
                <br/>
                <p>
                    <b>LIFESTYLE</b>
                    <br/>
                    <br/>
                    <em>DIET</em> :
                    <br/>
                    {{skinDryRecommendations.lifestyle.diet}}
                </p>
                <br/>
                <br/>
                <br/>
                <p>
                    <b>SKIN CONCERN</b>
                    <br/>
                    <br/>
                    <em>HYPER PIGMENTATION</em> :
                    <br/>
                    {{skinDryRecommendations.skin_concern.hyperpigmentation}}
                    <br/>
                    <br/>
                    <em>PORES</em> :
                    <br/>
                    {{skinDryRecommendations.skin_concern.pores}}
                    <br/>
                    <br/>
                    <em>DEHYDRATION</em> :
                    <br/>
                    {{skinDryRecommendations.skin_concern.dehydration}}
                </p>
                <br/>
                <br/>
                <br/>
                <p>
                    <b>REGIMEN</b>
                    <br/>
                    <br/>
                    <em>CLEANSING</em> :
                    <br/>
                    {{skinDryRecommendations.regimen.cleansing}}
                    <br/>
                    <br/>
                    <em>TONERS</em> :
                    <br/>
                    {{skinDryRecommendations.regimen.toners}}
                    <br/>
                    <br/>
                    <em>SERUM MOISTURIZE</em> :
                    <br/>
                    {{skinDryRecommendations.regimen.serums_moisturize}}
                    <br/>
                    <br/>
                    <em>MASKS TREATMENTS</em> :
                    <br/>
                    {{skinDryRecommendations.regimen.cleansing}}
                    <br/>
                    <br/>
                    <em>SUNSCREEN</em> :
                    <br/>
                    {{skinDryRecommendations.regimen.sunscreen}}
                </p>
            </div>

            <div v-if="userDefinedSkinType === 'Combined[Oily + Dry]'" class="container">
                <p class="lead">Combined[Oily + Dry]</p>
                <p class="lead">
                    <b>RECOMMENDATION</b> :
                    <br/>
                    {{skinCombinationRecommendations.recommendation}}
                </p>
                <br/>
                <br/>
                <br/>
                <p>
                    <b>DESCRIPTION</b> :
                    <br/>
                    {{skinCombinationRecommendations.description}}
                </p>
                <br/>
                <br/>
                <br/>
                <p>
                    <b>LOCATION</b> :
                    <br/>
                    {{skinCombinationRecommendations.location}}
                </p>
                <br/>
                <br/>
                <br/>
                <p>
                    <b>UV INDEX</b> :
                    <br/>
                    {{skinCombinationRecommendations.uv_index}}
                </p>
                <br/>
                <br/>
                <br/>
                <p>
                    <b>LIFESTYLE</b>
                    <br/>
                    <br/>
                    <em>DIET</em> :
                    <br/>
                    {{skinCombinationRecommendations.lifestyle.diet}}
                </p>
                <br/>
                <br/>
                <br/>
                <p>
                    <b>SKIN CONCERN</b>
                    <br/>
                    <br/>
                    <em>HYPER PIGMENTATION</em> :
                    <br/>
                    {{skinCombinationRecommendations.skin_concern.hyperpigmentation}}
                    <br/>
                    <br/>
                    <em>PORES</em> :
                    <br/>
                    {{skinCombinationRecommendations.skin_concern.pores}}
                    <br/>
                    <br/>
                    <em>DEHYDRATION</em> :
                    <br/>
                    {{skinCombinationRecommendations.skin_concern.dehydration}}
                </p>
                <br/>
                <br/>
                <br/>
                <p>
                    <b>REGIMEN</b>
                    <br/>
                    <br/>
                    <em>CLEANSING</em> :
                    <br/>
                    {{skinCombinationRecommendations.regimen.cleansing}}
                    <br/>
                    <br/>
                    <em>TONERS</em> :
                    <br/>
                    {{skinCombinationRecommendations.regimen.toners}}
                    <br/>
                    <br/>
                    <em>SERUM MOISTURIZE</em> :
                    <br/>
                    {{skinCombinationRecommendations.regimen.serums_moisturize}}
                    <br/>
                    <br/>
                    <em>MASKS TREATMENTS</em> :
                    <br/>
                    {{skinCombinationRecommendations.regimen.cleansing}}
                    <br/>
                    <br/>
                    <em>SUNSCREEN</em> :
                    <br/>
                    {{skinCombinationRecommendations.regimen.sunscreen}}
                </p>
            </div>

            <div v-if="userDefinedSkinType === 'Normal'" class="container">
                <p class="lead">Normal</p>
                <p class="lead">
                    <b>RECOMMENDATION</b> :
                    <br/>
                    {{skinNormalRecommendations.recommendation}}
                </p>
                <br/>
                <br/>
                <br/>
                <p>
                    <b>DESCRIPTION</b> :
                    <br/>
                    {{skinNormalRecommendations.description}}
                </p>
                <br/>
                <br/>
                <br/>
                <p>
                    <b>LOCATION</b> :
                    <br/>
                    {{skinNormalRecommendations.location}}
                </p>
                <br/>
                <br/>
                <br/>
                <p>
                    <b>UV INDEX</b> :
                    <br/>
                    {{skinNormalRecommendations.uv_index}}
                </p>
                <br/>
                <br/>
                <br/>
                <p>
                    <b>LIFESTYLE</b>
                    <br/>
                    <br/>
                    <em>DIET</em> :
                    <br/>
                    {{skinNormalRecommendations.lifestyle.diet}}
                </p>
                <br/>
                <br/>
                <br/>
                <p>
                    <b>SKIN CONCERN</b>
                    <br/>
                    <br/>
                    <em>HYPER PIGMENTATION</em> :
                    <br/>
                    {{skinNormalRecommendations.skin_concern.hyperpigmentation}}
                    <br/>
                    <br/>
                    <em>PORES</em> :
                    <br/>
                    {{skinNormalRecommendations.skin_concern.pores}}
                    <br/>
                    <br/>
                    <em>DEHYDRATION</em> :
                    <br/>
                    {{skinNormalRecommendations.skin_concern.dehydration}}
                </p>
                <br/>
                <br/>
                <br/>
                <p>
                    <b>REGIMEN</b>
                    <br/>
                    <br/>
                    <em>CLEANSING</em> :
                    <br/>
                    {{skinNormalRecommendations.regimen.cleansing}}
                    <br/>
                    <br/>
                    <em>TONERS</em> :
                    <br/>
                    {{skinNormalRecommendations.regimen.toners}}
                    <br/>
                    <br/>
                    <em>SERUM MOISTURIZE</em> :
                    <br/>
                    {{skinNormalRecommendations.regimen.serums_moisturize}}
                    <br/>
                    <br/>
                    <em>MASKS TREATMENTS</em> :
                    <br/>
                    {{skinNormalRecommendations.regimen.cleansing}}
                    <br/>
                    <br/>
                    <em>SUNSCREEN</em> :
                    <br/>
                    {{skinNormalRecommendations.regimen.sunscreen}}
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-7">
                <div class="row">
                    <div class="col-md-6" v-bind:key="product.id" v-for="product in productData">
                        <product
                                v-on:add-to-cart="addToCart(product)"
                                :product="product"
                                :isInCart="isInCart(product)"
                        ></product>
                    </div>
                </div>
            </div>
            <div class="col-md-5 my-5">
                <cart v-on:remove-from-cart="removeFromCart($event)" v-on:pay="pay()" :items="cart"></cart>
            </div>
        </div>
    </div>
</template>

<script>
    import products from "@/data/products.json";
    import oilySkinProducts from "@/data/oilySkinProducts.json";
    import drySkinProducts from "@/data/drySkinProducts.json";
    import combinationSkinProducts from "@/data/drySkinProducts.json";
    import normalSkinProducts from "@/data/normalSkinProducts.json";
    import Cart from "@/components/shopping/Cart";
    import Product from "@/components/shopping/Product";
    import skinConsultationOilyRecommendations from "@/data/skinConsultationOilyRecommendations";
    import skinConsultationDryRecommendations from "../data/skinConsultationDryRecommendations";
    import skinConsultationCombinationRecommendations from "../data/skinConsultationCombinationRecommendations";
    import skinConsultationNormalRecommendations from "../data/skinConsultationNormalRecommendations";

    export default {
        name: "app",
        props: {
            // vrDefinedSkinType: String, // the skin type determined by the Visual Recognition(VR)
            userDefinedSkinType: {// the skin type determined by the user
                type: String,
                default: "UNKNOWN",
            },
        },
        components: {
            Product,
            Cart
        },
        methods: {
            addToCart(product) {
                this.cart.push(product);
            },
            isInCart(product) {
                const item = this.cart.find(p => p.id === product.id);
                return !!item;
            },
            removeFromCart(product) {
                this.cart = this.cart.filter(item => item.id !== product.id);
            },
            pay() {
                this.cart = [];
                alert("Your shopping is finished!!");
            }
        },
        data() {
            console.log("SHOPPING: products: " + JSON.stringify(products))

            let productData = products

            if (this.userDefinedSkinType === 'Oily') productData = oilySkinProducts
            if (this.userDefinedSkinType === 'Dry') productData = drySkinProducts
            if (this.userDefinedSkinType === 'Combined[Oily + Dry]') productData = combinationSkinProducts
            if (this.userDefinedSkinType === 'Normal') productData = normalSkinProducts

            return {
                productData,
                cart: [],
                skinOilyRecommendations: skinConsultationOilyRecommendations,
                skinDryRecommendations: skinConsultationDryRecommendations,
                skinCombinationRecommendations: skinConsultationCombinationRecommendations,
                skinNormalRecommendations: skinConsultationNormalRecommendations,
            };
        }
    };
</script>

<style>
    body {
        background-color: #fbf8f3;
    }
</style>
