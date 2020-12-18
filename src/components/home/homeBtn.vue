<template>
  <button
    class="py-2 my-2 bg-blue-200 rounded text-lg bg-opacity-50 focus:outline-none focus:ring-2"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "HomeButton"
};
</script>

<style></style>
