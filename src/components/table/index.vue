<template>
  <div>
    <pause></pause>
    <tableui></tableui>
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
