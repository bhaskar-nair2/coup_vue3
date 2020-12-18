<template>
  <div
    class="container fixed bg-black bg-opacity-50 z-20 w-screen h-screen flex justify-center items-center"
  >
    <div class="bg-blue-300 shadow-xl rounded p-4 mx-4 w-3/4">
      <div class="flex flex-col text-left">
        <h1 class="text-xl mb-4">Create New Table</h1>
        <span class="text-lg text-gray-500 font-mono">
          Table Pin PIN
        </span>
        <span class="text-lg text-gray-500 font-mono">
          Members MEM
        </span>
        <span class="text-lg text-gray-500 font-mono">
          Requires Password? reqPass
        </span>
        <span class="text-lg text-gray-500 font-mono">
          Password PASS
        </span>
      </div>
      <button
        class="bg-red-500 bg-opacity-80 rounded-xl p-2 mt-4 focus:outline-none focus:ring -red-800"
        @click="createTable"
      >
        <span>Create Table</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isActive: Boolean
  },
  methods: {
    createTable() {
      this.$router.push({ name: "game-page" });
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-content,
.modal-card {
  width: 90%;
}
</style>
