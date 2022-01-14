import admin from "firebase-admin";

export function getDb() {
  try {
    return admin.firestore();
  } catch {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/gm, "\n"),
      }),
      //   databasebackground: "/: "https://tocpc-prod-2021.firebaseio.com",
      //   storageBucket: "tocpc-prod-2021.appspot.com",
    });
    return admin.firestore();
  }
}
