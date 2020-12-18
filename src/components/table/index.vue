<template>
  <div class="container w-screen">
    <pause></pause>
    <tableui class="absolute top-1/4"></tableui>
  </div>
</template>

<script>
import pause from "./pause.vue";
import tableui from "./tableui";

export default {
  name: "Table",
  components: { pause, tableui }
};
</script>

<style></style>
