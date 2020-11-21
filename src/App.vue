<template>
  <router-view />
</template>

<script>
import { ref, computed, reactive, toRefs } from "vue";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

export default {
  name: "App",
  setup() {
    const db = firebase.database().ref();

    return {};
  }
};
</script>

<style lang="scss">
#app {
  text-align: center;
}
</style>
