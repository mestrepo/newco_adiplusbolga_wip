<template>
    <v-container grid-list-xs>
        <v-layout column v-if="!!user_face">
            <v-flex>
                <v-img
                        :src="user_face.url"
                ></v-img>
            </v-flex>
            <v-flex>
                <h1>{{ user_face.comment }}</h1>
                <p class="subtitle">{{ user_face.info }}</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import firebase from '../configFirebase.js'

    export default {
        props: {
            userSkinFaceProp: {
                type: Object,
            }
        },
        data() {
            return {
                user_face: undefined
            }
        },
        mounted() {
            if (!!this.userSkinFaceProp) {
                this.user_face = this.userSkinFaceProp
            } else {
                const id = this.$route.params.id
                firebase.db.doc(`user_skin_faces/${id}`).get()
                    .then((doc) => {
                        if (doc.exists) {
                            this.user_face = doc.data();
                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such firebase document!");
                        }
                    }).catch((error) => {
                    console.log("Error getting firebase document:", error);
                });
            }
        }
    }
</script>

