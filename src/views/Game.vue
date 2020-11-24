<template>
  <div>
    <Self></Self>
    <template ref="table"></template>
    <template ref="turn"></template>
  </div>
</template>

<script>
import Self from "@/components/self";

export default {
  name: "GamePage",
  components: {
    Self
  },
  setup() {}
};
</script>

<style></style>
