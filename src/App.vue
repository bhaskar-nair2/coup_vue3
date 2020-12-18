<template>
  <div class="container h-screen w-screen bg-gray-100 overscroll-none">
    <router-view />
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

export default {
  name: "App",
  setup() {
    const db = firebase.database().ref("table");
    return { db };
  }
};
</script>

<style lang="scss">
#app {
  text-align: center;
}
</style>
