<template>
  <div class="container flex justify-center align-center">
    <isk class="absolute top-5 left-5"></isk>
    <hand class="absolute bottom-10"></hand>
  </div>
</template>

<script>
import Hand from "./hand";
import Isk from "./isk";

export default {
  name: "Self",
  components: {
    Hand,
    Isk
  },
  data: () => ({}),
  computed: {},
  methods: {}
};
</script>

<style></style>
