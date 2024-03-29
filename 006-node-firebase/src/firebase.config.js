const {initilizeApp, cert} = require('firebase-admin/app');
const {getFirestore} = require('firebase-admin/firestore');
const serviceAccount = require("./creds.json");

initilizeApp({
    Credential: cert(serviceAccount)
});

const db = getFirestore();

module.exports = {db}