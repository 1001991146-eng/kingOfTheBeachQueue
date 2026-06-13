// firebase-config.js
// Fill in your Firebase project configuration here (leave empty to run locally without Firebase):
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Export for browser accessibility
if (typeof window !== 'undefined') {
  window.firebaseConfig = firebaseConfig;
}
