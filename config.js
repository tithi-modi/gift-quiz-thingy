<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAYclYDMCKpuCnhbD0GxGBplIQXJQKTnWw",
    authDomain: "nightshade-wishlist.firebaseapp.com",
    projectId: "nightshade-wishlist",
    storageBucket: "nightshade-wishlist.firebasestorage.app",
    messagingSenderId: "1032939304626",
    appId: "1:1032939304626:web:d49085bf5fd475b1817bab",
    measurementId: "G-EQTJQ9JYGW"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
