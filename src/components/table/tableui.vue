<template>
  <div class="container flex justify-center align-center m-4">
    <img
      v-for="n in 6"
      :key="n"
      :class="`absolute h-20`"
      src="@/assets/svg/hexagonal.svg"
    />
  </div>
</template>

<script>
import InlineSvg from "vue-inline-svg";

export default {
  name: "TableUi",
  components: {
    InlineSvg
  }
};
</script>

<style></style>
