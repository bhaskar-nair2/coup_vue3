<template>
  <div class="container">
    <div
      class="container absolute bottom-20 mx-auto bg-gray-100 bg-opacity-20 z-10"
    >
      <div class="flex flex-col mx-10">
        <HomeBtn> Create a Table </HomeBtn>
        <HomeBtn> Join Table </HomeBtn>
        <HomeBtn> Settings </HomeBtn>
      </div>
    </div>
    <CreateTableModal></CreateTableModal>
    <img
      alt="Coup background"
      class="fixed w-max h-screen z-0"
      src="../assets/card-images/base.jpg"
    />
  </div>
</template>

<script>
import { ref } from "vue";

import HomeBtn from "@/components/home/homeBtn.vue";
import CreateTableModal from "@/components/home/CreateTable.vue";

export default {
  components: {
    HomeBtn,
    CreateTableModal
  },
  setup() {
    function option() {
      console.log(11);
    }

    return { option };
  }
};
</script>

<style lang="scss" scoped>
.bg-image {
  position: fixed;
  height: 100vh;
  max-width: 100vw;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
