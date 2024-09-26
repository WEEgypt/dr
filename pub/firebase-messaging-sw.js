// firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/9.x/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.x/firebase-messaging.js');

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBFvDaRTmGKNHl-NmVbDViGCZwgUoqUp-4",
  authDomain: "srg-noti.firebaseapp.com",
  projectId: "srg-noti",
  storageBucket: "srg-noti.appspot.com",
  messagingSenderId: "343977794136",
  appId: "1:343977794136:web:762692ac46784a5ea7082d",
  measurementId: "G-LH3VQERVS3"
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Handle background notification
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
