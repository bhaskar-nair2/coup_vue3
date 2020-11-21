<template>
  <div class="home">
    <CreateTableModal
      :is-active="showCreateTable"
      @close-modal="showCreateTable = false"
    ></CreateTableModal>
    <aside class="menu options-menu">
      <ul class="menu-list mx-5">
        <li class="mb-3">
          <a @click="launchCreateTableModal">Create a Table</a>
        </li>
        <li class="mb-3"><a @click="option">Join a Table</a></li>
        <li><a @click="option">Settings</a></li>
      </ul>
    </aside>

    <img
      alt="Coup background"
      class="bg-image"
      src="../assets/card-images/base.jpg"
    />
  </div>
</template>

<script>
import { ref } from "vue";

import CreateTableModal from "@/components/CreateTableModal.vue";

export default {
  components: {
    CreateTableModal
  },
  setup() {
    function option() {
      console.log(11);
    }

    var showCreateTable = ref(false);

    function launchCreateTableModal() {
      showCreateTable.value = true;
    }

    return { option, showCreateTable, launchCreateTableModal };
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
.options-menu {
  position: absolute;
  bottom: 100px;
  width: 100%;
}
</style>
