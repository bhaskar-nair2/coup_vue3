<template>
  <div id="turn">
    <div class="is-flex is-flex-direction-column">
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
