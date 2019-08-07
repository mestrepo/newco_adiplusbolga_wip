<template>
    <!--    for google chrome browser-->
    <div v-if="isWebChrome()" class="page-header">
        <div>
            <parallax
                    class="page-header-image"
                    style="background-color: gold"
            >
            </parallax>
            <div class="content-center">
                <div class="container">
                    <h1 class="title">STEP 1 : Share your image with your personal skincare consultant 👇🏿</h1>
                    <div class="text-center">


                        <v-btn size="lg" @click="$router.push({name:'camera'})">CAMERA</v-btn>

                        <button class="btn btn-outline-light mr-3"
                                @click="$refs.inputFile.click()"
                                size="lg"
                        >
                            <i class="fas fa-plus"></i>
                            <input
                                    hidden
                                    type="file"
                                    ref="inputFile"
                                    multiple="false"
                                    class="input-file"
                                    @change="addFile($event)"
                            >
                        </button>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--    for mobile and non-chrome browsers-->
    <div v-else class="page-header">
        <div>
            <parallax
                    class="page-header-image"
                    style="background-color: gold"
            >
            </parallax>
            <div class="content-center">
                <div class="container">
                    <h1 class="title">STEP 1 : Share your image with your personal skincare consultant 👇🏿</h1>
                    <div class="text-center">

                        <!--                        mobile upload button -->
                        <button class="btn btn-outline-light mr-3"
                                @click="$refs.inputFile.click()"
                                size="lg"
                        >
                            <i class="fas fa-plus"></i>
                            <input
                                    hidden
                                    type="file"
                                    ref="inputFile"
                                    multiple="false"
                                    class="input-file"
                                    @change="addFile($event)"
                            >
                        </button>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import firebase from '../configFirebase.js'
    import router from '../router'
    import dataFormQuiz from "@/data/skinConsultationQuestions";


    export default {
        methods: {
            /**
             * this is used to determine if the device is Google Chrome
             * @returns {boolean}
             */
            isWebChrome() {
                console.log('UPLOAD - isWebChrome: ' + navigator.userAgent)
                // mobile
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    console.log('UPLOAD - isWebChrome: MOBILE : TRUE' + false)
                    return false
                } else {
                    const isChrome = navigator.userAgent.toLowerCase().search('chrome') != -1 && navigator.vendor.toLowerCase().search('google') != -1;
                    console.log('UPLOAD - isWebChrome: CHROME : isChrome' + true)
                    console.log('UPLOAD - isWebChrome: CHROME : isChrome : navigator.vendor.toLowerCase() = ' + navigator.vendor.toLowerCase())
                    // web - chrome
                    if (/Chrome/i.test(navigator.userAgent) && isChrome) {
                        console.log('UPLOAD - isWebChrome: CHROME : TRUE' + true)
                        return true
                    } else {
                        // web - not chrome
                        console.log('UPLOAD - isWebChrome: NOT MOBILE : TRUE' + false)
                        return false
                    }
                }
            },
            fileExtension(file) {
                let reversed = file.name.split('').reverse().join('')
                reversed = reversed.split('.')[0]
                return reversed.split('').reverse().join('')
            },
            addFile(ev) {
                const ext = this.fileExtension(ev.target.files[0])
                const type = ev.target.files[0].type
                const file = new File([ev.target.files[0]], `${new Date().getTime()}.${ext}`, {type})
                this.$emit('file', file)

                this.$root.$emit('toast::show', {
                    message: `Wait, Sending ${file.name}...`
                })

                // let storage = this.$firebase.storage().ref()
                let storage = firebase.storage.ref()
                let fileRef = storage.child(`files/${file.name}`)

                fileRef.put(file)
                    .then(url => {
                        let database = firebase.storage.ref(`files/`)
                        router.push({
                            name: 'skinconsultationform',
                            params: {dataFormQuiz}
                        })
                    })
                    .catch(err => {
                        alert(err.message)
                    })
                    .catch(err => {
                        alert(err.message)
                    })

                this.$refs.inputFile.value = null
            }
        }
    }
</script>

<style>

</style>
