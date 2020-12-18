<template>
  <div id="turn">
    <div class="">
      <moves></moves>
    </div>
  </div>
</template>

<script>
import moves from "./moves.vue";

export default {
  name: "Turn",
  components: { moves },
  data: () => ({}),
  computed: {},
  methods: {}
};
</script>

<style>
#turn {
  z-index: 100;
}
</style>
