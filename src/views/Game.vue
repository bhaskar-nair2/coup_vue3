<template>
  <div class="container h-screen w-screen">
    <Self ref="self"></Self>
    <Table ref="table"></Table>
    <Turn ref="turn"></Turn>
  </div>
</template>

<script>
import Self from "@/components/self";
import Table from "@/components/table";
import Turn from "@/components/turn";

export default {
  name: "GamePage",
  components: {
    Self,
    Table,
    Turn
  },
  setup() {}
};
</script>

<style></style>
