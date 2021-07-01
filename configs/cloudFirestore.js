// Import depandencies
const admin = require("firebase-admin");

const serviceAccount = require("../firebase_adminsdk.json");

const createUser = () => {
    ///////////////////
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
    
    const db = admin.firestore();
    ///////////////////
    db.collection("generaluser").add({
        name: "Rupam Sau",
        city: "Contai",
        occupation: "Engineering"
    })
    .then((res) => {
        console.log("Data Inserted");
    })
    .catch((err) => {
        console.log(err);
    })
}

module.exports = createUser;


