import firebase from '../../configFirebase.js'
import router from '../../router'
import dataFormQuiz from "@/data/skinConsultationQuestions";

export default (url, comment, author) => {
    let d = new Date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    console.log(firebase.db)

    firebase.db.collection('user_skin_faces').add(
        {
            url,
            comment,
            info: `Posted by ${author != '' ? author : 'Unknown'} on ${days[d.getDay()]}`,
            created_at: new Date().getTime()
        }
    ).then(
        // router.push({ name: 'home' })
        router.push({
            name: 'skinconsultationform',
            params: {dataFormQuiz}
        })
    )
}
