// Import Depandencies

// Import Local Depandencies
const cloudFirestore = require("../configs/cloudFirestore");

const db = cloudFirestore();

module.exports.createUser_post = async(req, res) => {
    db.collection("generaluser").add({
        name: "Narandra Modi",
        countryVisited: 69,
        countryList: ["Bangladesh", "Pakistan", "Nepal", "Bhutan", "China"],
        career: [
            {
                post: "partyLeader",
                experience: 10,
                age: 30,
                work: ["gundami", "marpit", "Danga"]
            },
            {
                post: "Chief Minister",
                experience: 20,
                age: 40,
                work: ["More gundami", "More marpit", "More Danga"]
            }, 
            {
                post: "Prime Minister",
                experience: 10,
                age: 60,
                work: ["Most gundami", "Most marpit", "Most Danga"]
            }
        ],
        wishList: {
            asPartyLeader: {
                inCountry: "Churi",
                outCountry: "Dakati",
            },
            asChiefMinister: {
                inCountry: "More Churi",
                outCountry: "More Dakati",
            },
            asPrimeMinister: {
                inCountry: "Most Churi",
                outCountry: "Most Dakati",
            }
        }
    })
    .then((result) => {
        console.log("Successfully Inserted");
        res.json({
            status: "success",
            payload: result
        })
    })
    .catch((err) => {
        console.log(err);
        res.json({
            status: "failure",
            payload: err
        })
    })
}

// Get user details
module.exports.getUsers_get = async(req, res) => {
    const snapsort = db.collection("generaluser").get();
    let arr = [];
    (await snapsort).forEach((doc) => {
        arr.push(doc.data());
    })
    
    if (arr.length !== 0) {
        res.json({
            status: "success",
            payload: arr
        })
    } else {
        res.json({
            status: "failure",
            payload: null
        })
    }
}