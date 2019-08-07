<template>
    <div>
        <splash-screen
                v-if="state === 'splash'"
                @continue="state = 'form'"
                :call-to-action="formData.callToAction"
                :button="formData.launchButton"
                class="skinconsultation-form"
        ></splash-screen>

        <v-form class="skinconsultation-form" v-if="state === 'form' && isShopping === false"
                :questions="formData.questions" @complete="formComplete"></v-form>
        <shopping v-if="isShopping" :user-defined-skin-type="userDefinedSkinType"></shopping>
    </div>
</template>

<script>
    import SplashScreen from "./SkinConsultation/SplashScreen";
    import vForm from "./SkinConsultation/Form";

    import data from "@/data/skinConsultationQuestions";
    import firebase from '@/configFirebase.js'

    import Shopping from "./Shopping";

    export default {
        data() {
            return {
                state: "splash",

                formData: data,
                userDefinedSkinType: "UNKNOWN",
                isShopping: false,
                vrDefinedSkinType: "UNKNOWN" // the skin type determined by the Visual Recognition(VR)
            };
        },
        components: {
            SplashScreen,
            vForm,
            Shopping
        },

        methods: {
            formComplete(quizResponses) {
                this.$emit("complete", quizResponses);
                this.complete(quizResponses)
            },
            complete(quizResponses) {
                // Send to database here
                console.log("SkinConsultation: Form complete", quizResponses.map(qr => qr.question + ': ' + qr.answer));

                // persist data in cloud database - firestore
                firebase.dataCollection.add({
                    data: quizResponses
                }).then(() => {
                    console.log("SkinConsultation: quizResponses object: ", quizResponses);
                    console.log("SkinConsultation: quiz over");
                    const quizResponsesArray = quizResponses.map(qr => qr.answer)
                    this.userDefinedSkinType = quizResponsesArray[1]
                    console.log("SkinConsultation: quizResponses at index 1: ", this.userDefinedSkinType);
                    // this.$router.push({name: 'shopping'});
                    this.isShopping = true
                }).catch(err => {
                    console.log(err)
                })
            },
        }
    };
</script>

<style lang="scss" scoped>
    .skinconsultation-form {
        /*height: 100%;*/
        background-color: gold;
    }
</style>
